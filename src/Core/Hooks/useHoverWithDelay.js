import { useState, useRef } from "react";
import useOutsideClick from "./useOutsideClick";

function useHoverWithDelay(delay = 300) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useOutsideClick(() => setIsHovered(false));
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
  };

  return {
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
    onClose: () => setIsHovered(false),
    menuRef: ref,
  };
}

export default useHoverWithDelay;
