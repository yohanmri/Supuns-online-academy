import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const values = [
    {
      title_si: 'විනය සහ ගුණාත්මකභාවය',
      title_en: 'Discipline & Quality',
      desc_si: 'සෑම සිසුවෙකුගේම අධ්‍යාපන ගුණාත්මකභාවය ඉහළ නැංවීම අපගේ ප්‍රමුඛතාවයයි.',
      desc_en: 'Our priority is to enhance the educational quality of every student.',
      icon: '🎯'
    },
    {
      title_si: 'නවීන තාක්ෂණය',
      title_en: 'Modern Technology',
      desc_si: 'නවතම තාක්ෂණය භාවිතා කරමින් ඉගැන්වීම් ක්‍රමවේද නිරන්තරයෙන් යාවත්කාලීන කරනු ලැබේ.',
      desc_en: 'Teaching methods are constantly updated using the latest technology.',
      icon: '🚀'
    },
    {
      title_si: 'විශ්වාසය',
      title_en: 'Trust',
      desc_si: 'වසර ගණනාවක අත්දැකීම් සමඟින් දෙමාපියන්ගේ සහ සිසුන්ගේ නොමඳ විශ්වාසය දිනා සිටිමු.',
      desc_en: 'We have earned the trust of parents and students with years of experience.',
      icon: '🤝'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-16 md:py-24 overflow-hidden bg-navy"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000&blur=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block border border-white/30 bg-black/20 shadow-lg px-4 py-1.5 rounded-sm text-blue-400 font-black uppercase tracking-[0.3em] mb-6 text-sm md:text-base">
              {language === 'si' ? 'අප ගැන' : 'About Us'}
            </div>
            <SinhalaText variant="h1" className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              {language === 'si' ? 'අධ්‍යාපනයේ විශිෂ්ටත්වය කරා යන ගමන' : 'Journey Towards Educational Excellence'}
            </SinhalaText>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {language === 'si' 
                ? 'සුපුන් ඇකඩමි යනු හුදෙක් පන්තියක් නොව, දරුවන්ගේ අනාගතය සාර්ථක කරන සැබෑ අධ්‍යාපනික තෝතැන්නකි.'
                : "Supun's Academy is not just a tuition class, but a true educational sanctuary that ensures the success of children's futures."}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <img 
                 src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1200" 
                 alt="Academic Excellence" 
                 className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="space-y-12">
              <div>
                <SinhalaText variant="h2" className="text-3xl font-bold mb-4 text-navy">
                  {language === 'si' ? 'අපේ දැක්ම' : 'Our Vision'}
                </SinhalaText>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {language === 'si'
                    ? 'තාර්කික චින්තනයෙන් සන්නද්ධ, ගුණගරුක සහ බුද්ධිමත් දරු පරපුරක් දැයට දායාද කිරීම අපගේ පරම අභිලාෂයයි.'
                    : 'Our ultimate goal is to contribute a generation of virtuous and intelligent children equipped with logical thinking to the nation.'}
                </p>
              </div>
              <div className="h-px bg-gray-200 w-24"></div>
              <div>
                <SinhalaText variant="h2" className="text-3xl font-bold mb-4 text-navy">
                  {language === 'si' ? 'අපේ මෙහෙවර' : 'Our Mission'}
                </SinhalaText>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {language === 'si'
                    ? 'විභාගය පමණක් නොව ජීවිතයම ජය ගැනීමට අවශ්‍ය මගපෙන්වීම සහ උසස් මට්ටමේ අධ්‍යාපනයක් සෑම සිසුවෙකුටම සමීප කරවීම.'
                    : 'To provide high-level education and guidance necessary for every student to conquer not just exams but life itself.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <SinhalaText variant="h2" className="text-4xl font-bold mb-4">අපගේ සාරධර්ම</SinhalaText>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="p-10 border border-gray-100 hover:border-blue-600 transition-all duration-300 group shadow-sm hover:shadow-xl">
                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{v.icon}</div>
                <SinhalaText variant="h3" className="text-xl font-bold mb-4 group-hover:text-blue-600">
                  {language === 'si' ? v.title_si : v.title_en}
                </SinhalaText>
                <p className="text-gray-500 leading-relaxed">
                  {language === 'si' ? v.desc_si : v.desc_en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-24 bg-[#111111] border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-3xl">
          <SinhalaText variant="h2" className="text-4xl md:text-5xl mb-8 leading-tight text-white drop-shadow-md">අනාගතය දිනන දරුවන්ගේ නවාතැන</SinhalaText>
          <button className="bg-blue-600 text-white px-12 py-4 rounded-sm font-black uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300">
            {language === 'si' ? 'අදම එක්වන්න' : 'Join Us Today'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
