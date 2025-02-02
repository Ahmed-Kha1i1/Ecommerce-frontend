/* eslint-disable react/prop-types */
function ProductVariationDetails({ productItem }) {
  if (!productItem?.variations) return null;
  return (
    <div className="mb-5 mt-5">
      <p className="pb-1 text-lg font-semibold">Variations details</p>
      <ul className="flex flex-col gap-2 text-base">
        {Array.from(productItem.variations).map(([key, value]) => (
          <li key={key}>
            <span>
              <span className="font-semibold">{key} : </span>
              <span>{value}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductVariationDetails;
