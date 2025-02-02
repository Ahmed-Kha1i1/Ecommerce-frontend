import ProductsExplorer from "../../Feasures/Products/ProductsExplorer";
import useProductsExplorer from "../../Feasures/Products/useProductsExplorer";
import NoResultsFound from "../../Feasures/Products/NoResultsFound";
import ErrorFallback from "../ui/ErrorFallback";

function ProductsPage() {
  const { products, isLoading, error } = useProductsExplorer();

  if (products && !products?.data.length) {
    return <NoResultsFound />;
  }

  if (error) return <ErrorFallback error={error} />;

  return <ProductsExplorer products={products} isLoadingProducts={isLoading} />;
}

export default ProductsPage;
