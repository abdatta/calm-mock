import { Signal, Wifi, Battery } from "lucide-preact";

const StatusBar = () => (
  <div className="absolute top-0 left-0 right-0 h-12 flex justify-between items-end px-6 pb-2 z-50 text-white font-medium text-xs">
    <span>9:41</span>
    <div className="flex items-center space-x-1.5">
      <Signal size={14} fill="currentColor" />
      <Wifi size={14} />
      <Battery size={14} fill="currentColor" />
    </div>
  </div>
);

export default StatusBar;
