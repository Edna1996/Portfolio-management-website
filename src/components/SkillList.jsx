import React from 'react';
import SkillListItem from './SkillListItem';

export default function SkillList({ skills }) {
  const skillList = skills.map((s, idx) => (
    <SkillListItem skill={s} key={idx} index={idx} />
  ));
  return <ul>{skillList}</ul>;
}
