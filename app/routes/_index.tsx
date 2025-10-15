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
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <img
              src="/slide1.png"
              alt="Man with Van Dubai - Professional Moving Services"
              className="mx-auto rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxHeight: "400px" }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
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
              Choose from our variety of well-maintained vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/pickup-truck-rental-dubai.jpeg"
                  alt="1.5 Ton Pickup Truck Dubai"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+MS41IFRvbiBQaWNrdXA8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1.5 Ton Pickup</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for larger items and commercial deliveries. Spacious
                  and reliable for your heavy-duty transport needs.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    Best for: Large Items
                  </span>
                  <a
                    href="tel:+971564639117"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/hiace-delivery-van-dubai.jpg"
                  alt="Hiace Delivery Van Dubai"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RGVsaXZlcnkgVmFuPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Delivery Van</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for business deliveries, furniture transport, and
                  medium-sized moving jobs around Dubai.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    Best for: Business Use
                  </span>
                  <a
                    href="tel:+971564639117"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/1-ton-pickup-truck-man-van-dubai.jpg"
                  alt="1 Ton Pickup Truck Man Van Dubai"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDIwMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iNjAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjc3NDhGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+MSBUb24gUGlja3VwPC90ZXh0Pgo8L3N2Zz4K';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">1 Ton Pickup</h3>
                <p className="text-gray-600 mb-4">
                  Compact yet powerful option for personal moves, luggage
                  delivery, and smaller commercial needs.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    Best for: Personal Use
                  </span>
                  <a
                    href="tel:+971564639117"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+971564639117"
                className="text-blue-600 hover:text-blue-800 text-lg"
              >
                +971 56 463 9117
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:manwithavanindubai@gmail.com"
                className="text-blue-600 hover:text-blue-800 text-lg"
              >
                manwithavanindubai@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">9:00 AM - 7:00 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Al Quoz Industrial Area 2, Dubai</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Move?</h3>
            <p className="text-xl mb-6">
              Contact us now for a quick quote and professional service
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+971564639117"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/971564639117"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                WhatsApp
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
                  className="text-green-400 hover:text-green-300"
                >
                  💬 WhatsApp
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