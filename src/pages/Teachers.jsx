import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';
import supunImg from '../assets/images/supun-hero.png';

const TeacherCard = ({ name, credentials, image, grades, subjects }) => {
  const { language } = useLanguage();
  return (
    <div className="card-premium relative group">
      {/* Ribbon Badge */}
      <div className="absolute top-4 left-0 bg-orange text-white px-4 py-1 rounded-r-full z-10 font-bold shadow-lg">
        {grades}
      </div>
      
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex gap-2 mb-2">
          {subjects.map((sub, i) => (
            <span key={i} className="text-[10px] uppercase font-bold bg-navy/10 text-navy px-2 py-0.5 rounded">
              {sub}
            </span>
          ))}
        </div>
        <SinhalaText variant="h3" className="mb-1">{name}</SinhalaText>
        <div className="text-emerald font-bold text-sm mb-4">{credentials}</div>
        
        <button className="w-full py-2 border-2 border-navy text-navy font-bold rounded-lg hover:bg-navy hover:text-white transition-all">
          {language === 'si' ? 'විස්තර බලන්න' : 'View Profile'}
        </button>
      </div>
    </div>
  );
};

const Teachers = () => {
  const { language } = useLanguage();

  const teachers = [
    {
      name: 'සුපුන් රත්නායක',
      credentials: 'BSc (Hons) in Science, Dip in IT',
      image: supunImg,
      grades: '10 - 11 ශ්‍රේණි',
      subjects: ['Science', 'Theory']
    },
    // Adding placeholder teachers
    {
      name: 'කසුන් පෙරේරා',
      credentials: 'BSc in Physics',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      grades: '11 ශ්‍රේණිය',
      subjects: ['Physics']
    },
    {
      name: 'නිමල් සිරිවර්ධන',
      credentials: 'BSc in Chemistry',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400',
      grades: '10 - 11 ශ්‍රේණි',
      subjects: ['Chemistry']
    }
  ];

  return (
    <div className="bg-brandGrey min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <SinhalaText variant="h1">ගුරු මණ්ඩලය</SinhalaText>
        <SinhalaText className="max-w-2xl mx-auto text-gray-600">
          {language === 'si' 
            ? 'දිවයිනේ ප්‍රවීණතම ගුරුවරුන් සමඟින් ඔබේ විභාග ජයග්‍රහණය තහවුරු කරගන්න.'
            : 'Ensure your exam success with the most experienced teachers in the island.'}
        </SinhalaText>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher, idx) => (
            <TeacherCard key={idx} {...teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
