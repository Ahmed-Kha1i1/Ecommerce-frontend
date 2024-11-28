import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="basis-full p-5 pt-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
