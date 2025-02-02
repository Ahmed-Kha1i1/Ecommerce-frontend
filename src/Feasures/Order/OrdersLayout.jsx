import { NavLink, Outlet } from "react-router-dom";
import AccountTitle from "../Customers/AccountTitle";

function OrdersLayout() {
  return (
    <div className="flex h-full flex-col">
      <AccountTitle>Orders</AccountTitle>
      <nav className="order-nav">
        <NavLink to="/Account/Orders/index">Ongoing/Delivered</NavLink>
        <NavLink to="/Account/Orders/Closed">Canceled/Returned</NavLink>
      </nav>
      <hr />
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default OrdersLayout;
