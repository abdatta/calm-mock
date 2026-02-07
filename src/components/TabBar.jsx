import { Home, Moon, Compass, User } from "lucide-preact";
import NavIcon from "./NavIcon";

const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="absolute bottom-0 left-0 right-0 h-[85px] bg-[#0f4c81]/80 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around px-2 z-40 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.3)] rounded-b-[40px]">
    <NavIcon
      Icon={Home}
      label="Home"
      isActive={activeTab === "home"}
      onClick={() => setActiveTab("home")}
    />
    <NavIcon
      Icon={Moon}
      label="Sleep"
      isActive={activeTab === "sleep"}
      onClick={() => setActiveTab("sleep")}
    />
    <NavIcon
      Icon={Compass}
      label="Discover"
      isActive={activeTab === "discover"}
      onClick={() => setActiveTab("discover")}
    />
    <NavIcon
      Icon={User}
      label="Profile"
      isActive={activeTab === "profile"}
      onClick={() => setActiveTab("profile")}
    />
  </div>
);

export default TabBar;
