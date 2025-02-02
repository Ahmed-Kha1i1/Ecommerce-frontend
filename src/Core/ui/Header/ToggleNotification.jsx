import { FaBell } from "react-icons/fa";

function ToggleNotification() {
  return (
    <button
      type="button"
      data-dropdown-toggle="notification-dropdown "
      className="btn rounded-lg p-2 text-white"
    >
      <span className="sr-only">View notifications</span>
      <FaBell className="h-6 w-6" />
    </button>
  );
}

export default ToggleNotification;
