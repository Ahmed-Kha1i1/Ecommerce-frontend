/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function HeroSection({ isGuest }) {
  return (
    <div className="rounded-md bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            {!isGuest ? <>Welcome Back</> : "Discover Amazing Deals Today!"}
          </h1>
          <p className="mb-8 text-xl leading-relaxed opacity-90">
            {!isGuest
              ? "Continue your shopping journey with exclusive deals just for you"
              : "Join us to get personalized recommendations and special offers"}
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-white px-5 py-3 font-semibold text-blue-600 hover:bg-blue-50 md:px-8 md:py-4"
            >
              Start Shopping
            </Link>
            {isGuest && (
              <Link
                to="/auth/login"
                className="rounded-lg border-2 border-white px-5 py-3 font-semibold text-white hover:bg-white/10 md:px-8 md:py-4"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
