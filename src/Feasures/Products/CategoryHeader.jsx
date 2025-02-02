/* eslint-disable react/prop-types */
function CategoryHeader({ category, productsCount }) {
  return (
    <div className="flex items-center gap-5">
      <h3 className="text-xl font-semibold tracking-tight text-gray-900">
        {category.name}
      </h3>
      {productsCount ? (
        <div className="text-gray-500">({productsCount} products found)</div>
      ) : null}
    </div>
  );
}

export default CategoryHeader;
