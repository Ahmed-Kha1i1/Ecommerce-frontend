const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Buyer",
    image: "👩",
    quote:
      "Amazing selection of products and the delivery was super fast. Will definitely shop here again!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Loyal Customer",
    image: "👨",
    quote:
      "The customer service is outstanding. They went above and beyond to help me with my purchase.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "New Customer",
    image: "👩",
    quote:
      "Great prices and quality products. The website is easy to navigate and checkout was smooth.",
    rating: 5,
  },
];

function CustomerTestimonials() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="sm:text-3xlfont-bold mb-4 text-2xl text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Don&apos;t just take our word for it - hear what our valued
            customers have to say about their shopping experience
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 text-3xl sm:text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 text-yellow-400">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="italic text-gray-600">{`"${testimonial.quote}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
