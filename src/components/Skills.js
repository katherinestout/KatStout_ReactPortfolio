import React, { Component } from 'react';
import "./style/skills.css";


class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">

      <h2 className="title-box-skill">Technical Skills</h2>
      <hr/>
      <div className="skills-wrapper">

            <div className="container-skills">

            <div className="skill-box">
            <ul className="skill-list">
                 <li>HTML </li>
                 <li> CSS </li>
                  <li> Bootstrap</li>
                  <li>SASS </li>
                  <li> Javascript</li>
                  <li> jQuery</li>
                  <li>Flexbox</li>
             </ul>
            </div>

            <div className="skill-box">
            <ul className="skill-list">
                 <li>Heroku </li>
                  <li> API's and AJAX</li>
                  <li> Node.js </li>
                  <li> React.js </li>
                  <li>Redux </li>
                  <li>EJS</li>
                  <li>Handlebars</li>
                  </ul>
              </div>

            <div className="skill-box">
            <ul className="skill-list">
                 <li> Materialize.css</li>
                 <li> Moment.js </li>
                 <li> Firebase </li>
                 <li> MongoDB-Atlas</li>
                 <li>  Express</li>
                 <li> Git </li>
                 <li>CSS Grid</li>
             </ul>
            </div>
            </div>
            </div>
      </div>

    );
  }
}
export default Skills;