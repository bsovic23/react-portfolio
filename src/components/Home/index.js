import React from 'react';

function Home() {
    return(
        <section class="home">
            <h1>Welcome to Brits Portfolio</h1>
            <p>
                This portfolio includes different sections that display aspects of my coding abilities and information about me.
            </p>

            <h3>Portfolio Sections</h3>
            <p>
                Below are descriptions of which tab you should visit to find the information necessary
            </p>
            <ul>
                <div class="home-tab">
                    <h4>About</h4>
                    <li>Education/Occupation</li>
                    <li>Fun Facts</li>
                    <li>My Coding Languages</li>
                </div>

                <div class="home-tab">
                    <h4>Contact</h4>
                    <li>Form to fill out to contact me</li>
                </div>

                <div class="home-tab">
                    <h4>Portfolio</h4>
                    <li>Group Projects</li>
                    <li>Self-Created Projects</li>
                    <li>Challenge Assignments</li>
                </div>

                <div class="home-tab">
                    <h4>Resume</h4>
                    <li>View a copy of my resume</li>
                    <li>Download a copy of my resume</li>
                </div>
            </ul>
        </section>
    )
};

export default Home;