import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

import NavBar from './components/NavBar';

function App() {

      let component

      switch (window.location.pathname) {
        case "/":
            component = <Home></Home>
            break
        case "/About":
            component = <About></About>
            break
        case "/Portfolio":
            component = <Portfolio></Portfolio>
            break
        case "/Resume":
            component = <Resume></Resume>
            break
        case "/Contact":
            component = <Contact></Contact>
            break
    }

    return(
      <section>
                <Header></Header>
           <div>
              <NavBar></NavBar>
            </div>
            <div>
             {component}
            </div>
                <Footer></Footer>
      </section>
  );
}

export default App;
