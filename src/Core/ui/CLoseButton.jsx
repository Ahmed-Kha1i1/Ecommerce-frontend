/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

function CLoseButton({ onClose }) {
  return (
    <button
      type="button"
      className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
      onClick={onClose}
    >
      <span className="sr-only">Close menu</span>
      <IoMdClose className="ml-1 size-8 shrink-0 text-gray-400 hover:text-gray-500" />
    </button>
  );
}

export default CLoseButton;
