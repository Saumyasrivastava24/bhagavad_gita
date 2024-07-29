import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const ChapterList = () => {
  const { language } = useContext(ThemeContext);
  const navigate = useNavigate();
  const data = [
    { "chapterNumber": 1, "chapterTitle": "Arjuna Vishada Yoga" },
    { "chapterNumber": 2, "chapterTitle": "Sankhya Yoga" },
    { "chapterNumber": 3, "chapterTitle": "Karma Yoga" },
    { "chapterNumber": 4, "chapterTitle": "Jnana Yoga" },
    { "chapterNumber": 5, "chapterTitle": "Karma Vairagya Yoga" },
    { "chapterNumber": 6, "chapterTitle": "Abhyasa Yoga" },
    { "chapterNumber": 7, "chapterTitle": "Paramahamsa Vijnana Yoga" },
    { "chapterNumber": 8, "chapterTitle": "Aksara Brahma Yoga" },
    { "chapterNumber": 9, "chapterTitle": "Raja Vidya Raja Guhya Yoga" },
    { "chapterNumber": 10, "chapterTitle": "Vibhuti Yoga" },
    { "chapterNumber": 11, "chapterTitle": "Vishwarupa Darshana Yoga" },
    { "chapterNumber": 12, "chapterTitle": "Bhakti Yoga" },
    { "chapterNumber": 13, "chapterTitle": "Kshetra Kshetragna Vibhaga Yoga" },
    { "chapterNumber": 14, "chapterTitle": "Gunatraya Vibhaga Yoga" },
    { "chapterNumber": 15, "chapterTitle": "Purushottama Yoga" },
    { "chapterNumber": 16, "chapterTitle": "Daivasura Sampad Vibhaga Yoga" },
    { "chapterNumber": 17, "chapterTitle": "Shraddhatraya Vibhaga Yoga" },
    { "chapterNumber": 18, "chapterTitle": "Moksha Sannyasa Yoga" }
  ];

  const dataHi = [
    { "chapterNumber": 1, "chapterTitle": "अर्जुन विषाद योग" },
    { "chapterNumber": 2, "chapterTitle": "सांख्य योग" },
    { "chapterNumber": 3, "chapterTitle": "कर्म योग" },
    { "chapterNumber": 4, "chapterTitle": "ज्ञान योग" },
    { "chapterNumber": 5, "chapterTitle": "कर्म वैराग्य योग" },
    { "chapterNumber": 6, "chapterTitle": "अभ्यास योग" },
    { "chapterNumber": 7, "chapterTitle": "परमहंस विज्ञान योग" },
    { "chapterNumber": 8, "chapterTitle": "अक्षर ब्रह्म योग" },
    { "chapterNumber": 9, "chapterTitle": "राज विद्या राज गुह्य योग" },
    { "chapterNumber": 10, "chapterTitle": "विभूति योग" },
    { "chapterNumber": 11, "chapterTitle": "विश्वरूप दर्शन योग" },
    { "chapterNumber": 12, "chapterTitle": "भक्ति योग" },
    { "chapterNumber": 13, "chapterTitle": "क्षेत्र क्षेत्रज्ञ विभाग योग" },
    { "chapterNumber": 14, "chapterTitle": "गुणत्रय विभाग योग" },
    { "chapterNumber": 15, "chapterTitle": "पुरुषोत्तम योग" },
    { "chapterNumber": 16, "chapterTitle": "दैवासुर सम्पद विभाग योग" },
    { "chapterNumber": 17, "chapterTitle": "श्रद्धात्रय विभाग योग" },
    { "chapterNumber": 18, "chapterTitle": "मोक्ष संन्यास योग" }
  ];

  return (
    <div className="px-2 md:px-4">
      {language === 'en' && data.map((chapter, index) => (
        <div
          onClick={() => navigate(`/chapter/${chapter.chapterNumber}`)}
          key={index}
          className='cursor-pointer p-3 md:p-4 mt-4 md:mt-6 font-bold rounded-xl flex flex-col md:flex-row gap-4 md:gap-8 justify-start items-start md:items-center'
          style={{
            WebkitBackdropFilter: 'blur(3px) saturate(180%)',
            backdropFilter: 'blur(3px) saturate(180%)',
            backgroundColor: 'rgba(40, 28, 17, 0.63)',
            border: '1px solid rgba(255, 255, 255, 0.125)'
          }}
        >
          <h1 className='uppercase text-orange-500 font-bold text-lg md:text-xl'>Chapter {chapter.chapterNumber}</h1>
          <p className='text-white text-base md:text-xl leading-loose'>{chapter.chapterTitle}</p>
        </div>
      ))}
      {language === 'hi' && dataHi.map((chapter, index) => (
        <div
          onClick={() => navigate(`/chapter/${chapter.chapterNumber}`)}
          key={index}
          className='cursor-pointer p-3 md:p-4 mt-4 md:mt-6 font-bold rounded-xl flex flex-col md:flex-row gap-4 md:gap-8 justify-start items-start md:items-center'
          style={{
            WebkitBackdropFilter: 'blur(3px) saturate(180%)',
            backdropFilter: 'blur(3px) saturate(180%)',
            backgroundColor: 'rgba(40, 28, 17, 0.63)',
            border: '1px solid rgba(255, 255, 255, 0.125)'
          }}
        >
          <h1 className='uppercase text-orange-500 font-bold text-lg md:text-xl'>Chapter {chapter.chapterNumber}</h1>
          <p className='text-white text-base md:text-xl leading-loose'>{chapter.chapterTitle}</p>
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
