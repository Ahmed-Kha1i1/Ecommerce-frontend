/* eslint-disable react/prop-types */
function ReadonlyQuantity({ quantity }) {
  return (
    <div>
      <span className="mr-1 font-[600] text-dark-dray">Quy:</span>
      <span className="">{quantity}</span>
    </div>
  );
}

export default ReadonlyQuantity;
