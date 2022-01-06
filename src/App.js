import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Skill from "./components/skill"

import './App.css';
import NavBar from './components/NavBar';
import About  from "./components/about/About"
import Contact from './components/Contact';
import Footer from './components/footer/Foooter';
import 'roboto-npm-webfont';
// import ResponsiveDrawer from "./components/drawers/drawer"
function App() {
  return (
    
    <Router>
      <NavBar/>
      <Routes>
        
        {/* <Route exact path="/" element={<ResponsiveDrawer/>}/> */}
        <Route exact path="/" element={<About/>}/>
        <Route path="/expirience" element={<Skill/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
