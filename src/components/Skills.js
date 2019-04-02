import React, { Component } from 'react';
import "./style/skills.css";



class Skills extends Component {
  render() {
    return (
      <div className="Skills" id="skills">
      <div className="space">
      <h2>Technical Skills</h2>
      <hr/>
<div className="uls">
    <ul>
      <li>HTML </li>
      <li> CSS </li>
      <li> Bootstrap</li>
      <li>SASS </li>
      <li> Javascript</li>
      <li> jQuery</li>
    
       </ul>
       <ul>
      <li>Heroku </li>
      <li> API's and AJAX</li>
      <li> Node.js </li>
      <li> React.js </li>
      <li>Redux </li>
    
      </ul>
      <ul>
      <li> Materialize.css</li>
      <li> Moment.js </li>
      <li> Firebase </li>
      <li> MongoDB-Atlas</li>
      <li>  Express</li>
      <li> Git </li>
    </ul>
    </div>
    </div>
      </div>
    );
  }
}
export default Skills;