import React from 'react'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'
import './Search.css'

function SearchResultList({results}) {
  return (
    <div className=''>
        <div id='search_list' className='flex flex-col absolute z-50 bg-white  w-[270px] lg:w-[505px] max-h-[220px] overflow-y-scroll top-[55px] lg:left-[180px] md:left-[130px] left-[15%]  rounded-3xl shadow-lg'>
        {/* <SearchResults /> */}
        {
            results.map((item, index) => {
                return (
                    <div key={index}>
                        <Link className='link_search mt-4 p-3 border-b-2 border-[#f3f3f3] block text-lg' to={`../card/${item.id}`}>{item.title}</Link>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default SearchResultList