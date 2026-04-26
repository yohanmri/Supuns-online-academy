import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { teachers } from '../data/teacherData';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const TeacherProfile = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const teacher = teachers.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!teacher) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <SinhalaText variant="h2" className="text-gray-400 mb-4">ගුරුවරයා හමු නොවීය.</SinhalaText>
          <Link to="/teachers" className="text-blue-600 font-bold hover:underline">නැවත ගුරු මණ්ඩලය වෙත</Link>
        </div>
      </div>
    );
  }

  // Days mapping
  const days = [
    { key: 'mon', si: 'සඳුදා', en: 'Monday' },
    { key: 'tue', si: 'අඟහරුවාදා', en: 'Tuesday' },
    { key: 'wed', si: 'බදාදා', en: 'Wednesday' },
    { key: 'thu', si: 'බ්‍රහස්පතින්දා', en: 'Thursday' },
    { key: 'fri', si: 'සිකුරාදා', en: 'Friday' },
    { key: 'sat', si: 'සෙනසුරාදා', en: 'Saturday' },
    { key: 'sun', si: 'ඉරිදා', en: 'Sunday' }
  ];

  // Time Slots
  const timeSlots = [
    { label: '08:00 - 10:00', type: 'weekend' },
    { label: '10:30 - 12:30', type: 'weekend' },
    { label: '02:30 - 04:30', type: 'all' },
    { label: '04:45 - 06:45', type: 'all' },
    { label: '07:00 - 09:00', type: 'all' }
  ];

  // Deterministic Schedule Mapping
  // Rule: 1 class per grade per week, 2 hours each.
  const getScheduledClass = (dayKey, slotLabel) => {
    const isSupun = teacher.id === 'science';
    
    // Supun's Schedule (Grades 6-11)
    if (isSupun) {
      if (dayKey === 'mon' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 6', type: 'Theory' };
      if (dayKey === 'tue' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 7', type: 'Theory' };
      if (dayKey === 'wed' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 8', type: 'Theory' };
      if (dayKey === 'thu' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 9', type: 'Theory' };
      if (dayKey === 'fri' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 10', type: 'Theory' };
      if (dayKey === 'sat' && slotLabel === '08:00 - 10:00') return { grade: 'Grade 11', type: 'Theory' };
      if (dayKey === 'sun' && slotLabel === '08:00 - 10:00') return { grade: 'Grade 11', type: 'Paper' };
      if (dayKey === 'sat' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 10', type: 'Paper' };
      return null;
    }

    // O/L Specialist Schedule (10-11)
    if (teacher.grade_category === '10-11') {
      if (dayKey === 'mon' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 10', type: 'Theory' };
      if (dayKey === 'tue' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 11', type: 'Theory' };
      if (dayKey === 'sat' && slotLabel === '10:30 - 12:30') return { grade: 'Grade 10', type: 'Paper' };
      if (dayKey === 'sun' && slotLabel === '10:30 - 12:30') return { grade: 'Grade 11', type: 'Paper' };
      return null;
    }

    // A/L Specialist Schedule (12-13)
    if (teacher.grade_category === '12-13') {
      if (dayKey === 'wed' && slotLabel === '07:00 - 09:00') return { grade: 'Grade 12', type: 'Theory' };
      if (dayKey === 'thu' && slotLabel === '07:00 - 09:00') return { grade: 'Grade 13', type: 'Theory' };
      if (dayKey === 'sat' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 12', type: 'Paper' };
      if (dayKey === 'sun' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 13', type: 'Paper' };
      return null;
    }

    // General Faculty (All)
    if (teacher.grade_category === 'all') {
      if (dayKey === 'mon' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 6', type: 'Theory' };
      if (dayKey === 'wed' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 7', type: 'Theory' };
      if (dayKey === 'fri' && slotLabel === '02:30 - 04:30') return { grade: 'Grade 8', type: 'Theory' };
      if (dayKey === 'sat' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 10', type: 'Theory' };
      if (dayKey === 'sun' && slotLabel === '04:45 - 06:45') return { grade: 'Grade 11', type: 'Theory' };
      return null;
    }

    return null;
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Dynamic Header with Improved Background Photo Visibility */}
      <section 
        className="relative h-[300px] md:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url("${teacher.bgImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Lighter overlays to ensure photos are visible */}
        <div className={`absolute inset-0 opacity-20 ${teacher.color}`}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        
        {/* Header Navigation Buttons */}
        <div className="absolute top-8 left-0 right-0 px-6 md:px-12 flex justify-between items-center z-20">
          <Link 
            to="/teachers" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-all group bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="m15 18-6-6 6-6"/></svg>
            <span className="text-xs font-black uppercase tracking-widest">{language === 'si' ? 'ආපසු' : 'Back'}</span>
          </Link>

          <Link 
            to="/schedule" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-all group bg-white/10 backdrop-blur-md px-4 py-2 rounded-sm border border-white/20 shadow-xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            <span className="text-xs font-black uppercase tracking-widest">{language === 'si' ? 'කාලසටහන' : 'Schedule'}</span>
          </Link>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative h-full flex items-end pb-10 z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
            <div className="w-40 h-40 md:w-56 md:h-56 bg-white p-1 rounded-sm shadow-2xl shrink-0 overflow-hidden">
              <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="text-center md:text-left text-white drop-shadow-xl">
              <span className="text-blue-300 font-black uppercase tracking-[0.3em] text-[12px] md:text-[14px] block mb-2">
                {teacher.subjects[0]} {language === 'si' ? 'විෂය ප්‍රවීණ' : 'Expert'}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-sinhala-head leading-tight mb-2">
                {teacher.name}
              </h1>
              <p className="text-gray-100 font-bold opacity-90 max-w-2xl leading-relaxed">
                {teacher.credentials}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="container mx-auto px-4 md:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-sm shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-50 flex flex-col md:row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <SinhalaText variant="h2" className="text-2xl md:text-3xl text-navy font-bold leading-tight">සතිපතා කාලසටහන</SinhalaText>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">Weekly Academic Schedule</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600"></div>
                <span>Theory Class</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500"></div>
                <span>Paper Class</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 border border-gray-100 text-[10px] font-black uppercase tracking-widest text-gray-400 w-32">Time / Day</th>
                  {days.map(day => (
                    <th key={day.key} className="p-4 border border-gray-100 text-[11px] md:text-[13px] font-bold text-navy uppercase tracking-widest min-w-[140px]">
                      {language === 'si' ? day.si : day.en}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, sIdx) => (
                  <tr key={sIdx}>
                    <td className="p-4 border border-gray-100 bg-gray-50/30 text-[11px] md:text-[12px] font-black text-blue-600 text-center">
                      {slot.label}
                    </td>
                    {days.map(day => {
                      const classInfo = getScheduledClass(day.key, slot.label);
                      return (
                        <td key={day.key} className="p-2 border border-gray-100 h-28 md:h-32 align-top">
                          {classInfo ? (
                            <div className={`h-full w-full p-2 rounded-sm flex flex-col justify-center items-center text-center transition-all hover:scale-[1.02] shadow-sm ${classInfo.type === 'Paper' ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white'}`}>
                              <span className="text-[9px] font-black uppercase tracking-widest opacity-80 mb-1">
                                {classInfo.type === 'Paper' ? (language === 'si' ? 'ප්‍රශ්න පත්‍ර පන්තිය' : 'Paper Class') : (language === 'si' ? 'සිද්ධාන්ත පන්තිය' : 'Theory Class')}
                              </span>
                              <SinhalaText variant="h3" className="text-[16px] md:text-[19px] font-bold leading-tight">
                                {classInfo.grade}
                              </SinhalaText>
                              <div className="mt-2 text-[9px] font-black bg-white/20 px-2 py-0.5 rounded-full uppercase">
                                {teacher.subjects[0]}
                              </div>
                            </div>
                          ) : (
                            <div className="h-full w-full flex items-center justify-center opacity-10">
                              <span className="text-[10px] font-black text-gray-300 tracking-widest uppercase">FREE</span>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-8 bg-blue-50/50 border-t border-blue-100">
             <div className="max-w-3xl mx-auto text-center space-y-4">
                <SinhalaText variant="h3" className="text-xl text-blue-900 font-bold">පන්ති සඳහා ලියාපදිංචි වීමට අවශ්‍යද?</SinhalaText>
                <p className="text-blue-700/80 text-sm font-bold">මෙම ගුරුවරයාගේ සියලුම පන්ති සඳහා දැන්ම ලියාපදිංචි වී ඔබේ අනාගතය ජයගන්න.</p>
                <button className="bg-navy text-white px-10 py-3 rounded-sm font-bold hover:bg-blue-900 transition-all shadow-xl">
                  {language === 'si' ? 'දැන්ම ලියාපදිංචි වන්න' : 'Register Now'}
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherProfile;
