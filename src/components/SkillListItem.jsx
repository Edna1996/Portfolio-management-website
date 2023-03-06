import React, { useState } from 'react';
import './SkillListItem.css';

export default function SkillListItem({ skill }) {
  // useState for skills
  const [skills, setSkills] = useState([
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 3 },
    { name: 'JavaScript', level: 4 },
    { name: 'Python', level: 2 },
  ]);

  // function to delete skill
  function deleteSkill(index) {
    setSkills((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  }

  return (
    <ul>
      {skills.map((skill, index) => {
        return (
          <li key={index} className="SkillListItem">
            <div>{skill.name}</div>
            <div className="level">LEVEL{skill.level}</div>
            <button className="delete-btn" onClick={() => deleteSkill(index)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
