import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-brand-light flex flex-col selection:bg-blue-300 selection:text-brand-primary">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Services />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
