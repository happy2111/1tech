import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'
 
const navigation = [
  { name: 'Home', href: 'home', current: true },
  { name: 'About', href: 'about', current: false },
  { name: 'Contact', href: 'footer', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [search, setSearch] = useState('')
  

  const [initial, setState] = useState(false)
  function onClickHandler() {
    setState(!initial)
  }


  const [ data, setData ] = useState([])

  useEffect(() => {
    fetch('https://onetec.pythonanywhere.com/articles/')
      .then((res) => res.json())
      .then((data) =>  {
        setData(data.results)
      })
  },[])

  // console.log(data);
  
  

  return (
    <Disclosure as="nav" className="md:bg-transparent bg-[#02c37e] md:px-8 lg:p-0">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8c bg-[#02c37e] rounded-full">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton onClick={onClickHandler} className=" group relative inline-flex items-center justify-center p-2 text-black hover:bg-[#16624e94] hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  ">
            {/* Logo  */}
            <div className="flex flex-shrink-0 items-center md:static  absolute right-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            {/* Logo-end  */}
            {/* search  */}
            <div className='rounded-full md:ml-[69px] h-[39.8px] px-5 bg-white overflow-hidden  flex items-center '>
                <input onChange={(e) => setSearch(e.target.value)} className='focus:outline-none lg:w-[456px] border-none' type="text"  name="search" placeholder='Qidiruv...' />
                <button><a href=""><CiSearch /></a></button>   
            </div>
            {/* search-ends  */}
            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    
                    key={item.name}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    offset={10}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      'text-black hover:bg-[#16624e94] hover:text-white',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                    
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            




          </div>
           
        </div>
      </div>

    
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              onClick={onClickHandler}
              key={item.name}
              as="Link"
              to={item.href}
              spy={true}
              smooth={true}
              offset={0}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                'text-gray-300 hover:bg-[#16624e94] hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
       
    </Disclosure>
  )
}
