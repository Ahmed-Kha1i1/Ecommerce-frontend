import ManageCategories from "../../Core/ui/Header/ManageCategories";
import ToggleSidebar from "../../Core/ui/Header/ToggleSidebar";
import DrawerOverlay from "../Products/Filters/DrawerOverlay";

function CategoriesExplorer() {
  return (
    <DrawerOverlay
      position="left"
      title="Categories"
      MobileOnly={false}
      renderTrigger={(Open) => (
        <ToggleSidebar
          onClick={() => {
            Open();
          }}
        />
      )}
      renderChildren={(Close) => (
        <div className="h-full">
          <ManageCategories onClose={Close} />
        </div>
      )}
    />
  );
}

export default CategoriesExplorer;
