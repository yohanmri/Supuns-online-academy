import React from 'react';
import SinhalaText from '../typography/SinhalaText';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="bg-[#1a1a1a] text-white py-16 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-inner">S</div>
            <SinhalaText variant="h3" className="mb-0 text-xl text-white font-bold tracking-wide">සුපුන් ඇකඩමි</SinhalaText>
          </div>
          <SinhalaText variant="small" className="text-white max-w-sm leading-relaxed drop-shadow-sm">
            {language === 'si' 
              ? 'තර්කානුකූලව විද්‍යාව විෂය ඉගැන්වීම හරහා ශ්‍රී ලංකාවේ දක්ෂතම සිසුන් පිරිසක් බිහි කිරීම අපගේ අරමුණයි.'
              : 'Our mission is to produce the most talented students in Sri Lanka through logical teaching of Science.'}
          </SinhalaText>
        </div>

        <div>
          <h4 className="font-black text-blue-500 uppercase tracking-widest text-xs mb-6">Quick Links</h4>
          <ul className="space-y-2 text-white font-bold">
            <li><a href="/" className="hover:text-blue-400 transition-colors">මුල් පිටුව</a></li>
            <li><a href="/teachers" className="hover:text-blue-400 transition-colors">ගුරු මණ්ඩලය</a></li>
            <li><a href="/schedule" className="hover:text-blue-400 transition-colors">කාලසටහන</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-blue-500 uppercase tracking-widest text-xs mb-6">Contact</h4>
          <p className="text-gray-400 text-sm mb-1">info@supunacademy.lk</p>
          <p className="text-gray-400 text-sm">+94 11 234 5678</p>
          <div className="mt-6 flex gap-4">
             <a href="#" className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
             </a>
             <a href="#" className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
             </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        &copy; 2026 Supun Rathnayaka Online Academy. Developed by SYNEX.
      </div>
    </footer>
  );
};

export default Footer;
