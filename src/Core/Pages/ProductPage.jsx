/* eslint-disable react/prop-types */
import { useParams, useSearchParams } from "react-router-dom";
import useProduct from "../../Feasures/Products/UseProduct";
import Spinner from "../ui/Spinner";
import ImageSwitcher from "../../Feasures/Products/Product/ImageSwitcher";
import CategoryBreadcrumbs from "../../Feasures/Products/Product/CategoryBreadcrumbs";
import ProductInformation from "../../Feasures/Products/Product/ProductInformation";
import ProductPageDetails from "../../Feasures/Products/Product/ProductDetails";
import ErrorFallback from "../ui/ErrorFallback.jsx";
import RecentlyViewedTracker from "../../Feasures/Products/RecentlyViewed/RecentlyViewedTracker";
import { useEffect, useState } from "react";

const fakeImages = [
  {
    imageName: "/imac-components.svg",
  },
  {
    imageName: "/imac-back.svg",
  },
  {
    imageName: "/imac-front.svg",
  },
];

function ProductPage() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, product } = useProduct(id);
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle selected item from URL and product data
  useEffect(() => {
    if (!product?.productItems) return;

    const itemId = searchParams.get("itemId");
    const foundItem = product.productItems.find((item) => item.id == itemId);

    if (foundItem) {
      setSelectedItem(foundItem);
    } else if (product.productItems.length == 1) {
      // If no valid item in URL and only one item exists, select it
      setSelectedItem(product.productItems[0]);
      setSearchParams((prev) => {
        prev.set("itemId", product.productItems[0].id);
        return prev;
      });
    } else {
      // Clear invalid itemId from URL
      if (itemId) {
        setSearchParams((prev) => {
          prev.delete("itemId");
          return prev;
        });
      }
      setSelectedItem(null);
    }
  }, [product, searchParams, setSearchParams]);

  // Update URL when selected item changes
  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setSearchParams((prev) => {
      if (item) {
        prev.set("itemId", item.id);
      } else {
        prev.delete("itemId");
      }
      return prev;
    });
  };

  if (isLoading) return <Spinner />;
  if (error) return <ErrorFallback error={error} />;

  return (
    <div className="container mx-auto rounded-md bg-white antialiased">
      <RecentlyViewedTracker productId={id} />
      <div className="py-6">
        {/* Breadcrumbs */}
        <CategoryBreadcrumbs categoryId={product.category.id} />
        {/* Product Details */}
        <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="-mx-4 mb-8 flex flex-col flex-wrap md:flex-row">
            <ImageSwitcher
              images={[...product.productItems[0].images, ...fakeImages]}
              productName={product.name}
            />

            {/* Product Information */}
            <ProductInformation
              product={product}
              selectedItem={selectedItem}
              onSelectItem={handleSelectItem}
            />
          </div>
          <div>
            <ProductPageDetails product={product} selectedItem={selectedItem} />
            <div>
              <h3 className="sub-header pb-1">Product description</h3>
              <p className="my-2 ml-7">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
