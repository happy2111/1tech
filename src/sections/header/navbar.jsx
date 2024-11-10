import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import SearchBar from "../../components/SearchBar";
import SearchResultList from "../../components/SearchResultList";
import logo from "../../assets/logo.png";

const navigation = [
  { name: "Bosh sahifa", href: "home", current: true },
  { name: "Batafsil", href: "about", current: false },
  { name: "Bog’lanish", href: "footer", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [smallLogo, setSmallLogo] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSmallLogo(true);
      } else {
        setSmallLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [search, setSearch] = useState("");

  const [initial, setState] = useState(false);
  function onClickHandler() {
    setState(!initial);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://onetec.pythonanywhere.com/articles/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, []);

  // console.log(data);

  const [results, setResults] = useState([]);

  return (
    <Disclosure
      as="nav"
      className="md:bg-transparent bg-[#02c37e] md:px-8 lg:p-0"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8c bg-[#02c37e] rounded-full">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton
              onClick={onClickHandler}
              className=" group relative inline-flex items-center justify-center p-2 text-black hover:bg-[#16624e94] hover:text-white focus:outline-none focus:ring-0 focus:ring-inset focus:ring-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  ">
            {/* Logo  */}
            <div
              className={`navbar__logo flex flex-col flex-shrink-0 items-center md:static w-[111px]  absolute right-0 ${
                smallLogo ? "after:content-none" : ""
              }`}
            >
              <img
                alt="Your Company"
                src={logo}
                className={` absolute left-1 rounded-full overflow-hidden border-[black]  bg-white ${
                  smallLogo
                    ? "md:w-[55px] md:h-[55px] lg:w-[55px] lg:h-[55px] border-[1px] md:p-1 md:top-[3px]"
                    : "border-2 p-4 md:w-[90px] md:h-[90px] lg:w-[111.6px] lg:h-[111.6px] w-[50px] h-[50px]"
                }`}
              />
            </div>
            {/* Logo-end  */}
            {/* search  */}
            <div className="relative rounded-full md:ml-[30px] h-[39.8px] px-5 bg-white overflow-hidden lg:ml-[69px] mr-[15px]  flex items-center ">
              <SearchBar setResults={setResults} />
              {/* <input onChange={(e) => setSearch(e.target.value)} className='focus:outline-none lg:w-[456px] border-none' type="text"  name="search" placeholder='Qidiruv...' /> */}
              {/* <button><a href=""><CiSearch /></a></button>    */}
            </div>
            <div>
              <SearchResultList results={results} />
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
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      "text-black hover:bg-[#16624e94] hover:text-white cursor-pointer	",
                      "rounded-md px-3 py-2 text-lg font-medium cursor-pointer	"
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
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                "text-gray-300 hover:bg-[#16624e94] hover:text-white cursor-pointer	",
                "block rounded-md px-3 py-2 text-base font-medium cursor-pointer	"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
