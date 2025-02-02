import { Outlet } from "react-router-dom";
import AccountSide from "./AccountSide";

function Account() {
  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Your Account</h1>
      <div className="grid grid-cols-8 gap-3 pt-3 sm:grid-cols-10">
        <AccountSide />

        <div className="relative col-span-8 overflow-hidden rounded-md sm:bg-gray-50 sm:px-8 sm:shadow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Account;
