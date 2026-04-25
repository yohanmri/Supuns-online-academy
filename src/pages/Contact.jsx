import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex gap-6 items-start group">
    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-1">{title}</h4>
      <p className="text-lg font-bold text-navy">{detail}</p>
    </div>
  </div>
);

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-12 md:py-20 overflow-hidden bg-navy text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000&blur=50")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/85 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl text-left">
            <div className="text-blue-400 font-black uppercase tracking-[0.3em] mb-4 text-sm">
              {language === 'si' ? 'සම්බන්ධ වන්න' : 'Contact Us'}
            </div>
            <SinhalaText variant="h1" className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {language === 'si' ? 'අපි ඔබට උදව් කිරීමට සූදානම්' : "We're Here to Help You"}
            </SinhalaText>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              {language === 'si' 
                ? 'ඔබේ ඕනෑම විමසීමක් සඳහා අප හා සම්බන්ධ වන්න. අපගේ කණ්ඩායම හැකි ඉක්මනින් ඔබට ප්‍රතිචාර දක්වනු ඇත.'
                : 'Get in touch with us for any inquiries. Our team will get back to you as soon as possible.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="space-y-8">
                <ContactInfo icon="📞" title={language === 'si' ? 'දුරකථන' : 'Phone'} detail="+94 77 123 4567" />
                <ContactInfo icon="📧" title={language === 'si' ? 'විද්‍යුත් තැපෑල' : 'Email'} detail="info@supunacademy.lk" />
                <ContactInfo icon="📍" title={language === 'si' ? 'ලිපිනය' : 'Address'} detail="123, High Level Road, Maharagama" />
              </div>
              
              <div className="pt-12 border-t border-gray-200">
                <SinhalaText variant="h3" className="text-2xl font-bold mb-6">ශාඛා ජාලය</SinhalaText>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                    <h5 className="font-bold text-navy mb-2">Maharagama (Main)</h5>
                    <p className="text-sm text-gray-500">Opposite Supermarket, High Level Road.</p>
                  </div>
                  <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
                    <h5 className="font-bold text-navy mb-2">Nugegoda</h5>
                    <p className="text-sm text-gray-500">Near Railway Station, Old Kottawa Road.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 md:p-14 shadow-2xl rounded-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 -mr-10 -mt-10"></div>
              <SinhalaText variant="h2" className="text-3xl font-bold mb-8">පණිවිඩයක් එවන්න</SinhalaText>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
                    <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:border-blue-600 transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email</label>
                    <input type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:border-blue-600 transition-all outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:border-blue-600 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 focus:border-blue-600 transition-all outline-none"></textarea>
                </div>
                <button className="w-full bg-navy text-white py-4 font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg">
                  {language === 'si' ? 'පණිවිඩය යවන්න' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
