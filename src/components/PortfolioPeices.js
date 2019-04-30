import React, { Component } from 'react';
import portfolioList from './portfolio.json';
import PortfolioCard from './PortfolioCard';
import  "./style/portfolio.css";



class Portfolio extends Component {
    state = {
        projects: portfolioList
    };

    render () {

        return(
            
            <div className="Portfolio" id="portfolio">
      <h2 className="title-box-portfolio"> 
      Portfolio Projects  
      </h2> <hr/>
      <div className="portfolio-wrapper">

                {this.state.projects.map(project=>(
                    <PortfolioCard 
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        deploy={project.deploy}
                        github={project.github}
                        description={project.description}
                        tools ={project.tools}
                        img = {project.img}
                    />
                ))}
            </div>
            </div>
    
            
        )
    }

}

export default Portfolio;