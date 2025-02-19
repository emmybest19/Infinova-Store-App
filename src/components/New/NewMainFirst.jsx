import React from "react";
import { BiChevronRight } from "react-icons/bi";
import NewMain from "./NewMain";
function NewMainFirst() {
    return (
      <div className="px-16 pt-5 pb-5 dark:bg-real">
        <div className="bg-light px-3 py-3 dark:bg-real">
          <h1 className="font-medium text-brown-orange text-3xl p-2 italic dark:text-yellow ">
            New
          </h1>
          <div className="flex  justify-center flex-wrap content-center mt-1 gap-4 cursor-pointer dark:bg-real">
            {NewMain.map((card, idx) => (
              <div
                key={idx}
                className=" flex flex-col justify-start shadow-lg p-3 rounded-lg space-y-2 hover:scale-110 transition-all bg-white dark:bg-third dark:text-white"
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
  
                <div className="flex gap-1">
                  <span className="font-normal text-sm bg-rate text-black">
                    {card.rating}
                  </span>
                  
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
  
  export default NewMainFirst;