import { formatDateToShortFormat } from "../../../Core/utils/FormatUtils";
import { getRateCss } from "../../../Core/utils/helpers";

/* eslint-disable react/prop-types */
function ProductPageDetails({ product, selectedItem }) {
  return (
    <div className="mb-5">
      <h3 className="sub-header pb-1">Product details</h3>
      <ul className="ml-7 flex flex-col gap-2 text-base">
        <li>
          <span>
            <span className="font-semibold">Date First Available : </span>
            <span>
              {selectedItem
                ? formatDateToShortFormat(selectedItem.createdDate)
                : "N/A"}
            </span>
          </span>
        </li>
        <li>
          <span>
            <span className="font-semibold">SKU : </span>
            <span>{selectedItem?.sku || "N/A"}</span>
          </span>
        </li>
        <li>
          <span>
            <span className="font-semibold">Country : </span>
            <span>{product.countryName}</span>
          </span>
        </li>
        <li>
          <span>
            <span className="font-semibold">Condition : </span>
            <span>{product.condition}</span>
          </span>
        </li>
        <li>
          <span>
            <span className="font-semibold">material : </span>
            <span>{product.material || "N/A"}</span>
          </span>
        </li>
        <li>
          <span className="flex-center-h">
            <span className="font-semibold">Customer reviews : </span>
            <span className="flex-center-h gap-2">
              <span className="text-base">{product.stars} </span>
              <i
                className={`a-icon a-icon-star a-star-${getRateCss(product.stars)}`}
              ></i>
              <span className="ml-5 text-sky-700">
                {product.reviews} reviews
              </span>
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default ProductPageDetails;
