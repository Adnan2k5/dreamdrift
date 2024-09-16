import React from 'react';
import './App.css';
import { Home } from './Pages/Home';
import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlesComponent from './components/ParticlesComponent';
import { Web } from './Pages/techpages/web';
import { Social } from './Pages/techpages/social';
import { AI } from './Pages/techpages/AI';
import { Marketing } from './Pages/techpages/marketing';
import {Music} from './Pages/techpages/Music';
import {Design} from './Pages/techpages/Design';

function App() {
  return (
    <>
      <ParticlesComponent />
      <AnimatedCursor color="0,255,255" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/social" element={<Social />} />
          <Route path='/ai' element={<AI/>}/>
          <Route path='/market' element={<Marketing/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/design' element={<Design/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
