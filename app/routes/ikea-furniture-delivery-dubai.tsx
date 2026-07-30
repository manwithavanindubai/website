import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 52 806 5642";
const phoneLink = "tel:+971528065642";
const whatsappLink = "https://wa.me/971528065642";

const services = [
  {
    title: "IKEA Store Pickup",
    text: "Collection from IKEA Dubai locations and direct delivery to your home, apartment, villa or office.",
  },
  {
    title: "Flat-Pack Furniture Delivery",
    text: "Transport for wardrobes, beds, tables, shelving units, cabinets, chairs and other boxed furniture.",
  },
  {
    title: "Single Furniture Delivery",
    text: "Suitable for one sofa, bed, table, wardrobe, cabinet or other furniture item.",
  },
  {
    title: "Furniture Assembly Support",
    text: "Basic assembly can be arranged when requested in advance and confirmed with clear item details.",
  },
  {
    title: "Furniture Disassembly",
    text: "Selected furniture can be dismantled before transport when access or size requires it.",
  },
  {
    title: "Same-Day Furniture Delivery",
    text: "Urgent delivery may be arranged depending on store timing, route, access and vehicle availability.",
  },
];

const furnitureItems = [
  "Beds and mattresses",
  "Wardrobes and cabinets",
  "Dining tables and chairs",
  "Sofas and armchairs",
  "TV units and sideboards",
  "KALLAX shelving units",
  "Office desks and chairs",
  "Chest of drawers",
  "Bedside tables",
  "Bookcases and shelves",
  "Flat-pack boxes",
  "Home accessories and cartons",
];

const steps = [
  {
    number: "01",
    title: "Send Product Details",
    text: "Share product names, quantities, package sizes, pickup location and delivery address.",
  },
  {
    number: "02",
    title: "Confirm Van and Helper",
    text: "We check vehicle capacity, access and whether loading or assembly help is required.",
  },
  {
    number: "03",
    title: "Pickup and Delivery",
    text: "The furniture is collected and delivered directly to the agreed location.",
  },
];

const reasons = [
  "Direct van delivery across Dubai",
  "Suitable for flat-pack and assembled furniture",
  "Optional helper for carrying",
  "Basic assembly by prior arrangement",
  "Apartment, villa and office delivery",
  "Call and WhatsApp booking",
];

const areas = [
  "Dubai Festival City",
  "Jebel Ali",
  "Dubai Marina",
  "JBR",
  "JLT",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "DIFC",
  "City Walk",
  "Jumeirah",
  "Al Barsha",
  "JVC",
  "JVT",
  "Dubai Hills",
  "Arabian Ranches",
  "Mirdif",
  "Dubai Silicon Oasis",
  "International City",
  "Dubai South",
  "Expo City Dubai",
  "Al Quoz",
  "Deira",
  "Bur Dubai",
  "Karama",
  "Al Garhoud",
  "Al Qusais",
  "Discovery Gardens",
  "Al Furjan",
  "Dubai Investment Park",
  "Town Square",
  "Damac Hills",
];

const faqs = [
  {
    question: "Can you collect furniture directly from IKEA Dubai?",
    answer:
      "Yes. Store pickup can be arranged when the collection location, order details, pickup time and contact information are confirmed in advance.",
  },
  {
    question: "Do you assemble IKEA furniture?",
    answer:
      "Basic assembly may be arranged depending on the item type, quantity and tools required. Please send product names or photos before booking.",
  },
  {
    question: "Can you deliver large wardrobes and beds?",
    answer:
      "Yes, when the packages or furniture fit safely in the vehicle. Large assembled items may need dismantling before transport.",
  },
  {
    question: "Do you provide a helper?",
    answer:
      "A helper can be arranged for loading, unloading, carrying, dismantling or assembly. Please request this before confirmation.",
  },
  {
    question: "Can you deliver furniture on the same day?",
    answer:
      "Same-day service may be available depending on store readiness, route, building access and vehicle availability.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send the pickup location, delivery location, product list or photos, preferred time, access details and whether you need a helper.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "IKEA Furniture Delivery Dubai | Pickup, Van & Assembly",
  },
  {
    name: "description",
    content:
      "IKEA furniture delivery Dubai for store pickup, flat-pack transport, furniture moving and assembly support. Call or WhatsApp +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/ikea-furniture-delivery-dubai",
  },
  {
    property: "og:title",
    content: "IKEA Furniture Delivery Dubai | Pickup, Van & Assembly",
  },
  {
    property: "og:description",
    content:
      "Direct van delivery for IKEA flat-pack furniture, beds, wardrobes, tables, sofas and office furniture across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/ikea-furniture-delivery-dubai",
  },
  {
    property: "og:image",
    content: "https://manwithavanindubai.com/1000007421.jpg",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
];

export default function IkeaFurnitureDeliveryDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IKEA Furniture Delivery Dubai",
    serviceType: "Furniture Pickup, Delivery and Assembly Support",
    url: "https://manwithavanindubai.com/ikea-furniture-delivery-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "IKEA furniture pickup and delivery for flat-pack furniture, beds, wardrobes, tables, sofas and office items across Dubai.",
    areaServed: "Dubai, United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971528065642",
      areaServed: "Dubai, United Arab Emirates",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://manwithavanindubai.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IKEA Furniture Delivery Dubai",
        item: "https://manwithavanindubai.com/ikea-furniture-delivery-dubai",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/1000007421.jpg"
          alt="IKEA furniture delivery van in Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/35" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-white">IKEA Furniture Delivery Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Store Pickup • Flat-Pack Delivery • Helper • Assembly
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              IKEA Furniture Delivery Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Direct van service for IKEA pickup, flat-pack furniture, beds,
              wardrobes, tables, sofas and office furniture across Dubai.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-blue-600 px-7 py-4 text-center text-lg font-bold text-white hover:bg-blue-700"
              >
                Call {phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-7 py-4 text-center text-lg font-bold text-white hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              Send product names, package photos and both locations for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Furniture pickup and delivery
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              A Simple Way to Move IKEA Furniture
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This service is suitable when you need a van for furniture
              collection, store pickup, home delivery or transport between two
              locations.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We can transport flat-pack boxes and selected assembled furniture
              to apartments, villas, offices, hotels and serviced residences.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/1000007422.jpg"
              alt="Cargo van for IKEA furniture delivery"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Flat-pack furniture and boxes ready for delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007421.jpg"
                alt="White van for furniture delivery Dubai"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Delivery options
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              IKEA Furniture Services in Dubai
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                Furniture we transport
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Beds, Wardrobes, Tables, Sofas and More
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Capacity depends on package dimensions, furniture size and safe
                loading space. Send product details or clear photos before
                booking.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {furnitureItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 p-4"
                  >
                    <span className="font-black text-green-600">✓</span>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                Before booking
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Complete Details for an Accurate Quote
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Pickup location or IKEA branch",
                  "Delivery location",
                  "Product names and quantities",
                  "Package dimensions when available",
                  "Lift, stairs and parking access",
                  "Preferred date and time",
                  "Whether a helper is required",
                  "Any assembly or dismantling request",
                ].map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-slate-200">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How IKEA Furniture Delivery Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-slate-900 px-6 py-4 text-center font-bold text-white hover:bg-slate-800"
            >
              Call for a Quote
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
            >
              Send Product Details
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Areas covered
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              IKEA Furniture Delivery Across Dubai
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Helpful information
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-extrabold">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Related services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More Van Services in Dubai
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-6 md:grid-cols-3">
            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">Man with a Van Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                General van transport for furniture, boxes and deliveries.
              </p>
            </a>

            <a
              href="/small-moving-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">Small Moving Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Studio, apartment and small office moving.
              </p>
            </a>

            <a
              href="/boxes-delivery-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">Boxes Delivery Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Moving boxes, cartons, office files and stock delivery.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book IKEA Furniture Delivery in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send the product details, pickup location, delivery address and
            preferred time by phone or WhatsApp.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-white px-7 py-4 text-lg font-bold text-blue-700 hover:bg-blue-50"
            >
              Call {phoneDisplay}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-7 py-4 text-lg font-bold text-white hover:bg-green-600"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black">IKEA Furniture Delivery Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Store pickup, flat-pack delivery, helper and assembly support.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-blue-300">
              Home
            </a>
            <a
              href="/man-with-a-van-in-dubai"
              className="font-bold hover:text-blue-300"
            >
              Man with a Van Dubai
            </a>
            <a
              href="/small-moving-dubai"
              className="font-bold hover:text-blue-300"
            >
              Small Moving Dubai
            </a>
            <a
              href="/boxes-delivery-dubai"
              className="font-bold hover:text-blue-300"
            >
              Boxes Delivery Dubai
            </a>
            <a href={phoneLink} className="font-bold hover:text-blue-300">
              {phoneDisplay}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-green-400 hover:text-green-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
