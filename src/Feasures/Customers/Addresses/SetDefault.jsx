import useSetDefaultAddress from "./useSetDefaultAddress";

/* eslint-disable react/prop-types */
function SetDefault({ address }) {
  const { isLoading, setAsDefault } = useSetDefaultAddress();


  function onClick() {
    setAsDefault({ addressId: address.id });
  }

  if (address.isDefault) {
    return <div className="p-1 text-gray-500">Set as default</div>;
  } else {
    return (
      <button
        className="rounded-md px-2 py-1 font-semibold text-orange-600 transition hover:bg-orange-200"
        disabled={isLoading}
        onClick={onClick}
      >
        Set as default
      </button>
    );
  }
}

export default SetDefault;
