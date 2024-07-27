import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const VerseData = () => {
  const [verseData, setVerseData] = useState([]);
  const { chapterId, verseId } = useParams();
  const { language } = useContext(ThemeContext);


  useEffect(() => {
    getVerseListEn();
  }, [language]);

  const getVerseListEn = async () => {
    if(language === 'en') {
      const response = await fetch(`/json/english/chapter_${chapterId}.json`);
      const data = await response.json();
      setVerseData(data.verses);
    }
    else{
      const response = await fetch(`/json/hindi/chapter_hindi${chapterId}.json`);
      const data = await response.json();
      setVerseData(data.verses);
    };
    }

  return (
    <div className='flex flex-col items-center'>
      {verseData?.map((verse, index) => {
        if (verse.verse == verseId) {
          return (
            <div key={index} className='px-4 m-4 md:m-10 py-6 text-center font-bold rounded-xl flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',
              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
              <h1 className='uppercase m-4 font-extrabold text-orange-500 text-xl md:text-3xl'>Chapter {chapterId}.{verse.verse}</h1>
              <p className='text-white font-bold text-base md:text-xl leading-loose w-full md:w-[70vw]'>{verse.text}</p>
              <p className='text-white font-bold text-base md:text-xl leading-loose w-full md:w-[70vw]'>{verse.pronunciation}</p>
            </div>
          );
        }
      })}
      {verseData?.map((verse, index) => {
        if (verse.verse == verseId) {
          return (
            <div key={index} className='px-4 m-4 md:m-10 py-6 text-center font-bold rounded-xl flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',
              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
              <h1 className='uppercase m-4 font-extrabold text-orange-500 text-xl md:text-3xl'>Translation</h1>
              <p className='text-white font-bold text-base md:text-xl leading-loose w-full md:w-[70vw]'>{verse.translation}</p>
            </div>
          );
        }
      })}
      {verseData?.map((verse, index) => {
        if (verse.verse == verseId) {
          return (
            <div key={index} className='px-4 m-4 md:m-10 py-6 text-center font-bold rounded-xl flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',
              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
              <h1 className='uppercase m-4 font-extrabold text-orange-500 text-xl md:text-3xl'>Commentary</h1>
              <p className='text-white font-bold text-base md:text-xl leading-loose w-full md:w-[70vw]'>{verse.commentary}</p>
            </div>
          );
        }
      })}
    </div>
  );
}

export default VerseData;
