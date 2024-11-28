/* eslint-disable react/prop-types */
import { IoIosStar } from "react-icons/io";

function Star({ isFull = true }) {
  return (
    <IoIosStar
      className={`h-5 w-5 ${isFull ? "text-yellow-400" : "text-gray-300"}`}
    />
  );
}

export default Star;
