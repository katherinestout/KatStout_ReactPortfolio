import React from 'react';
import './../style/card.css';

const MyPortfolioCard = props => (


  <div className="card-container">

  <div className="img-box">
  <img alt="true" src={props.img}/>
  </div>


  <div className="box-description">
  <div className="box-description-box">
  <h4>{props.name}</h4>
  <ul>
  <li>{props.description}</li>
  <li>{props.tools}</li>
  <li><a href = {props.github}> Link to GitHub Code</a></li>
  </ul>
  </div>
  </div>


  </div>



)

export default MyPortfolioCard;