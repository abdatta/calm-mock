import { useState } from "preact/hooks";
import { FALLBACK_IMAGE } from "../data/mockData";

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <img
      src={error ? FALLBACK_IMAGE : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default SafeImage;
