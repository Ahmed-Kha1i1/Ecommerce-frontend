import { useRoutes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
function Router() {
  const routes = [
    {
      index: true,
      path: "/",
      element: <Dashboard />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
