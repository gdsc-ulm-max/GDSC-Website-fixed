import { db } from '../firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  runTransaction,
  query,
  orderBy,
  increment,
  serverTimestamp,
  deleteDoc,
  writeBatch
} from 'firebase/firestore';

// Collection names
const CODES_COLLECTION = 'techxpo2025_codes';
const PROJECTS_COLLECTION = 'techxpo2025_projects';
const VOTES_COLLECTION = 'techxpo2025_votes';

/**
 * Validate and submit a vote
 * Uses Firestore transaction to ensure atomicity
 */
export const submitVote = async (code, projectId) => {
  try {
    const codeRef = doc(db, CODES_COLLECTION, code.toUpperCase());
    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    
    // Run transaction to ensure code can't be used twice
    const result = await runTransaction(db, async (transaction) => {
      // Check if code exists and is unused
      const codeDoc = await transaction.get(codeRef);
      
      if (!codeDoc.exists()) {
        throw new Error('Invalid voting code. Please check and try again.');
      }
      
      const codeData = codeDoc.data();
      if (codeData.used) {
        throw new Error('This code has already been used.');
      }
      
      // Check if project exists
      const projectDoc = await transaction.get(projectRef);
      if (!projectDoc.exists()) {
        throw new Error('Invalid project selected.');
      }
      
      // Mark code as used
      transaction.update(codeRef, {
        used: true,
        votedFor: projectId,
        timestamp: serverTimestamp()
      });
      
      // Increment project vote count
      transaction.update(projectRef, {
        votes: increment(1)
      });
      
      // Create vote record (audit trail)
      const voteRef = doc(collection(db, VOTES_COLLECTION));
      transaction.set(voteRef, {
        code: code.toUpperCase(),
        projectId: projectId,
        timestamp: serverTimestamp()
      });
      
      return { success: true };
    });
    
    return result;
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
};

/**
 * Check if a code is valid and unused (for validation only)
 */
export const validateCode = async (code) => {
  try {
    const codeRef = doc(db, CODES_COLLECTION, code.toUpperCase());
    const codeDoc = await getDoc(codeRef);
    
    if (!codeDoc.exists()) {
      return { valid: false, message: 'Code does not exist' };
    }
    
    const codeData = codeDoc.data();
    if (codeData.used) {
      return { valid: false, message: 'Code has already been used' };
    }
    
    return { valid: true, message: 'Code is valid' };
  } catch (error) {
    console.error('Error validating code:', error);
    return { valid: false, message: 'Error validating code' };
  }
};

/**
 * Get all projects with their vote counts
 */
export const getProjects = async () => {
  try {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const q = query(projectsRef, orderBy('votes', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Get a single project by ID
 */
export const getProject = async (projectId) => {
  try {
    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    const projectDoc = await getDoc(projectRef);
    
    if (!projectDoc.exists()) {
      throw new Error('Project not found');
    }
    
    return {
      id: projectDoc.id,
      ...projectDoc.data()
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
};

/**
 * Get voting statistics
 */
export const getVotingStats = async () => {
  try {
    const [projectsSnapshot, codesSnapshot, votesSnapshot] = await Promise.all([
      getDocs(collection(db, PROJECTS_COLLECTION)),
      getDocs(collection(db, CODES_COLLECTION)),
      getDocs(collection(db, VOTES_COLLECTION))
    ]);
    
    let totalVotes = 0;
    let totalCodes = 0;
    let usedCodes = 0;
    
    projectsSnapshot.forEach((doc) => {
      totalVotes += doc.data().votes || 0;
    });
    
    codesSnapshot.forEach((doc) => {
      totalCodes++;
      if (doc.data().used) {
        usedCodes++;
      }
    });
    
    return {
      totalProjects: projectsSnapshot.size,
      totalVotes,
      totalCodes,
      usedCodes,
      unusedCodes: totalCodes - usedCodes,
      participationRate: totalCodes > 0 ? ((usedCodes / totalCodes) * 100).toFixed(1) : 0
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};

// ============================================
// ADMIN FUNCTIONS
// ============================================

/**
 * Add a new project (Admin only)
 */
export const addProject = async (projectData) => {
  try {
    const projectRef = doc(collection(db, PROJECTS_COLLECTION));
    await setDoc(projectRef, {
      name: projectData.name,
      description: projectData.description || '',
      teamMembers: projectData.teamMembers || [],
      votes: 0,
      createdAt: serverTimestamp()
    });
    
    return { id: projectRef.id, success: true };
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

/**
 * Update a project (Admin only)
 */
export const updateProject = async (projectId, projectData) => {
  try {
    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    await updateDoc(projectRef, {
      ...projectData,
      updatedAt: serverTimestamp()
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error updating project:', error);
    throw error;
  }
};

/**
 * Delete a project (Admin only)
 */
export const deleteProject = async (projectId) => {
  try {
    const projectRef = doc(db, PROJECTS_COLLECTION, projectId);
    await deleteDoc(projectRef);
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error;
  }
};

/**
 * Generate and upload voting codes (Admin only)
 */
export const generateVotingCodes = async (count) => {
  try {
    const codes = [];
    const batch = writeBatch(db);
    
    // Generate unique codes
    for (let i = 0; i < count; i++) {
      const code = generateUniqueCode();
      codes.push(code);
      
      const codeRef = doc(db, CODES_COLLECTION, code);
      batch.set(codeRef, {
        used: false,
        votedFor: null,
        createdAt: serverTimestamp()
      });
    }
    
    // Commit batch
    await batch.commit();
    
    return { codes, success: true };
  } catch (error) {
    console.error('Error generating codes:', error);
    throw error;
  }
};

/**
 * Get all voting codes (Admin only)
 */
export const getAllCodes = async () => {
  try {
    const codesRef = collection(db, CODES_COLLECTION);
    const querySnapshot = await getDocs(codesRef);
    
    const codes = [];
    querySnapshot.forEach((doc) => {
      codes.push({
        code: doc.id,
        ...doc.data()
      });
    });
    
    return codes;
  } catch (error) {
    console.error('Error fetching codes:', error);
    throw error;
  }
};

/**
 * Reset all votes (Admin only - use with caution!)
 */
export const resetAllVotes = async () => {
  try {
    const batch = writeBatch(db);
    
    // Reset all project votes
    const projectsSnapshot = await getDocs(collection(db, PROJECTS_COLLECTION));
    projectsSnapshot.forEach((doc) => {
      batch.update(doc.ref, { votes: 0 });
    });
    
    // Reset all codes to unused
    const codesSnapshot = await getDocs(collection(db, CODES_COLLECTION));
    codesSnapshot.forEach((doc) => {
      batch.update(doc.ref, { 
        used: false, 
        votedFor: null,
        timestamp: null
      });
    });
    
    // Delete all vote records
    const votesSnapshot = await getDocs(collection(db, VOTES_COLLECTION));
    votesSnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    
    return { success: true };
  } catch (error) {
    console.error('Error resetting votes:', error);
    throw error;
  }
};

/**
 * Delete all codes (Admin only)
 */
export const deleteAllCodes = async () => {
  try {
    const batch = writeBatch(db);
    const codesSnapshot = await getDocs(collection(db, CODES_COLLECTION));
    
    codesSnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    
    await batch.commit();
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting codes:', error);
    throw error;
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate a unique 6-character alphanumeric code
 */
const generateUniqueCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
};

/**
 * Export codes to CSV format
 */
export const exportCodesToCSV = (codes) => {
  const headers = ['Code', 'Used', 'Voted For', 'Timestamp'];
  const rows = codes.map(code => [
    code.code,
    code.used ? 'Yes' : 'No',
    code.votedFor || 'N/A',
    code.timestamp ? new Date(code.timestamp.seconds * 1000).toLocaleString() : 'N/A'
  ]);
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
  
  return csvContent;
};

/**
 * Download CSV file
 */
export const downloadCSV = (csvContent, filename) => {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
