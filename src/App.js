
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/Home/About/About';
import Home from './pages/Home/Home/Home';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="app textColor">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
