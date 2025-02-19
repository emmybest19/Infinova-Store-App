import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import sales from "./FlashSales/sales"; //
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Cart from './Cart'
import { useCart } from "react-use-cart";

function FlashSalesCard() {
  const {addItem} = useCart();
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState({ display: "none" });
  return (
    <div className="px-0 md:px-16 mt-2 md:mt-4 dark:bg-real border-none">
      <div className="bg-light px-3 py-3 dark:bg-real">
        <h1 className="font-medium text-brown-orange text-3xl p-2 italic">
          Flash Sales
        </h1>
        <div
          className="flex  justify-center flex-wrap content-center mt-1 ms:mt-3 gap-4 cursor-pointer dark:bg-real"
          // onMouseEnter={(e) => {
          //   setIsOpen({ display: "block" });
          // }}
          // onMouseLeave={(e) => {
          //   setIsOpen({ display: "none" });
          // }}
        >
          {sales.map((card, idx) => (
            <div
              key={idx}
              className=" flex flex-col justify-start shadow-lg p-3 rounded-lg space-y-2 hover:scale-110 transition-all bg-white dark:bg-third dark:text-white"
            >
              <img
                src={card.image}
                alt={card.describe}
                className="w-60 h-60 rounded-lg sm: sm:items-center"
              />
              {/* Ensure card.image is a valid URL */}

              <p className="font-light text-sm">{card.describe}</p>
              <div className="flex sm:justify-between">
                <p className="">{card.star}</p>
                <span className="font-light text-sm">{card.sold}</span>
                <span className="font-medium text-sm bg-gray-light rounded-sm">
                  {card.tag}
                </span>
                <br />
              </div>
              <div className="flex items-baseline">
                <span className="font-light text-sm">{card.currency}</span>
                <span className="font-medium text-2xl">{card.amount}</span>
                <span className="font-light text-sm">{card.kobo}</span>
                <span className="font-light text-sm line-through">
                  {card.formal}
                </span>
              </div>

              <div className="flex gap-1">
                <span className="font-normal text-sm bg-rate text-black">
                  {card.rating}
                </span>
                <span className="font-semibold text-sm text-red">
                  {card.promo}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium text-sm bg-yellow px-2 rounded-md">
                  {card.choice}
                </span>
                <span className="font-light text-sm">{card.shipping}</span>
              </div>

              <p className="font-semibold text-md">{card.total}</p>
              {/* <div
                onMouseEnter={(e) => {
                  setIsOpen({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setIsOpen({ display: "none" });
                }}
              > */}
                <button
                  className="text-white bg-black px-16 py-2 cursor-pointer hover:block rounded-full mx-auto dark:bg-real" onClick={() => addItem(card)}
                  
                >
                  {card.button}
                </button>
              </div>
            // </div>
          ))}
        </div>
        <div className="flex justify-end pr-4 mt-6">
          <button
            className="italic flex justify-between w-32 items-center font-semibold outline-none hover:bg-brown-orange dark:hover:bg-second px-4 py-2 rounded-2xl text-lg hover:text-white dark:bg-third dark:text-white hover:scale-110 transition-all"
            onClick={() => Navigate("/FlashSales")}
          >
            Explore <BiChevronRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashSalesCard;
