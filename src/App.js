import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <section class="navBar">
        <h1>BRIT SOVIC</h1>
      </section>

      <section>
        <About></About>

        <Contact></Contact>

        <Portfolio></Portfolio>

        <Resume></Resume>
      </section>

      <footer>
          <Footer></Footer>
      </footer>
    </main>
  );
}

export default App;
