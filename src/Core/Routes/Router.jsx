import { Navigate, useRoutes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import AppLayout from "../ui/AppLayout";
import ProductsPage from "../Pages/ProductsPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import AuthLayout from "../Pages/AuthLayout";
import NotFoundPage from "../Pages/NotFoundPage";
import SignIn from "../../Feasures/Auth/SignIn";
import SignUp from "../../Feasures/Auth/SignUp";
import PasswordManager from "../../Feasures/Auth/PasswordManager";
import Account from "../../Feasures/Customers/Account";
import AccountSettings from "../../Feasures/Customers/Settings/AccountSettings";
import Profile from "../../Feasures/Customers/Profile/Profile";
import BrowsingHistoryPage from "../Pages/BrowsingHistoryPage";
import Addresses from "../../Feasures/Customers/Addresses/Addresses";
import CloseAccount from "../../Feasures/Customers/CloseAccount";
import AddAddress from "../../Feasures/Customers/Addresses/AddAddress";
import EditAddress from "../../Feasures/Customers/Addresses/EditAddress";
import CheckoutSummary from "../../Feasures/Order/CheckoutSummary";
import Checkout from "../../Feasures/Order/Checkout";
import OrdersLayout from "../../Feasures/Order/OrdersLayout";
import OngoingsOrders from "../../Feasures/Order/OngoingsOrders";
import ClosedOrders from "../../Feasures/Order/ClosedOrders";
import OrderDetails from "../../Feasures/Order/OrderDetails/OrderDetails";
import ProtectedRoute from "../../Feasures/Auth/ProtectedRoute";
function Router() {
  const routes = [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "Products",
          children: [
            {
              index: true,
              element: <ProductsPage />,
            },
            {
              path: ":id",
              element: <ProductPage />,
            },
          ],
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "WatchList",
          element: <BrowsingHistoryPage />,
        },
        {
          path: "Account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Navigate to="Settings" replace />,
            },
            {
              path: "Settings",
              element: <AccountSettings />,
            },
            {
              path: "Profile",
              element: <Profile />,
            },
            {
              path: "Addresses",
              children: [
                {
                  index: true,
                  element: <Addresses />,
                },
                {
                  path: "Add",
                  element: <AddAddress />,
                },
                {
                  path: "Edit/:id",
                  element: <EditAddress />,
                },
              ],
            },
            {
              path: "Close",
              element: <CloseAccount />,
            },
            {
              path: "Orders",
              children: [
                {
                  index: true,
                  element: <Navigate to="index" replace />,
                },
                {
                  element: <OrdersLayout />,
                  children: [
                    {
                      path: "index",
                      element: <OngoingsOrders />,
                    },
                    {
                      path: "closed",
                      element: <ClosedOrders />,
                    },
                  ],
                },
                {
                  path: "detail/:id",
                  element: <OrderDetails />,
                },
              ],
            },
          ],
        },
        {
          path: "Checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <CheckoutSummary />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="login" replace />,
        },
        {
          path: "login",
          element: <SignIn />,
        },
        {
          path: "register",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/password",
      children: [
        {
          path: "manage",
          index: true,
          element: <PasswordManager />,
        },
      ],
    },
    {
      path: "*", // Catch-all route for 404
      element: <NotFoundPage />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
