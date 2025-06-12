import React from "react";
import { SearchIcon } from "./SearchIcon";
import { MainIcon } from "./MainIcon";
import { useNavigate } from "react-router-dom";


const RightSideHeader = ({posts, setPosts}) => {
  const navigate = useNavigate();
  // const [post, setPost] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setPosts("");
  }

  return (
    <div className="flex items-center justify-between gap-10 cursor-pointer">
      <button
        className="flex items-center gap-1 text-light"
        onClick={() => navigate("/Home")}
      >
        <MainIcon className="fill-yellow w-10 animate-spin" />
        <p className="text-2xl text-yellowitalic font-medium">
          Infi<span className="text-yellow">N</span>ova
        </p>
      </button>
      <div className="flex items-center justify-start relative">
        <form action="" className="w-72" onSubmit={handleSubmit}>
          <input
            className="relative w-[200px] pl-9 pr-4 py-2 placeholder:italic placeholder:font-medium placeholder:fill-light  border-opacity-5 rounded-md focus:w-[550px] solid transition-all dark:bg-third dark:focus:border-second focus:border-2 outline-none dark:text-white"
            type="text"
            value={posts}
            placeholder="Quick Search...."
            onChange={(e) => setPosts(e.target.value)}
          />
          <div className="flex justify-between gap-3 absolute  top-14 w-60 bg-brown">
            {/* {sales
              .filter((card) => {
                if (post === "") {
                  return;
                } else if (
                  card.tag.toLowerCase().includes(post.toLowerCase()) ||
                  card.describe.toLowerCase().includes(post.toLowerCase())
                ) {
                  return card;
                }
              })
              .map((card, idx) => (
                <div key={idx} className="flex justify-between gap-2 bg-brown">
                  <div className="flex flex-col justify-start shadow-lg p-3 rounded-lg space-y-2 hover:scale-105 transition-all bg-white">
                    <img
                      src={card.image}
                      alt={card.describe}
                      className="w-50 h-50 rounded-lg"
                    />
                    <p className="font-light text-sm">{card.describe}</p>
                    <div className="flex">
                      <p>{card.star}</p>
                      <span className="font-light text-sm">{card.sold}</span>
                      <span className="font-medium text-sm bg-gray-light rounded-sm">
                        {card.tag}
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="font-light text-sm">
                        {card.currency}
                      </span>
                      <span className="font-medium text-1xl">
                        {card.amount}
                      </span>
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
                      <span className="font-light text-sm">
                        {card.shipping}
                      </span>
                    </div>
                    <p className="font-medium text-sm">{card.total}</p>
                    <button className="text-white bg-black px-16 py-2 cursor-pointer hover:block rounded-full mx-auto">
                      {card.button}
                    </button>
                  </div>
                </div>
              ))}
           */}
           </div>
          <div className="bg-brown w-[38px] h-[40px] fixed top-5 left-60 rounded-l-md flex justify-center dark:bg-second">
            <SearchIcon className="fill-white w-6 top-5" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSideHeader;
