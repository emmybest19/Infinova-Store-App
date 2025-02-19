import React from "react";
import { BsCart } from "react-icons/bs";
import SuperDealsMain from "./SuperDealsMain";
import { BiChevronRight } from "react-icons/bi";

function SupperDealsMainFirst() {
  return (
    <div className="px-16 dark:bg-real border-none">
      <div className="bg-light px-3 pt-6 pb-8 dark:bg-real border-none">
        <h1 className="font-medium text-brown-orange text-3xl p-2 italic dark:text-yellow">
          SupperDeals
        </h1>
        <div className="flex  justify-center flex-wrap content-center mt-1 gap-4 cursor-pointer py-3 dark:bg-real">
          {SuperDealsMain.map((card, idx) => (
            <div
              key={idx}
              className=" flex flex-col justify-start shadow-lg p-3  rounded-lg space-y-2 hover:scale-110 transition-all bg-white relative dark:bg-third dark:text-white"
            >
              <img
                src={card.image}
                alt={card.describe}
                className="w-60 h-60 rounded-lg"
              />
              {/* Ensure card.image is a valid URL */}

              <p className="font-light text-sm">{card.describe}</p>
              <p className="">{card.star}</p>

              <div className="flex items-baseline">
                <span className="font-light text-sm">{card.currency}</span>
                <span className="font-medium text-2xl">{card.amount}</span>
                <span className="font-light text-sm">{card.kobo}</span>
                <span className="font-light text-sm line-through">
                  {card.formal}
                </span>
              </div>
              <div className="bg-red w-11 h-6 rounded-full absolute flex justify-center items-center right-5">
                <button className="font-medium text-sm text-white">
                  {card.promo}{" "}
                </button>
              </div>

              <div className="flex gap-1">
                <span className="font-medium text-sm bg-yellow px-2 rounded-md">
                  {card.choice}
                </span>
                <span className="font-light text-sm">{card.shipping}</span>
              </div>

              <p className="font-semibold text-md">{card.total}</p>
              <button className="text-white bg-black px-16 py-2 cursor-pointer hover:block rounded-full mx-auto dark:bg-real">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SupperDealsMainFirst;
