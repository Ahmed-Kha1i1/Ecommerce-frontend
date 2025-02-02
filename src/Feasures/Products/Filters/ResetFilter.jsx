/* eslint-disable react/prop-types */
function ResetFilter({ onReset }) {
  return (
    <button
      type="button"
      className="rounded-lg px-5 py-2 text-lg font-semibold text-blue-700 hover:bg-gray-100 focus:z-10 focus:outline-none"
      onClick={() => {
        onReset();
      }}
    >
      RESET
    </button>
  );
}

export default ResetFilter;
