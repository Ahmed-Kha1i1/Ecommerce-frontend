import { Link } from "react-router-dom";

function HomeLogo() {
  return (
    <Link
      to="/"
      className="xs:ml-2 xs:flex-row ml-1 flex flex-col items-center justify-center md:mr-24"
    >
      <img src="/ecommerce.ico" className="xs:h-8 mr-3 h-6" alt="Logo" />
      <span className="xs:text-xl self-center whitespace-nowrap text-base font-semibold text-white sm:text-2xl">
        Ecommerce
      </span>
    </Link>
  );
}

export default HomeLogo;
