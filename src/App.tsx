import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark-900 font-poppins">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Languages />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;