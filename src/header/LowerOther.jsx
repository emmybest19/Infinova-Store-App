import React from "react";
import { useNavigate } from "react-router-dom";


export function LowerOther() {
    const Navigate = useNavigate();
    return(
        <div className="text-light flex justify-between gap-20 mt-2 dark:text-yellow">
            <button className="px-4 py-2 hover:rounded-md hover:scale-110 hover:bg-brown transition-all dark:text-yellow dark:hover:bg-third" onClick={()=>Navigate("/SuperDeals")}>SuperDeals</button>
            <button className="px-4 py-2 hover:rounded-md hover:scale-110 hover:bg-brown transition-all dark:text-yellow dark:hover:bg-third" onClick={()=>Navigate("/New")}>New</button>
            <button className="px-4 py-2 hover:rounded-md hover:scale-110 hover:bg-brown transition-all dark:text-yellow dark:hover:bg-third" onClick={()=> Navigate("/BestSellers")}>Best Sellers</button>
            <button className="px-4 py-2 hover:rounded-md hover:scale-110 hover:bg-brown transition-all dark:text-yellow dark:hover:bg-third" onClick={()=> Navigate("/TopBrands")}>Top Brands</button>
            <button className="px-4 py-2 hover:rounded-md hover:scale-110 hover:bg-brown transition-all dark:text-yellow dark:hover:bg-third" onClick={() => Navigate("/FlashSales")}>Flash Sales</button>
        </div>
       
    );
}