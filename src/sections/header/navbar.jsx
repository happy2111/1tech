import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import SearchBar from "../../components/SearchBar";
import logo2 from "../../assets/logo2.png";

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

  const [initial, setState] = useState(false);
  function onClickHandler() {
    setState(!initial);
  }

  return (
    <Disclosure
      as="nav"
      className="md:bg-transparent bg-[#02c37e] md:px-8 lg:p-0"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-10 lg:px-8c bg-[#02c37e] rounded-br=full rounded-b-full ">
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
                src={logo2}
                className={` absolute left-1 rounded-full overflow-hidden border-[black]  bg-white ${
                  smallLogo
                    ? "md:w-[55px] md:h-[55px] lg:w-[55px] lg:h-[55px] border-[1px] md:p-1 md:top-[3px]"
                    : "border-[1px] p-2 md:w-[90px] md:h-[90px] lg:w-[111.6px] lg:h-[111.6px] w-[50px] h-[50px]"
                }`}
              />
            </div>
            {/* Logo-end  */}
            {/* search  */}
            <div>
              <SearchBar />
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
                      "rounded-md lg:px-3 md:px-2  py-2 lg:text-lg text-nowrap md:text-[13px] font-medium cursor-pointer	"
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
