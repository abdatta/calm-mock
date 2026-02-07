const CheckInModal = ({ onClose }) => (
  <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-[#0f4c81]/90 backdrop-blur-sm animate-in fade-in duration-300 rounded-[40px]">
    <div className="bg-[#1a3b5c] w-full max-w-sm rounded-3xl p-6 shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-400/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-white font-medium mb-1">Session Begins In...</h3>
        <p className="text-blue-200 text-sm mb-6">6 seconds</p>

        {/* Gradient Card */}
        <div className="w-full aspect-square bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg mb-6 transform transition-transform hover:scale-[1.02]">
          <h2 className="text-white text-xl font-medium mb-1">How are you</h2>
          <h1 className="text-white text-6xl font-script mb-6 drop-shadow-md">
            feeling?
          </h1>
          <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
            <div className="w-6 h-4 border-b-2 border-white rounded-full" />
          </div>
        </div>

        <p className="text-white text-lg font-medium mb-2">
          How are you feeling?
        </p>
        <p className="text-blue-200 text-sm mb-8 px-4">
          Take a moment to reflect before your meditation
        </p>

        <button
          className="w-full bg-white text-[#0f4c81] font-semibold py-3.5 rounded-full mb-3 hover:bg-blue-50 transition-colors"
          onClick={onClose}
        >
          Start Check-In
        </button>
        <button
          className="w-full bg-[#2d5a87] text-white font-medium py-3.5 rounded-full hover:bg-[#366899] transition-colors border border-white/10"
          onClick={onClose}
        >
          Skip
        </button>
        <button
          className="mt-4 text-blue-300 text-xs hover:text-white transition-colors"
          onClick={onClose}
        >
          Never Show Again
        </button>
      </div>
    </div>
  </div>
);

export default CheckInModal;
