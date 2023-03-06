import React, { useState } from 'react';
import ProjectInput from './ProjectInput';
import ProjectList from './ProjectList';
import './projects.css';

const ProjectsPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [technology, setTechnology] = useState('');
  const [url, setUrl] = useState('');

  const [projects, setProjects] = useState([]);

  const addProject = () => {
    setName('');
    setDescription('');
    setTechnology('');
    setUrl('');
    setProjects([...projects, { name, description, technology, url }]);
  };

  const deleteProject = (text) => {
    const newProjects = projects.filter((project) => {
      return project !== text;
    });
    setProjects(newProjects);
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <ProjectInput
        name={name}
        description={description}
        technology={technology}
        url={url}
        setName={setName}
        setDescription={setDescription}
        setTechnology={setTechnology}
        setUrl={setUrl}
        addProject={addProject}
      />
      <ProjectList projects={projects} remove={deleteProject} />
    </div>
  );
};

export default ProjectsPage;
