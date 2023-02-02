import React from 'react';

function Portfolio() {

    const projects = [
        {
            name: "Co Enrollment Process",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "SOVICsports",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Weather Dashboard",
            description: "You can use the weather dashboard to search any cities current and 5 day weather forecast",
            deployedLink: "https://bsovic23.github.io/weather-dashboard/",
            picture: "../images/brit_img.png"
        },
        {
            name: "Code Quiz",
            description: "A short JavaScript quiz to test your knowledge on JavaScript basics",
            deployedLink: "https://bsovic23.github.io/code-quiz/",
            picture: "../images/brit_img.png"
        },
        {
            name: "Password Generator",
            description: "A short JavaScript quiz to test your knowledge on JavaScript basics",
            deployedLink: "https://bsovic23.github.io/password-creator/",
            picture: "../images/brit_img.png"
        },
        {
            name: "Robot Gladiators",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Find Your Pet",
            description: "description",
            deployedLink: "https://mkhlink.github.io/Find_Your_Pet/",
            picture: "../images/brit_img.png"
        },
        {
            name: "Ecommerce ORM",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Zookeepr",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Notetaker",
            description: "description",
            deployedLink: "https://notetaker-deploy-brit.herokuapp.com/",
            picture: "../images/brit_img.png"
        },
        {
            name: "Social Network API",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Work Day Scheduler",
            description: "description",
            deployedLink: "link",
            picture: "../images/brit_img.png"
        },
        {
            name: "Run Buddy 2.0",
            description: "description",
            deployedLink: "https://bsovic23.github.io/run-buddy/",
            picture: "../images/brit_img.png"
        }
    ];

    return(
        <div>
            {projects.map((project) => (
                <li key={project.name} class="project-card">
                    <div class="project-pictures">
                    <img
                        src={require("../images/brit_img.png")} 
                        alt="picture of Brit Sovic"/>;
                        <p>Project Picture: {project.picture}</p>
                    </div>
                    <div class="project-info">
                        <h1 class="project-header">Project Name: {project.name}</h1>
                        <p class="project-desc">Project Description: {project.description}</p>
                        <p class="project-link"><a href={project.deployedLink} target="_blank">Click here to see {project.name} deployed application</a></p>
                    </div>
                </li>
            ))}
        </div>
    )
};

export default Portfolio;