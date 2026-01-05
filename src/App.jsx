import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import HealthClub from './pages/HealthClub';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';

import ClubRunning from './pages/ClubRunning';
import ClubCycling from './pages/ClubCycling';
import ClubTraining from './pages/ClubTraining';
import OrderHistory from './pages/OrderHistory';
import OrderSuccess from './pages/OrderSuccess';

import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/philosophy" element={<Philosophy />} />
            {/* ... other routes ... */}
            <Route path="/health-club" element={<HealthClub />} />
            <Route path="/club-running" element={<ClubRunning />} />
            <Route path="/club-cycling" element={<ClubCycling />} />
            <Route path="/club-training" element={<ClubTraining />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
