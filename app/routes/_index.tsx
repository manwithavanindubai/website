import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Van with Man Dubai - Professional Man & Van Services in Dubai" },
    {
      name: "description",
      content:
        "Professional Man with Van services in Dubai. Affordable pickup truck rental with driver, delivery van hire, luggage delivery, and cargo transport. Call +971564639117",
    },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚐 Professional Van Services in Dubai
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hire a Man and Van <br />
            <span className="text-blue-600">in Dubai</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional operation at extremely competitive pricing. We provide
            man and van hire services for all your transport requirements in
            Dubai.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="tel:+971564639117"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              📞 Call +971 56 463 9117
            </a>
            <a
              href="https://wa.me/971564639117"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Quality Text */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Why Choose Our Quality Service?
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        Premium Service Quality
                      </h4>
                      <p className="text-gray-600">
                        Professional drivers with years of experience ensuring
                        your items are handled with utmost care and precision.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        Fully Insured & Licensed
                      </h4>
                      <p className="text-gray-600">
                        Complete insurance coverage and proper licensing give
                        you peace of mind during every transport.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        5-Star Customer Satisfaction
                      </h4>
                      <p className="text-gray-600">
                        Consistently rated highly by customers across Dubai for
                        reliability, punctuality, and professional service.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                      <span className="text-2xl">🚚</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">
                        Modern Fleet Vehicles
                      </h4>
                      <p className="text-gray-600">
                        Well-maintained, clean vehicles equipped with proper
                        loading equipment for safe transport of all items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Video */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-900 max-w-sm mx-auto">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="/video.png"
                >
                  <source src="/1000007429.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none rounded-lg"></div>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                🎥 See our professional van services in action
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-semibold">Quick Response</h3>
              <p className="text-gray-600">Get moving as soon as you like</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing for all customers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-2">✅</div>
              <h3 className="font-semibold">Professional Staff</h3>
              <p className="text-gray-600">Trained and experienced drivers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-xl text-gray-600">
              Professional vehicles designed for different transport needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal & Furniture Moving */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img
                  src="/1000007437.jpg"
                  alt="Van Loading Area - Perfect for Furniture and Personal Items"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9hZGluZyBBcmVhPC90ZXh0Pgo8L3N2Zz4K";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Personal & Furniture Moving
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Spacious loading area perfect for furniture transport, home
                  moves, and personal relocations. Our van's cargo space is
                  designed to handle delicate items with care and provide ample
                  room for small to medium-sized moving jobs.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Furniture & Appliance Moving
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Home & Apartment Relocations
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Student Moving Services
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Safe & Secure Transport
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-semibold text-lg">
                    Perfect for: Personal Use
                  </span>
                  <a
                    href="tel:+971564639117"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </div>

            {/* Business & Fast Delivery */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img
                  src="/1000007436.jpg"
                  alt="Professional Delivery Van - Fast Business Transport"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGVsaXZlcnkgVmFuPC90ZXh0Pgo8L3N2Zz4K";
                  }}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Business & Fast Delivery
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Professional delivery van optimized for business deliveries
                  and quick transport. Our reliable vehicle is designed to
                  navigate through Dubai traffic efficiently while ensuring your
                  cargo reaches its destination on time.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Same-Day Business Deliveries
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Fast Traffic Navigation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      E-commerce & Retail Support
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">
                      Time-Critical Deliveries
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-green-600 font-semibold text-lg">
                    Perfect for: Business Use
                  </span>
                  <a
                    href="tel:+971564639117"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Services in Action
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Watch how our professional team handles your moving and delivery
            needs with care and efficiency
          </p>

          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-black">
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/slide1.png"
            >
              <source src="/1000007429.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold mb-1">Professional Loading</h3>
              <p className="text-gray-400 text-sm">
                Expert handling of your items
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold mb-1">Quick Service</h3>
              <p className="text-gray-400 text-sm">
                Efficient and timely delivery
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-semibold mb-1">Safe Transport</h3>
              <p className="text-gray-400 text-sm">Your items arrive safely</p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Advantages */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Van with Man Dubai?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let our man with a van service take care of your transport
                requirements. We provide a professional operation at extremely
                competitive pricing, ensuring your peace of mind.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">No Monthly Payments</h4>
                    <p className="text-gray-600">
                      Pay only when you need our services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Well-Maintained Vehicles</h4>
                    <p className="text-gray-600">
                      Large variety of professional vehicles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Trained Drivers</h4>
                    <p className="text-gray-600">
                      Professional staff with smooth driving style
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Affordable for All</h4>
                    <p className="text-gray-600">
                      Best prices for new and returning customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">
                Who Can Use Our Services?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🏪</div>
                  <p className="font-semibold">Small Businesses</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🥖</div>
                  <p className="font-semibold">Bakery Shops</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🍖</div>
                  <p className="font-semibold">Restaurants</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">🛒</div>
                  <p className="font-semibold">Grocery Shops</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">📦</div>
                  <p className="font-semibold">E-commerce</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl mb-2">👤</div>
                  <p className="font-semibold">Individuals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to move? Contact us for professional van services in Dubai.
              We're here to make your transport needs hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">📞</div>
              <h3 className="font-semibold mb-3 text-center text-lg">Phone</h3>
              <a
                href="tel:+971564639117"
                className="text-blue-600 hover:text-blue-800 text-lg block text-center font-medium"
              >
                +971 56 463 9117
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">📧</div>
              <h3 className="font-semibold mb-3 text-center text-lg">Email</h3>
              <a
                href="mailto:manwithavanindubai@gmail.com"
                className="text-blue-600 hover:text-blue-800 text-sm block text-center font-medium break-words"
              >
                manwithavanindubai@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">⏰</div>
              <h3 className="font-semibold mb-3 text-center text-lg">
                Working Hours
              </h3>
              <p className="text-gray-600 text-center">9:00 AM - 7:00 PM</p>
              <p className="text-gray-500 text-sm text-center mt-1">
                7 Days a Week
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4 text-center">📍</div>
              <h3 className="font-semibold mb-3 text-center text-lg">
                Location
              </h3>
              <p className="text-gray-600 text-center">
                Al Quoz Industrial Area 2
              </p>
              <p className="text-gray-600 text-center">Dubai, UAE</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-10 rounded-xl text-white shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Move?</h3>
              <p className="text-xl mb-2">
                Contact us now for a quick quote and professional service
              </p>
              <p className="text-blue-100">
                Professional • Reliable • Affordable
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
              <a
                href="tel:+971564639117"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center flex items-center justify-center gap-2"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/971564639117"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-400 text-center">
              <a
                href="mailto:manwithavanindubai@gmail.com"
                className="text-blue-100 hover:text-white transition-colors text-lg"
              >
                📧 manwithavanindubai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Van with Man Dubai</h3>
              <p className="text-gray-300 mb-4">
                Professional man and van services in Dubai. We provide reliable,
                affordable transport solutions for businesses and individuals.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+971564639117"
                  className="text-blue-400 hover:text-blue-300"
                >
                  📞 +971 56 463 9117
                </a>
                <a
                  href="https://wa.me/971564639117"
                  className="text-green-400 hover:text-green-300 flex items-center gap-2"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="flex-shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:manwithavanindubai@gmail.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  📧 manwithavanindubai@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Man with Van</li>
                <li>Pickup Truck Rental</li>
                <li>Delivery Van Hire</li>
                <li>Luggage Delivery</li>
                <li>Cargo Transport</li>
                <li>Rubbish Removal</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📞 +971 56 463 9117</p>
                <p>📧 manwithavanindubai@gmail.com</p>
                <p>⏰ 9:00 AM - 7:00 PM</p>
                <p>📍 Al Quoz Industrial Area 2</p>
                <p>Dubai, UAE</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 Van with Man Dubai. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}