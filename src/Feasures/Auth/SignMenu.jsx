import { Link } from "react-router-dom";

function SignMenu() {
  return (
    <div className="flex w-60 flex-col justify-center gap-4 rounded-lg bg-white p-4 text-black shadow-lg">
      <Link
        type="submit"
        to="/auth/login"
        className="mx-auto inline-flex w-24 items-center justify-center rounded-lg bg-blue-700 p-2 py-3 text-sm font-bold text-white outline-none disabled:bg-gray-400"
      >
        Sign in
      </Link>
      <p className="text-sm">
        <span className="mr-2">Don&apos;t have an account?</span>
        <Link className="font-medium text-violet-600" to="/auth/register">
          Sign up
        </Link>
      </p>
    </div>
  );
}

export default SignMenu;
