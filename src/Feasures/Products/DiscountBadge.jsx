/* eslint-disable react/prop-types */
function DiscountBadge({ percentage, position = "right" }) {
  return (
    <div
      className={`badge absolute ${position === "right" ? "right-2" : "left-2"} top-2 bg-black bg-opacity-70 py-2 text-base`}
    >
      -{percentage}%
    </div>
  );
}

export default DiscountBadge;
