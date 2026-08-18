import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const moveTypes = [
  {
    title: "Studio Moving",
    text: "Suitable for studio contents, boxes, luggage, small furniture and personal belongings.",
  },
  {
    title: "Small Apartment Moving",
    text: "Ideal for light one-bedroom or partial apartment moves that do not require a large truck.",
  },
  {
    title: "Villa Item Moving",
    text: "Transport selected furniture, boxes, garden items or personal belongings from villas.",
  },
  {
    title: "Small Office Moving",
    text: "Move desks, chairs, computers, printers, files and office boxes across Dubai.",
  },
  {
    title: "Single Furniture Delivery",
    text: "Collection and delivery of sofas, beds, tables, cabinets, chairs and other items.",
  },
  {
    title: "Same-Day Small Move",
    text: "Urgent small moving can be arranged depending on route, access and vehicle availability.",
  },
];

const items = [
  "Moving boxes and cartons",
  "Suitcases and travel bags",
  "Beds and mattresses",
  "Sofas and armchairs",
  "Dining tables and chairs",
  "Office desks and chairs",
  "TV units and cabinets",
  "IKEA furniture",
  "Washing machines and cookers",
  "Small refrigerators",
  "Bicycles and sports equipment",
  "Personal and business items",
];

const bookingSteps = [
  {
    number: "01",
    title: "Send the Details",
    text: "Share pickup, drop-off, item list, photos, access details and preferred time.",
  },
  {
    number: "02",
    title: "Confirm the Vehicle",
    text: "We check whether one van is suitable and whether a helper is required.",
  },
  {
    number: "03",
    title: "Pickup and Delivery",
    text: "The van arrives at the agreed time for direct collection and delivery.",
  },
];

const reasons = [
  "Direct van service for small moves",
  "Suitable for boxes, luggage and furniture",
  "Optional helper for loading and unloading",
  "Dubai-wide pickup and delivery",
  "Clear job details before confirmation",
  "Call and WhatsApp booking",
];

const premiumAreas = [
  "Palm Jumeirah",
  "Dubai Marina",
  "JBR",
  "Bluewaters Island",
  "Downtown Dubai",
  "DIFC",
  "Business Bay",
  "City Walk",
  "Dubai Hills Estate",
  "Emirates Hills",
  "Arabian Ranches",
  "Jumeirah Golf Estates",
];

const otherAreas = [
  "JLT",
  "JVC",
  "JVT",
  "Al Barsha",
  "Barsha Heights",
  "Al Sufouh",
  "Dubai Internet City",
  "Dubai Media City",
  "Dubai Knowledge Park",
  "Umm Suqeim",
  "Jumeirah",
  "Al Wasl",
  "Al Safa",
  "Al Quoz",
  "Meydan",
  "Nad Al Sheba",
  "Mirdif",
  "Dubai Silicon Oasis",
  "International City",
  "Dubai Sports City",
  "Motor City",
  "Studio City",
  "Discovery Gardens",
  "Al Furjan",
  "Dubai South",
  "Expo City Dubai",
  "Dubai Investment Park",
  "Jebel Ali",
  "Deira",
  "Bur Dubai",
  "Karama",
  "Oud Metha",
  "Al Garhoud",
  "Al Qusais",
  "Al Nahda",
  "Al Rashidiya",
  "Al Warqa",
  "Town Square",
  "Damac Hills",
  "Damac Hills 2",
  "Remraam",
  "Mudon",
];

const faqs = [
  {
    question: "What is included in a small moving service?",
    answer:
      "A small move normally includes van transport for boxes, luggage, selected furniture, appliances or office items. The exact service depends on the item list, access and whether a helper is booked.",
  },
  {
    question: "Can you move a studio apartment?",
    answer:
      "Yes, when the contents fit safely in the available van. Send photos and an item list so capacity can be checked before confirmation.",
  },
  {
    question: "Do you provide a helper?",
    answer:
      "A helper can be arranged when loading, unloading, carrying or furniture handling is required. Please request this before booking.",
  },
  {
    question: "Can you dismantle and assemble furniture?",
    answer:
      "Basic dismantling and assembly may be arranged depending on the furniture type and tools required. Share clear photos before confirmation.",
  },
  {
    question: "Do you offer same-day small moving in Dubai?",
    answer:
      "Same-day service may be available depending on the route, schedule, building access and vehicle availability.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send the pickup and drop-off locations, item photos, preferred date, access details and whether you need a helper by WhatsApp or phone.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Small Moving Dubai | Studio, Apartment & Office Moves",
  },
  {
    name: "description",
    content:
      "Small moving service Dubai for studios, apartments, offices, boxes and furniture. Call or WhatsApp +971 52 806 5642 for a direct quote.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/small-moving-dubai",
  },
  {
    property: "og:title",
    content: "Small Moving Dubai | Studio, Apartment & Office Moves",
  },
  {
    property: "og:description",
    content:
      "Direct van service for small moves, boxes, luggage, furniture and office items across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/small-moving-dubai",
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

export default function SmallMovingDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Small Moving Dubai",
    serviceType: "Small Moving and Van Transport",
    url: "https://manwithavanindubai.com/small-moving-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Small moving service for studios, apartments, offices, boxes, luggage and furniture across Dubai.",
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
        name: "Small Moving Dubai",
        item: "https://manwithavanindubai.com/small-moving-dubai",
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
          alt="Small moving van service in Dubai"
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
            <span className="text-white">Small Moving Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Studio • Apartment • Office • Furniture
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Small Moving Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Direct van service for small moves, boxes, luggage, furniture and
              office items across Dubai.
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
              Send item photos and both locations for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Light moving service
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              A Practical Option for Smaller Moves
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not every move needs a large truck or a full relocation team.
              This service is designed for smaller jobs where a cargo van is
              more suitable, faster and easier to arrange.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              It is ideal for studio contents, partial apartment moves, selected
              villa items, office equipment, boxes, luggage and furniture
              delivery.
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
              alt="Cargo space for small moving in Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Boxes and luggage ready for moving"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007421.jpg"
                alt="White van for small moving Dubai"
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
              Moving options
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Small Moving Services in Dubai
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose the service that best matches your move.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moveTypes.map((service) => (
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
                What we can move
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Boxes, Furniture, Appliances and More
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Capacity depends on item dimensions, quantity and how safely
                everything can be loaded. Photos help us confirm the correct
                vehicle before booking.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
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
                Important booking details
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Complete Information Before Confirmation
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Pickup and drop-off locations",
                  "Clear photos of all items",
                  "Building, villa or office access",
                  "Lift availability and parking distance",
                  "Preferred date and time",
                  "Whether a helper is required",
                  "Any dismantling or assembly request",
                ].map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-slate-200">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneLink}
                  className="rounded-xl bg-white px-6 py-4 text-center font-bold text-slate-950 hover:bg-slate-100"
                >
                  Call for a Quote
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
                >
                  Send Photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple booking process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How Small Moving Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bookingSteps.map((step) => (
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
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Areas covered
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Small Moving Across Dubai
            </h2>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold text-amber-300">
              Premium Dubai Areas
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {premiumAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold">More Dubai Areas</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {otherAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10"
                >
                  {area}
                </span>
              ))}
            </div>
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

          <div className="mx-auto mt-9 grid max-w-4xl gap-6 md:grid-cols-2">
            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">Man with a Van Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                General van transport for boxes, furniture, deliveries and
                small moving jobs.
              </p>
            </a>

            <a
              href="/luggage-delivery-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">
                Luggage Delivery Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Airport, hotel, home and inter-hotel luggage transport.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book Small Moving in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send your item photos, pickup location, drop-off location and
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
            <p className="text-xl font-black">Small Moving Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Studio, apartment, office, boxes and furniture moving.
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
              href="/luggage-delivery-dubai"
              className="font-bold hover:text-blue-300"
            >
              Luggage Delivery Dubai
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
