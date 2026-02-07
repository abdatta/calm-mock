import { Play } from "lucide-preact";
import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import { MOCK_DATA } from "../data/mockData";

const SleepScreen = ({ onPlay }) => (
  <div className="pb-32 pt-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-white text-xl font-medium mb-6">Sleep</h2>

      {/* Pills Filter */}
      <div className="flex overflow-x-auto w-full px-4 space-x-2 scrollbar-hide pb-2">
        <button className="bg-white text-[#0f4c81] px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
          Sleep Stories
        </button>
        <button className="bg-[#1a3b5c]/60 text-blue-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-white/5">
          All
        </button>
        <button className="bg-[#1a3b5c]/60 text-blue-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-white/5">
          Meditations
        </button>
        <button className="bg-[#1a3b5c]/60 text-blue-200 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-white/5">
          Music
        </button>
      </div>
    </div>

    {/* Featured Banner Style */}
    <div
      className="mx-4 mb-8 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-4 flex items-center justify-between shadow-lg border border-white/10 relative overflow-hidden group cursor-pointer"
      onClick={() => onPlay(MOCK_DATA.sleepStories[2])}
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&q=80&w=800')] opacity-20 bg-cover bg-center" />
      <div className="relative z-10 w-2/3">
        <span className="text-[10px] uppercase tracking-wider text-purple-200 font-bold mb-1 block">
          Featured
        </span>
        <h3 className="text-white font-serif text-xl mb-1">Train Dreams</h3>
        <p className="text-blue-200 text-xs">An Immersive Audio Journey</p>
      </div>
      <div className="relative z-10 bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
        <Play fill="white" size={20} className="text-white" />
      </div>
    </div>

    <SectionHeader title="Sleep Stories for Kids" />
    <div className="flex overflow-x-auto px-4 pb-4 scrollbar-hide snap-x">
      {MOCK_DATA.sleepStories.map((item) => (
        <ContentCard
          key={item.id}
          item={item}
          onClick={onPlay}
          aspect="square"
        />
      ))}
    </div>

    <SectionHeader title="Playlists" />
    <div className="flex overflow-x-auto px-4 pb-4 scrollbar-hide snap-x">
      {MOCK_DATA.popular.map((item) => (
        <ContentCard
          key={item.id}
          item={item}
          onClick={onPlay}
          aspect="square"
        />
      ))}
    </div>
  </div>
);

export default SleepScreen;
