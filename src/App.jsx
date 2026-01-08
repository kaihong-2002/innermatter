import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Philosophy from './pages/Philosophy'; // Removed if unused
import PhilosophyPage from './pages/PhilosophyPage';
import HealthClubPage from './pages/HealthClubPage';
import ContactUs from './pages/ContactUs';

import ClubRunning from './pages/ClubRunning';
import ClubCycling from './pages/ClubCycling';
import ClubTraining from './pages/ClubTraining';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/health-club" element={<HealthClubPage />} />
        <Route path="/club-running" element={<ClubRunning />} />
        <Route path="/club-cycling" element={<ClubCycling />} />
        <Route path="/club-training" element={<ClubTraining />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Catch all - Redirect to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
