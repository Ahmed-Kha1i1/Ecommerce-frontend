import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logout from "./Logout";

const items = [
  { title: "Account Management", path: "/Account/Settings" },
  { title: "Profile", path: "/Account/Profile" },
  { title: "Addresses", path: "/Account/Addresses" },
  { title: "Recently Viewed", path: "/WatchList" },
  { title: "Close Account", path: "/Account/Close" },
  { title: "Orders", path: "/Account/Orders/index" },
];

function AccountSide() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const currentItem =
    items.find((item) => item.path === location.pathname) || items[0];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <div className="relative my-4 w-56 rounded-md bg-white sm:hidden">
        <input
          className="peer hidden"
          type="checkbox"
          name="select-1"
          id="select-1"
          checked={isOpen}
          onChange={() => setIsOpen(!isOpen)}
        />
        <label
          htmlFor="select-1"
          className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
        >
          {currentItem.title}
        </label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <ul
          className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 ${
            isOpen ? "max-h-56 py-3" : ""
          }`}
        >
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block cursor-pointer px-3 py-2 text-sm transition ${
                    isActive ? "text-blue-600" : "text-slate-600"
                  } hover:bg-blue-700 hover:text-white`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-2 hidden h-[570px] flex-col justify-between rounded-md bg-white p-3 sm:flex">
        <ul className="">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `mt-5 block cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition ${
                    isActive ? "border-l-blue-700 text-blue-700" : ""
                  } hover:border-l-blue-700 hover:text-blue-700`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Logout />
      </div>
    </>
  );
}

export default AccountSide;
