import CategoriesExplorer from "../../../Feasures/Products/CategoriesExplorer";
import Cart from "./Cart";
import CategorySearch from "./CategorySearch";
import CurrentUser from "./CurrentUser";
import HomeLogo from "./HomeLogo";

function Header() {
  return (
    <nav className="w-full bg-main-dark">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center justify-between">
          <div className="flex items-center justify-start">
            <CategoriesExplorer />
            <HomeLogo />
          </div>

          <CategorySearch />
          <div className="ml-1 flex items-center justify-end gap-1 xs:ml-2 xs:gap-2">
            <CurrentUser />
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
