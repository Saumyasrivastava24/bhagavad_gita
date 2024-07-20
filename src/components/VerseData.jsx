import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const VerseData = () => {
    const [verseData, setVerseData] = useState([]);
  const { chapterId,verseId } = useParams();

  useEffect(() => {
    getVerseListEn();
  }, [ ])

    const getVerseListEn = async () => {
    const response = await fetch(`/json/english/chapter_${chapterId}.json`);
    const data = await response.json();
    setVerseData(data.verses);
   
    }
  return (
    
    <div className=' flex flex-col  ' >
       {
            verseData?.map((verse, index) => {
                if(verse.verse== verseId){
                    return(
                        <div key={index} className='px-4 m-10 py-6 text-center font-bold rounded-xl justify-center items-center flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',

              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
                   <h1 className=' uppercase m-4 font-extrabold dark: text-orange-500 text-3xl'>Chapter {chapterId}.{verse.verse}</h1>
                   <p className='dark: text-white  font-bold text-xl leading-loose w-[40vw]'>{verse.text}</p>     
                   <p className='dark: text-white  font-bold leading-loose text-xl w-[50vw]'>{verse.pronunciation}</p>  
                </div>
                    )
        }}
        )}
             {
            verseData?.map((verse, index) => {
                if(verse.verse== verseId){
                    return(
                        <div key={index} className='px-4 m-10 py-6 text-center font-bold rounded-xl justify-center items-center flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',

              border: '1px solid rgba(255, 255, 255, 0.125)'  
            }}>
                    <h1 className='uppercase m-4 font-extrabold dark: text-orange-500 text-3xl'>Translation</h1>
                    <p className='dark: text-white  font-bold text-xl leading-loose w-[70vw]'>{verse.translation}</p>
                </div>
                    )

             } 
        })}
              {
            verseData?.map((verse, index) => {
                if(verse.verse== verseId){
                    return(
                        <div key={index} className='px-4 m-10 py-6 text-center font-bold rounded-xl justify-center items-center flex flex-col gap-2' style={{
              WebkitBackdropFilter: 'blur(3px) saturate(180%)',
              backdropFilter: 'blur(3px) saturate(180%)',
              backgroundColor: 'rgba(40, 28, 17, 0.63)',
              border: '1px solid rgba(255, 255, 255, 0.125)'
            }}>
                    <h1 className='uppercase m-4 font-extrabold dark: text-orange-500 text-3xl'>commentary</h1>
                    <p className='dark: text-white  font-bold text-xl leading-loose w-[70vw]'>{verse.commentary}</p>
                </div>
                    )

              }
        }
        )}
                

                </div>
  )
}

export default VerseData