/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function SaveProduct({}) {
  const [saved, setSaved] = useState(false);
  function onSaved() {
    setSaved(!saved);
  }
  return (
    <div
      className="absolute bottom-4 right-2 cursor-pointer rounded-full p-2 text-2xl text-orange-500 transition-colors hover:bg-orange-200 sm:relative sm:bottom-0"
      onClick={onSaved}
    >
      {saved ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
}

export default SaveProduct;
