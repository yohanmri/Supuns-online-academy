import React, { useState } from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Register = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: 'Grade 11',
    password: ''
  });

  const grades = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11',
    'Grade 12 (Maths/Sci)', 'Grade 12 (Arts/Comm)', 'Grade 12 (Tech)',
    'Grade 13 (Maths/Sci)', 'Grade 13 (Arts/Comm)', 'Grade 13 (Tech)'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Left side: Visuals */}
      <div className="hidden md:flex md:w-1/2 bg-navy relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-navy"></div>
        
        <div className="relative z-10 max-w-md text-white">
          <Link to="/" className="text-3xl font-black tracking-tighter mb-12 block">
             <span className="bg-blue-600 px-3 py-1 rounded-sm mr-1 shadow-lg">S</span>
             Supun's Academy
          </Link>
          <SinhalaText variant="h1" className="text-5xl font-bold leading-tight mb-6">ඔබේ ජයග්‍රාහී ගමන අදම අරඹන්න</SinhalaText>
          <p className="text-blue-100 text-lg leading-relaxed opacity-80 mb-8">
            Join the leading online academy in Sri Lanka and gain access to expert tutors, comprehensive study materials, and interactive live sessions.
          </p>
          <div className="space-y-4">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">✓</div>
                <span className="font-bold">Access to all live & recorded sessions</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">✓</div>
                <span className="font-bold">Weekly paper sets & model answers</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">✓</div>
                <span className="font-bold">Personal performance tracking</span>
             </div>
          </div>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-20 bg-gray-50/30">
        <div className="max-w-md w-full bg-white md:bg-transparent p-6 md:p-0 rounded-sm md:rounded-none shadow-xl md:shadow-none">
          <div className="mb-10">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] block mb-2">Student Portal</span>
            <SinhalaText variant="h2" className="text-3xl font-bold text-navy mb-2">ලියාපදිංචි වන්න</SinhalaText>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Create Your Academic Account</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">First Name</label>
                 <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold" placeholder="Kasun" />
               </div>
               <div>
                 <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Last Name</label>
                 <input type="text" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold" placeholder="Perera" />
               </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold" placeholder="kasun@example.com" />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                 <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone Number</label>
                 <input type="tel" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold" placeholder="077 123 4567" />
               </div>
               <div>
                 <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Grade</label>
                 <select className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold">
                    {grades.map(g => <option key={g} value={g}>{g}</option>)}
                 </select>
               </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Account Password</label>
              <input type="password" className="w-full bg-gray-50 border border-gray-100 px-4 py-3 rounded-sm focus:border-blue-500 outline-none transition-all text-sm font-bold" placeholder="••••••••" />
            </div>

            <div className="pt-4">
               <button type="submit" className="w-full bg-navy text-white py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-600/10 active:scale-[0.98]">
                 Complete Registration
               </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
