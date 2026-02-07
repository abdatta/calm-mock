const NavIcon = ({ Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-300 ${isActive ? "text-white" : "text-blue-300/60"}`}
  >
    <div
      className={`p-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] transform -translate-y-1" : ""}`}
    >
      <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
    </div>
    <span
      className={`text-[10px] font-medium tracking-wide ${isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
    >
      {label}
    </span>
  </button>
);

export default NavIcon;
