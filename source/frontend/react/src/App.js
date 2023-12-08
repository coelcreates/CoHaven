import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import HomePage from './pages/homepage';
import AboutUs from './pages/aboutus';
import Schedule from './pages/schedule';
import VirtualHaven from './pages/virtualHaven';
import Videos from './pages/videos';
import Shop from './pages/shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/virtualHaven/:videoId" element={<VirtualHaven />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
