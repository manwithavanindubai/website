import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const itemTypes = [
  {
    title: "Sofa Moving",
    text: "Pickup and delivery of sofas, armchairs and compact seating across Dubai.",
  },
  {
    title: "Bed & Mattress Moving",
    text: "Move beds, mattresses and bedroom furniture when the items fit safely in the van.",
  },
  {
    title: "Table & Chair Delivery",
    text: "Transport dining tables, office tables, chairs and similar furniture items.",
  },
  {
    title: "Cabinet & TV Unit Moving",
    text: "Collection and delivery of cabinets, TV units, shelves and selected home furniture.",
  },
  {
    title: "Appliance Delivery",
    text: "Transport suitable washing machines, cookers and small refrigerators across Dubai.",
  },
  {
    title: "One-Off Item Delivery",
    text: "Direct van transport for one item or a few selected items without booking a large moving truck.",
  },
];

const items = [
  "Sofas and armchairs",
  "Beds and mattresses",
  "Dining tables and chairs",
  "Office desks and chairs",
  "TV units and cabinets",
  "IKEA furniture",
  "Moving boxes and cartons",
  "Suitcases and travel bags",
  "Washing machines",
  "Cookers",
  "Small refrigerators",
  "Bicycles and sports equipment",
];

const reasons = [
  "Ideal for one item or a few items",
  "Enclosed van with driver",
  "No large moving truck required",
  "Optional helper for loading and unloading",
  "Dubai-wide pickup and delivery",
  "Call and WhatsApp booking",
];

const bookingSteps = [
  {
    number: "01",
    title: "Send Item Details",
    text: "Share photos, dimensions, pickup location, delivery location and preferred time.",
  },
  {
    number: "02",
    title: "Confirm Van & Helper",
    text: "We check whether the item fits safely in the van and whether a helper is required.",
  },
  {
    number: "03",
    title: "Pickup & Delivery",
    text: "The van arrives at the agreed time for direct collection and delivery.",
  },
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
    question: "What is a single item moving service?",
    answer:
      "Single item moving is a van transport service for one item or a few selected items such as a sofa, bed, mattress, table, cabinet, appliance or boxes.",
  },
  {
    question: "Do I need to book a large moving truck?",
    answer:
      "No. This service is designed for smaller jobs where the selected item can be transported safely in the available van.",
  },
  {
    question: "Can you move a sofa or bed in Dubai?",
    answer:
      "Yes, when the item dimensions and access are suitable. Send clear photos and approximate dimensions before booking.",
  },
  {
    question: "Can I book a helper?",
    answer:
      "Yes. A helper can be arranged for carrying, loading, unloading or furniture handling when requested before confirmation.",
  },
  {
    question: "Do you offer same-day single item moving?",
    answer:
      "Same-day service may be available depending on route, schedule, building access and van availability.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send the item photo, pickup location, drop-off location, preferred date and access details by WhatsApp or phone.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Single Item Movers Dubai | Van With Driver",
  },
  {
    name: "description",
    content:
      "Single item movers Dubai for sofas, beds, furniture, appliances and boxes. Van with driver and optional helper. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/single-item-movers-dubai",
  },
  {
    property: "og:title",
    content: "Single Item Movers Dubai | Van With Driver",
  },
  {
    property: "og:description",
    content:
      "Direct van service for single furniture items, appliances, boxes and selected items across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/single-item-movers-dubai",
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

export default function SingleItemMoversDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Single Item Movers Dubai",
    serviceType: "Single Item Moving and Van Transport",
    url: "https://manwithavanindubai.com/single-item-movers-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Single item moving service in Dubai for furniture, appliances, boxes and selected items using an enclosed van with driver.",
    areaServed: "Dubai, United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971551972617",
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
        name: "Single Item Movers Dubai",
        item: "https://manwithavanindubai.com/single-item-movers-dubai",
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
          alt="Single item movers van in Dubai"
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
            <span className="text-white">Single Item Movers Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Single Item • Furniture • Appliances • Boxes
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Single Item Movers Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Van with driver for sofas, beds, tables, cabinets, appliances,
              boxes and other single-item moving jobs across Dubai.
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
              Send an item photo, both locations and preferred time for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Van for smaller jobs
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Move One Item Without Booking a Large Truck
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not every delivery needs a full moving company or a large truck.
              If you need to move one sofa, bed, table, cabinet, appliance or a
              few boxes, a cargo van can be a practical option.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our single item moving service is designed for direct pickup and
              delivery across Dubai with an optional helper when carrying or
              loading assistance is required.
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
              alt="Cargo van for single item moving Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Furniture and boxes ready for van delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007421.jpg"
                alt="White moving van in Dubai"
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
              Single item services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What We Can Move
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Suitable for one item or a few selected items that fit safely in the van.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {itemTypes.map((service) => (
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
                Popular items
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Furniture, Appliances, Boxes and More
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Van capacity depends on the dimensions and weight of your item.
                Send photos and approximate measurements so we can check
                suitability before confirming the booking.
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
                Before booking
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Your Item Details First
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Clear photo of the item",
                  "Approximate dimensions",
                  "Pickup and drop-off locations",
                  "Building or villa access",
                  "Lift availability",
                  "Parking distance",
                  "Preferred date and time",
                  "Whether a helper is required",
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
                  Send Item Photo
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
              Easy booking
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How Single Item Moving Works
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
              Single Item Movers Across Dubai
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
              <h3 className="text-2xl font-extrabold">
                Man with a Van Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Van with driver for furniture, boxes, deliveries and small moving jobs.
              </p>
            </a>

            <a
              href="/small-moving-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">
                Small Moving Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Small moving service for studio contents, furniture, boxes and office items.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book Single Item Movers in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send your item photo, pickup location, drop-off location and preferred time by phone or WhatsApp.
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
            <p className="text-xl font-black">Single Item Movers Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Furniture, appliance, boxes and single item moving by van.
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
