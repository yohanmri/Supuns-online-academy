import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'සම්බන්ධ වන්න' : 'Contact Us'}</h1>
    </div>
  );
};

export default Contact;
