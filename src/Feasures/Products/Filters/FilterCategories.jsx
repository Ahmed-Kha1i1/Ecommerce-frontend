import FilterHeader from "./FilterHeader";

function FilterCategories() {
  return (
    <div>
      <FilterHeader>Categories</FilterHeader>

      <ul role="list" className="space-y-1 text-sm font-medium text-gray-900">
        <li>
          <a href="#">Totes</a>
        </li>
        <li>
          <a href="#">Backpacks</a>
        </li>
        <li>
          <a href="#">Travel Bags</a>
        </li>
        <li>
          <a href="#">Hip Bags</a>
        </li>
        <li>
          <a href="#">Laptop Sleeves</a>
        </li>
      </ul>
    </div>
  );
}

export default FilterCategories;
