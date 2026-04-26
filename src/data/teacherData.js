import supunImg from '../assets/images/supun-hero.png';
import teacher1Img from '../assets/images/teacher1.png';
import teacher2Img from '../assets/images/teacher2.png';
import teacher3Img from '../assets/images/teacher3.png';
import teacher4Img from '../assets/images/teacher4.png';
import teacher5Img from '../assets/images/teacher5.png';
import teacher6Img from '../assets/images/teacher6.png';
import teacher7Img from '../assets/images/teacher7.png';

export const teachers = [
  { 
    id: 'science', 
    name: 'සුපුන් රත්නායක', 
    credentials: 'BSc (Hons) in Biological Science, Senior Science Consultant', 
    image: supunImg, 
    grade_category: 'all', 
    grades: 'GRADE 6 - 11', 
    subjects: ['විද්‍යාව'], 
    color: 'bg-blue-600', 
    hoverColor: 'group-hover:text-blue-600',
    bgImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000' 
  },
  { 
    id: 'maths', 
    name: 'නිල්මිණි පෙරේරා', 
    credentials: 'BSc in Physical Science (University of Peradeniya)', 
    image: teacher1Img, 
    grade_category: '10-11', 
    grades: 'GRADE 10 - 11', 
    subjects: ['ගණිතය'], 
    color: 'bg-[#10b981]', 
    hoverColor: 'group-hover:text-[#10b981]',
    bgImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000&blur=50'
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
    hoverColor: 'group-hover:text-[#f6921e]',
    bgImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    id: 'sinhala', 
    name: 'ප්‍රසාදිනී මධුසංඛ', 
    credentials: 'BA in Sinhala (University of Kelaniya), Media Consultant', 
    image: teacher3Img, 
    grade_category: 'all', 
    grades: 'ALL GRADES', 
    subjects: ['සිංහල'], 
    color: 'bg-[#FFD700]', 
    hoverColor: 'group-hover:text-[#FFD700]',
    bgImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000&blur=50'
  },
  { 
    id: 'commerce', 
    name: 'ප්‍රසාද් කුමාර', 
    credentials: 'BCom (Special), Chartered Accountant (Finalist)', 
    image: teacher4Img, 
    grade_category: '10-11', 
    grades: 'GRADE 10 - 11', 
    subjects: ['වාණිජ්‍යය'], 
    color: 'bg-[#1b5e20]', 
    hoverColor: 'group-hover:text-[#1b5e20]',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000&blur=50'
  },
  { 
    id: 'biology', 
    name: 'දමිත් ලියනගේ', 
    credentials: 'BA in Archeology (Special), University of Peradeniya', 
    image: teacher5Img, 
    grade_category: '12-13', 
    grades: 'GRADE 12 - 13', 
    subjects: ['ජීව විද්‍යාව'], 
    color: 'bg-slate-700', 
    hoverColor: 'group-hover:text-slate-700',
    bgImage: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2000'
  },
  { 
    id: 'english-lit', 
    name: 'ඉමේෂා පෙරේරා', 
    credentials: 'MA in Linguistics, BA in English Lit (University of Kelaniya)', 
    image: teacher6Img, 
    grade_category: '12-13', 
    grades: 'GRADE 12 - 13', 
    subjects: ['සාහිත්‍යය'], 
    color: 'bg-purple-900', 
    hoverColor: 'group-hover:text-purple-900',
    bgImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000&blur=50'
  },
  { 
    id: 'tamil', 
    name: 'සෙල්වරාජ් කුමාර්', 
    credentials: 'BA in Tamil Language & Culture (Eastern University)', 
    image: teacher7Img, 
    grade_category: 'all', 
    grades: 'ALL GRADES', 
    subjects: ['දෙමළ'], 
    color: 'bg-red-900', 
    hoverColor: 'group-hover:text-red-900',
    bgImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=2000'
  }
];
