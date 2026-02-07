import { Heart, Pause, Play } from "lucide-preact";
import SafeImage from "./SafeImage";

const MiniPlayer = ({ track, onExpand, isPlaying, togglePlay }) => {
  if (!track) return null;

  return (
    <div
      onClick={onExpand}
      className="absolute bottom-[90px] left-4 right-4 h-16 bg-[#3d5a80]/60 backdrop-blur-xl rounded-2xl flex items-center px-2 shadow-lg border border-white/10 z-40 transition-all active:scale-95 cursor-pointer"
    >
      <SafeImage
        src={track.image}
        alt={track.title}
        className="w-12 h-12 rounded-xl object-cover shadow-sm ml-1"
      />
      <div className="flex-1 ml-3 overflow-hidden">
        <h4 className="text-white text-sm font-medium truncate">
          {track.title}
        </h4>
        <p className="text-blue-100/70 text-xs truncate">
          {track.subtitle || track.category}
        </p>
      </div>
      <div className="flex items-center space-x-3 mr-2">
        <button className="text-white/80 hover:text-white transition-colors">
          <Heart size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="text-white hover:scale-110 transition-transform"
        >
          {isPlaying ? (
            <Pause size={24} fill="white" />
          ) : (
            <Play size={24} fill="white" />
          )}
        </button>
      </div>

      {/* Progress Bar Line */}
      <div className="absolute bottom-0 left-2 right-2 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white/80 w-1/3 rounded-full" />
      </div>
    </div>
  );
};

export default MiniPlayer;
