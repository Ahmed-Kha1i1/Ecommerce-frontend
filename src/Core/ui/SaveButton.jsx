/* eslint-disable react/prop-types */
function SaveButton({ children, disabled = false }) {
  return (
    <button
      className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default SaveButton;
