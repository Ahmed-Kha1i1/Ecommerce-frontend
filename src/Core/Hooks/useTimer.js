import { useEffect, useRef, useState } from "react";

function useTimer(initialSeconds, onComplete) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalRef.current); // Stop the timer
          if (onComplete) onComplete(); // Call the callback if provided
          return 0;
        }

        return prevSeconds - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetTimer = (newSeconds) => {
    clearInterval(intervalRef.current); // Clear existing interval
    setSeconds(newSeconds); // Reset the timer

    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(intervalRef.current); // Stop the timer
          if (onComplete) onComplete(); // Call the callback if provided
          return 0;
        }

        return prevSeconds - 1;
      });
    }, 1000);
  };

  return { seconds, resetTimer };
}

export default useTimer;
