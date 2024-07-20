import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Chapter = () => {
  const [chapterData, setChapterData] = useState([]);
  const [verseData, setVerseData] = useState([]);
  const { chapterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getChapterDescriptionEn();
    getVerseListEn();
  }, [ ])

  const getChapterDescriptionEn = async () => {
    const response = await fetch(`/json/english/chapters.json`);
    const data = await response.json();
    setChapterData(data);
  }

 const getVerseListEn = async () => {
    const response = await fetch(`/json/english/chapter_${chapterId}.json`);
    const data = await response.json();
    setVerseData(data.verses);
    // console.log(data);

  }

  return (

    <div>
      {chapterData.map((chapter) => {
        if (chapter.chapter == chapterId) {
          return (
            <div className=' px-4 m-10 py-8 text-center font-bold rounded-xl  ' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',

              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
              <h3 className=' uppercase text-orange-500 font-bold text-xl '>Chapter   {chapter.chapter}</h3>
              <h1 className='my-5 font-extrabold dark: text-white text-4xl'>{chapter.title}</h1>
              <p className='my-2  text-left dark:text-white text-paragraph leading-loose'>{chapter.description}</p>
            </div>
          )
        }
      }
      )}
      {
      verseData?.map((verse, index) => (
        <div key={index}  onClick={
                    () => {
                        navigate(`/chapter/${chapterId}/verse/${index+1}`) 
                    }}   className=' mx-10 my-5 p-5 text-center flex items-center  rounded-xl gap-8' style={{
          WebkitBackdropFilter: 'blur(3px) saturate(180%)',
          backdropFilter: 'blur(3px) saturate(180%)',
          backgroundColor: 'rgba(40, 28, 17, 0.63)',

          border: '1px solid rgba(255, 255, 255, 0.125)'
        }}>
          <p  className=' font-extrabold text-orange-500   text-2xl'>Verse {verse?.verse}</p>
              <h1 className='dark: text-white  font-bold text-lg'>{verse?.text}</h1>
        </div>
      
      ))}
  
    </div>
  )
}

export default Chapter