/* eslint-disable react/prop-types */
import useSignOut from "../../../Feasures/Auth/useSignOut";
import MenuItem from "./MenuItem";
function CurrentUserMenu({ customer }) {
  const { isLoading, signOut } = useSignOut();

  function handleSignOut() {
    signOut();
  }
  return (
    <div
      className="list-none divide-y divide-gray-200 rounded bg-white text-base shadow-soft-shadow"
      id="dropdown-2"
      data-popper-placement="bottom"
    >
      <div className="px-4 py-3 text-center" role="none">
        <p className="text-sm text-gray-900" role="none">
          {customer.firstName}
        </p>
        <p className="truncate text-sm font-medium text-gray-900" role="none">
          {customer.email}
        </p>
      </div>
      <ul className="py-1" role="none">
        <MenuItem text="Account" to="/Account/Settings" />
        <MenuItem text="Addresses" to="/Account/Addresses" />
        <MenuItem
          text="Sign out"
          onClick={handleSignOut}
          disabled={isLoading}
        />
      </ul>
    </div>
  );
}

export default CurrentUserMenu;
