import { useRoutes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AppLayout from "../ui/AppLayout";
function Router() {
  const routes = [
    {
      element: <AppLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default Router;
