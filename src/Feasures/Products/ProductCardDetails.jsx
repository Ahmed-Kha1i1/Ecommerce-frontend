import { BiCartDownload } from "react-icons/bi";
import Stars from "./Filters/Stars";

function ProductCardDetails() {
  return (
    <div className="flex flex-1 flex-col p-5 pb-5">
      <a href="#">
        <h5
          className="max-h-[3.5rem] overflow-hidden text-ellipsis whitespace-normal text-xl font-semibold leading-[1.75rem] tracking-tight text-gray-900"
          style={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport Apple Watch
          Series 7 GPS
        </h5>
      </a>
      <div className="mb-5 mt-2.5 flex items-center">
        <Stars starsNumber={5} />
        <span className="ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
          5.0
        </span>
      </div>

      <div className="mb-1">
        <span className="mr-2 text-3xl font-bold text-gray-900">$599</span>
        <del className="text-xl font-semibold text-gray-400">$699</del>
      </div>

      <a
        href="#"
        className="mt-4 flex w-full items-center justify-center gap-3 self-end rounded-lg bg-blue-700 px-5 py-2.5 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <BiCartDownload className="size-5" />
        <span>Add to cart</span>
      </a>
    </div>
  );
}

export default ProductCardDetails;
