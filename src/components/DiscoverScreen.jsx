import { Search } from "lucide-preact";
import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import { MOCK_DATA } from "../data/mockData";

const DiscoverScreen = ({ onPlay }) => (
  <div className="pb-32 pt-14 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="text-center mb-6">
      <h2 className="text-white text-xl font-medium mb-6">Discover</h2>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-blue-200" size={20} />
        <input
          type="text"
          placeholder="Title, narrator, artist, or topic"
          className="w-full bg-[#1a3b5c]/60 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-white placeholder-blue-300/50 focus:outline-none focus:bg-[#1a3b5c] focus:border-white/30 transition-all shadow-inner"
        />
      </div>
    </div>

    {/* Categories Grid */}
    <div className="grid grid-cols-2 gap-3 mb-8">
      {MOCK_DATA.categories.map((cat, idx) => (
        <button
          key={idx}
          className="bg-[#1a3b5c]/40 hover:bg-[#1a3b5c]/80 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center space-y-3 transition-colors group h-28"
        >
          <cat.icon
            className="text-white group-hover:scale-110 transition-transform"
            size={28}
          />
          <span className="text-blue-100 font-medium text-sm">{cat.name}</span>
        </button>
      ))}
    </div>

    <SectionHeader title="New & Noteworthy" showSeeAll={true} />
    <div className="flex overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide snap-x">
      {MOCK_DATA.dailies.map((item) => (
        <ContentCard key={item.id} item={item} onClick={onPlay} />
      ))}
    </div>
  </div>
);

export default DiscoverScreen;
