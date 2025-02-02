import PaymentMethod from "./PaymentMethod";
import Spinner from "../../Core/ui/Spinner";
import useDefaultAddress from "../Customers/Addresses/useDefaultAddress";
import useCurrentCustomer from "../Customers/Hooks/useCurrentCustomer";
import { OrderPageSummary } from "../Cart/OrderSummary";
import { useState } from "react";
import { paymentMethods } from "../../Constants";
import useAddOrder from "./useAddOrder";
import ErrorFallback from "../../Core/ui/ErrorFallback";
function CheckoutSummary() {
  const {
    isLoading: loadingdefaultAddress,
    defaultAddress,
    error: defaultAddressError,
  } = useDefaultAddress();
  const { customer, isLoading: loadingCustomer, error } = useCurrentCustomer();
  const { order, isLoading: loadingAddOrder } = useAddOrder();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0],
  );

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  function onOrder(e) {
    e.preventDefault();
    order({
      paymentMethod: selectedPaymentMethod == paymentMethods[0] ? 0 : 1,
    });
  }
  if (loadingdefaultAddress || loadingCustomer) {
    return <Spinner />;
  }
  if (defaultAddressError || error)
    return <ErrorFallback error={defaultAddressError || error} />;
  return (
    <section className="">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 lg:grid-cols-[3fr_1fr] lg:gap-8">
          <div className="min-w-0 flex-1 space-y-8 rounded-md border border-gray-200 bg-white p-4 md:p-6">
            {/* Customer Address */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                1- Customer Address
              </h3>
              <div className="ml-4 mt-3 text-gray-700">
                <p className="text-base">{`${customer.firstName} ${customer.lastName}`}</p>
                <p className="mt-1 text-sm text-dark-dray">{`${defaultAddress.address1}${defaultAddress.address2 ? ", " + defaultAddress.address2 : ""} | ${defaultAddress.city} - ${defaultAddress.state}, ${defaultAddress.country.name} | ${customer.phoneNumber}`}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                2- Payment
              </h3>

              {/* Payment Methods */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <PaymentMethod
                  id={paymentMethods[0]}
                  label="Payment on delivery"
                  description="+$15 payment processing fee"
                  checked={selectedPaymentMethod === paymentMethods[0]}
                  onChange={() => handlePaymentMethodChange(paymentMethods[0])}
                />
                <PaymentMethod
                  id={paymentMethods[1]}
                  label="Credit Card"
                  description="Pay with your credit card"
                  checked={selectedPaymentMethod === paymentMethods[1]}
                  onChange={() => handlePaymentMethodChange(paymentMethods[1])}
                />
              </div>
            </div>
          </div>
          <OrderPageSummary
            paymentMethod={selectedPaymentMethod}
            loadingAddOrder={loadingAddOrder}
            onOrder={onOrder}
          />
        </div>
      </form>
    </section>
  );
}

export default CheckoutSummary;
