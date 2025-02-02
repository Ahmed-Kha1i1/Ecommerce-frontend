/* eslint-disable no-unreachable */
import Spinner from "../../../Core/ui/Spinner";
import AddressForm from "./AddressForm";
import { useParams } from "react-router-dom";
import useAddress from "./useAddress";
import ErrorFallback from "../../../Core/ui/ErrorFallback";

function EditAddressForm() {
  const { id } = useParams();
  const { isLoading, address, error } = useAddress(id);

  if (isLoading) return <Spinner />;

  if (error) return <ErrorFallback error={error} />;

  return <AddressForm address={address} />;
}

export default EditAddressForm;
