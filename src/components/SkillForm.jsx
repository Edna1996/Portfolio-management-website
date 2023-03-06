import React, { useState } from 'react';
import './skillform.css';

const initialState = {
  name: '',
  level: 3,
};

export default function SkillForm({ addSkill }) {
  const [formData, setFormData] = useState(initialState);

  function handleAddSkill(evt) {
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    addSkill(formData);
    setFormData(initialState);
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label>Skill</label>
      <input name="name" value={formData.name} onChange={handleAddSkill} />
      <label>Level</label>
      <select name="level" value={formData.level} onChange={handleAddSkill}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button type="submit">ADD Skill</button>
    </form>
  );
}
