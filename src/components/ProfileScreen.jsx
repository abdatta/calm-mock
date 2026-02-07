import { Settings, Bell, Share, Moon, User, RotateCw } from "lucide-preact";
import SectionHeader from "./SectionHeader";

const ProfileScreen = ({ onPlay }) => (
  <div className="pb-32 pt-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-center px-6 mb-6">
      <Settings className="text-white" size={24} />
      <h2 className="text-white text-xl font-medium">Profile</h2>
      <Bell className="text-white" size={24} />
    </div>

    {/* Tabs */}
    <div className="flex justify-center space-x-2 mb-8 px-4">
      {["Dashboard", "Library", "History", "Check-Ins"].map((tab, i) => (
        <button
          key={tab}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${i === 0 ? "bg-white text-[#0f4c81]" : "bg-[#1a3b5c]/60 text-blue-200 border border-white/5"}`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Gift Banner */}
    <div className="mx-4 mb-8 bg-gradient-to-br from-yellow-200 via-orange-300 to-yellow-500 rounded-3xl p-6 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10" />
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="mb-3 p-2 bg-black/10 rounded-lg">
          <Share size={24} className="text-yellow-900" />
        </div>
        <h3 className="text-yellow-900 font-bold text-lg mb-1">
          Give the gift of Calm
        </h3>
        <p className="text-yellow-900/80 text-xs mb-4 max-w-[200px]">
          Give a loved one a 30-day trial of Calm
        </p>
        <button className="bg-white text-yellow-900 font-bold py-3 px-12 rounded-full shadow-md text-sm hover:scale-105 transition-transform">
          Continue
        </button>
      </div>
    </div>

    {/* Wisdom Quote Card */}
    <div className="mx-4 mb-8 bg-[#1a3b5c]/60 rounded-3xl p-6 border border-white/5 text-center">
      <Moon className="w-6 h-6 text-blue-200 mx-auto mb-3" />
      <p className="text-blue-100 text-sm leading-relaxed italic">
        "There are more connections in your brain than stars in the galaxy. Try
        counting them the next time you're having trouble falling asleep."
      </p>
      <p className="text-blue-300 text-[10px] mt-3 uppercase tracking-widest">
        Feb 5
      </p>
    </div>

    <SectionHeader title="My Stats" showSeeAll={false} />
    <div className="mx-4 bg-[#1a3b5c]/60 rounded-3xl p-8 border border-white/5 flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center bg-gradient-to-b from-blue-500/20 to-transparent">
          <span className="text-white text-3xl font-light">1</span>
        </div>
        {/* Decorative Badge Ribbon SVG */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-1 rounded-lg shadow-lg border border-white/10 whitespace-nowrap">
          <span className="text-white text-xs font-bold uppercase tracking-wide">
            Mindful Day
          </span>
        </div>
      </div>

      <div className="flex justify-between w-full px-8 mt-4 mb-8">
        <div className="flex flex-col items-center">
          <div className="text-blue-300 mb-1">
            <User size={20} />
          </div>
          <span className="text-white font-medium">1</span>
          <span className="text-blue-300 text-[10px]">Total Sessions</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-blue-300 mb-1">
            <RotateCw size={20} />
          </div>
          <span className="text-white font-medium">1 min</span>
          <span className="text-blue-300 text-[10px]">Mindful Minutes</span>
        </div>
      </div>

      <button className="w-full bg-white text-[#0f4c81] font-bold py-3.5 rounded-full flex items-center justify-center space-x-2 shadow-lg hover:bg-blue-50 transition-colors">
        <Share size={18} />
        <span>Share My Stats</span>
      </button>
    </div>

    <div className="h-4" />
  </div>
);

export default ProfileScreen;
