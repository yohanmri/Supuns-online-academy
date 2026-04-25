import React from 'react';
import SinhalaText from '../typography/SinhalaText';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <SinhalaText variant="h3" className="text-white mb-4">සුපුන් ඇකඩමි</SinhalaText>
          <SinhalaText variant="small" className="text-gray-300 max-w-sm">
            {language === 'si' 
              ? 'තර්කානුකූලව විද්‍යාව විෂය ඉගැන්වීම හරහා ශ්‍රී ලංකාවේ දක්ෂතම සිසුන් පිරිසක් බිහි කිරීම අපගේ අරමුණයි.'
              : 'Our mission is to produce the most talented students in Sri Lanka through logical teaching of Science.'}
          </SinhalaText>
        </div>

        <div>
          <h4 className="font-bold text-emerald mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white transition-colors">මුල් පිටුව</a></li>
            <li><a href="/teachers" className="hover:text-white transition-colors">ගුරු මණ්ඩලය</a></li>
            <li><a href="/schedule" className="hover:text-white transition-colors">කාලසටහන</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-emerald mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">info@supunacademy.lk</p>
          <p className="text-gray-400 text-sm">+94 11 234 5678</p>
          <div className="mt-4 flex gap-4">
             {/* WhatsApp Floating Action Button logic usually handled globally, but adding placeholder social icons */}
             <div className="w-8 h-8 bg-emerald rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all">W</div>
             <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all">F</div>
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
