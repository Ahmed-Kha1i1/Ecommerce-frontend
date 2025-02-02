import useRecentlyViewedDetails from "../../Feasures/Products/RecentlyViewed/useRecentlyViewedDetails";
import Spinner from "../../Core/ui/Spinner";
import Section from "../ui/Section";
import ProductCard from "../../Feasures/Products/ProductCard";
import ErrorFallback from "../ui/ErrorFallback";

function BrowsingHistoryPage() {
  const { isLoading, error, orderedProductsDetails } =
    useRecentlyViewedDetails();

  if (error) return <ErrorFallback error={error} />;

  if (isLoading) return <Spinner />;

  return (
    <Section title="Recently Viewed Products">
      <div className="grid gap-4 sm:grid-cols-3 sm:justify-between xl:grid-cols-4 2xl:grid-cols-5">
        {orderedProductsDetails.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </Section>
  );
}

export default BrowsingHistoryPage;
