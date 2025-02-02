/* eslint-disable react/prop-types */
import { BiSolidInfoCircle } from "react-icons/bi";

function ErrorMessage({ message }) {
  return (
    <div className="relative">
      <BiSolidInfoCircle className="absolute -top-[1px] left-1 h-[18px] w-[18px] text-red-700" />
      <p className="pl-7 text-sm text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;
