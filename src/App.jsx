import React from 'react';
import './App.css';
import { Home } from './Pages/Home';
import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticlesComponent from './components/ParticlesComponent';
import { Web } from './Pages/Web';
import { Social } from './Pages/Social';
import { AI } from './Pages/AI';
import { Marketing } from './Pages/Marketing';
import {Music} from './Pages/Music';
import {Design} from './Pages/Design';
import {Video} from './Pages/Video';
import {Write} from './Pages/Write';
import {Data} from './Pages/Data';
import { Contact } from './Pages/Contact';
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
          <Route path='/video' element={<Video/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/data' element={<Data/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
