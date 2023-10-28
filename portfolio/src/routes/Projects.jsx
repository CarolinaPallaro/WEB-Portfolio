import React from 'react'
import ProjectsCard from '../components/Portfolio/ProjectsCard';
import ProjectCSS from '../components/Portfolio/Styles/Cards.module.css' 
const Projects = () =>{
    return(
        <div id='Projects'
            className={ProjectCSS.h2}>
            <h2>Projects</h2>
            <div>
            <ProjectsCard/>
            </div> 


        </div>
    )
};

export default Projects;