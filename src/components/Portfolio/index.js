import React from 'react';

function Portfolio() {

    const projects = [
        {
            name: "Co Enrollment Process",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "BRITSports",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Weather Dashboard",
            description: "You can use the weather dashboard to search any cities current and 5 day weather forecast",
            deployedLink: "https://bsovic23.github.io/weather-dashboard/",
            picture: <img src="images/brit_img.png" alt="project picture"/>
        },
        {
            name: "Code Quiz",
            description: "A short JavaScript quiz to test your knowledge on JavaScript basics",
            deployedLink: "https://bsovic23.github.io/code-quiz/",
            picture: "picture1"
        },
        {
            name: "Password Generator",
            description: "A short JavaScript quiz to test your knowledge on JavaScript basics",
            deployedLink: "https://bsovic23.github.io/password-creator/",
            picture: "picture1"
        },
        {
            name: "Robot Gladiators",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Find Your Pet",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Ecommerce ORM",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Zookeepr",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Notetaker",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Social Network API",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Work Day Scheduler",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        },
        {
            name: "Run Buddy 2.0",
            description: "description",
            deployedLink: "link",
            picture: "picture1"
        }
    ];

    return(
        <div>
            {projects.map((project) => (
                <li key={project.name} class="projectCard">
                    <div>
                        <p>Project Picture: {project.picture}</p>
                    </div>
                    <div>
                        <h1>Project Name: {project.name}</h1>
                        <p>Project Description: {project.description}</p>
                        <p><a href={project.deployedLink} target="_blank">Deployed Application Link</a></p>
                    </div>
                </li>
            ))}
        </div>
    )
};

export default Portfolio;