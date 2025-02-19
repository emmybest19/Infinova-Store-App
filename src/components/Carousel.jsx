import { useState, useEffect } from "react";
import React from "react";

import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div className="flex w-screen md:w-96 h-96 relative rounded-md">
      <BsArrowLeftCircleFill
        className="absolute w-3 md:w-5 h-3 md:h-5 fill-yellow left-2 top-44 hover:cursor-pointer"
        onClick={previousSlide}
      />
      {data.map((record, idx) => {
        return (
          <img
            src={record.pic}
            alt=""
            key={idx}
            className={
              slide === idx ? "w-full h-full rounded-lg shadow-md" : "hidden"
            }
          />
        );
      })}
      <BsArrowRightCircleFill
        className="absolute w-5 h-5 fill-yellow right-2 top-44 hover:cursor-pointer"
        onClick={nextSlide}
      />
      <span className="flex absolute bottom-4 left-32 ">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                setSlide(idx);
              }}
              className={
                slide === idx
                  ? "bg-yellow h-2 w-2 rounded-full my-0 mx-1 cursor-pointer border-none outline-none animate-ping"
                  : "bg-silver h-2 w-2 rounded-full my-0 mx-1 cursor-pointer border-none outline-none"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
