import React from "react";
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa";

function DownFooter() {
  return (
    <div className="bg-silver text-white px-16 dark:bg-third ms:block ms:px-2 ms:w-full">
      <div className="flex justify-between pt-4 text-sm leading-6">
        <div >
          <h2 className="font-semibold">NEED HELP?</h2>
          <p>Chat with us</p>
          <p>Help Center</p>
          <p>Contact Us</p>

          <h2 className="font-bold">USEFUL LINKS</h2>
          <p>Service Center</p>
          <p>How to shop on Infinova</p>
          <p>Delivery options and timelines</p>
          <p>How to return a product on Infinova?</p>
          <p>Corporate and bulk purchases</p>
          <p>Report a product</p>
          <p>Dispute Resolution Policy</p>
          <p>Return & Return Timeline</p>
          <p>Return Policy</p>
        </div>
        <div>
          <h2 className="font-bold">ABOUT INFINOVA</h2>
          <p>About us</p>
          <p>Infinova careers</p>
          <p>Infinover Express</p>
          <p>Terms and Conditions</p>
          <p>Privacy Notice</p>
          <p>Infinova Store Credit Terms & Conditions</p>
          <p>Infinova Payment Iformation Guidelines</p>
          <p>Cookies Notice</p>
          <p>Infinova Global</p>
          <p>Official Stores</p>
          <p>Flash Sales</p>
        </div>
        <div>
          <h2 className="font-bold">MAKE MONEY WITH INFINOVA</h2>
          <p>Sell on Infinova</p>
          <p>Vendor Hub</p>
          <p>Become a Sales Consultant</p>
          <p>Join the Infinova KOL Program</p>
        </div>
        <div>
          <h2 className="font-bold">INFINOVA INTERNATIONAL</h2>
          <div className="flex justify-between">
            <div>
              <p>Albenia</p>
              <p>Tanzania</p>
              <p>Angola</p>
              <p>Kenya</p>
              <p>Albenia</p>
              <p>Cameroon</p>
              <p>Kuwait</p>
              <p>Canada</p>
              <p>Senegal</p>
            </div>
            <div>
              <p>Togo</p>
              <p>Zambia</p>
              <p>Morocco</p>
              <p>Lybia</p>
              <p>Israel</p>
              <p>Sweden</p>
              <p>Norway</p>
              <p>Uganda</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-sm mt-3">JOIN US ON</h2>
        <div className="flex justify-start gap-2 pb-4 pt-1">
            <FaFacebook className="cursor-pointer"/>
            <FaYoutube className="cursor-pointer"/>
            <FaInstagram className="cursor-pointer"/>
            <FaTwitter className="cursor-pointer"/>
  
        </div>
      </div>
    </div>
  );
}

export default DownFooter;
