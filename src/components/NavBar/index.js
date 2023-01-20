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
        <section class="navBar">
            <div>
                <a href="/" class="navChoice">Home</a>
            </div>
            <div>
                <a href="/About" class="navChoice">About</a>
            </div>
            <div>
                <a href="/Contact" class="navChoice">Contact</a>
            </div>
            <div>
                <a href="/Portfolio" class="navChoice">Portfolio</a>
            </div>
            <div>
                <a href="/Resume" class="navChoice">Resume</a>
            </div>
        </section>
    )
};

export default NavBar;