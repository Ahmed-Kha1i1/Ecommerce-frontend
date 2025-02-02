function Skeleton() {
  return (
    <div className="mx-auto max-w-4xl rounded-lg p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/4 rounded bg-gray-200"></div>
        <div className="h-4 w-1/2 rounded bg-gray-200"></div>
        <div className="space-y-3">
          <div className="h-40 rounded bg-gray-200"></div>
          <div className="h-40 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
