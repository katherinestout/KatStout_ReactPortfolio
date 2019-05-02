import React, { Component } from 'react';
import "./style/skills.css";
import SkillsCard from './skills/SkillsCard';
import skills from './skills/skills.json';


class Skills extends Component {

    state = {
        skillList: skills
    };

  render() {
  

    return (
      <div className="Skills" id="skills">
      <h2 className="title-box-skill">Technical Skills</h2>
      <hr/>
      <div className="skills-wrapper">

            <div className="container-skills">
            <div className="skill-box">
            <ul className="skill-list">
            
            {this.state.skillList.map(skill=>(
       
                    <SkillsCard 
                        id={skill.id}
                        key={skill.id}
                        skillz = {skill.skillz}
             
                    />
      
                   
                ))}
       
             </ul>
            </div>

            <div className="skill-box">
            <ul className="skill-list">
            {this.state.skillList.map(skill=>(
       
       <SkillsCard 
           id={skill.id}
           key={skill.id}
           skillz = {skill.skillz2}
       />
   ))}
            </ul>
            </div>
            <div className="skill-box">
            <ul className="skill-list">
            {this.state.skillList.map(skill=>(
       
       <SkillsCard 
           id={skill.id}
           key={skill.id}
           skillz = {skill.skillz3}
       />
   ))}
             </ul>
            </div>
            </div>
            </div>
      </div>

    );
  }
}
export default Skills;