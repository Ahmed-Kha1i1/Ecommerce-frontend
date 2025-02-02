import Spinner from "../../../Core/ui/Spinner";
import Address from "./Address";
import useAddresses from "./useAddresses";
import ErrorFallback from "../../../Core/ui/ErrorFallback";

function AllAddresses() {
  const { isLoading, addresses = [], error } = useAddresses();

  if (isLoading) return <Spinner />;

  if (error) return <ErrorFallback error={error} />;

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {addresses.map((address) => {
        return <Address address={address} key={address.id} />;
      })}
    </div>
  );
}

export default AllAddresses;
