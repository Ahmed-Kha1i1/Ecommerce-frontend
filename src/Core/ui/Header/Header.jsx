import Cart from "./Cart";
import CategorySearch from "./CategorySearch";
import CurrentUser from "./CurrentUser";
import HomeLogo from "./HomeLogo";
import Notification from "./Notification";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <nav className="bg-main-dark w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center justify-between">
          <div className="flex items-center justify-start">
            <Sidebar />
            <HomeLogo />
          </div>

          <CategorySearch />
          <div className="flex items-center justify-end">
            <div className="-mb-1 mr-3 hidden sm:block">
              <span></span>
            </div>

            <Notification />
            <Cart />
            <CurrentUser />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
