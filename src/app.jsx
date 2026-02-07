import { useState, useEffect } from "preact/hooks";
import AnimatedBackground from "./components/AnimatedBackground";
import StatusBar from "./components/StatusBar";
import HomeIndicator from "./components/HomeIndicator";
import TabBar from "./components/TabBar";
import MiniPlayer from "./components/MiniPlayer";
import FullScreenPlayer from "./components/FullScreenPlayer";
import CheckInModal from "./components/CheckInModal";
import HomeScreen from "./components/HomeScreen";
import SleepScreen from "./components/SleepScreen";
import DiscoverScreen from "./components/DiscoverScreen";
import ProfileScreen from "./components/ProfileScreen";
import { MOCK_DATA } from "./data/mockData";

// Internal app logic component
const AppContent = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [showCheckIn, setShowCheckIn] = useState(false);

  useEffect(() => {
    setCurrentTrack(MOCK_DATA.sleepStories[0]);
    const timer = setTimeout(() => setShowCheckIn(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
    setIsPlayerOpen(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="absolute inset-0 overflow-hidden font-sans antialiased selection:bg-blue-300 selection:text-blue-900 rounded-[40px]">
      <AnimatedBackground />
      <StatusBar />

      {/* Scrollable Content Area */}
      <div className="absolute inset-0 overflow-y-auto scrollbar-hide z-10 pt-8 pb-4">
        <div className="relative min-h-full">
          {activeTab === "home" && <HomeScreen onPlay={handlePlay} />}
          {activeTab === "sleep" && <SleepScreen onPlay={handlePlay} />}
          {activeTab === "discover" && <DiscoverScreen onPlay={handlePlay} />}
          {activeTab === "profile" && <ProfileScreen onPlay={handlePlay} />}
        </div>
      </div>

      {/* Floating Elements (Player & Nav) */}
      <div className="absolute inset-0 pointer-events-none rounded-[40px] overflow-hidden">
        <div className="pointer-events-auto w-full h-full relative">
          {/* Mini Player */}
          {!isPlayerOpen && currentTrack && (
            <MiniPlayer
              track={currentTrack}
              onExpand={() => setIsPlayerOpen(true)}
              isPlaying={isPlaying}
              togglePlay={togglePlay}
            />
          )}

          {/* Bottom Navigation */}
          <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

          <HomeIndicator />
        </div>
      </div>

      {/* Modals & Overlays */}
      {isPlayerOpen && (
        <FullScreenPlayer
          track={currentTrack}
          onClose={() => setIsPlayerOpen(false)}
          isPlaying={isPlaying}
          togglePlay={togglePlay}
        />
      )}

      {showCheckIn && <CheckInModal onClose={() => setShowCheckIn(false)} />}
    </div>
  );
};

// Exported component with iPhone Frame
export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Fit to 90% of viewport height
      const vh = window.innerHeight;
      const targetHeight = vh * 0.9;
      // Base height is 812px
      const newScale = Math.min(1, targetHeight / 812); // Don't scale up, only down? User said "full height", maybe scale up is okay if screen is big?
      // Actually user said "iphone container looks to small, should cover full height". So we SHOULD scale up if needed.
      // Let's just scale to fit height.
      const fitScale = targetHeight / 812; // This might be > 1 or < 1
      setScale(fitScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#1e1e1e] flex items-center justify-center p-4 overflow-hidden">
      {/* Scaled Wrapper */}
      <div
        style={{
          transform: `scale(${scale})`,
          width: "375px",
          height: "812px",
          transformOrigin: "center center",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* iPhone Container */}
        <div className="relative w-full h-full bg-black rounded-[60px] shadow-2xl border-[14px] border-black ring-1 ring-white/10">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-[30px] bg-black rounded-b-3xl z-50 pointer-events-none" />
          {/* Side Buttons (Mock) */}
          <div className="absolute top-24 -left-[18px] w-[4px] h-12 bg-gray-800 rounded-l-md" />{" "}
          {/* Silent */}
          <div className="absolute top-40 -left-[18px] w-[4px] h-16 bg-gray-800 rounded-l-md" />{" "}
          {/* Vol Up */}
          <div className="absolute top-60 -left-[18px] w-[4px] h-16 bg-gray-800 rounded-l-md" />{" "}
          {/* Vol Down */}
          <div className="absolute top-44 -right-[18px] w-[4px] h-24 bg-gray-800 rounded-r-md" />{" "}
          {/* Power */}
          {/* Screen Area */}
          <div className="relative w-full h-full bg-[#0f4c81] rounded-[46px] overflow-hidden mask-image-rounded">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
}
