import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home/HomeLoadable';
import AboutMe from '../routes/AboutMe/AboutMeLoadable';
import Sponsors from '../routes/OurSponsors/SponsorsLoadable';
import Partners from '../routes/Partners/PartnersLoadable';
import Expedition from '../routes/Expedition/ExpeditionLoadable';
import Team from '../routes/Team/TeamLoadable';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { CssBaseline } from '@material-ui/core';

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route element={Home} path='/' />
            <Route element={AboutMe} path='/AboutMe' />
            <Route element={Sponsors} path='/Sponsors' />
            <Route element={Partners} path='/Partners' />
            <Route element={Expedition} path='/Expedition' />
            <Route element={Team} path='/Team' />
          </Routes>
          <Footer />
        </Router>
    </React.Fragment>
  );
}

export default App;
