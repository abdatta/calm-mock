import { Play } from "lucide-preact";
import SafeImage from "./SafeImage";

const ContentCard = ({ item, onClick, aspect = "video" }) => (
  <div
    onClick={() => onClick(item)}
    className="flex-shrink-0 mr-4 group cursor-pointer"
    style={{ width: aspect === "video" ? "260px" : "160px" }}
  >
    <div
      className={`relative overflow-hidden rounded-2xl mb-3 shadow-lg transition-transform duration-300 group-hover:scale-[1.02] ${aspect === "square" ? "aspect-square" : "aspect-video"}`}
    >
      <SafeImage
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

      {/* Play Icon on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
          <Play size={24} fill="white" className="text-white" />
        </div>
      </div>

      {/* Duration Badge */}
      <div className="absolute bottom-2 left-2 flex items-center space-x-1">
        {aspect === "video" && (
          <Play size={10} fill="white" className="text-white" />
        )}
        <span className="text-white text-[10px] font-medium drop-shadow-md">
          {item.duration}
        </span>
      </div>
    </div>

    <h4 className="text-white font-medium text-sm leading-tight mb-1 group-hover:text-blue-200 transition-colors">
      {item.title}
    </h4>
    <p className="text-blue-300 text-xs">{item.subtitle || item.category}</p>
  </div>
);

export default ContentCard;
