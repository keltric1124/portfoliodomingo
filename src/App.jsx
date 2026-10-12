import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Project from './assets/components/Project';
import Skills from './assets/components/Skills';
import Contact from './assets/components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
