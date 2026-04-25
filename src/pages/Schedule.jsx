import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const ScheduleCard = ({ subject, time, tutor, venue, type, color }) => {
  const { language } = useLanguage();
  return (
    <div className="bg-white border-l-4 p-6 shadow-sm hover:shadow-md transition-all group" style={{ borderColor: color }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1 block">{type}</span>
          <SinhalaText variant="h3" className="text-xl font-bold group-hover:text-blue-600 transition-colors">{subject}</SinhalaText>
        </div>
        <div className="bg-gray-50 px-3 py-1 rounded-sm text-xs font-bold text-gray-600">
          {time}
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-500">
           <span className="opacity-70">👨‍🏫</span>
           <span className="font-medium">{tutor}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
           <span className="opacity-70">📍</span>
           <span className="font-medium">{venue}</span>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const { language } = useLanguage();

  const timetable = [
    {
      day_si: 'සඳුදා', day_en: 'Monday',
      classes: [
        { subject: 'Science (Theory)', time: '3:30 PM - 5:30 PM', tutor: 'Supun Rathnayaka', venue: 'Main Auditorium', type: 'WEEKLY', color: '#0079c1' },
        { subject: 'Maths (Revision)', time: '6:00 PM - 8:30 PM', tutor: 'Kasun Perera', venue: 'Hall 02', type: 'BI-WEEKLY', color: '#10b981' }
      ]
    },
    {
      day_si: 'අඟහරුවාදා', day_en: 'Tuesday',
      classes: [
        { subject: 'English', time: '3:30 PM - 5:30 PM', tutor: 'Nimal Siriwardena', venue: 'Hall 01', type: 'WEEKLY', color: '#f59e0b' }
      ]
    },
    {
      day_si: 'බදාදා', day_en: 'Wednesday',
      classes: [
        { subject: 'Sinhala', time: '3:30 PM - 6:00 PM', tutor: 'Supun Rathnayaka', venue: 'Main Auditorium', type: 'WEEKLY', color: '#ef4444' }
      ]
    },
    {
      day_si: 'බ්‍රහස්පතින්දා', day_en: 'Thursday',
      classes: [
        { subject: 'Commerce', time: '3:30 PM - 5:30 PM', tutor: 'MJ Kumara', venue: 'Hall 03', type: 'WEEKLY', color: '#8b5cf6' }
      ]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-12 md:py-20 overflow-hidden bg-navy text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000&blur=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl text-left">
            <div className="text-blue-400 font-black uppercase tracking-[0.3em] mb-4 text-sm">
              {language === 'si' ? 'කාලසටහන' : 'Schedule'}
            </div>
            <SinhalaText variant="h1" className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {language === 'si' ? 'ඔබේ පන්ති කාලසටහන' : 'Your Class Timetable'}
            </SinhalaText>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {language === 'si' 
                ? 'සෑම සතියකම පැවැත්වෙන පන්ති සහ විශේෂ වැඩමුළු පිළිබඳ විස්තර මෙතැනින් දැනගන්න.'
                : 'Find details about weekly classes, special workshops, and revision sessions here.'}
            </p>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-16">
            {timetable.map((day, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <SinhalaText variant="h2" className="text-3xl font-bold text-navy border-b-4 border-blue-600 inline-block pb-2 mb-4">
                      {language === 'si' ? day.day_si : day.day_en}
                    </SinhalaText>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {day.classes.map((cls, cIdx) => (
                      <ScheduleCard key={cIdx} {...cls} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6">
          <p className="text-gray-500 font-medium mb-8">කාලසටහන මුද්‍රණය කිරීමට අවශ්‍යද?</p>
          <button className="border-2 border-navy px-12 py-4 rounded-sm font-bold text-lg hover:bg-navy hover:text-white transition-all">
            {language === 'si' ? 'පීඩීඑෆ් බාගත කරන්න' : 'Download PDF'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
