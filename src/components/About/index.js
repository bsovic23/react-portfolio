import React from 'react';

function About() {
    return(
        <section class="about">
                <div>
                    <img
                        src={require("../../images/brit_img.png")} 
                        alt="picture of Brit Sovic"/>
                </div>
                <div>
                <h2>Fun Facts</h2>
                <ul>
                    <li>Favorite Sport: Basketball</li>
                    <li>Favorite NFL team: Dallas Cowboys</li>
                    <li>Favorite NBA team: Cleveland Cavaliers</li>
                </ul>
                <h2>Education/Occupation</h2>
                <ul>
                    <li>Undergrad: Syracuse University, BS - Public Health</li>
                    <li>Graduate: Tulane University, MPH - Epidemiology</li>
                    <li>Occupation: Data for Infectious Diseases Department of Medicine
                        at Columbia University Irving Medical Center</li>
                </ul>
                </div>
        </section>
    )
};

export default About;