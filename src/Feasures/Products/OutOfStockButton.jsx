function OutOfStockButton() {
  return (
    <button className="pointer-events-none bottom-0 w-full gap-3 self-end rounded-lg bg-gray-600 px-5 py-2.5 text-base font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span>Out of Stock</span>
    </button>
  );
}

export default OutOfStockButton;
