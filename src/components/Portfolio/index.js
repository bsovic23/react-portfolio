import React from 'react';

function Portfolio() {

    const projects = [
        {
            name: "Weather Dashboard",
            description: "You can use the weather dashboard to search any cities current and 5 day weather forecast",
            deployedLink: "https://bsovic23.github.io/weather-dashboard/",
            picture: "picture1"
        },
        {
            name: "Code Quiz",
            description: "A short JavaScript quiz to test your knowledge on JavaScript basics",
            deployedLink: "https://bsovic23.github.io/code-quiz/",
            picture: "picture1"
        }
    ];

    return(
        <div>
            {projects.map((project) => (
                <li key={project.name} class="projectCard">
                    <h1>Project Name: {project.name}</h1>
                    <p>Project Description: {project.description}</p>
                    <a href={project.deployedLink} target="_blank">Project Link</a>
                    <p>Project Picture: {project.picture}</p>
                </li>
            ))}
        </div>
    )
};

export default Portfolio;