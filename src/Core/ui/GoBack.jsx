/* eslint-disable react/prop-types */
import { GoArrowLeft } from "react-icons/go";
import AccountTitle from "../../Feasures/Customers/AccountTitle";
import { Link } from "react-router-dom";

function GoBack({ link, title, children }) {
  return (
    <AccountTitle>
      <div className="flex items-center gap-4">
        <Link to={link} className="text-2xl">
          <GoArrowLeft />
        </Link>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      {children}
    </AccountTitle>
  );
}

export default GoBack;
