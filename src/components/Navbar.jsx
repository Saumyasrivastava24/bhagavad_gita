import React from 'react'
import { MoonIcon, SunIcon } from './Icons'

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
    return (
        <div className=' w-full  flex justify-between items-center  px-4' style={{
            WebkitBackdropFilter: 'blur(3px) saturate(180%)',
            backdropFilter: 'blur(3px) saturate(180%)',
            backgroundColor: 'rgba(40, 28, 17, 0.63)',
            border: '1px solid rgba(255, 255, 255, 0.125)'
        }}>
            <div className='flex  items-center  '>
                <img src="/book_img.png" className='w-14 ' alt="" />
                <h1 className='animate-pulse text-4xl font-bold cursor-pointer  text-white'>Bhagavad Gita</h1>
            </div>
            <div className='flex gap-7 '>

                <button className='text-white font-medium flex rounded-2xl w-[200px] h-10 outline items-center gap-2'>
                    <svg className='ml-3' width="20px" height="20px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10z" fill="#fff" /></svg>
                    Search </button>
                <button className=' h-full flex justify-center items-center text-white font-light text-2xl gap-2'>Chapters
                    <svg className='flex justify-center items-center mt-2 transform transition-transform duration-300 hover:scale-125' fill="#fff" width="20px" viewBox="0 -6 524 524" xmlns="http://www.w3.org/2000/svg" ><title>down</title><path d="M64 191L98 157 262 320 426 157 460 191 262 387 64 191Z" /></svg>
                </button>
                <button className=' h-full flex justify-center items-center text-white font-light text-2xl'>Quotes</button>
                <button className=' h-full flex justify-center items-center text-white font-light text-2xl'>About Gita</button>
            </div>
            <div className=' flex justify-center items-center  h-full gap-2' >
                {isDarkMode ? <SunIcon onClick={() => setIsDarkMode(false)} className=' w-5 object-contain  ' />
                    : <MoonIcon onClick={() => setIsDarkMode(true)} className='  w-5 object-contain ' />}
                    <svg className='' fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M21.05566,12h-2a1,1,0,0,0,0,2v2H17.8714a2.96481,2.96481,0,0,0,.18426-1A2.99955,2.99955,0,0,0,12.458,13.50049a.99992.99992,0,1,0,1.73242.999A1.0009,1.0009,0,0,1,15.05566,14a1,1,0,0,1,0,2,1,1,0,0,0,0,2,1,1,0,1,1,0,2,1.0009,1.0009,0,0,1-.86523-.49951.99992.99992,0,1,0-1.73242.999A2.99955,2.99955,0,0,0,18.05566,19a2.96481,2.96481,0,0,0-.18426-1h1.18426v3a1,1,0,0,0,2,0V14a1,1,0,1,0,0-2ZM9.08594,11.24268a.99963.99963,0,1,0,1.93945-.48536L9.26855,3.72754a2.28044,2.28044,0,0,0-4.4248,0L3.08594,10.75732a.99963.99963,0,1,0,1.93945.48536L5.58618,9H8.52545ZM6.0863,7l.6969-2.78711a.29222.29222,0,0,1,.5459,0L8.02563,7Zm7.96936,0h1a1.001,1.001,0,0,1,1,1V9a1,1,0,0,0,2,0V8a3.00328,3.00328,0,0,0-3-3h-1a1,1,0,0,0,0,2Zm-4,9h-1a1.001,1.001,0,0,1-1-1V14a1,1,0,0,0-2,0v1a3.00328,3.00328,0,0,0,3,3h1a1,1,0,0,0,0-2Z" /></svg>
            </div>
        </div>
    )
}

export default Navbar