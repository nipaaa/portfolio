
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import Projects from './pages/Home/Projects/Projects';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import NotFound from './pages/shared/NotFound';

function App() {
  return (
    <div className="app textColor">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
