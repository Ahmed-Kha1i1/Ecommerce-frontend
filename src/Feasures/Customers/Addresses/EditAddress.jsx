import { Link } from "react-router-dom";
import AccountTitle from "../AccountTitle";
import { GoArrowLeft } from "react-icons/go";
import EditAddressForm from "./EditAddressForm";

function EditAddress() {
  return (
    <div>
      <AccountTitle>
        <div className="flex items-center gap-4">
          <Link to={`/Account/Addresses`} className="text-3xl">
            <GoArrowLeft />
          </Link>
          <h1 className="text-2xl font-semibold">Edit Address</h1>
        </div>
      </AccountTitle>
      <EditAddressForm />
    </div>
  );
}

export default EditAddress;
