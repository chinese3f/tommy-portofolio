import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills'; // Import the Skills component
import Projects from "./components/Projects"; // Add this line at the top
import About from "./components/About"; // Add this line at the top
import Contact from "./components/Contact"; // Import the Contact component




function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;