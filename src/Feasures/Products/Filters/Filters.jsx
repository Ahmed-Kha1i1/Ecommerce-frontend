import Checkbox from "../../../Core/ui/Checkbox";
import Radio from "../../../Core/ui/Radio";
import FilterCategories from "./FilterCategories";
import FilterHeader from "./FilterHeader";
import FilterSection from "./FilterSection";
import Stars from "./Stars";

const brands = [
  "Nike",
  "Adidas",
  "Apple",
  "Samsung",
  "Sony",
  "Microsoft",
  "Gucci",
  "Louis Vuitton",
  "Tesla",
  "Coca-Cola",
  "Pepsi",
  "Amazon",
  "Google",
  "Toyota",
  "Ford",
  "Honda",
  "BMW",
  "L'Oreal",
  "Zara",
  "H&M",
];

function Filters() {
  return (
    <form className="flex w-80 flex-col justify-start gap-y-5 border-r-[3px] border-light-gray p-3">
      <FilterCategories />
      <FilterCategories />
      <div>
        <FilterHeader>Brands</FilterHeader>
        {
          <FilterSection>
            {brands.map((value) => (
              <Checkbox value={value} key={value} />
            ))}
          </FilterSection>
        }
      </div>
      <div>
        <FilterHeader>Condition</FilterHeader>
        <FilterSection>
          <Radio name="condition" value="All" checked={true}>
            All
          </Radio>
          <Radio name="condition" value="New">
            New
          </Radio>
          <Radio name="condition" value="Used">
            Used
          </Radio>
        </FilterSection>
      </div>

      <div>
        <FilterHeader>Prices</FilterHeader>
        <FilterSection>
          <div className="col-span-2 flex items-center justify-between space-x-3">
            <div className="w-full">
              <label
                htmlFor="min-experience-input"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                From
              </label>

              <input
                type="number"
                id="price-from"
                value="300"
                min="1"
                max="10000"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder=""
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price-to"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                To
              </label>

              <input
                type="number"
                id="max-experience-input"
                value="3500"
                min="1"
                max="10000"
                className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                placeholder=""
                required
              />
            </div>
          </div>
        </FilterSection>
      </div>

      <div>
        <FilterHeader>Rating</FilterHeader>
        <Radio name="rating" value="5">
          <Stars starsNumber={5} />
        </Radio>

        <Radio name="rating" value="4">
          <Stars starsNumber={4} />
        </Radio>
        <Radio name="rating" value="3">
          <Stars starsNumber={3} />
        </Radio>
        <Radio name="rating" value="2">
          <Stars starsNumber={2} />
        </Radio>
        <Radio name="rating" value="1">
          <Stars starsNumber={1} />
        </Radio>
      </div>

      <div className="flex min-h-24 flex-1 items-end justify-center space-x-4">
        <button
          type="submit"
          className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 w-full rounded-lg bg-blue-600 px-5 py-2 text-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4"
        >
          Apply Filters
        </button>
        <button
          type="reset"
          className="hover:text-primary-700 bg-blu w-full rounded-lg border border-gray-200 px-5 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
        >
          Clear all
        </button>
      </div>
    </form>
  );
}

export default Filters;
