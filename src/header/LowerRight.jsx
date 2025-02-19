import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const LowerRight = () => {
  const [isShown, setIsShown] = useState(false);

  // const handleClick = () => {
  //   setIsOpen((prev) => !prev);
  // };
  return (
    <div className="">
      <button
        className="flex items-center px-4 py-3 rounded-md duration-300 bg-brown text-light cursor-pointer gap-x-2 w-60 justify-between mt-2 transition-all relative dark:bg-third"
        onMouseEnter={() => setIsShown(true)}
        
      >
        <MenuIcon className="fill-light w-6 hover:fill-black" />
        <p>All Categories</p>
        {!isShown ? (
          <BiChevronDown className="fill-white transition-all" />
        ) : (
          <BiChevronUp className="fill-white transition-all" />
        )}
      </button>
      {isShown && (
        <div className="w-[240px]  hover:block absolute top-28 z-1000 py-4 px-3 rounded-lg bg-brown text-white dark:bg-third" 
        onMouseLeave={() => setIsShown(false)}
        >
          <ul className="cursor-pointer">
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Television
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Accessories
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              DVD players and recorders
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Home Theatres and Audio
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Cameras
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Car & vechicle electronics
            </li>
            <li className="hover:bg-silver hover:border-l-white hover:border-l-4 dark:hover:border-l-second rounded-r-lg py-3 px-1 transition-all dark:hover:bg-real">
              Wearable Technology
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LowerRight;
