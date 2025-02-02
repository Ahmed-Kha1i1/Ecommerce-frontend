/* eslint-disable react/prop-types */

import { RiMenu2Fill } from "react-icons/ri";

function ToggleSidebar({ onClick }) {
  return (
    <button
      id="toggleSidebarMobile"
      aria-expanded="true"
      aria-controls="sidebar"
      className="cursor-pointer rounded p-2 text-white focus:ring-2"
      onClick={onClick}
    >
      <RiMenu2Fill className="xs:h-6 xs:w-6 h-5 w-5" />
    </button>
  );
}

export default ToggleSidebar;
