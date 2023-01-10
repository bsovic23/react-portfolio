import './App.css';
import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <main>
      <section>
        <h1>BRIT SOVIC</h1>
      </section>
      <section>
        <About></About>

        <Contact></Contact>

        <Portfolio></Portfolio>

        <Resume></Resume>
      </section>
    </main>
  );
}

export default App;
