import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects, remove }) => {
  return (
    <>
      {projects?.length > 0 ? (
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              /*style={{ background: '#adadad' }}*/
            >
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <p className="project-tech">{project.technology}</p>
              <a href={project.url} className="project-url" target="_blank">
                View Project
              </a>
              <button
                className="delete-button"
                onClick={() => {
                  remove(project);
                }}>
                Delete Project
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No project found</p>
        </div>
      )}
    </>
  );
};

export default ProjectList;
