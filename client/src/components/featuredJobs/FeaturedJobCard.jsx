export default function FeaturedJobCard({
  icon,
  title,
  company,
  location,
  description,
  type,
  tags = [],
}) {

  const tagColors = {
    yellow: "bg-yellow-50 text-yellow-600",
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <div className="bg-white p-6 border border-[#D6DDEB] rounded-xl card-shadow hover:-translate-y-1 transition duration-300">
      
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 flex items-center justify-center">
          <img
            alt={company}
            className="rounded-lg w-12 h-12 object-cover"
            src={icon}
          />
        </div>

        <span className="px-3 py-1 bg-indigo-50 text-primary text-xs font-bold rounded-full border border-primary/20">
          {type}
        </span>
      </div>

      <h3 className="text-2xl font-medium font-bold mb-1">{title}</h3>

      <p className="text-[#515B6F] text-sm mb-4">
        {company} • {location}
      </p>

      <p className="text-[#7C8493] text-sm mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-[10px] font-bold rounded-full ${
              tagColors[tag.color] || "bg-gray-100 text-gray-600"
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>

    </div>
  );
}