export default function PropertyCard({ data }) {
  return (
    <div className="min-w-[420px] overflow-hidden">
      {/* Image */}
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-80 object-cover"
      />

      {/* Content */}
      <div className="pt-4">
        {/* Location */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {data.location}
        </p>

        {/* Title */}
        <h3 className="mt-4 text-xl font-semibold text-gray-900 leading-tight">
          {data.title}
        </h3>

        {/* Price + Description Row */}
        <div className="mt-3 w-full flex items-start justify-between gap-4">
          <div className="w-[50%]">
            {/* Meta */}
            <p className="text-sm text-gray-500">{data.bedroom}</p>
            {/* Price */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {data.price}
            </p>
          </div>
          <div className="w-[50%] pr-10">
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed text-left flex-1">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
