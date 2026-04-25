import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Teachers = () => {
  const { language } = useLanguage();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'ගුරු මණ්ඩලය' : 'Teachers'}</h1>
    </div>
  );
};

export default Teachers;
