import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import SinhalaText from '../typography/SinhalaText';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { path: '/', si: 'මුල් පිටුව', en: 'Home' },
    { path: '/teachers', si: 'ගුරු මණ්ඩලය', en: 'Teachers' },
    { path: '/schedule', si: 'කාලසටහන', en: 'Schedule' },
    { path: '/dashboard', si: 'පුවරුව', en: 'Dashboard' },
  ];

  return (
    <nav className="bg-[#1a1a1a] px-6 md:px-12 py-3 flex justify-between items-center sticky top-0 z-[100] border-b border-white/5 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-inner">S</div>
        <SinhalaText 
          variant="h3" 
          className="mb-0 text-lg md:text-xl text-white font-bold tracking-wide"
        >
          {language === 'si' ? 'සුපුන් ඇකඩමි' : "Supun's Academy"}
        </SinhalaText>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-white font-semibold hover:text-blue-400 transition-all duration-300 text-xs md:text-sm tracking-wide"
            >
              {language === 'si' ? link.si : link.en}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLanguage} 
            className="text-gray-500 hover:text-white font-medium text-[10px] md:text-xs transition-all uppercase tracking-widest"
          >
            {language === 'si' ? 'English' : 'සිංහල'}
          </button>
          <button className="bg-[#0079c1] hover:bg-blue-500 text-white px-5 py-1.5 rounded-sm text-xs font-bold transition-all shadow-lg active:scale-95">
            {language === 'si' ? 'ලියාපදිංචි වන්න' : 'Register'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
