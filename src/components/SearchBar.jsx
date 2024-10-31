import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import './Search.css'

function SearchBar({ setResults }) {
    const [ input, setInput ] = useState("")

    const fetchData = (value) => {
        fetch('https://onetec.pythonanywhere.com/articles/')
        .then((response) => response.json())
        .then((json) => {
            const results = json.results.filter((user) => {
                // console.log(user.title);
                return value && user && user.title && user.title.toLowerCase().includes(value)
            });
            // console.log(results);
            setResults(results)
        })
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }
    
  return (
    <>
        <input value={input} onChange={(e => handleChange(e.target.value))} className='focus:outline-none lg:w-[456px] border-none' type="text"  name="search" placeholder='Qidiruv...' /> 
        <button><a href=""><CiSearch /></a></button>   
    </>
  )
}

export default SearchBar