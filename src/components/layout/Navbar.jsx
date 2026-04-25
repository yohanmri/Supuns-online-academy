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
    <nav className="glass-nav px-6 md:px-12 py-2 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-navy rounded flex items-center justify-center text-white font-bold text-lg">S</div>
        <SinhalaText variant="h3" className="mb-0 text-lg md:text-xl hidden md:block tracking-tight">
          {language === 'si' ? 'සුපුන් ඇකඩමි' : "Supun's Academy"}
        </SinhalaText>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-5">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-navy font-bold hover:text-emerald transition-colors duration-200 text-sm md:text-base"
            >
              {language === 'si' ? link.si : link.en}
            </Link>
          ))}
        </div>

        <button 
          onClick={toggleLanguage} 
          className="bg-emerald hover:bg-emerald-dark text-white px-3 py-1.5 rounded-full font-bold text-xs md:text-sm transition-all"
        >
          {language === 'si' ? 'English' : 'සිංහල'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
