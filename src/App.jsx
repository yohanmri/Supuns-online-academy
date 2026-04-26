import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFAB from './components/ui/WhatsAppFAB';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import TeacherProfile from './pages/TeacherProfile';
import Schedule from './pages/Schedule';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import ClassEntry from './pages/ClassEntry';
import Register from './pages/Register';
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
                  <Route path="/teachers/:id" element={<TeacherProfile />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/class-entry/:id" element={<ClassEntry />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
              <Footer />
              <WhatsAppFAB />
            </div>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
