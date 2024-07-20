import React from 'react'
import { useNavigate } from 'react-router-dom'

const ChapterList = () => {
    const navigate = useNavigate();
    const data = [
        {
            "chapterNumber": 1,
            "chapterTitle": "Arjuna Vishada Yoga"
        },
        {
            "chapterNumber": 2,
            "chapterTitle": "Sankhya Yoga"
        },
        {
            "chapterNumber": 3,
            "chapterTitle": "Karma Yoga"
        },
        {
            "chapterNumber": 4,
            "chapterTitle": "Jnana Yoga"
        },
        {
            "chapterNumber": 5,
            "chapterTitle": "Karma Vairagya Yoga"
        },
        {
            "chapterNumber": 6,
            "chapterTitle": "Abhyasa Yoga"
        },
        {
            "chapterNumber": 7,
            "chapterTitle": "Paramahamsa Vijnana Yoga"
        },
        {
            "chapterNumber": 8,
            "chapterTitle": "Aksara Brahma Yoga"
        },
        {
            "chapterNumber": 9,
            "chapterTitle": "Raja Vidya Raja Guhya Yoga"
        },
        {
            "chapterNumber": 10,
            "chapterTitle": "Vibhuti Yoga"
        },
        {
            "chapterNumber": 11,
            "chapterTitle": "Vishwarupa Darshana Yoga"
        },
        {
            "chapterNumber": 12,
            "chapterTitle": "Bhakti Yoga"
        },
        {
            "chapterNumber": 13,
            "chapterTitle": "Kshetra Kshetragna Vibhaga Yoga"
        },
        {
            "chapterNumber": 14,
            "chapterTitle": "Gunatraya Vibhaga Yoga"
        },
        {
            "chapterNumber": 15,
            "chapterTitle": "Purushottama Yoga"
        },
        {
            "chapterNumber": 16,
            "chapterTitle": "Daivasura Sampad Vibhaga Yoga"
        },
        {
            "chapterNumber": 17,
            "chapterTitle": "Shraddhatraya Vibhaga Yoga"
        },
        {
            "chapterNumber": 18,
            "chapterTitle": "Moksha Sannyasa Yoga"
        }
    ]

    return (
        <div >
            {data.map((chapter, index) => (
                <div  onClick={
                    () => {
                        navigate(`/chapter/${chapter.chapterNumber}`) 
                    }}
                    key={index} className='cursor-pointer p-4 mt-6  font-bold rounded-xl flex gap-8 justify-start  items-center ' style={{
                        WebkitBackdropFilter: 'blur(3px) saturate(180%)',
                        backdropFilter: 'blur(3px) saturate(180%)',
                        backgroundColor: 'rgba(40, 28, 17, 0.63)',

                        border: '1px solid rgba(255, 255, 255, 0.125)'
                    }}>
                    <h1 className='uppercase text-orange-500 font-bold text-xl '>Chapter {chapter.chapterNumber}</h1>
                    <p className='dark:text-white text-xl text-paragraph leading-loose'>{chapter.chapterTitle}</p>
                </div>
            ))}




        </div>
    )
}

export default ChapterList