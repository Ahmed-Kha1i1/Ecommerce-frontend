import { Link, Outlet, useLocation } from "react-router-dom";
import { BASE_URL } from "../../Constants";

function AuthLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname.endsWith("/login");

  return (
    <div className="mx-auto my-4 max-w-lg rounded-xl bg-white p-4 md:my-12 md:p-6">
      <Link to="/" className="mb-10 flex justify-center">
        <img src="/ecommerce.ico" className="mr-3 h-8" alt="Logo" />
        <span className="text-Balck self-center whitespace-nowrap text-xl font-semibold sm:text-2xl">
          Ecommerce
        </span>
      </Link>
      <div className="text-md mb-8 flex justify-center text-base">
        <nav className="auth-layout flex items-center overflow-x-auto rounded-xl bg-gray-500/5 p-1 text-gray-600">
          <Link
            to="/auth/login"
            role="tab"
            className="flex h-8 items-center rounded-lg px-6 py-3 outline-none"
            aria-selected="false"
            aria-label="Sign In"
            data-activelink={isLoginPage}
          >
            Sign In
          </Link>

          <Link
            to="/auth/register"
            role="tab"
            className="rounded-lgpx-6 flex h-8 items-center px-6 py-3 outline-none"
            aria-selected="true"
            aria-label="Sign Up"
            data-activelink={!isLoginPage}
          >
            Sign Up
          </Link>
        </nav>
      </div>
      <div>
        <div className="my-2 flex gap-2">
          <Link
            to={`${BASE_URL}/api/oauth/signin-google`}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-gray-300 bg-white p-2 text-sm font-medium text-black outline-none hover:shadow hover:shadow-violet-200"
          >
            <img
              src="https://tailwindflex.com/images/icons/google.svg"
              className="h-6 w-6"
              alt="google"
            />
            <span>Google</span>
          </Link>
        </div>

        <div className="flex w-full items-center gap-2 py-6 text-sm text-gray-600">
          <div className="h-px w-full bg-gray-200"></div>
          <span className="text-xs">OR</span>
          <div className="h-px w-full bg-gray-200"></div>
        </div>

        <Outlet />
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLoginPage ? (
            <p>
              <span className="mr-2">Don&apos;t have an account?</span>
              <Link to="/auth/register" className="font-medium text-violet-600">
                Sign up
              </Link>
            </p>
          ) : (
            <p>
              <span className="mr-2">Already have an account?</span>
              <Link to="/auth/login" className="font-medium text-violet-600">
                Log in
              </Link>
            </p>
          )}
          <p className="my-4 text-sm text-gray-500">
            <Link
              to="/password/manage"
              className="text-violet-800 hover:text-violet-600"
            >
              Reset your password?
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
