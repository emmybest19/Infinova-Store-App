import React from "react";
import { BsCart } from "react-icons/bs";
// import Flash from "./Flash";
import { useCart } from "react-use-cart";
import { motion } from "framer-motion";


function FlashSales({mainPosts}) {
  const {addItem} = useCart();
  return (
    <div 
    className="px-16 pt-5  cursor-pointer dark:bg-black">
      <motion.div 
      variants={fadein("left", 0.3)}
      initial = "hidden" 
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
    
      
      className="bg-light px-3 dark:bg-black">
        <div className="flex  justify-center flex-wrap content-center mt-1 gap-4 dark:bg-black">

          {mainPosts.map((flash, idx) => (
            <div
              key={idx}
              className=" flex flex-col justify-start shadow-lg p-3 rounded-lg space-y-2 hover:scale-110 transition-all "
            >
              <img
                src={flash.image}
                alt={flash.describe}
                className="w-60 h-60 rounded-lg "
              />
            
              <p className="font-light text-sm">{flash.describe}</p>
              <div className="flex">
                <p className="">{flash.star}</p>
                <span className="font-light text-sm">{flash.sold}</span>
                <span className="font-medium text-sm bg-gray-light">
                  {flash.tag}
                </span>
                <br />
              </div>
              <div className="flex items-baseline">
                <span className="font-light text-sm">{flash.currency}</span>
                <span className="font-medium text-2xl">{flash.amount}</span>
                <span className="font-light text-sm">{flash.kobo}</span>
                <span className="font-light text-sm line-through">
                  {flash.formal}
                </span>
              </div>
              flash = {flash}
              <div className="flex gap-1">
                <span className="font-normal text-sm bg-rate text-black">
                  {flash.rating}
                </span>
                <span className="font-semibold text-sm text-red">
                  {flash.promo}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="font-medium text-sm bg-yellow p-2">
                  {flash.choice}
                </span>
                <span className="font-light text-sm">{flash.shipping}</span>
              </div>

              <p className="font-semibold text-md">₦{flash.price}</p>
              <button className="text-white bg-black px-16 py-2 cursor-pointer hover:block rounded-full mx-auto" onClick={() => addItem(flash)}>
                {flash.button}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default FlashSales;
