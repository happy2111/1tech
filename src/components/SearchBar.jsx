import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import './Search.css'
import { useEffect, useRef } from 'react';

function SearchBar({ setResults }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch('https://onetec.pythonanywhere.com/articles/')
            .then((response) => response.json())
            .then((json) => {
                const results = json.results.filter((user) => {
                    return value && user && user.title && user.title.toLowerCase().includes(value);
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        const lowerCaseValue = value.toLowerCase(); // Convert to lowercase
        setInput(lowerCaseValue); // Set lowercase value in input state
        fetchData(lowerCaseValue); // Fetch data with lowercase input
    };

    const searchInputRef = useRef(null);
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

    // Update placeholder text based on window width
    const updateScreenSize = () => {
        setIsWideScreen(window.innerWidth > 1024);
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <input
                ref={searchInputRef}
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                className="focus:outline-none lg:w-[456px] border-none"
                type="text"
                name="search" 
                placeholder={isWideScreen ? 'Qidirish... (Ctrl + K)' : 'Qidirish...'} 
            />
            <button className="flex">
                <a href=""><CiSearch /></a>
            </button>
        </>
    );
}

export default SearchBar