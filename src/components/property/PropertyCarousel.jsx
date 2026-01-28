import { useEffect, useRef, useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../../data/property";

export default function PropertyCaroursel() {
  const STEP = 1;
  const GAP = 24;

  const [visible, setVisible] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [cardPxWidth, setCardPxWidth] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
      } else {
        setVisible(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const calc = () => {
      const containerWidth = containerRef.current.clientWidth;
      const totalGap = (visible - 1) * GAP;
      const width = (containerWidth - totalGap) / visible;
      setCardPxWidth(width);
    };

    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [visible]);

  const maxIndex = Math.max(0, properties.length - visible);

  const next = () => {
    setStartIndex((prev) => {
      const nextIndex = prev + STEP;
      return nextIndex >= maxIndex ? maxIndex : nextIndex;
    });
  };

  const prev = () => {
    setStartIndex((prev) => {
      const nextIndex = prev - STEP;
      return nextIndex <= 0 ? 0 : nextIndex;
    });
  };

  return (
    <>
      {/* CAROUSEL */}
      <div ref={containerRef} className="mt-14 overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `translateX(-${startIndex * (cardPxWidth + GAP)}px)`,
          }}
        >
          {properties.map((item, i) => (
            <div
              key={item.id}
              className="flex-shrink-0"
              style={{
                width: `${cardPxWidth}px`,
                marginRight: i === properties.length - 1 ? 0 : `${GAP}px`,
              }}
            >
              <PropertyCard data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-8 flex justify-center gap-3">
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
