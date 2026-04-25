import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'මුල් පිටුව' : 'Home'}</h1>
      <p>Welcome to Supun's Online Academy</p>
    </div>
  );
};

export default Home;
