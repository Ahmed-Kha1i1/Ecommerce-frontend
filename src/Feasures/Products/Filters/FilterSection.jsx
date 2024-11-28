/* eslint-disable react/prop-types */
function FilterSection({ children }) {
  return (
    <div className="custom-scrollbar max-h-64 space-y-1 overflow-auto">
      {children}
    </div>
  );
}

export default FilterSection;
