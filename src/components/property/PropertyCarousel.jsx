import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../../data/property";

export default function PropertyCaroursel() {
  const VISIBLE = 3;
  const STEP = 2;

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right"); // "left" | "right"

  const maxIndex = Math.max(0, properties.length - VISIBLE);

  const next = () => {
    setDirection("right");
    setStartIndex((prev) => {
      const nextIndex = prev + STEP;
      return nextIndex >= maxIndex ? maxIndex : nextIndex;
    });
  };

  const prev = () => {
    setDirection("left");
    setStartIndex((prev) => {
      const nextIndex = prev - STEP;
      return nextIndex <= 0 ? 0 : nextIndex;
    });
  };

  return (
    <>
      {/* CAROUSEL */}
      <div className="mt-14 overflow-hidden">
        <div
          className={`
            flex gap-10 
            transition-transform duration-500 ease-in-out
          `}
          style={{
            transform: `translateX(-${startIndex * (100 / VISIBLE)}%)`,
          }}
        >
          {properties.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{ width: `${100 / VISIBLE}%` }}
            >
              <PropertyCard data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-10 flex justify-center gap-3">
        <button
          onClick={prev}
          disabled={startIndex === 0}
          className="w-9 h-9 rounded-lg border border-gray-300 
                       flex items-center justify-center
                       text-gray-600
                       hover:bg-gray-100 hover:text-gray-900
                       transition-all
                       disabled:opacity-40"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </button>

        <button
          onClick={next}
          disabled={startIndex === maxIndex}
          className="w-9 h-9 rounded-lg border border-gray-300 
                       flex items-center justify-center
                       text-gray-600
                       hover:bg-gray-100 hover:text-gray-900
                       transition-all
                       disabled:opacity-40"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6l6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
