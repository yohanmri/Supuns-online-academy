import React, { useState } from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import heroImg from '../assets/images/supun-hero.png';
import teacher1Img from '../assets/images/teacher1.png';
import teacher2Img from '../assets/images/teacher2.png';
import teacher3Img from '../assets/images/teacher3.png';
import teacher4Img from '../assets/images/teacher4.png';
import { useLanguage } from '../context/LanguageContext';

const slides = [
  {
    id: 'science',
    label_si: 'විද්‍යාව',
    label_en: 'Science',
    title_si: ['තර්ක එක්කම', 'Science'],
    title_en: ['Science with', 'Logic'],
    subtitle_si: 'GRADE 10-11 | සුපුන් රත්නායක',
    subtitle_en: 'GRADE 10-11 | SUPUN RATHNAYAKA',
    bg: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000&blur=50',
    teacherImg: heroImg,
    teacherScale: 'scale-108',
    teacherWidth: 'w-[48%] md:w-[55%] lg:w-[51%]',
    highlightClass: 'text-black drop-shadow-[0_1px_4px_rgba(255,255,255,0.4)]',
    subtitleHighlight: 'bg-[#9e9fa2] text-white'
  },
  {
    id: 'maths',
    label_si: 'ගණිතය',
    label_en: 'Maths',
    title_si: ['ගණිතය', 'හරි ලේසියි'],
    title_en: ['Maths', 'Made Easy'],
    subtitle_si: 'GRADE 10-11 | කසුන් පෙරේරා',
    subtitle_en: 'GRADE 10-11 | KASUN PERERA',
    bg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000&blur=50',
    teacherImg: teacher1Img,
    teacherScale: 'scale-115',
    teacherWidth: 'w-[50%] md:w-[58%] lg:w-[55%]',
    highlightClass: 'text-[#87CEEB] drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]',
    subtitleHighlight: 'bg-[#0079c1] text-white'
  },
  {
    id: 'english',
    label_si: 'ඉංග්‍රීසි',
    label_en: 'English',
    title_si: ['ඉංග්‍රීසි', 'කතා කරමු'],
    title_en: ['Master', 'English'],
    subtitle_si: 'ALL GRADES | නිමල් සිරිවර්ධන',
    subtitle_en: 'ALL GRADES | NIMAL SIRIWARDENA',
    bg: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000&blur=50',
    teacherImg: teacher2Img,
    teacherScale: 'scale-115',
    teacherWidth: 'w-[50%] md:w-[58%] lg:w-[55%]',
    highlightClass: 'text-[#f6921e] drop-shadow-[0_1px_4px_rgba(246,146,30,0.2)]',
    subtitleHighlight: 'bg-[#f6921e] text-white'
  },
  {
    id: 'sinhala',
    label_si: 'සිංහල',
    label_en: 'Sinhala',
    title_si: ['අපේ සිංහල', 'භාෂාව'],
    title_en: ['Our', 'Language'],
    subtitle_si: 'ALL GRADES | සුපුන් රත්නායක',
    subtitle_en: 'ALL GRADES | SUPUN RATHNAYAKA',
    bg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000&blur=50',
    teacherImg: teacher3Img,
    teacherScale: 'scale-115',
    teacherWidth: 'w-[50%] md:w-[58%] lg:w-[55%]',
    highlightClass: 'text-[#FFD700] drop-shadow-[0_1px_5px_rgba(255,215,0,0.2)]',
    subtitleHighlight: 'bg-[#FFD700] text-black'
  },
  {
    id: 'commerce',
    label_si: 'වාණිජ්‍යය',
    label_en: 'Commerce',
    title_si: ['වාණිජ්‍ය', 'ලෝකය'],
    title_en: ['Business', 'World'],
    subtitle_si: 'GRADE 10-11 | MJ',
    subtitle_en: 'GRADE 10-11 | MJ',
    bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&blur=50',
    teacherImg: teacher4Img,
    teacherScale: 'scale-115',
    teacherWidth: 'w-[50%] md:w-[58%] lg:w-[55%]',
    highlightClass: 'text-[#1b5e20] drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]',
    subtitleHighlight: 'bg-[#1b5e20] text-white',
    highlightStyle: { WebkitTextStroke: '1px white' } // Thin white border
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  const activeTitle = language === 'si' ? slides[currentSlide].title_si : slides[currentSlide].title_en;

  return (
    <section className="relative h-[calc(100vh-56px)] overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Tabs Container */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 md:px-12 flex justify-center md:justify-start gap-8 md:gap-16">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className={`py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative ${index === currentSlide ? 'text-white border-b-4 border-blue-500' : 'text-gray-400 hover:text-white'
                }`}
            >
              {language === 'si' ? slide.label_si : slide.label_en}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 h-full relative z-30 flex items-center justify-start text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 pt-12 flex flex-col items-start text-left">
          <div className="mb-6 text-left">
            <span className={`inline-block px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] rounded-sm shadow-sm ${slides[currentSlide].subtitleHighlight}`}>
              {language === 'si' ? slides[currentSlide].subtitle_si : slides[currentSlide].subtitle_en}
            </span>
          </div>

          <div className="mb-10 text-left">
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] font-sinhala-head flex flex-col gap-2">
              <span>{activeTitle[0]}</span>
              <span
                className={slides[currentSlide].highlightClass}
                style={slides[currentSlide].highlightStyle || {}}
              >
                {activeTitle[1]}
              </span>
            </h1>
          </div>

          <div className="flex gap-6 justify-start">
            <button className="bg-white text-black px-12 py-4 rounded-sm font-bold text-base md:text-lg hover:bg-[#0079c1] hover:text-white transition-all duration-300 shadow-2xl">
              {language === 'si' ? 'අදම එක්වන්න' : 'Get Started'}
            </button>
            <button className="border-2 border-white/40 text-white px-12 py-4 rounded-sm font-bold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
              {language === 'si' ? 'විස්තර බලන්න' : 'Watch Intro'}
            </button>
          </div>
        </div>
      </div>

      {/* Teacher Image - Dynamic for each slide */}
      {slides[currentSlide].teacherImg && (
        <div
          key={slides[currentSlide].id + '_teacher'}
          className={`absolute bottom-0 right-0 z-40 ${slides[currentSlide].teacherWidth} max-w-7xl hidden md:block select-none pointer-events-none animate-in fade-in slide-in-from-right-10 duration-1000`}
        >
          <img
            src={slides[currentSlide].teacherImg}
            alt="Teacher"
            className={`w-full h-auto object-contain object-right-bottom drop-shadow-[0_10px_120px_rgba(0,0,0,0.7)] transform translate-x-12 translate-y-2 ${slides[currentSlide].teacherScale}`}
          />
        </div>
      )}
    </section>
  );
};

const NoticeTicker = () => (
  <div className="bg-orange text-white py-2 overflow-hidden whitespace-nowrap z-50 relative h-10 flex items-center border-b border-orange-dark/20 shadow-lg">
    <div className="inline-block animate-marquee px-4 text-xs font-bold tracking-widest">
      🔥 සජීවී පුවත්: 2026 සිද්ධාන්ත පන්ති ලියාපදිංචිය දැන් ඇරඹුනා! | නවතම ප්‍රශ්න පත්‍ර කට්ටලය දැන් බාගත හැකිය... | 🔥 සජීවී පුවත්: 2026 සිද්ධාන්ත පන්ති ලියාපදිංචිය දැන් ඇරඹුනා!
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />
      <NoticeTicker />

      {/* Stats Section */}
      <section className="py-24 bg-white relative z-30">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-16">
          {[
            { v: '5000+', l: 'Active Students' },
            { v: '10+', l: 'Years Experience' },
            { v: '98%', l: 'Success Rate' },
            { v: '24/7', l: 'Premium Support' }
          ].map((s, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-5xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#0079c1] transition-colors duration-300">{s.v}</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <SinhalaText variant="h2" className="text-4xl md:text-5xl mb-8 leading-tight">ඔබේ අනාගතය අදම සුරක්ෂිත කරගන්න</SinhalaText>
          <button className="bg-[#0079c1] text-white px-14 py-5 rounded-sm font-bold text-lg shadow-[0_20px_50px_rgba(0,121,193,0.3)] hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300">ලියාපදිංචි වන්න</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
