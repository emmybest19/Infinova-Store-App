import React from "react";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { MainIcon } from "../../header/MainIcon";

function UpperFooter() {
  return (
    <div className="block md:flex pt-2 md:pt-4 bg-brown text-white w-full justify-between items-start px-0 md:px-16 gap-5 pb-4 dark:bg-third">
      <div className="flex items-center gap-1 text-light pt-2">
        <MainIcon className="fill-yellow w-8" />
        <p className="text-xl text-yellowitalic font-medium">
          Infi<span className="text-yellow">N</span>ova
        </p>
      </div>
      <div className="text-sm pt-3 space-x-1">
        <h1 className="font-semibold">NEW TO INFINOVA STORE?</h1>
        <p className="pt-2">
          Subscribe to our newsletter to get updates on our latest offers
        </p>
        <div className="mt-2 align-middle ">
          <form action="">
            <input
              className="w-64 tex-md placeholder:text-md placeholder:italic px-2 py-1 rounded-md outline-none"
              type="email"
              name="email"
              placeholder="Enter E-mail Address"
              id=""
            />
            <button className="w-16 h-10 bg-brown-orange rounded-md mt-3 hover:bg-white hover:text-black ml-3">
              Male
            </button>
            <button className="w-16 h-10 bg-brown-orange rounded-md mt-3 hover:bg-white hover:text-black ml-3">
              Female
            </button>{" "}
            <br />
            <div className="space-x-1">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I agree to Infinova privacy and cookie policy. You can
                unsubcribe from <br/> newsletters at any f**king time. <br />
              </label>
            </div>
            <span className="text-yellow">I accept the legal terms</span>
          </form>
        </div>
      </div>
      <div className="flex flex-col pt-2">
        <div className="block md:flex justify-between gap-2">
          <MainIcon className="fill-yellow w-8" />
          <div className="text-sm">
            <h2>DOWNLOAD INFINOVA FREE APP</h2>
            <p>Get access to exclusive offers!</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 gap-6 ">
          <button className="flex  items-center gap-1 hover:bg-brown-orange outline-none hover:text-white px-3 rounded-md py-2">
            <FaAppStore className=""/>
            <div className="text-[8px] text-left">
              <p>Download on the</p>
              <p>AppStore</p>
            </div>
          </button>
          <button className="flex justify-between items-center gap-1 hover:bg-brown-orange outline-none hover:text-white px-4 rounded-md py-2">
            <FaGooglePlay />
            <div className="text-[8px]">
              <p>GET IT ON</p>
              <p>GooglePlay</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
