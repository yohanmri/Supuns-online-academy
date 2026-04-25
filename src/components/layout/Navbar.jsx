import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  const links = [
    { path: '/', label_en: 'Home', label_si: 'මුල් පිටුව' },
    { path: '/about', label_en: 'About', label_si: 'අප ගැන' },
    { path: '/teachers', label_en: 'Teachers', label_si: 'ගුරු මණ්ඩලය' },
    { path: '/schedule', label_en: 'Schedule', label_si: 'කාලසටහන' },
    { path: '/dashboard', label_en: 'Dashboard', label_si: 'ශිෂ්ය පුවරුව' },
    { path: '/contact', label_en: 'Contact', label_si: 'සම්බන්ධ වන්න' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">Supun Academy</div>
      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.path} to={link.path}>
            {language === 'si' ? link.label_si : link.label_en}
          </Link>
        ))}
      </div>
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === 'si' ? 'English' : 'සිංහල'}
      </button>
    </nav>
  );
};

export default Navbar;
