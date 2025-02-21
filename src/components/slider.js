import { FaArrowLeft , FaArrowRight } from "react-icons/fa";
import { useState } from "react";
export default function Slider({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-400`}
        style={{
          transform: `translateX(-${current * 80}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-black px-10 text-3xl">
        <button onClick={previousSlide}>
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-black" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
    );
  }