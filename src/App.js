
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Home from './pages/Home/Home/Home';
import ProjectDetails from './pages/Home/Projects/ProjectDetails';
import Projects from './pages/Home/Projects/Projects';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import NotFound from './pages/shared/NotFound';
import ProjectDetailsDream from './pages/Home/Projects/ProjectDetailsDream';
import ProjectDetailsBaby from './pages/Home/Projects/ProjectDetailsBaby';

function App() {
  return (
    <div className="app textColor">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projectDetails" element={<ProjectDetails />} />
        <Route path="projectDetails1" element={<ProjectDetailsDream />} />
        <Route path="projectDetails2" element={<ProjectDetailsBaby />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
