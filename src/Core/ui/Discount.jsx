/* eslint-disable react/prop-types */
export default function Discount({ percentage }) {
  return (
    <div
      className={`badge ml-2 bg-blue-600 bg-opacity-40 p-1 text-base text-blue-700`}
    >
      -{percentage}%
    </div>
  );
}
