import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const DashboardItem = ({ title, icon, count, color, label }) => (
  <div className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
    <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <SinhalaText variant="h3" className="text-xl font-bold mb-2">{title}</SinhalaText>
    <div className="text-3xl font-black text-navy mb-1">{count}</div>
    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</div>
  </div>
);

const Dashboard = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-12 md:py-16 overflow-hidden bg-navy text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1434031213662-874891939c73?auto=format&fit=crop&q=80&w=2000&blur=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/90 backdrop-blur-md"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-blue-400 font-black uppercase tracking-[0.3em] mb-4 text-sm">
              {language === 'si' ? 'ශිෂ්‍ය පුවරුව' : 'Student Portal'}
            </div>
            <SinhalaText variant="h1" className="text-4xl md:text-5xl font-bold leading-tight">
              {language === 'si' ? 'ආයුබෝවන්, සුපුන්!' : 'Welcome back, Supun!'}
            </SinhalaText>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-white/10 text-center">
              <div className="text-xs uppercase font-bold tracking-widest opacity-60">Attendance</div>
              <div className="text-2xl font-black">94%</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-white/10 text-center">
              <div className="text-xs uppercase font-bold tracking-widest opacity-60">Rank</div>
              <div className="text-2xl font-black">#04</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <DashboardItem title="Tutes" icon="📄" count="24" color="bg-blue-50 text-blue-600" label="Available Now" />
            <DashboardItem title="Videos" icon="🎬" count="12" color="bg-emerald-50 text-emerald-600" label="Recent Lessons" />
            <DashboardItem title="Exams" icon="📝" count="03" color="bg-orange-50 text-orange-600" label="Upcoming" />
            <DashboardItem title="Alerts" icon="🔔" count="08" color="bg-purple-50 text-purple-600" label="Notifications" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Recent Lessons */}
            <div className="lg:col-span-2 space-y-8">
              <SinhalaText variant="h2" className="text-3xl font-bold mb-8">නවතම පාඩම් (Recent Lessons)</SinhalaText>
              <div className="space-y-4">
                {[
                  { title: 'Chemical Bonding - Part 02', date: '2 hours ago', tutor: 'Supun Rathnayaka', length: '45 mins' },
                  { title: 'Algebraic Expressions', date: 'Yesterday', tutor: 'Kasun Perera', length: '1h 20m' },
                  { title: 'English Grammar Masterclass', date: '2 days ago', tutor: 'Nimal Siriwardena', length: '55 mins' }
                ].map((lesson, i) => (
                  <div key={i} className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm flex justify-between items-center group hover:bg-navy hover:text-white transition-all cursor-pointer">
                    <div className="flex gap-6 items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-sm flex items-center justify-center text-xl group-hover:bg-white/10 group-hover:text-white transition-all">▶</div>
                      <div>
                        <h5 className="font-bold text-lg mb-1">{lesson.title}</h5>
                        <p className="text-xs opacity-60 uppercase tracking-widest">{lesson.tutor} • {lesson.date}</p>
                      </div>
                    </div>
                    <div className="text-xs font-black opacity-40 group-hover:opacity-100">{lesson.length}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Announcements */}
            <div className="space-y-8">
              <SinhalaText variant="h2" className="text-3xl font-bold mb-8">නිවේදන (Notices)</SinhalaText>
              <div className="bg-navy p-8 text-white rounded-sm space-y-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 opacity-20 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="space-y-4 relative z-10">
                   <div className="text-xs font-black uppercase tracking-widest text-blue-400">Latest Announcement</div>
                   <p className="text-lg leading-relaxed">
                     ලබන ඉරිදා පවත්වනු ලබන රසායනික විද්‍යා විශේෂ සම්මන්ත්‍රණය සඳහා ඔබගේ සහභාගීත්වය තහවුරු කරන්න.
                   </p>
                   <button className="w-full py-3 bg-blue-600 font-bold uppercase tracking-widest text-xs hover:bg-blue-500 transition-all">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
