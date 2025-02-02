import { Link } from "react-router-dom";
import AccountTitle from "../AccountTitle";
import AllAddresses from "./AllAddresses";

function Addresses() {
  return (
    <div>
      <AccountTitle>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Addresses</h1>
          <Link
            to={`/Account/Addresses/Add`}
            className="rounded-md bg-orange-600 px-3 py-2 text-base text-white transition hover:bg-orange-400"
          >
            Add New Address
          </Link>
        </div>
      </AccountTitle>
      <AllAddresses />
    </div>
  );
}

export default Addresses;
