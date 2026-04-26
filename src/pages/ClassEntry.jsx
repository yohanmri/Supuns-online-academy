import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teachers } from '../data/teacherData';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const ClassEntry = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const teacher = teachers.find(t => t.id === id) || teachers[0];

  return (
    <div className="min-h-screen bg-navy flex items-start justify-center p-6 pt-10 md:pt-14 relative overflow-hidden">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-navy/20"></div>

      <div className="max-w-[380px] w-full bg-white rounded-sm shadow-2xl overflow-hidden relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
        <div className={`${teacher.color} p-6 text-center`}>
          <div className="w-18 h-18 rounded-full border-2 border-white/20 mx-auto mb-3 overflow-hidden shadow-lg">
            <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
          </div>
          <SinhalaText variant="h2" className="text-white text-xl font-bold">{teacher.name}</SinhalaText>
          <p className="text-blue-100 text-[8px] font-black uppercase tracking-widest mt-0.5">{teacher.subjects[0]} ONLINE CLASS</p>
        </div>

        <div className="p-6 text-center space-y-4">
          <div>
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] block mb-1">Current Status</span>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">Starting Soon</span>
            </div>
          </div>

          <div className="py-4 border-y border-gray-100">
             <SinhalaText variant="h3" className="text-2xl text-navy font-bold mb-1">ලෑස්ති වෙන්න!</SinhalaText>
             <p className="text-gray-500 text-[12px] leading-relaxed">
               {language === 'si' 
                 ? 'පන්තිය ආරම්භ වීමට තව සුළු මොහොතක් ඇත.' 
                 : 'The session is about to begin.'}
             </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
             <div className="bg-gray-50 p-2.5 rounded-sm border border-gray-100 text-center">
                <div className="text-[8px] font-black text-gray-400 uppercase mb-0.5">Time</div>
                <div className="text-navy text-xs font-bold">04:45 - 06:45</div>
             </div>
             <div className="bg-gray-50 p-2.5 rounded-sm border border-gray-100 text-center">
                <div className="text-[8px] font-black text-gray-400 uppercase mb-0.5">Platform</div>
                <div className="text-navy text-xs font-bold">Zoom Pro</div>
             </div>
          </div>

          <div className="pt-2">
            <button className="w-full bg-navy text-white py-3 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl flex items-center justify-center gap-2 group">
              <span>Enter Classroom</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
            </button>
            <Link to="/schedule" className="block mt-6 text-gray-400 text-xs font-bold hover:text-navy transition-colors uppercase tracking-widest">
              Back to Schedule
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassEntry;
