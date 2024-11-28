import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClose(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("click", handleClose, listenCapture);
    return () =>
      document.removeEventListener("click", handleClose, listenCapture);
  }, [handler]);

  return ref;
}

export default useOutsideClick;
