/* eslint-disable react/prop-types */
function SignButton({ children, disabled }) {
  return (
    <button
      type="submit"
      className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-bold text-white outline-none disabled:bg-gray-400"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default SignButton;
