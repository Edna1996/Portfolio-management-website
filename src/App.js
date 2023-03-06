import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/home.css';
import { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './components/navbar.css';
import Login from './components/Login';

/* eslint-disable react/prefer-stateless-function */
function App() {

  const [user, setUser] = useState({})

  const navigate = useNavigate()
  useEffect(() => {
    const user_id = localStorage.getItem('user_id')
    user_id ? setUser({id: user_id}) : navigate('/login')
  }, [navigate, setUser])
  
console.log(user)
    return (
      <div className="App">
        <NavBar />
        <Routes>
          
        
          <Route exact path = '/' element = {<Home user = {user} />}/>
          <Route path="/skills" element={<SkillsPage />} />
          <Route exact path = '/login' element = {<Login setUser = {setUser}/>} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    );
  }


export default App;
