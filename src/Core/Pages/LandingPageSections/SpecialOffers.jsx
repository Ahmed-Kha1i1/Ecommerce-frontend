import { Link } from "react-router-dom";

function SpecialOffers() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-3xlfont-bold mb-12 text-center text-2xl text-gray-800">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">New Customer Special</h3>
            <p className="mb-6">Get 15% off on your first purchase!</p>
            <Link
              to="/auth/register"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50"
            >
              Sign Up Now
            </Link>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-white">
            <h3 className="mb-4 text-2xl font-bold">Limited Time Deal</h3>
            <p className="mb-6">Free shipping on orders over $50!</p>
            <Link
              to="/products"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-orange-600 hover:bg-orange-50"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
