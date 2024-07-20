import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'
import Chapter from './components/Chapter';
import Quotes from './components/Quotes';
import ChapterList from './components/ChapterList';
import VerseData from './components/VerseData';

const App = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);
  return (
     <Router>
    <div className='h-screen bg-fixed w-full bg-cover z-10  flex flex-col items-center ' style={{ backgroundImage: isDarkMode? "url(/bg_img.webp)":"url(/bg_img.webp)"  }}>
      <Navbar className='' setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className=' overflow-y-auto '>

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/chapter" element={<ChapterList />} />
          <Route path="/chapter/:chapterId" element={<Chapter />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/chapter/:chapterId/verse/:verseId" element={<VerseData />} />

        </Routes>
      </div>
    </div>
     </Router>
  )
}

export default App