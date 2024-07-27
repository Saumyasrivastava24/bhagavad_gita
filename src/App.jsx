import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Chapter from './components/Chapter';
import ChapterList from './components/ChapterList';
import VerseData from './components/VerseData';
import { ThemeContext } from './context/ThemeProvider';

const App = () => {
  const { theme, setTheme} = useContext(ThemeContext);
  return (

    <Router >
      <div className={`${theme == 'dark' ? 'grayscale' : ''} h-screen bg-fixed w-full bg-cover md:bg-cover z-10  flex flex-col items-center`} style={{ backgroundImage: "url(/bg_img.webp)" }}>
        <Navbar />
        <div className=' overflow-y-auto '>

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/chapter" element={<ChapterList />} />
            <Route path="/chapter/:chapterId" element={<Chapter />} />
            <Route path="/chapter/:chapterId/verse/:verseId" element={<VerseData />} />

          </Routes>
        </div>
      </div>
    </Router >

  )
}

export default App