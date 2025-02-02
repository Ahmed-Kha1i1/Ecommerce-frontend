import { Outlet, useNavigate } from "react-router-dom";
import useCurrentCustomer from "../Customers/Hooks/useCurrentCustomer";
import { useEffect } from "react";

function Checkout() {
  const { customer } = useCurrentCustomer();
  const navigate = useNavigate();
  useEffect(() => {
    if (customer && !customer.hasDefaultAddress) {
      navigate("/Account/Addresses/Add");
    }
  }, [customer]);
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Checkout;
