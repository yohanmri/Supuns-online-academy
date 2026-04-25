import React, { useState, useEffect } from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import heroImg from '../assets/images/supun-hero.png';
import { useLanguage } from '../context/LanguageContext';

const slides = [
  { id: 'science', label_si: 'විද්‍යාව', label_en: 'Science', title_si: 'තර්ක එක්කම Science', title_en: 'Science with Logic', subtitle_si: 'Grade 10-11 | සුපුන් රත්නායක', subtitle_en: 'Grade 10-11 | Supun Rathnayaka', bg: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000&blur=50' },
  { id: 'maths', label_si: 'ගණිතය', label_en: 'Maths', title_si: 'ගණිතය හරි ලේසියි', title_en: 'Maths Made Easy', subtitle_si: 'Grade 10-11 | Kasun Perera', subtitle_en: 'Grade 10-11 | Kasun Perera', bg: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000&blur=50' },
  { id: 'english', label_si: 'ඉංග්‍රීසි', label_en: 'English', title_si: 'ඉංග්‍රීසි කතා කරමු', title_en: 'Master English', subtitle_si: 'All Grades | Nimal Siriwardena', subtitle_en: 'All Grades | Nimal Siriwardena', bg: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000&blur=50' },
  { id: 'sinhala', label_si: 'සිංහල', label_en: 'Sinhala', title_si: 'අපේ භාෂාව', title_en: 'Our Language', subtitle_si: 'All Grades | Supun Rathnayaka', subtitle_en: 'All Grades | Supun Rathnayaka', bg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000&blur=50' },
  { id: 'commerce', label_si: 'වාණිජ්‍යය', label_en: 'Commerce', title_si: 'ව්‍යාපාර ලෝකය', title_en: 'Business World', subtitle_si: 'Grade 10-11 | MJ', subtitle_en: 'Grade 10-11 | MJ', bg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&blur=50' },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          {/* Subtle Overlay */}
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
              className={`py-4 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative ${
                index === currentSlide ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'si' ? slide.label_si : slide.label_en}
              {index === currentSlide && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#0079c1] animate-in fade-in slide-in-from-left-2 duration-300"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 h-full relative z-30 flex items-center">
        <div className="w-full md:w-3/5 lg:w-1/2 pt-16">
          <div className="text-blue-400 text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-6 drop-shadow-md">
            {language === 'si' ? slides[currentSlide].subtitle_si : slides[currentSlide].subtitle_en}
          </div>
          <SinhalaText 
            variant="h1" 
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {language === 'si' ? slides[currentSlide].title_si : slides[currentSlide].title_en}
          </SinhalaText>
          <div className="flex gap-6">
             <button className="bg-white text-black px-10 py-4 rounded-sm font-bold text-sm md:text-base hover:bg-[#0079c1] hover:text-white transition-all duration-300 shadow-2xl">
                {language === 'si' ? 'අදම එක්වන්න' : 'Get Started'}
             </button>
             <button className="border-2 border-white/30 text-white px-10 py-4 rounded-sm font-bold text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                {language === 'si' ? 'විස්තර බලන්න' : 'Watch Intro'}
             </button>
          </div>
        </div>
      </div>

      {/* Teacher Image - Maximized and Forced to Absolute Right/Bottom Corner */}
      <div className="absolute bottom-0 right-0 z-40 w-[50%] md:w-[55%] lg:w-[52%] max-w-6xl hidden md:block select-none pointer-events-none overflow-hidden">
        <img 
          src={heroImg} 
          alt="Teacher" 
          className="w-full h-auto object-contain object-right-bottom drop-shadow-[0_10px_100px_rgba(0,0,0,0.6)] transform translate-x-12 translate-y-4 scale-110"
        />
      </div>
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
