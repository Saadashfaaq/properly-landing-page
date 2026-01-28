import bgImage from "../assets/images/house-3.jpg";

export default function BottomSection() {
  return (
    <section id="information" className="pt-20">
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

          <button className="flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 text-xs md:text-sm text-blue-500 border border-blue-300 rounded-full hover:bg-blue-50 transition">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
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

        <div
          className="
    relative
    h-[20vh] sm:h-[250vh] md:h-[30vh] lg:h-[35vh]
    text-center
    object-cover
  "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "repeat",
          }}
        >
          <h1
            className="
      bg-white
      overflow-hidden
      inline-block
      font-bold
      leading-none
      w-full
      tracking-widest

      text-[4rem]
      sm:text-[5rem]
      md:text-[9rem]
    "
          >
            <span
              className="
        block
        bg-clip-text
        text-transparent
        object-cover

        mb-[-12px]
        sm:mb-[-18px]
        md:mb-[-25px]
      "
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "repeat",
              }}
            >
              PROPERLY
            </span>
          </h1>

          {/* COPYRIGHT TEXT */}
          <p
            className="
      absolute
      bottom-3
      left-1/2
      -translate-x-1/2
      text-white
      text-[10px]
      sm:text-sm
      text-center
      opacity-80
      whitespace-nowrap
    "
          >
            Copyright ©2024. All Right Reserved. Powered by: Madeindonesia
          </p>
        </div>
      </div>
    </section>
  );
}
