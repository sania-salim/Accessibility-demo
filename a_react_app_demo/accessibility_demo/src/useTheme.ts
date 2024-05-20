import { useEffect } from "react";
import { useState } from "react"


const useTheme = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            // default to device theme if not found in local storage
            //const deviceTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(`${window.matchMedia('(prefers-color-scheme: dark)')}`);
            localStorage.setItem('theme', `${window.matchMedia('(prefers-color-scheme: dark)')}`)
        }else{
            setTheme('light')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    }

    return (
        [theme, toggleTheme]
    )
}

export default useTheme;