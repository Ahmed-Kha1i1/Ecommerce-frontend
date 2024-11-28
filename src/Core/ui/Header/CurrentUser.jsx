import CurrentUserMenu from "./CurrentUserMenu";
import ToggleCurrentUser from "./ToggleCurrentUser";

function CurrentUser() {
  return (
    <>
      <div className="ml-3 flex items-center">
        <ToggleCurrentUser />
        <CurrentUserMenu />
      </div>
    </>
  );
}

export default CurrentUser;
