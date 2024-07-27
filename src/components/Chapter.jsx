import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const Chapter = () => {
  const [chapterData, setChapterData] = useState([]);
  const [verseData, setVerseData] = useState([]);
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const { language } = useContext(ThemeContext);


  useEffect(() => {
    getChapterDescriptionEn();
    getVerseListEn();
  }, [language]);

  const getChapterDescriptionEn = async () => {
    if(language === 'en') {
      const response = await fetch(`/json/english/chapters.json`);
      const data = await response.json();
      setChapterData(data);
    }
    else{
      const response = await fetch(`/json/hindi/chapters.json`);
      const data = await response.json();
      setChapterData(data);
    }
  };

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
    }
  };

  return (
    <div className="px-2 md:px-4">
      {chapterData.map((chapter) => {
        if (chapter.chapter == chapterId) {
          return (
            <div
              key={chapter.chapter}
              className='m-2 md:m-4 lg:m-10 py-4 md:py-6 lg:py-8 text-center font-bold rounded-xl'
              style={{
                WebkitBackdropFilter: 'blur(3px) saturate(180%)',
                backdropFilter: 'blur(3px) saturate(180%)',
                backgroundColor: 'rgba(40, 28, 17, 0.63)',
                border: '1px solid rgba(255, 255, 255, 0.125)',
              }}
            >
              <h3 className='uppercase text-orange-500 font-bold text-base md:text-lg lg:text-xl'>Chapter {chapter.chapter}</h3>
              <h1 className='my-3 md:my-5 font-extrabold text-white text-xl md:text-2xl lg:text-4xl'>{chapter.title}</h1>
              <p className='my-2 text-left text-white text-md  md:text-lg p-3 lg:text-paragraph leading-loose'>{chapter.description}</p>
            </div>
          );
        }
      })}
      {verseData?.map((verse, index) => (
        <div
          key={index}
          onClick={() => navigate(`/chapter/${chapterId}/verse/${index + 1}`)}
          className='mx-2 md:mx-4 lg:mx-10 my-2 md:my-4 lg:my-5 p-3 md:p-4 lg:p-5 text-center flex flex-col md:flex-row items-center rounded-xl gap-4 md:gap-8'
          style={{
            WebkitBackdropFilter: 'blur(3px) saturate(180%)',
            backdropFilter: 'blur(3px) saturate(180%)',
            backgroundColor: 'rgba(40, 28, 17, 0.63)',
            border: '1px solid rgba(255, 255, 255, 0.125)',
          }}
        >
          <p className='font-extrabold text-orange-500 text-base md:text-lg lg:text-2xl'>Verse {verse?.verse}</p>
          <h1 className='text-white font-bold text-md md:text-sm lg:text-lg'>{verse?.text}</h1>
        </div>
      ))}
    </div>
  );
}

export default Chapter;
