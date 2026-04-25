import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import heroImg from '../assets/images/supun-hero.png';
import heroVideo from '../assets/videos/bg-hero-science.mp4';
import { useLanguage } from '../context/LanguageContext';

const NoticeTicker = () => (
  <div className="bg-orange text-white py-2 overflow-hidden whitespace-nowrap z-50 relative h-10 flex items-center">
    <div className="inline-block animate-marquee px-4">
       🔥 සජීවී පුවත්: 2026 සිද්ධාන්ත පන්ති ලියාපදිංචිය දැන් ඇරඹුනා! | නවතම ප්‍රශ්න පත්‍ර කට්ටලය දැන් බාගත හැකිය... | 🔥 සජීවී පුවත්: 2026 සිද්ධාන්ත පන්ති ලියාපදිංචිය දැන් ඇරඹුනා!
    </div>
  </div>
);

const Hero = () => {
  const { language } = useLanguage();
  return (
    <section className="relative h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-navy/80 via-navy/40 to-transparent z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">
        <div className="md:w-3/5 lg:w-1/2">
          <div className="bg-emerald/40 text-white border border-white/20 font-bold px-4 py-1 rounded-full inline-block mb-4 shadow-lg text-sm md:text-base">
            {language === 'si' ? 'ශ්‍රී ලංකාවේ අංක 1 විද්‍යා පන්තිය' : '#1 Science Class in Sri Lanka'}
          </div>
          <SinhalaText variant="h1" className="leading-tight text-white mb-4 drop-shadow-2xl text-4xl md:text-6xl lg:text-7xl">
            {language === 'si' ? 'තර්ක එක්කම Science' : 'Science with Logic'}
          </SinhalaText>
          <SinhalaText className="mb-8 text-white drop-shadow-lg max-w-lg text-lg md:text-xl leading-relaxed">
            {language === 'si' 
              ? 'සුපුන් රත්නායක සර් සමඟ විද්‍යාව විෂයයේ සැඟවුණු රහස් තර්කානුකූලව හදාරන්න.'
              : 'Master the secrets of Science logically with Supun Rathnayaka Sir.'}
          </SinhalaText>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary shadow-2xl px-6 py-3 text-base md:text-lg">
              {language === 'si' ? 'දැන්ම ලියාපදිංචි වන්න' : 'Register Now'}
            </button>
            <button className="border-2 border-white/50 text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-navy transition-all backdrop-blur-sm shadow-lg text-base md:text-lg">
              {language === 'si' ? 'පන්ති කාලසටහන' : 'View Schedule'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image - Positioned Bottom-Right */}
      <div className="absolute bottom-0 right-0 z-15 w-[40%] md:w-[45%] lg:w-[42%] max-w-4xl hidden md:block">
        <img 
          src={heroImg} 
          alt="Supun Sir" 
          className="w-full h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  );
};

const Stats = () => {
  const { language } = useLanguage();
  const stats = [
    { value: '5000+', label_si: 'සිසුන් සංඛ්‍යාව', label_en: 'Active Students' },
    { value: '10+', label_si: 'වසරක පළපුරුද්ද', label_en: 'Years Experience' },
    { value: '98%', label_si: 'විභාග සාමාර්ථ', label_en: 'Pass Rate' },
    { value: '24/7', label_si: 'සජීවී සහාය', label_en: 'Live Support' },
  ];

  return (
    <section className="py-12 md:py-16 bg-white relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 md:p-6 rounded-2xl bg-brandGrey hover:bg-navy hover:text-white transition-all duration-500 group border border-gray-100">
              <div className="text-2xl md:text-5xl font-bold text-navy group-hover:text-white mb-1 md:mb-2">{stat.value}</div>
              <SinhalaText variant="small" className="text-gray-500 group-hover:text-gray-300 font-bold uppercase tracking-wider text-[10px] md:text-xs">
                {language === 'si' ? stat.label_si : stat.label_en}
              </SinhalaText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <NoticeTicker />
      <Hero />
      <Stats />
      
      <section className="py-20 bg-brandGrey">
        <div className="container mx-auto px-6 text-center max-w-3xl">
           <SinhalaText variant="h2" className="mb-4">පන්ති සඳහා එක්වීමට සූදානම්ද?</SinhalaText>
           <SinhalaText className="mb-8 text-gray-600">
             අදම ලියාපදිංචි වී විද්‍යාව විෂයයට විශිෂ්ට සාමාර්ථයක් කරා යන ගමන ආරම්භ කරන්න.
           </SinhalaText>
           <button className="btn-primary px-10 py-3 text-lg shadow-2xl">දැන්ම අරඹන්න</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
