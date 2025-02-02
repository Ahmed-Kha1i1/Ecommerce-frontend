import AddressForm from "./AddressForm";
import GoBack from "../../../Core/ui/GoBack";

function AddAddress() {
  return (
    <div>
      <GoBack link="/Account/Addresses" title="Add New Address" />
      <AddressForm />
    </div>
  );
}

export default AddAddress;
