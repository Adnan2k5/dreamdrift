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
          <Route path="https://www.dreamdriftservices.com/web" element={<Web />} />
          <Route path="https://www.dreamdriftservices.com/social" element={<Social />} />
          <Route path='https://www.dreamdriftservices.com/ai' element={<AI/>}/>
          <Route path='https://www.dreamdriftservices.com/market' element={<Marketing/>}/>
          <Route path='https://www.dreamdriftservices.com/music' element={<Music/>}/>
          <Route path='https://www.dreamdriftservices.com/design' element={<Design/>}/>
          <Route path='https://www.dreamdriftservices.com/video' element={<Video/>}/>
          <Route path='https://www.dreamdriftservices.com/write' element={<Write/>}/>
          <Route path='https://www.dreamdriftservices.com/data' element={<Data/>}/>
          <Route path='https://www.dreamdriftservices.com/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
