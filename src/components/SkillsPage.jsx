import React, { useState } from 'react';
import './SkillsPage.css';
import SkillListItem from './SkillListItem';
import SkillForm from './SkillForm';

export default function SkillsPage() {
  const [skills, setSkills] = useState([
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ]);

  function addSkill(skill) {
    const newSkills = [...skills, skill];
    setSkills(newSkills);
  }

  return (
    <div className="skills">
      <h1>Skills</h1>
      <SkillListItem />
      <hr />
      <SkillForm addSkill={addSkill} />
    </div>
  );
}
