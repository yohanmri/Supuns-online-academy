import React, { useState } from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';
import supunImg from '../assets/images/supun-hero.png';
import teacher1Img from '../assets/images/teacher1.png';
import teacher2Img from '../assets/images/teacher2.png';
import teacher3Img from '../assets/images/teacher3.png';
import teacher4Img from '../assets/images/teacher4.png';

const TeacherCard = ({ name, credentials, image, grades, subjects, color, hoverColor }) => {
  const { language } = useLanguage();
  return (
    <div className="bg-white border border-gray-100 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full relative max-w-[210px] mx-auto shadow-sm">
      {/* Subject Banner */}
      <div className={`py-1.5 px-2 flex justify-center items-center ${color}`}>
        <div className="text-[13px] font-black uppercase tracking-wider text-white font-sinhala-head">
          {subjects[0]}
        </div>
      </div>
      
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay Badge */}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-sm shadow-sm">
          <span className="text-[8px] font-bold uppercase tracking-wider text-gray-800">{grades}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-2.5 flex flex-col flex-grow text-center">
        <SinhalaText variant="h3" className={`text-[16px] font-bold text-gray-900 ${hoverColor} transition-colors leading-tight mb-0.5`}>
          {name}
        </SinhalaText>
        <p className="text-[10px] text-gray-600 font-bold leading-tight mt-0 line-clamp-2">
          {credentials}
        </p>
      </div>
    </div>
  );
};

const FilterButton = ({ active, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left px-4 py-2.5 rounded-sm text-[13px] font-bold transition-all border-l-4 ${
      active 
        ? 'bg-blue-50 border-blue-600 text-blue-700' 
        : 'border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-900'
    }`}
  >
    {label}
  </button>
);

const QualityBadge = ({ icon, title, desc }) => (
  <div className="py-4 border-b border-gray-50 last:border-b-0 space-y-2 group transition-all">
    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">{icon}</div>
    <h5 className="text-base font-black uppercase tracking-tight text-navy leading-tight">{title}</h5>
    <p className="text-xs text-gray-500 leading-relaxed font-bold">{desc}</p>
  </div>
);

const Teachers = () => {
  const { language } = useLanguage();
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [gradeFilter, setGradeFilter] = useState('all');

  const teachers = [
    {
      id: 'science',
      name: 'සුපුන් රත්නායක',
      credentials: 'BSc (Hons) in Biological Science, Senior Science Consultant',
      image: supunImg,
      grade_category: '10-11',
      grades: 'GRADE 10 - 11',
      subjects: ['විද්‍යාව'],
      color: 'bg-blue-600',
      hoverColor: 'group-hover:text-blue-600'
    },
    {
      id: 'maths',
      name: 'කසුන් පෙරේරා',
      credentials: 'BSc in Physical Science (University of Peradeniya)',
      image: teacher1Img,
      grade_category: '10-11',
      grades: 'GRADE 10 - 11',
      subjects: ['ගණිතය'],
      color: 'bg-[#10b981]',
      hoverColor: 'group-hover:text-[#10b981]'
    },
    {
      id: 'english',
      name: 'නිමල් සිරිවර්ධන',
      credentials: 'MA in English Literature, Senior English Lecturer',
      image: teacher2Img,
      grade_category: 'all',
      grades: 'ALL GRADES',
      subjects: ['ඉංග්‍රීසි'],
      color: 'bg-[#f6921e]',
      hoverColor: 'group-hover:text-[#f6921e]'
    },
    {
      id: 'sinhala',
      name: 'ප්‍රසාද් මධුසංඛ',
      credentials: 'BA in Sinhala (University of Kelaniya), Media Consultant',
      image: teacher3Img,
      grade_category: 'all',
      grades: 'ALL GRADES',
      subjects: ['සිංහල'],
      color: 'bg-[#FFD700]',
      hoverColor: 'group-hover:text-[#FFD700]'
    },
    {
      id: 'commerce',
      name: 'MJ කුමාර',
      credentials: 'BCom (Special), Chartered Accountant (Finalist)',
      image: teacher4Img,
      grade_category: '10-11',
      grades: 'GRADE 10 - 11',
      subjects: ['වාණිජ්‍යය'],
      color: 'bg-[#1b5e20]',
      hoverColor: 'group-hover:text-[#1b5e20]'
    }
  ];

  const filteredTeachers = teachers.filter(t => {
    const matchSubject = subjectFilter === 'all' || t.id === subjectFilter;
    const matchGrade = gradeFilter === 'all' || t.grade_category === gradeFilter || t.grade_category === 'all';
    return matchSubject && matchGrade;
  });

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <section 
        className="relative overflow-hidden bg-navy shadow-2xl z-20 border-b border-white/10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000&blur=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-3 md:py-4">
          <div className="max-w-4xl text-left">
            <span style={{ marginBottom: '6px' }} className="text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] block leading-none">
              {language === 'si' ? 'අපේ කණ්ඩායම' : 'Our Faculty'}
            </span>
            <h1 style={{ fontFamily: "'Gemunu Libre', sans-serif", lineHeight: '1', margin: 0, marginBottom: '20px', padding: 0 }} className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {language === 'si' ? 'දිවයිනේ ප්‍රවීණතම ගුරු මණ්ඩලය' : 'Meet Our World-Class Faculty'}
            </h1>
            <p style={{ margin: 0, padding: 0 }} className="text-[10px] md:text-xs text-gray-200 max-w-2xl leading-none opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {language === 'si' 
                ? 'ඔබේ අනාගතය ගොඩනැගීම සඳහා විෂය ප්‍රවීණයන් සමඟ එක්වන්න.'
                : 'Join subject experts to build your future and ensure exam success.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Wider Container for 4-Card Grid */}
      <section className="py-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-[70vh]">
        <div className="container-fluid mx-auto px-4 md:px-8 max-w-[1600px]">
          <div className="flex flex-col xl:flex-row gap-4">
            
            {/* Left Sidebar - Narrower Filter */}
            <aside className="w-full xl:w-48 space-y-6 bg-white p-5 rounded-sm shadow-xl border border-gray-100 h-fit sticky top-24">
              <div>
                <SinhalaText variant="h3" className="text-[13px] font-black uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-50 pb-2">
                  {language === 'si' ? 'විෂය' : 'Subject'}
                </SinhalaText>
                <div className="space-y-1">
                  <FilterButton active={subjectFilter === 'all'} label={language === 'si' ? 'සියලුම විෂයන්' : 'All Subjects'} onClick={() => setSubjectFilter('all')} />
                  <FilterButton active={subjectFilter === 'science'} label={language === 'si' ? 'විද්‍යාව' : 'Science'} onClick={() => setSubjectFilter('science')} />
                  <FilterButton active={subjectFilter === 'maths'} label={language === 'si' ? 'ගණිතය' : 'Mathematics'} onClick={() => setSubjectFilter('maths')} />
                  <FilterButton active={subjectFilter === 'english'} label={language === 'si' ? 'ඉංග්‍රීසි' : 'English'} onClick={() => setSubjectFilter('english')} />
                  <FilterButton active={subjectFilter === 'sinhala'} label={language === 'si' ? 'සිංහල' : 'Sinhala'} onClick={() => setSubjectFilter('sinhala')} />
                  <FilterButton active={subjectFilter === 'commerce'} label={language === 'si' ? 'වාණිජ්‍යය' : 'Commerce'} onClick={() => setSubjectFilter('commerce')} />
                </div>
              </div>
              <div>
                <SinhalaText variant="h3" className="text-[13px] font-black uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-50 pb-2">
                  {language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}
                </SinhalaText>
                <div className="space-y-1">
                  <FilterButton active={gradeFilter === 'all'} label={language === 'si' ? 'සියලුම ශ්‍රේණි' : 'All Grades'} onClick={() => setGradeFilter('all')} />
                  <FilterButton active={gradeFilter === '10-11'} label={language === 'si' ? '10 - 11 ශ්‍රේණි' : 'Grades 10 - 11'} onClick={() => setGradeFilter('10-11')} />
                </div>
              </div>
            </aside>

            {/* Middle Content - 4 Teachers per row */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTeachers.map((teacher, idx) => (
                  <TeacherCard key={idx} {...teacher} />
                ))}
              </div>
            </div>

            {/* Right Sidebar - Narrower Quality Panel */}
            <aside className="w-full xl:w-72 h-fit sticky top-24">
               <div className="bg-white p-6 rounded-sm shadow-2xl border border-gray-100">
                 <SinhalaText variant="h3" className="text-[12px] font-black uppercase tracking-widest text-blue-600 mb-4 border-b border-blue-50 pb-3">
                    {language === 'si' ? 'ප්‍රමිතිය සහ විශ්වාසය' : 'Quality & Trust'}
                 </SinhalaText>
                 <div className="space-y-1">
                    <QualityBadge 
                      icon="🎓" 
                      title={language === 'si' ? 'විශ්වවිද්‍යාල කථිකාචාර්යවරුන්' : 'University Lecturers'} 
                      desc={language === 'si' ? 'දිවයිනේ ප්‍රධාන විශ්වවිද්‍යාල වල ප්‍රවීණ ගුරුවරුන්ගෙන් ඉගෙන ගන්න.' : 'Learn from subject experts from major universities in the island.'}
                    />
                    <QualityBadge 
                      icon="📜" 
                      title={language === 'si' ? 'පිළිගත් උපාධිධාරීන්' : 'Certified Professionals'} 
                      desc={language === 'si' ? 'සෑම ගුරුවරයෙකුම තම විෂය පිළිබඳ උසස්ම සුදුසුකම් සහිතය.' : 'Every teacher holds the highest qualifications in their respective subjects.'}
                    />
                    <QualityBadge 
                      icon="✅" 
                      title={language === 'si' ? '100% ප්‍රතිඵල සහතිකයි' : '100% Result Guaranteed'} 
                      desc={language === 'si' ? 'වසර ගණනාවක අත්දැකීම් සමඟින් ඉහළම ප්‍රතිඵල ලබාදෙන එකම ආයතනය.' : 'The only institute providing top results with years of experience.'}
                    />
                 </div>
               </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Simplified CTA Section */}
      <section className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <SinhalaText variant="h2" className="text-xl md:text-2xl mb-4 leading-tight text-white drop-shadow-md font-bold">ඔබේ ගුරුවරයා තෝරාගන්න</SinhalaText>
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-sm font-bold text-sm hover:bg-blue-500 transition-all shadow-xl">
            {language === 'si' ? 'දැන්ම ලියාපදිංචි වන්න' : 'Register Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
