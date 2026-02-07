import { Mountain, Bell } from "lucide-preact";
import SectionHeader from "./SectionHeader";
import ContentCard from "./ContentCard";
import { MOCK_DATA } from "../data/mockData";

const HomeScreen = ({ onPlay }) => (
  <div className="pb-32 pt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Scenic Header */}
    <div className="flex flex-col items-center mb-8 relative">
      <div className="absolute top-0 left-4 p-2 bg-white/10 rounded-full backdrop-blur-md">
        <Mountain size={20} className="text-white" />
      </div>
      <div className="absolute top-0 right-4 p-2 bg-white/10 rounded-full backdrop-blur-md relative">
        <Bell size={20} className="text-white" />
        <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-400 rounded-full border-2 border-[#0f4c81]" />
      </div>

      <h1 className="text-white text-6xl mb-12 drop-shadow-lg font-logo tracking-tight">
        Calm
      </h1>

      {/* Progress Ring */}
      <div className="relative w-40 h-40 mb-10">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="12"
            fill="none"
          />
          {/* Progress Arc */}
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="white"
            strokeWidth="12"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset="340"
            strokeLinecap="round"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-white text-5xl font-light">1</span>
          <span className="text-blue-200 text-sm font-medium mt-1">Day</span>
        </div>
      </div>

      {/* Week Streak */}
      <div className="flex justify-center space-x-3 mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
          <div key={idx} className="flex flex-col items-center space-y-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 
              ${idx === 3 ? "bg-white/20 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "bg-white/5 border-transparent text-blue-300/50"}`}
            >
              {idx === 3 ? <span className="text-sm">✓</span> : null}
            </div>
            <span className="text-[10px] font-medium text-blue-200/60">
              {day}
            </span>
          </div>
        ))}
      </div>

      <p className="text-blue-100 text-center text-sm px-10 leading-relaxed mt-4 opacity-90">
        You're off to a great start using Calm 1 day this week. Keep it up!
      </p>
    </div>

    {/* Content Sections */}
    <SectionHeader title="Popular on Calm" />
    <div className="flex overflow-x-auto px-4 pb-4 scrollbar-hide snap-x">
      {MOCK_DATA.popular.map((item) => (
        <ContentCard key={item.id} item={item} onClick={onPlay} />
      ))}
    </div>

    <SectionHeader title="Today's Dailies" />
    <div className="flex overflow-x-auto px-4 pb-4 scrollbar-hide snap-x">
      {MOCK_DATA.dailies.map((item) => (
        <ContentCard key={item.id} item={item} onClick={onPlay} />
      ))}
    </div>

    <div className="h-8" />
  </div>
);

export default HomeScreen;
