/* eslint-disable react/prop-types */
import FilterHeader from "./FilterHeader";
import ResetFilter from "./ResetFilter";

function HeaderWithReset({ title, onReset, value }) {
  return (
    <FilterHeader>
      <div className="flex h-11 items-center justify-between">
        <span>{title}</span>
        {value && <ResetFilter onReset={onReset} />}
      </div>
    </FilterHeader>
  );
}

export default HeaderWithReset;
