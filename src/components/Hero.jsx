import mapImage from "../assets/images/map.png";
import houseImage from "../assets/images/house-1.jpg";

export default function Hero() {
  return (
    <section id="about" className="relative mt-12 pt-6 overflow-hidden">
      <div className="container-page grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            <span className="block">Let’s Find The Most</span>
            <span className="block">
              <span className="text-blue-500">Suitable Home</span>
              <span className="text-black"> For You !</span>
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-md">
            Find your dream home with us. We provide the best property options
            tailored to your needs.
          </p>

          {/* Stats */}
          <div className="mt-4 mb-20 flex gap-10">
            <StatItem value="29" label="Success Partners" />
            <StatItem value="92+" label="Strategic Location" />
            <StatItem value="120K" label="Satisfying Customer" />
          </div>

          {/* Search */}
          <div
            className="mt-10 bg-white shadow-md rounded-md px-4 py-4
  flex flex-col md:flex-row items-stretch md:items-center
  gap-3 md:gap-4"
          >
            {/* Location */}
            <div className="flex items-center w-full md:flex-1 gap-3">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full text-blue-500 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>

              {/* Input */}
              <div className="flex flex-col w-full">
                <span className="text-xs text-gray-500">Location</span>
                <input
                  type="text"
                  placeholder="Type your location"
                  className="outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full bg-transparent"
                />
              </div>
            </div>

            {/* Separator Desktop */}
            <div className="hidden md:block w-px h-10 bg-gray-200"></div>

            {/* Type */}
            <div className="flex items-center w-full md:flex-1 gap-3">
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full text-blue-500 shrink-0">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10.5L12 3l9 7.5M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9"
                  />
                </svg>
              </div>

              {/* Select */}
              <div className="flex flex-col w-full">
                <span className="text-xs text-gray-500">Type</span>
                <select
                  className="outline-none text-sm text-gray-700 bg-transparent cursor-pointer w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your type
                  </option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-3 rounded-md transition-all duration-200 shadow-md w-full md:w-auto">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35"
                />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Map */}
          <img
            src={mapImage}
            alt="Map"
            className="w-full h-[420px] object-cover "
          />

          {/* White fade overlay (right → left) */}
          <div
            className="hidden lg:block absolute inset-0  
  bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.6)_30%,rgba(255,255,255,0)_55%)]"
          />

          {/* Floating Card */}
          <div
            className="absolute 
              top-[60%] md:top-1/2 
              left-1/2 -translate-x-1/2 -translate-y-1/2 
              z-10 cursor-pointer
              px-3 md:px-0 w-full flex justify-center"
          >
            <div
              className="group relative bg-white shadow-xl rounded-xl 
                px-3 py-2 md:px-4 md:py-3
                w-[90%] max-w-[280px] md:max-w-[320px]
                flex items-center gap-3
                border border-transparent
                hover:border-blue-500
                transition-all duration-150 ease-out
                hover:shadow-2xl
                hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={houseImage}
                alt="House"
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg shrink-0"
              />

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-[11px] text-gray-400 leading-none truncate">
                  Pandeyan, Yogyakarta
                </p>

                <h4 className="text-xs md:text-sm font-semibold text-gray-800 leading-tight mt-1 truncate">
                  Palm Tree Resident
                </h4>

                <div className="flex items-center gap-2 text-[10px] md:text-[11px] text-gray-500 mt-1 flex-wrap">
                  <span>📐 120 M2</span>
                  <span>🛏 2 Room</span>
                  <span>🛁 4 Room</span>
                </div>
              </div>

              {/* Arrow / Pointer */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 
      w-3 h-3 md:w-4 md:h-4 
      bg-white rotate-45
      group-hover:border-r group-hover:border-b group-hover:border-blue-500
      transition-all duration-300"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
