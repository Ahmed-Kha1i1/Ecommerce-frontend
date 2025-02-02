/* eslint-disable react/prop-types */
function LightInput({ id, type, placeholder, label, children, ...props }) {
  return (
    <label htmlFor={id} className="w-full">
      <span className="mb-1 block text-sm text-gray-500">{label}</span>
      <div className="relative mb-2 flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
        <input
          id={id}
          type={type}
          className="w-full flex-shrink appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          placeholder={placeholder}
          {...props}
        />
      </div>
      {children}
    </label>
  );
}

export default LightInput;
