import React, { useState } from "react";

import RightSideHeader from "./RightSideHeader";

import LeftHeader from "./LeftHeader";
import LowerRight from "./LowerRight";
import { LowerOther } from "./LowerOther";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { MainIcon } from "./MainIcon";
// import { Navigate } from "react-router-dom";

const Header = ({posts, setPosts}) => {
  const [Mobile, setMobile] = useState(false);

  const mobileHandler = () => {
    setMobile(!Mobile);
  };

  const Navigate = useNavigate();
  return (
    <div className="relative max-w-[1500px] mx-auto w-screen ">
      <div className=" w-screen text-md items-center fixed top-0 px-16  bg-brown-orange z-50 py-4 dark:bg-real hidden md:block ">
        <div className="flex justify-between">
          <RightSideHeader posts={posts} setPosts={setPosts}/>

          <LeftHeader />
        </div>
        <div className="flex justify-between items-center ">
          <LowerRight />
          <LowerOther />
        </div>
      </div>

      <div className="flex-col mx-auto z-50  fixed top-0 px-4 py-2 text-white sm:block ms:w-screen sm:w-screen  bg-brown-orange dark:bg-real flex md:hidden ">
        <div className=" flex justify-between items-center py-3">
          <div className="flex items-center gap-1 text-light justify-start">
            <MainIcon className="fill-yellow w-10 ms:w-5 animate-spin" />
            <p className="text-2xl ms:text-smtext-yellowitalic font-medium">
              Infi<span className="text-yellow">N</span>ova
            </p>
          </div>
          <div onClick={mobileHandler} className="">
            {Mobile ? (
              <AiOutlineClose className="w-20 cursor-pointer" />
            ) : (
              <AiOutlineMenu className="w-20 cursor-pointer" />
            )}
          </div>
        </div>
        {Mobile && (
          <ul className="uppercase flex flex-col justify-center mt-3 ">
            <li
              className="p-4 border-b cursor-pointer "
              onClick={() => Navigate("/Login")}
            >
              Sign in
            </li>
            <li
              className="p-4 border-b cursor-pointer"
              onClick={() => Navigate("/Register")}
            >
              Register
            </li>
            <li
              className="p-4 border-b cursor-pointer"
              onClick={() => Navigate("/Home")}
            >
              Super Deals
            </li>
            <li
              className="p-4 border-b cursor-pointer "
              onClick={() => Navigate("/Login")}
            >
              New
            </li>
            <li
              className="p-4 border-b cursor-pointer"
              onClick={() => Navigate("/Login")}
            >
              Best Sellers
            </li>
            <li
              className="p-4 border-b cursor-pointer"
              onClick={() => Navigate("/Login")}
            >
              Top Brand
            </li>
            <li className="p-4border-b cursor-pointer ">Accessories</li>
            <li className="p-4 cursor-pointer border-b">Flash sales</li>
            <li className="p-4  border-b cursor-pointer">Flash sales</li>
            <li className="p-4 border-b cursor-pointer">Flash sales</li>
            <li className="p-4 border-b cursor-pointer ">Flash sales</li>
            <li className="p-4 border-b cursor-pointer">Flash sales</li>
            <li className="p-4 cursor-pointer">Flash sales</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
