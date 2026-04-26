import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const StatCard = ({ title, icon, count, color, label }) => (
  <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden">
    <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10 transition-transform group-hover:scale-150 ${color.split(' ')[0]}`}></div>
    <div className="flex items-start justify-between relative z-10">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.1em] text-gray-500 mb-1">{title}</div>
        <div className="text-5xl font-black text-navy font-sinhala-head leading-none mb-2">{count}</div>
        <div className={`text-[11px] font-bold uppercase tracking-widest ${color.split(' ')[1]}`}>{label}</div>
      </div>
      <div className={`w-14 h-14 rounded-sm ${color} flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
    </div>
  </div>
);

const LessonCard = ({ title, date, tutor, length, type }) => (
  <div className="bg-white p-4 md:p-5 rounded-sm border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all group cursor-pointer relative overflow-hidden">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-600 transition-all"></div>
    <div className="flex gap-4 items-center">
      <div className="w-14 h-14 bg-blue-50/50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full ${type === 'Live' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}>
            {type}
          </span>
          <span className="text-[11px] font-black text-gray-500 uppercase tracking-widest">{date}</span>
        </div>
        <h5 className="font-bold text-navy text-lg group-hover:text-blue-600 transition-colors leading-tight">{title}</h5>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{tutor}</p>
      </div>
    </div>
    <div className="bg-gray-50 px-5 py-2 rounded-sm text-sm font-black text-navy border border-gray-100 group-hover:bg-blue-50 transition-colors">
      {length}
    </div>
  </div>
);

const Dashboard = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Premium Header Section */}
      <section 
        className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-navy"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy opacity-40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="text-center md:text-left">
            <div className="text-blue-400 font-black uppercase tracking-[0.4em] mb-2 text-[12px] md:text-[14px]">
              {language === 'si' ? 'ශිෂ්‍ය පුවරුව' : 'Student Portal'}
            </div>
            <SinhalaText variant="h1" className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-md">
              {language === 'si' ? 'ආයුබෝවන්, රමිත!' : 'Welcome back, Ramitha!'}
            </SinhalaText>
            <p className="text-gray-300 text-sm font-bold mt-2 uppercase tracking-widest">Grade 11 • Maths / Science Stream</p>
          </div>
          
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-white/20 text-center shadow-xl">
              <div className="text-[9px] uppercase font-black tracking-widest text-blue-200 mb-1">Attendance</div>
              <div className="text-2xl font-black text-white">94<span className="text-lg">%</span></div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-white/20 text-center shadow-xl">
              <div className="text-[9px] uppercase font-black tracking-widest text-blue-200 mb-1">Academy Rank</div>
              <div className="text-2xl font-black text-white">#04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        
        {/* Statistical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          <StatCard title="Study Materials" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>} count="24" color="bg-blue-100 text-blue-600" label="+3 New this week" />
          <StatCard title="Video Library" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>} count="12" color="bg-emerald-100 text-emerald-600" label="2 hours unwatched" />
          <StatCard title="Upcoming Exams" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>} count="03" color="bg-orange-100 text-orange-600" label="Next in 4 days" />
          <StatCard title="Total Points" icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>} count="850" color="bg-purple-100 text-purple-600" label="Top 5% of class" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Recent Lessons (Left Column) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-end border-b border-gray-200 pb-3">
              <div>
                <SinhalaText variant="h2" className="text-2xl font-bold text-navy leading-none">නවතම පාඩම්</SinhalaText>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 block">Recent & Upcoming Lessons</span>
              </div>
              <button className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hover:underline">View All</button>
            </div>
            
            <div className="space-y-3">
              <LessonCard title="Chemical Bonding - Part 02" date="Today, 02:30 PM" tutor="Supun Rathnayaka" length="Live in 2h" type="Live" />
              <LessonCard title="Algebraic Expressions Mastery" date="Yesterday" tutor="Nilmini Perera" length="1h 20m" type="Recorded" />
              <LessonCard title="English Grammar: Passive Voice" date="2 days ago" tutor="Nimal Siriwardena" length="55 mins" type="Recorded" />
              <LessonCard title="Business Accounting Principles" date="Last Week" tutor="Prasad Kumara" length="2h 15m" type="Recorded" />
            </div>
          </div>

          {/* Notice Board (Right Sidebar) */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-3">
              <SinhalaText variant="h2" className="text-2xl font-bold text-navy leading-none">නිවේදන</SinhalaText>
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1 block">Notice Board</span>
            </div>

            <div className="bg-navy p-6 md:p-10 text-white rounded-sm shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-sm text-[11px] font-black uppercase tracking-widest mb-4 border border-red-500/30">
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
                  Urgent Notice
                </div>
                
                <h3 className="text-2xl font-bold font-sinhala-head leading-tight mb-4 text-blue-50">
                  රසායනික විද්‍යා විශේෂ සම්මන්ත්‍රණය
                </h3>
                
                <p className="text-base text-blue-200/80 leading-relaxed mb-8">
                  ලබන ඉරිදා පවත්වනු ලබන රසායනික විද්‍යා විශේෂ සම්මන්ත්‍රණය සඳහා ඔබගේ සහභාගීත්වය අනිවාර්ය වේ. අදම වේලාව වෙන්කරගන්න.
                </p>
                
                <button className="w-full py-4 bg-blue-600 text-xs text-white font-black uppercase tracking-widest rounded-sm hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  Reserve Your Seat
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 md:p-8 rounded-sm border border-gray-100 shadow-sm">
              <span className="text-xs font-black text-gray-400 uppercase tracking-widest block mb-4">Quick Actions</span>
              <div className="grid grid-cols-2 gap-4">
                 <button className="p-4 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-100 rounded-sm text-center transition-colors group flex flex-col items-center">
                    <div className="text-gray-400 group-hover:text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                    </div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-navy">Payments</div>
                 </button>
                 <button className="p-4 bg-gray-50 hover:bg-blue-50 hover:text-blue-600 border border-gray-100 rounded-sm text-center transition-colors group flex flex-col items-center">
                    <div className="text-gray-400 group-hover:text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    </div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-navy">Settings</div>
                 </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Dashboard;
