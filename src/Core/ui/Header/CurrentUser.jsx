import { FaUserShield } from "react-icons/fa";
import useCurrentCustomer from "../../../Feasures/Customers/Hooks/useCurrentCustomer";
import CurrentUserMenu from "./CurrentUserMenu";
import LoadingUser from "./LoadingUser";
import useHoverWithDelay from "../../Hooks/useHoverWithDelay";
import SignMenu from "../../../Feasures/Auth/SignMenu";
import { useEffect } from "react";
import useSession from "../../../Feasures/Auth/useSession";

function CurrentUser() {
  const { isLoading, customer } = useCurrentCustomer();
  const { isGuest, isAutoLogin } = useSession();
  const {
    isHovered: showMenu,
    handleMouseEnter,
    handleMouseLeave,
    onClose,
    menuRef,
  } = useHoverWithDelay();

  useEffect(() => {
    onClose();
  }, [isGuest]);

  return (
    <div className="ml-3 flex min-w-16 items-center">
      <div className="relative">
        <div
          className="btn relative flex cursor-pointer flex-col items-center justify-center rounded-lg p-3 text-sm text-white xs:flex-row"
          id="user-menu-button-2"
          aria-expanded="false"
          data-dropdown-toggle="dropdown-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="sr-only">Open user menu</span>

          {isLoading || isAutoLogin ? (
            <LoadingUser />
          ) : customer ? (
            <>
              <FaUserShield className="mr-1 h-5 w-5 xs:mr-2" />{" "}
              <span className="text-center xs:text-inherit">
                Hi, {customer.firstName}
              </span>{" "}
            </>
          ) : (
            <a
              href="/auth/login"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-10"
            >
              Sign in
            </a>
          )}
        </div>
        <div
          ref={menuRef}
          className="absolute -right-10 top-[calc(100%+10px)] z-50 my-4 w-60 rounded bg-white"
          style={{
            margin: "0px",
          }}
        >
          {showMenu && !isLoading ? (
            customer ? (
              <CurrentUserMenu customer={customer} onClose={onClose} />
            ) : (
              <SignMenu onClose={onClose} />
            )
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CurrentUser;
