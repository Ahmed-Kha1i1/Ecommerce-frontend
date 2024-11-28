/* eslint-disable react/prop-types */
function Radio({ value, children, name, checked = false }) {
  return (
    <div className="flex items-center">
      <input
        name={name}
        value={value}
        type="radio"
        defaultChecked={checked}
        className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor="filter-color-3" className="ml-3 text-base text-gray-800">
        {children || value}
      </label>
    </div>
  );
}

export default Radio;
