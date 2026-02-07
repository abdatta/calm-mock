const SectionHeader = ({ title, showSeeAll = true }) => (
  <div className="flex justify-between items-end px-4 mb-4 mt-8">
    <h3 className="text-white text-xl font-medium tracking-wide">{title}</h3>
    {showSeeAll && (
      <button className="text-blue-300 text-xs font-medium hover:text-white transition-colors">
        See All
      </button>
    )}
  </div>
);

export default SectionHeader;
