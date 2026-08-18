import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import GlobalBackground from './components/GlobalBackground';

export default function App() {
  return <div className="app"><GlobalBackground /><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><About /><Skills /><Projects /><Certificates /><Contact /></main><Footer /><Chatbot /></div>;
}
