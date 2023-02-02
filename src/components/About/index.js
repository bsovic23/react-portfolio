import React from 'react';

function About() {
    return(
        <section class="about">
                <div>
                    <img
                        src={require("../images/brit_img.png")} 
                        alt="picture of Brit Sovic"/>
                </div>
                <section>
                    <h2>Education/Occupation</h2>
                    <ul>
                        <li>Undergraduate Degree: Syracuse University, BS - Public Health</li>
                        <li>Graduate Degree: Tulane University, MPH - Epidemiology</li>
                        <li>Certificate: Columbia University School of Engineering Full Stack Web Development</li>
                        <li>Current Occupation: Data Analysis and Managment for the Infectious Diseases Department of Medicine
                            at Columbia University Irving Medical Center</li>
                    </ul>
                    <h2>Fun Facts</h2>
                        <ul>
                            <li>Favorite Sport: Basketball</li>
                            <li>Favorite NFL team: Dallas Cowboys</li>
                            <li>Favorite NBA team: Cleveland Cavaliers</li>
                        </ul>    
                    <h2>Languages</h2>
                    <div class="about-languages">
                        <div>
                            <ul>
                                <h3>Front End:</h3>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3>Back End:</h3>
                                <li>Express</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3>Database:</h3>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>REDCap</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h3>Statistical Analysis:</h3>
                                <li>SAS</li>
                            </ul>
                        </div>
                    </div>    
                </section>
        </section>
    )
};

export default About;