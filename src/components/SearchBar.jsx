import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import "./Search.css";
import { useEffect, useRef } from "react";
import { div, span } from "framer-motion/client";
import SearchResultList from "./SearchResultList";

function SearchBar() {
  const [input, setInput] = useState("");
  const url = `https://onetec.pythonanywhere.com/articles/?search=${input}`;
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAsync = async () => {
    if (input.trim() === "") {
      setSearchData([]);
      setIsLoading(false)
      return;
    }
    setIsLoading(true)
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error faching data");
      const data = await response.json();
      setSearchData(data);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchAsync();
    }, 50);
    return () => clearTimeout(timeout);
  }, [input]);

  const handleChange = (value) => {
    const lowerCaseValue = value.toLowerCase();
    setInput(lowerCaseValue);
  };

  const searchInputRef = useRef(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1024);

  // Update placeholder text based on window width
  const updateScreenSize = () => {
    setIsWideScreen(window.innerWidth > 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [isTableVisible, setTableVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setTableVisible(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const handleFocus = () => setTableVisible(true);

  return (
    <div
      className="relative  lg:ml-[25%] md:ml-[10%] flex flex-col"
      ref={containerRef}
    >
      <div className="rounded-full lg:w-[450px] md:w-[250px] w-[230px] h-[39.8px] px-5 bg-white overflow-hidden flex items-center">
        <input
          ref={searchInputRef}
          onFocus={handleFocus}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="focus:outline-none w-full border-none"
          type="text"
          name="search"
          placeholder={isWideScreen ? "Qidirish... (Ctrl + K)" : "Qidirish..."}
        />
        <div>
          {
            isLoading  ? (
              <svg viewBox="0 0 16 16" height="48" width="48" class="windows-loading-spinner">
                <circle r="7px" cy="8px" cx="8px"></circle>
              </svg>
            ) : (
              <span></span>
            )
          }
        </div>
      </div>
      <div className="">
        <SearchResultList
          isTableVisible={isTableVisible}
          searchData={searchData}
        />
      </div>
    </div>
  );
}

export default SearchBar;
