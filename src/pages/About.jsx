import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'අප ගැන' : 'About Us'}</h1>
    </div>
  );
};

export default About;
