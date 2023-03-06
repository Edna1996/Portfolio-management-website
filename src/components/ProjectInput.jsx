import React from 'react';
import './ProjectInput.css';

const ProjectInput = ({
  name,
  description,
  technology,
  url,
  setName,
  setDescription,
  setTechnology,
  setUrl,
  addProject,
}) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Project name..."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Project description..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Project technology..."
        value={technology}
        onChange={(e) => {
          setTechnology(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Project link..."
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
      />
      <button type="submit" onClick={addProject} className="add-button">
        Add Project
      </button>
    </div>
  );
};

export default ProjectInput;
