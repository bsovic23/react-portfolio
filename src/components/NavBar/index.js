import React from 'react';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Footer from '../Footer';
import Header from '../Header';

function NavBar() {   
    return(
        <section>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/About">About</a>
            </div>
            <div>
                <a href="/Contact">Contact</a>
            </div>
            <div>
                <a href="/Portfolio">Portfolio</a>
            </div>
            <div>
                <a href="/Resume">Resume</a>
            </div>
        </section>
    )
};

export default NavBar;