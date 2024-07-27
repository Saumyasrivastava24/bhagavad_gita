import React, { useContext, useState } from 'react';
import { DropdownIcon, LanguageIcon, MoonIcon, SunIcon } from './Icons';
import { ThemeContext } from '../context/ThemeProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { theme, setTheme , setLanguage } = useContext(ThemeContext);
    const [isdropdown, setisDropdown] = useState(false);

    return (
        <div className='w-full flex justify-between items-center px-4 py-2' style={{
            WebkitBackdropFilter: 'blur(3px) saturate(180%)',
            backdropFilter: 'blur(3px) saturate(180%)',
            backgroundColor: 'rgba(40, 28, 17, 0.63)',
            border: '1px solid rgba(255, 255, 255, 0.125)'
        }}>
            <div className='flex items-center'>
                <img src="/book_img.png" className='w-10 md:w-14' alt="Book" />
                <Link to={'/'} className='animate-pulse text-xl md:text-4xl font-bold cursor-pointer text-white'>Bhagavad Gita</Link>
            </div>
            <div className='hidden sm:flex gap-7  md:mr-60'>
           
                <Link to={'/chapter'} className='h-full flex justify-center items-center text-white font-bold md:text-2xl gap-2'>Chapters
                </Link>
                <Link to={'/'} className='h-full flex justify-center items-center text-white font-bold md:text-2xl'>About Gita</Link>
            </div>
            <div className='flex justify-center items-center h-full gap-2'>
                {theme === 'dark' ? (
                    <SunIcon onClick={() => setTheme('light')} className='w-5 cursor-pointer object-contain' />
                ) : (
                    <MoonIcon onClick={() => setTheme('dark')} className='w-5 cursor-pointer  object-contain' />
                )}
                <div className='relative w-10'>
                    {isdropdown ? (<div className='absolute z-50 -top-3 leading-tight'>
                        <DropdownIcon onClick={()=>setisDropdown(false)} className='cursor-pointer ' />
                        <p onClick={() => {
                            setLanguage('hi')
                            setisDropdown(false)
                        }} className='text-white  rounded py-1 px-3 font-bold cursor-pointer  bg-[rgba(36,22,14,0.72)]'>Hi</p>
                        <p onClick={() => {
                            setLanguage('en')
                            setisDropdown(false)
                        }} className='text-white  rounded py-1 px-3 font-bold cursor-pointer bg-[rgba(36,22,14,0.72)]'>En</p>
                    </div>) : (<LanguageIcon onClick={()=>setisDropdown(true)} className='cursor-pointer  ' />)} 

                </div>
            </div>
        </div>
    );
}

export default Navbar;
