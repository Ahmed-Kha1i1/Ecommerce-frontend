/* eslint-disable no-unreachable */
import SetDefault from "./SetDefault";
import AddressActions from "./AddressActions";
/* eslint-disable react/prop-types */
function Address({ address }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-md border ${address.isDefault ? "bg-orange-100" : "bg-white"} pt-2`}
    >
      <ul className="space-y-2 px-2 text-dark-dray">
        <li>{address.address1}</li>
        {address.address2 && <li>{address.address2}</li>}
        <li>{address.postalCode}</li>
        <li>
          {address.city} {address?.country.name}
        </li>
        <li>{address.state}</li>
      </ul>
      <div className="mt-2 flex items-center justify-between border-t border-gray-300 p-2">
        <SetDefault address={address} />
        <AddressActions address={address} />
      </div>
    </div>
  );
}

export default Address;
