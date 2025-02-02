import { Link } from "react-router-dom";
import DeleteAddress from "./DeleteAddress";
import { MdEdit } from "react-icons/md";

/* eslint-disable react/prop-types */
function AddressActions({ address }) {
  return (
    <div className="flex gap-1">
      <Link to={`/Account/Addresses/Edit/${address.id}`}>
        <MdEdit className="h-6 w-6 cursor-pointer text-orange-600" />
      </Link>
      <DeleteAddress address={address} />
    </div>
  );
}

export default AddressActions;
