import React, { Component } from 'react';
import portfolioList from './portfolioSection/portfolio.json';
import myPortfolio from './portfolioSection/myportfolio.json';
import PortfolioCard from './portfolioSection/PortfolioCard';
import MyPortfolioCard from './portfolioSection/MyPortfolioCard';
import  "./style/portfolio.css";



class Portfolio extends Component {
    state = {
        projects: portfolioList,
        projectProject: myPortfolio
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

            {this.state.projectProject.map(myProject => (
                 <MyPortfolioCard
                 id={myProject.id}
                 key={myProject.id}
                 name={myProject.name}
                 deploy={myProject.deploy}
                 github={myProject.github}
                 description={myProject.description}
                 tools ={myProject.tools}
                 img = {myProject.img}
                 />
            ))}
                   
            </div>
            </div>
    
            
        )
    }

}

export default Portfolio;