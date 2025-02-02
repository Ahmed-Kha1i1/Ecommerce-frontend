import useSession from "../../Feasures/Auth/useSession";
import useRecentlyViewedDetails from "../../Feasures/Products/RecentlyViewed/useRecentlyViewedDetails";
import HeroSection from "./LandingPageSections/HeroSection";
import RecentlyViewedSection from "./LandingPageSections/RecentlyViewedSection";
import TrendingCategories from "./LandingPageSections/TrendingCategories";
import SpecialOffers from "./LandingPageSections/SpecialOffers";
import TrustIndicators from "./LandingPageSections/TrustIndicators";
// import FeaturedProducts from "./LandingPageSections/FeaturedProducts";
import CustomerTestimonials from "./LandingPageSections/CustomerTestimonials";

function LandingPage() {
  const { isGuest } = useSession();
  const {
    orderedProductsDetails: recentlyViewed = [],
    isLoading: isLoadingRecentlyViewed,
  } = useRecentlyViewedDetails();

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection isGuest={isGuest} />

      <RecentlyViewedSection
        recentlyViewed={recentlyViewed}
        isLoading={isLoadingRecentlyViewed}
      />

      <TrendingCategories />
      <SpecialOffers />
      <TrustIndicators />
      {/* <FeaturedProducts /> */}
      <CustomerTestimonials />
    </div>
  );
}

export default LandingPage;
