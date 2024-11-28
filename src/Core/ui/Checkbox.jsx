/* eslint-disable react/prop-types */
function Checkbox({ value, title, checked }) {
  return (
    <div className="flex items-center">
      <input
        name={value}
        value={value}
        type="checkbox"
        defaultChecked={checked}
        className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label htmlFor="filter-color-3" className="ml-3 text-base text-gray-800">
        {title || value}
      </label>
    </div>
  );
}

export default Checkbox;
