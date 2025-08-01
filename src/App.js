import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Contact />
      </main>
      <SocialLinks />
    </div>
  );
}

export default App;
