/* eslint-disable react/prop-types */
export default function AddressDetails({ orderAddress }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-xl font-semibold">Shipping Address</h2>
      </div>
      <div className="rounded-lg border p-4">
        <p>{orderAddress.address1}</p>
        {orderAddress.address2 && <p>{orderAddress.address2}</p>}
        <p>
          {orderAddress.city}, {orderAddress.state} {orderAddress.postalCode}
        </p>
        {orderAddress.country && <p>{orderAddress.country.name}</p>}
      </div>
    </div>
  );
}
