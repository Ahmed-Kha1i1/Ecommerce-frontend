/* eslint-disable react/prop-types */
import ItemPrice from "./ItemPrice";
import ItemDiscount from "./ItemDiscount";
import Variations from "./Variations";
import useProductVariations from "./useProductVariations";
import ProductSummary from "./ProductSummary";
import AddItem from "./AddItem";

function ProductInformation({ product, selectedItem, onSelectItem }) {
  const productItems = product.productItems;
  const isOneItem = product.productItems.length === 1;

  const { variations, selectedVariations, enabledValues, onSelect } =
    useProductVariations({ productItems, onSelectItem });

  return (
    <div className="mt-3 flex flex-col justify-between px-4 md:mt-0 md:flex-1">
      <div className="relative">
        <ProductSummary product={product} />
        <div className="my-4 flex items-center space-x-4">
          <div>
            <div className="flex rounded-lg bg-gray-100 px-3 py-2">
              <span className="mr-1 mt-1 text-xl text-indigo-400">$</span>
              <ItemPrice
                productItems={productItems}
                selectedItem={selectedItem}
              />
            </div>
          </div>
          <ItemDiscount selectedItem={selectedItem} />
        </div>
      </div>
      <Variations
        enabledValues={enabledValues}
        isOneItem={isOneItem}
        onSelect={onSelect}
        selectedItem={selectedItem}
        selectedVariations={selectedVariations}
        variations={variations}
      />
      {/* flex space-x-4 */}
      <div className="mt-auto py-4">
        <AddItem selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default ProductInformation;
