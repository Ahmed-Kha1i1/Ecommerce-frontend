const trustFeatures = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Free shipping on orders over $50",
  },
  {
    icon: "🔒",
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    icon: "💎",
    title: "Quality Products",
    description: "Handpicked items",
  },
  {
    icon: "💬",
    title: "24/7 Support",
    description: "Dedicated support team",
  },
];

function TrustIndicators() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {trustFeatures.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-gray-50 p-6 text-center"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustIndicators;
