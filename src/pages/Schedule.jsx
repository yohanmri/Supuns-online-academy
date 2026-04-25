import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Schedule = () => {
  const { language } = useLanguage();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'කාලසටහන' : 'Schedule'}</h1>
    </div>
  );
};

export default Schedule;
