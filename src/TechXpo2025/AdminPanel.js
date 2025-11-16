import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  generateVotingCodes,
  getAllCodes,
  resetAllVotes,
  deleteAllCodes,
  getVotingStats,
  exportCodesToCSV,
  downloadCSV
} from '../services/votingService';

const AdminPanel = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [codes, setCodes] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Project form state
  const [projectForm, setProjectForm] = useState({
    id: '',
    name: '',
    description: '',
    teamMembers: ''
  });
  const [editingProject, setEditingProject] = useState(null);

  // Code generation form
  const [codeCount, setCodeCount] = useState(50);

  useEffect(() => {
    if (isOpen) {
      fetchData();
    }
  }, [isOpen, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'projects') {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects);
      } else if (activeTab === 'codes') {
        const fetchedCodes = await getAllCodes();
        setCodes(fetchedCodes);
      } else if (activeTab === 'stats') {
        const fetchedStats = await getVotingStats();
        setStats(fetchedStats);
      }
    } catch (error) {
      showMessage('error', 'Failed to load data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 4000);
  };

  // Project Management
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const teamMembersArray = projectForm.teamMembers
        .split(',')
        .map(member => member.trim())
        .filter(member => member);

      const projectData = {
        name: projectForm.name,
        description: projectForm.description,
        teamMembers: teamMembersArray
      };

      if (editingProject) {
        await updateProject(editingProject, projectData);
        showMessage('success', 'Project updated successfully!');
      } else {
        await addProject(projectData);
        showMessage('success', 'Project added successfully!');
      }

      setProjectForm({ id: '', name: '', description: '', teamMembers: '' });
      setEditingProject(null);
      fetchData();
    } catch (error) {
      showMessage('error', 'Failed to save project');
      console.error('Error saving project:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project.id);
    setProjectForm({
      id: project.id,
      name: project.name,
      description: project.description || '',
      teamMembers: project.teamMembers ? project.teamMembers.join(', ') : ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return;
    }

    setLoading(true);
    try {
      await deleteProject(projectId);
      showMessage('success', 'Project deleted successfully!');
      fetchData();
    } catch (error) {
      showMessage('error', 'Failed to delete project');
      console.error('Error deleting project:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setProjectForm({ id: '', name: '', description: '', teamMembers: '' });
  };

  // Code Management
  const handleGenerateCodes = async () => {
    if (codeCount < 1 || codeCount > 1000) {
      showMessage('error', 'Please enter a number between 1 and 1000');
      return;
    }

    setLoading(true);
    try {
      const result = await generateVotingCodes(codeCount);
      showMessage('success', `Generated ${result.codes.length} codes successfully!`);
      fetchData();
    } catch (error) {
      showMessage('error', 'Failed to generate codes');
      console.error('Error generating codes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCodes = () => {
    const csvContent = exportCodesToCSV(codes);
    downloadCSV(csvContent, `techxpo2025_codes_${new Date().toISOString().split('T')[0]}.csv`);
    showMessage('success', 'Codes exported successfully!');
  };

  const handleDeleteAllCodes = async () => {
    if (!window.confirm('Are you sure you want to delete ALL codes? This action cannot be undone!')) {
      return;
    }

    setLoading(true);
    try {
      await deleteAllCodes();
      showMessage('success', 'All codes deleted successfully!');
      fetchData();
    } catch (error) {
      showMessage('error', 'Failed to delete codes');
      console.error('Error deleting codes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Reset Votes
  const handleResetVotes = async () => {
    if (!window.confirm('Are you sure you want to reset ALL votes? This will:\n- Reset all project vote counts to 0\n- Mark all codes as unused\n- Delete all vote records\n\nThis action cannot be undone!')) {
      return;
    }

    setLoading(true);
    try {
      await resetAllVotes();
      showMessage('success', 'All votes reset successfully!');
      fetchData();
    } catch (error) {
      showMessage('error', 'Failed to reset votes');
      console.error('Error resetting votes:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="admin-panel-overlay" onClick={onClose}>
      <div className="admin-panel-content" onClick={(e) => e.stopPropagation()}>
        <button className="admin-panel-close" onClick={onClose}>×</button>

        <h2 className="admin-panel-title">Admin Panel</h2>

        {/* Message Display */}
        {message.text && (
          <div className={`admin-message admin-message-${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Tabs */}
        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button
            className={`admin-tab ${activeTab === 'codes' ? 'active' : ''}`}
            onClick={() => setActiveTab('codes')}
          >
            Codes
          </button>
          <button
            className={`admin-tab ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Statistics
          </button>
        </div>

        {/* Tab Content */}
        <div className="admin-tab-content">
          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="admin-section">
              <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
              <form onSubmit={handleProjectSubmit} className="admin-form">
                <div className="admin-form-group">
                  <label>Project Name *</label>
                  <input
                    type="text"
                    value={projectForm.name}
                    onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                    placeholder="e.g., AI Study Assistant"
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label>Description</label>
                  <textarea
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                    placeholder="Brief description of the project"
                    rows={3}
                  />
                </div>
                <div className="admin-form-group">
                  <label>Team Members (comma-separated)</label>
                  <input
                    type="text"
                    value={projectForm.teamMembers}
                    onChange={(e) => setProjectForm({ ...projectForm, teamMembers: e.target.value })}
                    placeholder="e.g., John Doe, Jane Smith"
                  />
                </div>
                <div className="admin-form-actions">
                  <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
                    {editingProject ? 'Update Project' : 'Add Project'}
                  </button>
                  {editingProject && (
                    <button type="button" className="admin-btn admin-btn-secondary" onClick={handleCancelEdit}>
                      Cancel
                    </button>
                  )}
                </div>
              </form>

              <hr className="admin-divider" />

              <h3>Existing Projects ({projects.length})</h3>
              {loading ? (
                <div className="admin-loading">Loading...</div>
              ) : (
                <div className="admin-projects-list">
                  {projects.map((project) => (
                    <div key={project.id} className="admin-project-card">
                      <div className="admin-project-header">
                        <h4>{project.name}</h4>
                        <span className="admin-project-votes">{project.votes || 0} votes</span>
                      </div>
                      {project.description && <p>{project.description}</p>}
                      {project.teamMembers && project.teamMembers.length > 0 && (
                        <div className="admin-project-team">
                          Team: {project.teamMembers.join(', ')}
                        </div>
                      )}
                      <div className="admin-project-actions">
                        <button
                          className="admin-btn-small admin-btn-edit"
                          onClick={() => handleEditProject(project)}
                        >
                          Edit
                        </button>
                        <button
                          className="admin-btn-small admin-btn-delete"
                          onClick={() => handleDeleteProject(project.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Codes Tab */}
          {activeTab === 'codes' && (
            <div className="admin-section">
              <h3>Generate Voting Codes</h3>
              <div className="admin-codes-generator">
                <div className="admin-form-group">
                  <label>Number of Codes to Generate</label>
                  <input
                    type="number"
                    value={codeCount}
                    onChange={(e) => setCodeCount(parseInt(e.target.value) || 0)}
                    min="1"
                    max="1000"
                    placeholder="50"
                  />
                </div>
                <button
                  className="admin-btn admin-btn-primary"
                  onClick={handleGenerateCodes}
                  disabled={loading}
                >
                  Generate Codes
                </button>
              </div>

              <hr className="admin-divider" />

              <div className="admin-codes-actions">
                <h3>Manage Codes ({codes.length} total)</h3>
                <div className="admin-btn-group">
                  <button className="admin-btn admin-btn-secondary" onClick={handleExportCodes} disabled={codes.length === 0}>
                    Export to CSV
                  </button>
                  <button className="admin-btn admin-btn-danger" onClick={handleDeleteAllCodes} disabled={codes.length === 0}>
                    Delete All Codes
                  </button>
                </div>
              </div>

              {loading ? (
                <div className="admin-loading">Loading...</div>
              ) : (
                <div className="admin-codes-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Voted For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {codes.slice(0, 100).map((code) => (
                        <tr key={code.code} className={code.used ? 'code-used' : 'code-unused'}>
                          <td className="code-value">{code.code}</td>
                          <td>
                            <span className={`code-status ${code.used ? 'used' : 'unused'}`}>
                              {code.used ? '✓ Used' : '○ Unused'}
                            </span>
                          </td>
                          <td>{code.votedFor || '—'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {codes.length > 100 && (
                    <p className="admin-table-note">Showing first 100 codes. Export to CSV to see all.</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'stats' && (
            <div className="admin-section">
              <h3>Voting Statistics</h3>
              {loading ? (
                <div className="admin-loading">Loading...</div>
              ) : stats ? (
                <>
                  <div className="admin-stats-grid">
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.totalProjects}</div>
                      <div className="stat-label">Total Projects</div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.totalVotes}</div>
                      <div className="stat-label">Total Votes</div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.totalCodes}</div>
                      <div className="stat-label">Total Codes</div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.usedCodes}</div>
                      <div className="stat-label">Used Codes</div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.unusedCodes}</div>
                      <div className="stat-label">Unused Codes</div>
                    </div>
                    <div className="admin-stat-card">
                      <div className="stat-value">{stats.participationRate}%</div>
                      <div className="stat-label">Participation Rate</div>
                    </div>
                  </div>

                  <hr className="admin-divider" />

                  <h3>Leaderboard</h3>
                  <div className="admin-leaderboard">
                    {projects.map((project, index) => (
                      <div key={project.id} className="leaderboard-item">
                        <div className="leaderboard-rank">#{index + 1}</div>
                        <div className="leaderboard-info">
                          <div className="leaderboard-name">{project.name}</div>
                          {project.teamMembers && project.teamMembers.length > 0 && (
                            <div className="leaderboard-team">{project.teamMembers.join(', ')}</div>
                          )}
                        </div>
                        <div className="leaderboard-votes">{project.votes || 0} votes</div>
                      </div>
                    ))}
                  </div>

                  <hr className="admin-divider" />

                  <div className="admin-danger-zone">
                    <h3>Danger Zone</h3>
                    <p>These actions cannot be undone!</p>
                    <button className="admin-btn admin-btn-danger" onClick={handleResetVotes}>
                      Reset All Votes
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
