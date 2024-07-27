import React, { createContext, useState } from 'react'

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('en');

    return (
        <ThemeContext.Provider value={{ theme, setTheme , language , setLanguage}}>
            {children}
        </ThemeContext.Provider>
    )
}

export  {ThemeProvider, ThemeContext};