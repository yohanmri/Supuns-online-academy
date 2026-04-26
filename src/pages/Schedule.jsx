import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';
import { teachers } from '../data/teacherData';

const ClassCard = ({ teacherId, type, time, subject, language }) => {
  const teacher = teachers.find(t => t.id === teacherId) || teachers[0];
  
  return (
    <Link 
      to={`/teachers/${teacher.id}`}
      className="bg-white border border-gray-100 p-4 rounded-sm shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-0.5 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-blue-600 transition-all"></div>
      
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-50 shadow-inner group-hover:scale-105 transition-transform shrink-0">
          <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
        </div>
        <div>
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-0.5 flex items-center gap-2">
            {subject}
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className={type === 'Paper' ? 'text-orange-500' : 'text-blue-500'}>{type}</span>
          </div>
          <div className="text-[17px] md:text-[19px] font-bold text-navy group-hover:text-blue-600 transition-colors leading-tight">{teacher.name}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 opacity-70">Click to view profile & timetable</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="bg-gray-50/80 px-5 py-2 rounded-sm text-center md:text-right border border-gray-100 group-hover:bg-blue-50 transition-colors">
          <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{language === 'si' ? 'වේලාව' : 'Time'}</div>
          <div className="text-[17px] font-black text-navy font-sinhala-head">{time}</div>
        </div>
        <div className="hidden md:block text-gray-300 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>
    </Link>
  );
};

const Schedule = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('ol');
  const [activeGrade, setActiveGrade] = useState('Grade 11');
  const [activeStream, setActiveStream] = useState('all');
  const [activeSubject, setActiveSubject] = useState('all');

  const categories = [
    { id: 'primary', si: 'ප්‍රාථමික', en: 'Primary', grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'] },
    { id: 'secondary', si: 'ද්විතීයික', en: 'Secondary', grades: ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'] },
    { id: 'ol', si: 'සාමාන්්‍ය පෙළ', en: 'O/Level', grades: ['Grade 10', 'Grade 11'] },
    { id: 'al', si: 'උසස් පෙළ', en: 'A/Level', grades: ['Grade 12', 'Grade 13'] }
  ];

  const streams = [
    { id: 'all', si: 'සියලුම අංශ', en: 'All Streams' },
    { id: 'maths-science', si: 'ගණිත / විද්‍යා අංශය', en: 'Maths / Science' },
    { id: 'arts-commerce', si: 'කලා / වාණිජ අංශය', en: 'Arts / Commerce' },
    { id: 'tech', si: 'තාක්ෂණවේද අංශය', en: 'Technology' }
  ];

  const subjectsByStream = {
    all: [{ id: 'all', si: 'සියලුම විෂයන්', en: 'All Subjects' }],
    'maths-science': [
      { id: 'all', si: 'සියලුම විෂයන්', en: 'All Subjects' },
      { id: 'biology', si: 'ජීව විද්‍යාව', en: 'Biology' },
      { id: 'physics', si: 'භෞතික විද්‍යාව', en: 'Physics' },
      { id: 'chemistry', si: 'රසායන විද්‍යාව', en: 'Chemistry' },
      { id: 'comb-maths', si: 'සංයුක්ත ගණිතය', en: 'Combined Maths' }
    ],
    'arts-commerce': [
      { id: 'all', si: 'සියලුම විෂයන්', en: 'All Subjects' },
      { id: 'accounting', si: 'ගිණුම්කරණය', en: 'Accounting' },
      { id: 'econ', si: 'ආර්ථික විද්‍යාව', en: 'Economics' },
      { id: 'bs', si: 'ව්‍යාපාර අධ්‍යයනය', en: 'Business Studies' }
    ],
    tech: [
      { id: 'all', si: 'සියලුම විෂයන්', en: 'All Subjects' },
      { id: 'et', si: 'ඉංජිනේරු තාක්ෂණවේදය', en: 'Engineering Tech' },
      { id: 'al-ict', si: 'තොරතුරු තාක්ෂණය (A/L)', en: 'ICT (A/L)' }
    ]
  };

  const generalSubjects = [
    { id: 'all', si: 'සියලුම විෂයන්', en: 'All Subjects' },
    { id: 'science', si: 'විද්‍යාව', en: 'Science' },
    { id: 'maths', si: 'ගණිතය', en: 'Mathematics' },
    { id: 'sinhala', si: 'සිංහල', en: 'Sinhala' },
    { id: 'english', si: 'ඉංග්‍රීසි', en: 'English' },
    { id: 'commerce', si: 'වාණිජ්‍යය', en: 'Commerce' },
    { id: 'tamil', si: 'දෙමළ', en: 'Tamil' }
  ];

  const days = [
    { key: 'mon', si: 'සඳුදා', en: 'Monday' },
    { key: 'tue', si: 'අඟහරුවාදා', en: 'Tuesday' },
    { key: 'wed', si: 'බදාදා', en: 'Wednesday' },
    { key: 'thu', si: 'බ්‍රහස්පතින්දා', en: 'Thursday' },
    { key: 'fri', si: 'සිකුරාදා', en: 'Friday' },
    { key: 'sat', si: 'සෙනසුරාදා', en: 'Saturday' },
    { key: 'sun', si: 'ඉරිදා', en: 'Sunday' }
  ];

  // Comprehensive Schedule Population
  const currentSchedule = useMemo(() => {
    return days.map(day => {
      const classes = [];
      const gradeNum = parseInt(activeGrade.split(' ')[1]);

      // Supun (Science)
      if (gradeNum >= 6 && gradeNum <= 11 && (activeSubject === 'all' || activeSubject === 'science')) {
        const supunDayMap = { 'mon': 6, 'tue': 7, 'wed': 8, 'thu': 9, 'fri': 10, 'sat': 11 };
        if (supunDayMap[day.key] === gradeNum) classes.push({ teacherId: 'science', subject: 'Science', type: 'Theory', time: '02:30 - 04:30' });
        if (day.key === 'sun' && gradeNum === 11) classes.push({ teacherId: 'science', subject: 'Science', type: 'Paper', time: '08:00 - 10:00' });
      }

      // Nilmini (Maths)
      if (gradeNum >= 10 && gradeNum <= 11 && (activeSubject === 'all' || activeSubject === 'maths')) {
        if (day.key === 'tue' && gradeNum === 11) classes.push({ teacherId: 'maths', subject: 'Mathematics', type: 'Theory', time: '04:45 - 06:45' });
        if (day.key === 'thu' && gradeNum === 10) classes.push({ teacherId: 'maths', subject: 'Mathematics', type: 'Theory', time: '04:45 - 06:45' });
        if (day.key === 'sat' && gradeNum === 11) classes.push({ teacherId: 'maths', subject: 'Mathematics', type: 'Paper', time: '10:30 - 12:30' });
      }

      // Nimal (English)
      if (activeSubject === 'all' || activeSubject === 'english') {
        if (day.key === 'mon' && gradeNum <= 5) classes.push({ teacherId: 'english', subject: 'English', type: 'Theory', time: '02:30 - 04:30' });
        if (day.key === 'wed' && gradeNum >= 6 && gradeNum <= 9) classes.push({ teacherId: 'english', subject: 'English', type: 'Theory', time: '02:30 - 04:30' });
        if (day.key === 'fri' && gradeNum >= 10 && gradeNum <= 11) classes.push({ teacherId: 'english', subject: 'English', type: 'Theory', time: '02:30 - 04:30' });
      }

      // Prasadhini (Sinhala)
      if (activeSubject === 'all' || activeSubject === 'sinhala') {
        if (day.key === 'tue' && gradeNum <= 9) classes.push({ teacherId: 'sinhala', subject: 'Sinhala', type: 'Theory', time: '02:30 - 04:30' });
        if (day.key === 'sat' && gradeNum >= 10 && gradeNum <= 11) classes.push({ teacherId: 'sinhala', subject: 'Sinhala', type: 'Theory', time: '03:00 - 05:00' });
      }

      // Prasad Kumara (Commerce)
      if (gradeNum >= 10 && gradeNum <= 11 && (activeSubject === 'all' || activeSubject === 'commerce')) {
        if (day.key === 'thu' && gradeNum === 11) classes.push({ teacherId: 'commerce', subject: 'Commerce', type: 'Theory', time: '04:45 - 06:45' });
        if (day.key === 'wed' && gradeNum === 10) classes.push({ teacherId: 'commerce', subject: 'Commerce', type: 'Theory', time: '04:45 - 06:45' });
      }

      // Biology & English Lit (AL)
      if (activeCategory === 'al') {
        if (day.key === 'wed' && gradeNum === 12 && (activeSubject === 'all' || activeSubject === 'biology')) classes.push({ teacherId: 'biology', subject: 'Biology', type: 'Theory', time: '07:00 - 09:00' });
        if (day.key === 'thu' && gradeNum === 13 && (activeSubject === 'all' || activeSubject === 'biology')) classes.push({ teacherId: 'biology', subject: 'Biology', type: 'Theory', time: '07:00 - 09:00' });
        if (day.key === 'fri' && (activeSubject === 'all' || activeSubject === 'english-lit')) classes.push({ teacherId: 'english-lit', subject: 'Literature', type: 'Theory', time: '07:00 - 09:00' });
      }

      // Tamil
      if (day.key === 'mon' && (activeSubject === 'all' || activeSubject === 'tamil')) {
        classes.push({ teacherId: 'tamil', subject: 'Tamil', type: 'Theory', time: '04:45 - 06:45' });
      }

      return { ...day, classes };
    });
  }, [activeGrade, activeSubject, activeCategory]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      {/* Compact Cinematic Header */}
      <section 
        className="bg-navy py-10 md:py-14 relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy opacity-80 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-left">
          <span className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] md:text-[11px] block mb-2 leading-none">
            {language === 'si' ? 'කාලසටහන' : 'Academic Schedule'}
          </span>
          <SinhalaText variant="h1" className="text-3xl md:text-5xl font-bold text-white leading-tight font-sinhala-head drop-shadow-lg">
            {language === 'si' ? 'ඔබේ ශ්‍රේණිය තෝරා පන්ති විස්තර දැනගන්න' : 'Explore Your Grade-Specific Schedule'}
          </SinhalaText>
        </div>
      </section>

      {/* Navigation Matrix */}
      <div className="sticky top-[56px] z-50 bg-white shadow-2xl border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          {/* Category Selector */}
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-8 md:gap-12 border-b border-gray-50">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                   setActiveCategory(cat.id);
                   setActiveGrade(cat.grades[0]);
                   setActiveStream('all');
                   setActiveSubject('all');
                }}
                className={`text-[12px] md:text-[14px] font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all relative pb-2 ${
                  activeCategory === cat.id ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {language === 'si' ? cat.si : cat.en}
                {activeCategory === cat.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>}
              </button>
            ))}
          </div>
          {/* Grade Strip & Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between py-4 gap-6">
            <div className="flex overflow-x-auto no-scrollbar gap-2 shrink-0 pb-1 lg:pb-0">
              {categories.find(c => c.id === activeCategory)?.grades.map(grade => (
                <button
                  key={grade}
                  onClick={() => setActiveGrade(grade)}
                  className={`px-6 py-2 rounded-sm text-[11px] md:text-[13px] font-bold uppercase tracking-widest transition-all border shrink-0 ${
                    activeGrade === grade ? 'bg-navy border-navy text-white shadow-xl scale-105' : 'bg-white border-gray-200 text-gray-500 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 bg-gray-50 p-2 rounded-sm border border-gray-100">
              {activeCategory === 'al' && (
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{language === 'si' ? 'අංශය' : 'Stream'}:</span>
                  <select 
                    value={activeStream}
                    onChange={(e) => {setActiveStream(e.target.value); setActiveSubject('all');}}
                    className="bg-white border border-gray-200 text-[11px] font-bold rounded-sm px-4 py-2 text-navy focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    {streams.map(s => <option key={s.id} value={s.id}>{language === 'si' ? s.si : s.en}</option>)}
                  </select>
                </div>
              )}

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{language === 'si' ? 'විෂය' : 'Subject'}:</span>
                <select 
                  value={activeSubject}
                  onChange={(e) => setActiveSubject(e.target.value)}
                  className="bg-white border border-gray-200 text-[11px] font-bold rounded-sm px-4 py-2 text-navy focus:ring-2 focus:ring-blue-500 outline-none min-w-[160px]"
                >
                  {(activeCategory === 'al' ? subjectsByStream[activeStream] : generalSubjects).map(s => (
                    <option key={s.id} value={s.id}>{language === 'si' ? s.si : s.en}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Timeline */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-12 max-w-5xl">
          <div className="space-y-12">
            {currentSchedule.map((day) => (
              <div key={day.key} className="relative pl-0 md:pl-44">
                {/* Day Header */}
                <div className="md:absolute md:left-0 md:top-0 mb-6 md:mb-0">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-14 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                    <div>
                      <SinhalaText variant="h2" className="text-2xl font-bold text-navy leading-none mb-1">
                        {language === 'si' ? day.si : day.en}
                      </SinhalaText>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">
                        {activeGrade} {language === 'si' ? 'කාලසටහන' : 'Curriculum'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Day Classes */}
                <div className="space-y-4">
                  {day.classes.length > 0 ? (
                    day.classes.map((cls, cIdx) => (
                      <ClassCard key={cIdx} {...cls} language={language} />
                    ))
                  ) : (
                    <div className="bg-white/50 border border-dashed border-gray-200 p-10 rounded-sm text-center">
                       <div className="text-gray-300 text-3xl mb-2">🗓️</div>
                       <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.4em]">No Classes for this selection</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
