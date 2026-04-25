import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Schedule from './pages/Schedule';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <div className="app">
              <Navbar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <footer className="footer">
                <p>&copy; 2026 Supun's Online Academy. All Rights Reserved.</p>
              </footer>
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
