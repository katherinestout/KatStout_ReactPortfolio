import React, { Component } from 'react';
import "./style/skills.css";
import SkillsCard from './skills/SkillsCard';
import skills from './skills/skills.json';
import skillstwo from './skills/skillstwo.json';
import skillsthree from './skills/skillsthree.json';


class Skills extends Component {

    state = {
        skillList: skills,
        skillListTw: skillstwo,
        skillListTh: skillsthree
    };



  render() {
  
 

console.log(skills);

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
                        key={skill.skillz}
                        skillz = {skill.skillz}
             
                    />
      
                   
                ))}
       
             </ul>
            </div>

            <div className="skill-box">
            <ul className="skill-list">
            {this.state.skillListTw.map(skillstwo=>(
       
       <SkillsCard 
           id={skillstwo.id}
           key={skillstwo.skillz}
           skillz = {skillstwo.skillz}

       />
      
   ))}
            </ul>
              </div>



            <div className="skill-box">
            <ul className="skill-list">
            {this.state.skillListTh.map(skillsthree=>(
       
       <SkillsCard 
           id={skillsthree.id}
           key={skillsthree.skillz}
           skillz = {skillsthree.skillz}

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