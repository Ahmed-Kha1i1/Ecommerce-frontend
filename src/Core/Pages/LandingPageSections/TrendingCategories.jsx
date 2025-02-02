import { Link } from "react-router-dom";

const categories = [
  { name: "Electronics", icon: "💻", id: 274 },
  { name: "Fashion", icon: "👕", id: 271 },
  { name: "Home & Living", icon: "🏠", id: 283 },
  { name: "Sports", icon: "⚽", id: 272 },
];

function TrendingCategories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl">
        Trending Categories
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/products?category=${category.id}`}
            className="group relative overflow-hidden rounded-xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4 text-4xl">{category.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {category.name}
            </h3>
            <div className="absolute inset-0 bg-blue-600 opacity-0 transition-opacity group-hover:opacity-10" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingCategories;
