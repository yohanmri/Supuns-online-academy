import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { language } = useLanguage();
  const { user } = useAuth();
  return (
    <div className="page-container">
      <h1>{language === 'si' ? 'ශිෂ්ය පුවරුව' : 'Student Dashboard'}</h1>
      {user ? <p>Welcome back, {user.name}</p> : <p>Please login to see your progress.</p>}
    </div>
  );
};

export default Dashboard;
