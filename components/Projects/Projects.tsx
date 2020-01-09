import React from "react";
import CompletedProjects from "./completedProjects";
import UpcomingProjets from "./upcomingProjects";
import Project from './Project/Project';


const projects = () => {
    // console.log(CompletedProjects);
    // console.log(UpcomingProjets);
    const completedProjects = CompletedProjects.map((project, index) => {
        return <Project
            key={index}
            name={project.name}
            description={project.description}
            date={project.date}
            technologiesUsed={project.technologies}/>
    })
    const upcomingProjects = UpcomingProjets.map((project, index) => {
        return <Project
            key={index}
            name={project.name}
            description={project.description}
            date={project.date}
            technologiesUsed={project.technologies}/>
    })
    return (
        <div>
            <h3>Completed Projects</h3>
            {completedProjects}
            <h3>Upcoming Projects</h3>
            {upcomingProjects}
        </div>
    );
};

export default projects;
