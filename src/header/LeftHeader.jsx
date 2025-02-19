import React from "react";
import { FaCartPlus, FaDark } from "react-icons/fa";
import { ContactIcon } from "./ContactIcon";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";


import { DarkMode } from "./DarkMode";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const LeftHeader = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const Navigate = useNavigate();

  // const darkmode = () => {
  //   let bodyStyle = document.body.style;
  //   if (bodyStyle.backgroundColor === "black") {
  //     bodyStyle.backgroundColor = "white";
  //     bodyStyle.color = "white";
  //   } else {
  //     bodyStyle.backgroundColor = "black";
  //     bodyStyle.color = "white";
  //   }
  // };

  // const handleClick = () => {
  //   setOpen((prev) => !prev);
  // };
  function darkModeHandler() {
    setDark(!dark);
    document.body.classList.toggle("dark")
  }
  return (
    <div className="flex items-center gap-8 justify-end relative ">
      <button
        className="flex items-center gap-1  hover:text-purple cursor-pointer w-64 justify-between text-light bg-brown px-4 py-2 rounded-md hover:scale-105 transition-all dark:bg-third"
        onMouseEnter={() => setOpen(true)}
      >
        <ContactIcon className="fill-light w-8" />
        Account
        {!open ? (
          <BiChevronDown className="fill-light w-8" />
        ) : (
          <BiChevronUp className="fill-light w-8" />
        )}
      </button>

      {open && (
        <ul
          className="w-[256px]  hover:block z-1000 py-4 px-3 rounded-lg bg-brown text-white absolute top-10 left-0 z-99999 transition-all dark:bg-third"
          onMouseLeave={() => setOpen(false)}
        >
          <div className="flex flex-col ">
            <li>
              <button className="bg-brown-orange hover:scale-105 rounded-md transition-all block w-full py-2 px-3 dark:bg-real" onClick={() => Navigate("/Login")}>
                Sign in
              </button>
            </li>
            <li>
              <button className="bg-silver hover:scale-105 block rounded-md transition-all w-full py-2 px-3 mt-1 dark:bg-second" onClick={() => Navigate("/Register")}>
                Register
              </button>
            </li>
          </div>

          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 mt-2 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            My Order
          </li>
          <li className="hover:bg-silver hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            Message Center
          </li>
          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            Payment
          </li>
          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            Wishlist
          </li>
          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            My Account
          </li>
          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px-1 cursor-pointer dark:hover:border-l-4 dark:hover:border-l-second dark:hover:bg-real">
            Settings
          </li>
          <li className="hover:bg-silver transition-all hover:border-l-white hover:border-l-4 rounded-r-lg py-3 px- mb-2 cursor-pointer dark:hover:bg-real dark:hover:border-l-4 dark:hover:border-l-second">
            Seller Log in
          </li>
          <li>
            <button className="bg-brown-orange hover:scale-105 rounded-md block w-full py-2 px-3 dark:bg-real">
              Help
            </button>
          </li>
        </ul>
      )}
      {/* <button className="w-6 h-6">
        {
          dark && <IoSunny/>
        }
        {
          dark && <IoMoon/>
        }
      </button> */}
      <button className="w-6 h-6 border rounded-full flex justify-center items-center cursor-pointer hover:bg-purple bg-light dark:bg-second transition-all" onClick={darkModeHandler}>
        <DarkMode className="fill-light w-8 dark:fill-third" />
      </button>

      <button className="flex items-center gap-1 hover:text-purple cursor-pointer text-light dark-bg-yellow" onClick={() => Navigate("/Cart")}>
        <FaCartPlus className="dark:fill-yellow" />
        Cart
      </button>
    </div>
  );
};

export default LeftHeader;
