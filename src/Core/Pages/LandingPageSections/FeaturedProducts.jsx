import { Link } from "react-router-dom";

const featuredProducts = [
  {
    name: "Premium Headphones",
    price: "$199.99",
    tag: "Best Seller",
    image: "🎧",
  },
  {
    name: "Smart Watch",
    price: "$299.99",
    tag: "New Arrival",
    image: "⌚",
  },
  {
    name: "Wireless Speaker",
    price: "$149.99",
    tag: "Hot Deal",
    image: "🔊",
  },
  {
    name: "Laptop Pro",
    price: "$1299.99",
    tag: "Top Rated",
    image: "💻",
  },
];

function FeaturedProducts() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">
          Featured Products
        </h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Discover our handpicked selection of premium products that offer the
          best value for your money
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <div
            key={product.name}
            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="bg-gray-50 p-4 text-center text-6xl">
              {product.image}
            </div>
            <div className="p-6">
              <div className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                {product.tag}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="mb-4 text-gray-600">{product.price}</p>
              <Link
                to="/products"
                className="block rounded-lg bg-blue-600 py-2 text-center text-white transition-colors hover:bg-blue-700"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
