import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Qualification />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
