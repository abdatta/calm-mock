import { useState, useEffect } from "preact/hooks";
import {
  ChevronDown,
  Share,
  Settings,
  RotateCcw,
  Heart,
  Pause,
  Play,
  List,
  RotateCw,
} from "lucide-preact";
import SafeImage from "./SafeImage";
import { FALLBACK_IMAGE } from "../data/mockData";

const FullScreenPlayer = ({ track, onClose, isPlaying, togglePlay }) => {
  const [showControls, setShowControls] = useState(false);
  const [bgError, setBgError] = useState(false);

  useEffect(() => {
    setShowControls(true);
  }, []);

  if (!track) return null;

  return (
    <div className="absolute inset-0 z-50 flex flex-col bg-[#0f4c81] rounded-[40px] overflow-hidden">
      {/* Background with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${bgError ? FALLBACK_IMAGE : track.image})`,
        }}
      />
      {/* Hidden img to trigger onError for background */}
      <img
        src={track.image}
        className="hidden"
        onError={() => setBgError(true)}
        alt="preload"
      />

      <div className="absolute inset-0 bg-[#0f4c81]/80 backdrop-blur-2xl" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6 mt-8">
        <button
          onClick={onClose}
          className="p-2 bg-white/10 rounded-full backdrop-blur-md"
        >
          <ChevronDown className="text-white" size={24} />
        </button>
        <div className="flex space-x-4">
          <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
            <Share className="text-white" size={20} />
          </button>
          <button className="p-2 bg-white/10 rounded-full backdrop-blur-md">
            <Settings className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 pb-20">
        {/* Album Art with Pulse */}
        <div className="relative mb-12">
          {isPlaying && (
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse scale-110" />
          )}
          <SafeImage
            src={track.image}
            alt="Album Art"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white/10 relative z-10"
          />
        </div>

        {/* Text */}
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl font-semibold mb-2">
            {track.title}
          </h2>
          <p className="text-blue-200 text-lg mb-4">{track.subtitle}</p>
          <div className="text-blue-300 text-sm font-medium tracking-wide uppercase mt-4">
            {track.category}
          </div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-sm">
          {/* Scrubber */}
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-xs text-blue-200">0:01</span>
            <div className="flex-1 h-1 bg-white/20 rounded-full relative group cursor-pointer">
              <div className="absolute left-0 top-0 bottom-0 w-[10%] bg-white rounded-full group-hover:bg-blue-100" />
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
            </div>
            <span className="text-xs text-blue-200">{track.duration}</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between px-4">
            <button className="text-white/70 hover:text-white transition-colors">
              <RotateCcw size={28} />
            </button>

            <button className="text-white/70 hover:text-white transition-colors">
              <Heart size={24} />
            </button>

            <button
              onClick={togglePlay}
              className="bg-white text-[#0f4c81] p-5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-white/10"
            >
              {isPlaying ? (
                <Pause size={32} fill="#0f4c81" />
              ) : (
                <Play size={32} fill="#0f4c81" />
              )}
            </button>

            <button className="text-white/70 hover:text-white transition-colors">
              <List size={24} />
            </button>

            <button className="text-white/70 hover:text-white transition-colors">
              <RotateCw size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
