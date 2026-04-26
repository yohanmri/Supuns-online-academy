import React, { useState, useEffect } from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import heroImg from '../assets/images/supun-hero.png';
import teacher1Img from '../assets/images/teacher1.png';
import teacher2Img from '../assets/images/teacher2.png';
import teacher3Img from '../assets/images/teacher3.png';
import teacher4Img from '../assets/images/teacher4.png';
import { useLanguage } from '../context/LanguageContext';
import { TeacherCard } from './Teachers';
import { teachers } from '../data/teacherData';

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
    subtitleHighlight: 'bg-[#9e9fa2] text-white',
    highlightStyle: { WebkitTextStroke: '1px rgba(255,255,255,0.5)' }
  },
  {
    id: 'maths',
    label_si: 'ගණිතය',
    label_en: 'Maths',
    title_si: ['ගණිතය', 'හරි ලේසියි'],
    title_en: ['Maths', 'Made Easy'],
    subtitle_si: 'GRADE 10-11 | නිල්මිණි පෙරේරා',
    subtitle_en: 'GRADE 10-11 | NILMINI PERERA',
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
    subtitle_si: 'ALL GRADES | ප්‍රසාදිනී මධුසංඛ',
    subtitle_en: 'ALL GRADES | PRASADINI MADUSANKA',
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
    subtitle_si: 'GRADE 10-11 | ප්‍රසාද් කුමාර',
    subtitle_en: 'GRADE 10-11 | PRASAD KUMARA',
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
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();

  const DURATION = 4000;
  const INTERVAL = 50;

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => prev + (INTERVAL / DURATION) * 100);
      }, INTERVAL);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (progress >= 100) {
      setProgress(0);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
  }, [progress]);

  const handleTabClick = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

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
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex justify-center md:justify-start gap-8 md:gap-16">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleTabClick(index)}
                className={`py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative ${index === currentSlide ? 'text-white border-b-4 border-blue-500' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {language === 'si' ? slide.label_si : slide.label_en}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 py-4 pr-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/20"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="88"
                  strokeDashoffset={88 - (88 * progress) / 100}
                  className="text-blue-500 transition-all duration-100 ease-linear"
                />
              </svg>
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center text-white hover:text-blue-400 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                )}
              </button>
            </div>
          </div>
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

          <div className="flex gap-4 md:gap-6 justify-start">
            <button className="bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-sm font-bold text-sm md:text-base hover:bg-[#0079c1] hover:text-white transition-all duration-300 shadow-2xl">
              {language === 'si' ? 'අදම එක්වන්න' : 'Get Started'}
            </button>
            <button className="border-2 border-white/40 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-sm font-bold text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
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
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <HeroCarousel />
      <NoticeTicker />

      {/* Stats Section */}
      <section className="pt-16 pb-8 bg-white relative z-30">
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

      {/* Notice Section */}
      <section className="pt-4 pb-12 bg-white relative z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-[#f8f9fa] p-8 md:p-12 rounded-sm border-l-4 border-l-orange-500 shadow-sm">
            <div className="w-full md:w-2/3">
              <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs block mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                {language === 'si' ? 'විශේෂ නිවේදනය' : 'Special Notice'}
              </span>
              <SinhalaText variant="h2" className="text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight">
                {language === 'si' 
                  ? '2026 සිද්ධාන්ත පන්ති සඳහා ලියාපදිංචිය දැන් ඇරඹුනා!'
                  : 'Registrations for 2026 Theory Classes are now open!'}
              </SinhalaText>
              <p className="text-gray-500 leading-relaxed text-sm">
                {language === 'si'
                  ? 'සීමිත සිසුන් පිරිසක් පමණක් බඳවා ගන්නා බැවින් අදම ඔබගේ අසුන වෙන්කරවා ගන්න. වැඩි විස්තර සඳහා පහත බොත්තම ක්ලික් කරන්න.'
                  : 'Since only a limited number of students are enrolled, reserve your seat today. Click the button below for more details.'}
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-start md:justify-end mt-4 md:mt-0">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:bg-orange-600 hover:-translate-y-0.5 transition-all">
                {language === 'si' ? 'වැඩි විස්තර' : 'More Info'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teachers Section */}
      <section className="pt-12 pb-16 bg-[#f8f9fa] relative z-30 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs block mb-3">
              {language === 'si' ? 'අපේ ප්‍රවීණයන්' : 'Our Experts'}
            </span>
            <SinhalaText variant="h2" className="text-3xl md:text-5xl font-bold text-navy mb-4">
              {language === 'si' ? 'ප්‍රමුඛතම ගුරු මණ්ඩලය' : 'Featured Faculty'}
            </SinhalaText>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {teachers.slice(0, 5).map((teacher, idx) => (
              <TeacherCard key={idx} {...teacher} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#111111] border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <SinhalaText variant="h2" className="text-4xl md:text-5xl mb-8 leading-tight text-white drop-shadow-md">ඔබේ අනාගතය අදම සුරක්ෂිත කරගන්න</SinhalaText>
          <button className="bg-blue-600 text-white px-12 py-4 rounded-sm font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300">
            {language === 'si' ? 'ලියාපදිංචි වන්න' : 'Register Now'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
