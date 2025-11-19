import React, { useState, useEffect } from 'react';
import './VotingModal.css';
import { submitVote, getProjects } from '../services/votingService';

const VotingModal = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);

  // Fetch projects when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchProjects();
      // Reset states when modal opens
      setCode('');
      setSelectedProject('');
      setError('');
      setSuccess(false);
    }
  }, [isOpen]);

  const fetchProjects = async () => {
    try {
      setLoadingProjects(true);
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (err) {
      setError('Failed to load projects. Please refresh the page.');
      console.error('Error fetching projects:', err);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!code.trim()) {
      setError('Please enter your voting code.');
      return;
    }
    
    if (!selectedProject) {
      setError('Please select a project to vote for.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await submitVote(code.trim(), selectedProject);
      setSuccess(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        // Reset form
        setCode('');
        setSelectedProject('');
        setSuccess(false);
      }, 2000);
      
    } catch (err) {
      setError(err.message || 'Failed to submit vote. Please try again.');
      console.error('Voting error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (e) => {
    // Convert to uppercase and remove spaces
    const value = e.target.value.toUpperCase().replace(/\s/g, '');
    setCode(value);
    setError(''); // Clear error when user types
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProject(projectId);
    setError(''); // Clear error when user selects
  };

  if (!isOpen) return null;

  return (
    <div className="voting-modal-overlay" onClick={onClose}>
      <div 
        className="voting-modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="voting-modal-close" 
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="voting-modal-title">
          🏆 Vote for People's Choice Award
        </h2>

        {success ? (
          <div className="voting-success-message">
            <div className="success-icon">✓</div>
            <h3>Vote Submitted Successfully!</h3>
            <p>Thank you for participating!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="voting-form">
            {/* Voting Code Input */}
            <div className="voting-form-group">
              <label htmlFor="votingCode" className="voting-label">
                Enter Your Voting Code
              </label>
              <input
                id="votingCode"
                type="text"
                value={code}
                onChange={handleCodeChange}
                placeholder="e.g., ABC123"
                className="voting-input"
                maxLength={10}
                disabled={loading}
                autoFocus
              />
              <p className="voting-hint">
                Enter the code provided to you at the event
              </p>
            </div>

            {/* Project Selection */}
            <div className="voting-form-group">
              <label htmlFor="projectSelect" className="voting-label">
                Select Your Favorite Project
              </label>
              
              {loadingProjects ? (
                <div className="voting-loading">Loading projects...</div>
              ) : projects.length === 0 ? (
                <div className="voting-no-projects">
                  No projects available yet. Please check back later.
                </div>
              ) : (
                <select
                  id="projectSelect"
                  value={selectedProject}
                  onChange={(e) => handleProjectSelect(e.target.value)}
                  className="voting-select"
                  disabled={loading}
                >
                  <option value="">-- Choose a project --</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                      {project.teamMembers && project.teamMembers.length > 0 
                        ? ` - ${project.teamMembers.join(', ')}` 
                        : ''}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="voting-error-message">
                <span className="error-icon">⚠</span>
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="voting-submit-btn"
              disabled={loading || loadingProjects}
            >
              {loading ? 'Submitting...' : 'Submit Vote'}
            </button>

            <p className="voting-footer-note">
              Each code can only be used once. Vote wisely!
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default VotingModal;
