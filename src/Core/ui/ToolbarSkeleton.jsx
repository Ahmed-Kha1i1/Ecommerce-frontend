function ToolbarSkeleton() {
  return (
    <div role="status" className="mt-4 animate-pulse">
      <div className="mx-auto mb-2.5 h-2.5 max-w-[640px] rounded-full bg-gray-300"></div>
      <div className="mx-auto h-2.5 max-w-[540px] rounded-full bg-gray-300"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default ToolbarSkeleton;
