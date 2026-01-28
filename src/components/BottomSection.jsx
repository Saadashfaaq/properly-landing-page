import bgImage from "../assets/images/house-1.jpg";

export default function BottomSection() {
  return (
    <section id="information" className="pt-5">
      <div className="container-page">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 relative z-20">
          {/* Logo */}
          <div className="flex items-center gap-2 text-xl font-semibold">
            <span className="text-blue-500">▲</span>
            <span>
              Properly<span className="text-blue-500">.</span>
            </span>
          </div>

          <button className="px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-blue-500 border border-blue-300 rounded-full hover:bg-blue-50 transition">
            Properly Indonesia
          </button>

          <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Yogyakarta, Bali</span>
          </div>
        </nav>

        {/* Hero Section with single background */}

        <div>
          {/* TOP WHITE SECTION */}
          <div className=" w-full flex items-end justify-center">
            <p
              className="
            w-full
            text-[clamp(2rem,11vw,10rem)]
            font-black
            uppercase
            text-transparent
            bg-clip-text
            bg-no-repeat
            select-none
            bg-cover
            text-center
          "
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "top center",
              }}
            >
              PROPERLY
            </p>
          </div>

          {/* BOTTOM IMAGE SECTION */}
          {/* BOTTOM IMAGE SECTION */}
          <div
            className="relative h-[35vh] w-full bg-no-repeat bg-cover flex items-end justify-center"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundPosition: "center center",
            }}
          >
            <p
              className="
                  absolute 
                  bottom-1 
                  text-white 
                  text-sm 
                  text-center 
                  px-3 
                  py-1 
                  rounded
                "
            >
              Copyright ©2024. All Right Reserved. Powered by: Madeindonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
