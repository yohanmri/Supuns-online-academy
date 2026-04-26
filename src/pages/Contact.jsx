import React from 'react';
import SinhalaText from '../components/typography/SinhalaText';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-12">
      {/* Cinematic Header */}
      <section 
        className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-navy"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-navy/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block border-2 border-white bg-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.2)] px-5 py-2 rounded-sm text-white font-black uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
            {language === 'si' ? 'සම්බන්ධ වන්න' : 'Contact Us'}
          </div>
          <SinhalaText variant="h1" className="text-5xl md:text-6xl font-bold leading-tight text-navy drop-shadow-[0_4px_10px_rgba(255,255,255,0.1)]" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>
            {language === 'si' ? 'අපව සම්බන්ධ කරගන්න' : 'Get in Touch'}
          </SinhalaText>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 md:px-12 -mt-4 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Contact Details (Left Column) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-sm shadow-xl border border-gray-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>
               <div>
                 <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-1">Location</h3>
                 <p className="text-gray-500 text-sm">No. 123, Galle Road,<br/>Colombo 03</p>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-xl border border-gray-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
               </div>
               <div>
                 <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-1">Call Us</h3>
                 <p className="text-gray-500 text-sm">+94 11 234 5678<br/>+94 77 123 4567</p>
               </div>
            </div>
            
            <div className="bg-white p-6 rounded-sm shadow-xl border border-gray-100 flex items-center gap-4 group hover:-translate-y-1 transition-transform">
               <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
               </div>
               <div>
                 <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-1">Email</h3>
                 <p className="text-gray-500 text-sm">info@supunacademy.lk<br/>support@supunacademy.lk</p>
               </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-sm shadow-2xl border border-gray-100">
            <SinhalaText variant="h2" className="text-2xl font-bold text-navy mb-2">
               {language === 'si' ? 'පණිවිඩයක් යවන්න' : 'Send us a Message'}
            </SinhalaText>
            <p className="text-gray-400 text-xs mb-6">Have a question or need more information? Fill out the form below and we will get back to you as soon as possible.</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="+94 77 123 4567" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="johndoe@example.com" />
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy">Message</label>
                <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 px-3 py-2 text-sm rounded-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full md:w-auto px-8 py-3 mt-2 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:bg-blue-500 transition-all active:scale-95">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
