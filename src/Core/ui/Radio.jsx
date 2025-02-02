/* eslint-disable react/prop-types */
function Radio({ id, value, name, onChange, children, ...props }) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        value={value}
        type="radio"
        name={name}
        onChange={onChange}
        {...props}
        className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor={id} className="ml-3 text-base text-gray-800">
        {children || value}
      </label>
    </div>
  );
}

export default Radio;
