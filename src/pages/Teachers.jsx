import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';
import { teachers } from '../data/teacherData';

// Inline Icon Components
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);

const ChevronUp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

const TeacherCard = ({ id, name, credentials, image, grades, subjects, color, hoverColor }) => {
  const { language } = useLanguage();
  return (
    <Link to={`/teachers/${id}`} className="block">
      <div className="bg-white border border-gray-100 group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full relative max-w-[210px] mx-auto shadow-sm">
        <div className={`py-1.5 px-2 flex justify-center items-center ${color}`}>
          <div className="text-[13px] font-black uppercase tracking-wider text-white font-sinhala-head">
            {subjects[0]}
          </div>
        </div>
        <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"/>
          <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-sm shadow-sm">
            <span className="text-[8px] font-bold uppercase tracking-wider text-gray-800">{grades}</span>
          </div>
        </div>
        <div className="p-2.5 flex flex-col flex-grow text-center">
          <SinhalaText variant="h3" className={`text-[16px] font-bold text-gray-900 ${hoverColor} transition-colors leading-tight mb-0.5`}>{name}</SinhalaText>
          <p className="text-[10px] text-gray-600 font-bold leading-tight mt-0 line-clamp-2">{credentials}</p>
        </div>
      </div>
    </Link>
  );
};

const CheckboxFilter = ({ active, label, onClick }) => (
  <button onClick={onClick} className="w-full flex items-center gap-3 py-2 group cursor-pointer text-left">
    <div className={`w-5 h-5 border-2 rounded-sm transition-all flex items-center justify-center shrink-0 ${active ? 'bg-blue-600 border-blue-600' : 'border-gray-200 group-hover:border-blue-400'}`}>
      {active && <CheckIcon />}
    </div>
    <span className={`text-[14px] md:text-[15px] font-bold transition-colors ${active ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>{label}</span>
  </button>
);

const AccordionGroup = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-50 pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-2.5 text-[11px] md:text-[12px] font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
        <span>{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && <div className="space-y-0.5 mt-1">{children}</div>}
    </div>
  );
};

const Teachers = () => {
  const { language } = useLanguage();
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleGrade = (grade) => {
    setSelectedGrades(prev => prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]);
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => prev.includes(subject) ? prev.filter(s => s !== subject) : [...prev, subject]);
  };

  const filteredTeachers = teachers.filter(t => {
    const matchSubject = selectedSubjects.length === 0 || selectedSubjects.includes(t.id);
    let matchGrade = selectedGrades.length === 0;
    if (!matchGrade) {
      if (t.grade_category === 'all') matchGrade = true;
      else {
        const supported = t.grade_category.split('-');
        matchGrade = selectedGrades.some(g => supported.includes(g));
      }
    }
    return matchSubject && matchGrade;
  });

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <section className="relative overflow-hidden bg-navy shadow-2xl z-20 border-b border-white/10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000&blur=50")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 py-3 md:py-4 text-left">
          <span style={{ marginBottom: '6px' }} className="text-blue-400 font-black uppercase tracking-[0.3em] text-[12px] md:text-[13px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] block leading-none">{language === 'si' ? 'අපේ කණ්ඩායම' : 'Our Faculty'}</span>
          <h1 style={{ fontFamily: "'Gemunu Libre', sans-serif", lineHeight: '1', margin: 0, marginBottom: '20px', padding: 0 }} className="text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{language === 'si' ? 'දිවයිනේ ප්‍රවීණතම ගුරු මණ්ඩලය' : 'Meet Our World-Class Faculty'}</h1>
          <p style={{ margin: 0, padding: 0 }} className="text-[13px] md:text-sm text-gray-200 max-w-2xl leading-snug opacity-95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{language === 'si' ? 'ඔබේ අනාගතය ගොඩනැගීම සඳහා විෂය ප්‍රවීණයන් සමඟ එක්වන්න.' : 'Join subject experts to build your future and ensure exam success.'}</p>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-[70vh]">
        <div className="container-fluid mx-auto px-4 md:px-8 max-w-[1600px]">
          <div className="flex flex-col xl:flex-row gap-4">
            
            {/* Left Sidebar - Grade Filter */}
            <aside className="w-full xl:w-60 space-y-6 bg-white p-5 rounded-sm shadow-xl border border-gray-100 h-[calc(100vh-120px)] sticky top-24 overflow-y-auto custom-scrollbar">
              <div>
                <div className="flex justify-between items-center border-b border-blue-50 pb-2 mb-3">
                  <SinhalaText variant="h3" className="text-[15px] md:text-[16px] font-black uppercase tracking-widest text-blue-600">{language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}</SinhalaText>
                  {(selectedGrades.length > 0 || selectedSubjects.length > 0) && <button onClick={() => {setSelectedGrades([]); setSelectedSubjects([]);}} className="text-[11px] font-bold text-red-500 hover:underline">{language === 'si' ? 'සියල්ල ඉවත් කරන්න' : 'Reset'}</button>}
                </div>
                
                <AccordionGroup title={language === 'si' ? 'ප්‍රාථමික' : 'Primary'}>
                  {[1, 2, 3, 4, 5].map(g => (
                    <CheckboxFilter key={g} active={selectedGrades.includes(g.toString())} label={`${g} ${language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}`} onClick={() => toggleGrade(g.toString())} />
                  ))}
                </AccordionGroup>
                <AccordionGroup title={language === 'si' ? 'ද්විතීයික' : 'Secondary'}>
                  {[6, 7, 8, 9].map(g => (
                    <CheckboxFilter key={g} active={selectedGrades.includes(g.toString())} label={`${g} ${language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}`} onClick={() => toggleGrade(g.toString())} />
                  ))}
                </AccordionGroup>
                <AccordionGroup title={language === 'si' ? 'සාමාන්‍ය පෙළ' : 'O/Level'}>
                  {['10', '11'].map(g => (
                    <CheckboxFilter key={g} active={selectedGrades.includes(g)} label={`${g} ${language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}`} onClick={() => toggleGrade(g)} />
                  ))}
                </AccordionGroup>
                <AccordionGroup title={language === 'si' ? 'උසස් පෙළ' : 'A/Level'}>
                  {['12', '13'].map(g => (
                    <CheckboxFilter key={g} active={selectedGrades.includes(g)} label={`${g} ${language === 'si' ? 'ශ්‍රේණිය' : 'Grade'}`} onClick={() => toggleGrade(g)} />
                  ))}
                </AccordionGroup>
              </div>
            </aside>

            {/* Middle Content - Teacher Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTeachers.map((teacher, idx) => (
                  <TeacherCard key={idx} {...teacher} />
                ))}
              </div>
              {filteredTeachers.length === 0 && (
                <div className="text-center py-20 bg-white border border-gray-100 rounded-sm shadow-sm">
                  <SinhalaText variant="h3" className="text-gray-400 font-bold mb-2">සමාවන්න, කිසිදු ගුරුවරයෙකු හමු නොවීය.</SinhalaText>
                  <p className="text-gray-400 text-sm">කරුණාකර ඔබගේ පෙරණයන් වෙනස් කර නැවත උත්සාහ කරන්න.</p>
                </div>
              )}
            </div>

            {/* Right Sidebar - Subject Filter */}
            <aside className="w-full xl:w-72 space-y-6 bg-white p-5 rounded-sm shadow-xl border border-gray-100 h-[calc(100vh-120px)] sticky top-24 overflow-y-auto custom-scrollbar">
              <div>
                <SinhalaText variant="h3" className="text-[15px] md:text-[16px] font-black uppercase tracking-widest text-blue-600 mb-3 border-b border-blue-50 pb-2">
                  {language === 'si' ? 'විෂය' : 'Subject'}
                </SinhalaText>
                
                <AccordionGroup title={language === 'si' ? 'ප්‍රාථමික අංශය' : 'Primary Section'}>
                  {[
                    {id: 'p-env', si: 'පරිසරය', en: 'Environment'},
                    {id: 'p-maths', si: 'ගණිතය', en: 'Mathematics'},
                    {id: 'p-sinhala', si: 'සිංහල', en: 'Sinhala'},
                    {id: 'p-english', si: 'ඉංග්‍රීසි', en: 'English'},
                    {id: 'p-tamil', si: 'දෙමළ', en: 'Tamil'}
                  ].map(s => (
                    <CheckboxFilter key={s.id} active={selectedSubjects.includes(s.id)} label={language === 'si' ? s.si : s.en} onClick={() => toggleSubject(s.id)} />
                  ))}
                </AccordionGroup>

                <AccordionGroup title={language === 'si' ? 'ද්විතීයික සහ සාමාන්‍ය පෙළ' : 'Secondary & O/L'}>
                  {[
                    {id: 'science', si: 'විද්‍යාව', en: 'Science'},
                    {id: 'maths', si: 'ගණිතය', en: 'Mathematics'},
                    {id: 'sinhala', si: 'සිංහල', en: 'Sinhala'},
                    {id: 'english', si: 'ඉංග්‍රීසි', en: 'English'},
                    {id: 'history', si: 'ඉතිහාසය', en: 'History'},
                    {id: 'ict', si: 'තොරතුරු තාක්ෂණය', en: 'ICT'},
                    {id: 'geography', si: 'භූගෝල විද්‍යාව', en: 'Geography'},
                    {id: 'tamil', si: 'දෙමළ', en: 'Tamil'}
                  ].map(s => (
                    <CheckboxFilter key={s.id} active={selectedSubjects.includes(s.id)} label={language === 'si' ? s.si : s.en} onClick={() => toggleSubject(s.id)} />
                  ))}
                </AccordionGroup>

                <div className="mt-4 border-t border-gray-100 pt-2">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-2">{language === 'si' ? 'උසස් පෙළ අංශ' : 'A/L STREAMS'}</span>
                  
                  <AccordionGroup title={language === 'si' ? 'ගණිත / විද්‍යා අංශය' : 'Maths / Science'} defaultOpen={false}>
                    {[
                      {id: 'biology', si: 'ජීව විද්‍යාව', en: 'Biology'},
                      {id: 'physics', si: 'භෞතික විද්‍යාව', en: 'Physics'},
                      {id: 'chemistry', si: 'රසායන විද්‍යාව', en: 'Chemistry'},
                      {id: 'comb-maths', si: 'සංයුක්ත ගණිතය', en: 'Combined Maths'}
                    ].map(s => (
                      <CheckboxFilter key={s.id} active={selectedSubjects.includes(s.id)} label={language === 'si' ? s.si : s.en} onClick={() => toggleSubject(s.id)} />
                    ))}
                  </AccordionGroup>

                  <AccordionGroup title={language === 'si' ? 'කලා / වාණිජ අංශය' : 'Arts / Commerce'} defaultOpen={false}>
                    {[
                      {id: 'accounting', si: 'ගිණුම්කරණය', en: 'Accounting'},
                      {id: 'econ', si: 'ආර්ථික විද්‍යාව', en: 'Economics'},
                      {id: 'bs', si: 'ව්‍යාපාර අධ්‍යයනය', en: 'Business Studies'},
                      {id: 'sinhala-al', si: 'සිංහල (A/L)', en: 'Sinhala (A/L)'},
                      {id: 'history-al', si: 'ඉතිහාසය (A/L)', en: 'History (A/L)'},
                      {id: 'english-lit', si: 'ඉංග්‍රීසි සාහිත්‍යය', en: 'English Lit'}
                    ].map(s => (
                      <CheckboxFilter key={s.id} active={selectedSubjects.includes(s.id)} label={language === 'si' ? s.si : s.en} onClick={() => toggleSubject(s.id)} />
                    ))}
                  </AccordionGroup>

                  <AccordionGroup title={language === 'si' ? 'තාක්ෂණවේද අංශය' : 'Technology'} defaultOpen={false}>
                    {[
                      {id: 'et', si: 'ඉංජිනේරු තාක්ෂණවේදය', en: 'Engineering Tech'},
                      {id: 'bst', si: 'ජෛව පද්ධති තාක්ෂණවේදය', en: 'Bio-Systems Tech'},
                      {id: 'sft', si: 'තාක්ෂණවේදය සඳහා විද්‍යාව', en: 'SFT'},
                      {id: 'al-ict', si: 'තොරතුරු තාක්ෂණය (A/L)', en: 'ICT (A/L)'}
                    ].map(s => (
                      <CheckboxFilter key={s.id} active={selectedSubjects.includes(s.id)} label={language === 'si' ? s.si : s.en} onClick={() => toggleSubject(s.id)} />
                    ))}
                  </AccordionGroup>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <SinhalaText variant="h2" className="text-xl md:text-2xl mb-4 leading-tight text-white drop-shadow-md font-bold">ඔබේ ගුරුවරයා තෝරාගන්න</SinhalaText>
          <button className="bg-blue-600 text-white px-8 py-2.5 rounded-sm font-bold text-sm hover:bg-blue-500 transition-all shadow-xl">{language === 'si' ? 'දැන්ම ලියාපදිංචි වන්න' : 'Register Now'}</button>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
