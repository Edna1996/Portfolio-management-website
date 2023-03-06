import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/home.css';
import './components/navbar.css';

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
