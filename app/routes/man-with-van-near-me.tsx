import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const services = [
  {
    title: "Man With A Van Dubai",
    text: "Direct van with driver service for moving, delivery and local transport across Dubai.",
    href: "/man-with-a-van-in-dubai",
  },
  {
    title: "Small Moving Dubai",
    text: "Studio, apartment, office and selected furniture moving with a cargo van.",
    href: "/small-moving-dubai",
  },
  {
    title: "Boxes Delivery Dubai",
    text: "Fast collection and delivery for moving boxes, cartons and business stock.",
    href: "/boxes-delivery-dubai",
  },
  {
    title: "Furniture Delivery Dubai",
    text: "Pickup and delivery for sofas, beds, tables, chairs and selected furniture.",
    href: "/ikea-furniture-delivery-dubai",
  },
  {
    title: "Hotel Luggage Transfer",
    text: "Luggage transport between hotels, residences and confirmed Dubai locations.",
    href: "/hotel-luggage-transfer-dubai",
  },
  {
    title: "Luggage Delivery Dubai",
    text: "Pre-booked luggage pickup and delivery with an enclosed cargo van.",
    href: "/luggage-delivery-dubai",
  },
  {
    title: "Airport Luggage Delivery",
    text: "Pre-arranged luggage transport for Dubai airport and hotel routes.",
    href: "/airport-luggage-delivery-dubai",
  },
  {
    title: "Van With Driver Dubai",
    text: "Flexible cargo van with professional driver for direct pickup and delivery.",
    href: "#book",
  },
];

const reasons = [
  "Man with van near you in Dubai",
  "Direct van with professional driver",
  "Fast local pickup and delivery",
  "Enclosed cargo space",
  "Optional helper by prior request",
  "Suitable for homes, hotels and offices",
  "Phone and WhatsApp booking",
  "Dubai-wide service coverage",
];

const items = [
  "Suitcases and travel bags",
  "Moving boxes and cartons",
  "Beds and mattresses",
  "Sofas and armchairs",
  "Dining tables and chairs",
  "Office desks and equipment",
  "Flat-pack furniture",
  "Small appliances",
  "Business stock",
  "Event items",
  "Hotel guest belongings",
  "Single-item deliveries",
];

const steps = [
  {
    number: "01",
    title: "Send Your Location",
    text: "Send your pickup area, drop-off location, item photos, preferred timing and access details.",
  },
  {
    number: "02",
    title: "Confirm Van Availability",
    text: "We check the route, item size, cargo capacity, helper requirement and available timing.",
  },
  {
    number: "03",
    title: "Pickup and Delivery",
    text: "The man with van arrives at the confirmed pickup point and delivers directly to your destination.",
  },
];

const premiumAreas = [
  "Palm Jumeirah",
  "Dubai Marina",
  "JBR",
  "Bluewaters Island",
  "Dubai Harbour",
  "Downtown Dubai",
  "DIFC",
  "Business Bay",
  "City Walk",
  "Jumeirah",
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
    q: "How can I find a man with van near me in Dubai?",
    a: "Send your current pickup location, destination, item photos and preferred time by phone or WhatsApp. We can check van availability and confirm the service for your Dubai area.",
  },
  {
    q: "What does a man with van near me service include?",
    a: "The service normally includes an enclosed cargo van with a driver for direct pickup and delivery. A helper can be arranged separately when requested before booking.",
  },
  {
    q: "Can I book a man with van near me for small moving?",
    a: "Yes. The service is suitable for studio moves, small apartment moves, office items, boxes, luggage and selected furniture when everything fits safely inside the van.",
  },
  {
    q: "Do you provide same-day man with van service?",
    a: "Same-day service may be available depending on your pickup area, destination, item size, access conditions and current van availability.",
  },
  {
    q: "Can you provide a helper with the van?",
    a: "Yes. A helper can be arranged for loading, unloading, carrying and basic furniture handling when requested in advance.",
  },
  {
    q: "What items can be transported?",
    a: "We can transport luggage, boxes, mattresses, tables, chairs, sofas, office items, flat-pack furniture, household goods and selected appliances.",
  },
  {
    q: "Do you cover all areas of Dubai?",
    a: "Yes. Service is available across major Dubai residential, hotel, commercial and business areas, subject to van availability and access.",
  },
  {
    q: "Can I book a van for hotel or luggage delivery?",
    a: "Yes. Pre-arranged luggage and hotel transfers can be booked between confirmed pickup and delivery locations.",
  },
  {
    q: "How do I get a price?",
    a: "Send pickup and drop-off locations, clear item photos, quantities, preferred timing, lift or stair details, parking distance and whether a helper is required.",
  },
  {
    q: "Can you move furniture?",
    a: "Yes. Selected furniture can be moved when dimensions, photos and access details are provided in advance so van capacity can be checked.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Man With Van Near Me Dubai | Fast Van With Driver Service",
  },
  {
    name: "description",
    content:
      "Looking for a man with van near me in Dubai? Fast van with driver service for moving, boxes, furniture and delivery across Dubai. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/man-with-van-near-me",
  },
  {
    property: "og:title",
    content: "Man With Van Near Me Dubai | Van With Driver",
  },
  {
    property: "og:description",
    content:
      "Book a man with van near you in Dubai for small moving, boxes, furniture, luggage and direct pickup and delivery.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/man-with-van-near-me",
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

export default function ManWithVanNearMe() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Man With Van Near Me Dubai",
    serviceType: "Man With Van Near Me",
    url: "https://manwithavanindubai.com/man-with-van-near-me",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Man with van near me service in Dubai for moving, boxes, furniture, luggage and direct pickup and delivery with a professional driver.",
    areaServed: [
      "Dubai",
      "Dubai Marina",
      "JBR",
      "JLT",
      "JVC",
      "Business Bay",
      "Downtown Dubai",
      "Palm Jumeirah",
      "Al Barsha",
      "Dubai Hills",
      "Jumeirah",
      "Deira",
      "Bur Dubai",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971551972617",
      areaServed: "Dubai",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
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
        name: "Man With Van Near Me",
        item: "https://manwithavanindubai.com/man-with-van-near-me",
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
          alt="Man with van near me Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>›</span>
            <span className="text-white">Man With Van Near Me</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 font-bold uppercase tracking-[0.18em] text-blue-300">
              MAN WITH VAN • VAN WITH DRIVER • MOVING • DELIVERY
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Man With Van Near Me
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Looking for a man with van near me in Dubai? Book a professional
              van with driver for small moving, boxes, furniture, luggage and
              direct pickup and delivery across Dubai.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-blue-600 px-8 py-4 text-center text-lg font-black text-white hover:bg-blue-700"
              >
                Call {phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-black text-white hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              Send your pickup area, destination, item photos and preferred
              timing for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Local Dubai van service
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Find a Man With Van Near You in Dubai
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              When you search for a man with van near me, you usually need a
              practical vehicle that can reach your location quickly and move
              your items directly to the required destination.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our enclosed cargo van with driver is suitable for moving boxes,
              luggage, selected furniture, office items and other small moving
              or delivery jobs across Dubai.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/1000007421.jpg"
              alt="Man with van near me service in Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Cargo van space for moving and delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />

              <img
                src="/1000007437.jpg"
                alt="Boxes and luggage for man with van delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Related van services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Man With Van Services Near You
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>

                <span className="mt-5 inline-block font-bold text-blue-600">
                  View service →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Suitable items
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              What Can a Man With Van Move?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Van capacity depends on item quantity, dimensions and safe loading
              space. Send clear photos so we can check everything before
              booking.
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

          <div
            id="book"
            className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10"
          >
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Quick quote
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Send Your Details to Book a Van Near You
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Pickup location",
                "Drop-off location",
                "Clear photos of all items",
                "Approximate item dimensions",
                "Building or villa access",
                "Lift and parking details",
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
                className="rounded-xl bg-white px-6 py-4 text-center font-black text-slate-950 hover:bg-slate-100"
              >
                Call for a Quote
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-6 py-4 text-center font-black text-white hover:bg-green-600"
              >
                Send Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple booking
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              How to Book a Man With Van Near Me
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-black">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Nearby Dubai areas
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Man With Van Near Me Across Dubai
            </h2>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-black text-amber-300">
              Popular Dubai Areas
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
            <h3 className="text-xl font-black">More Dubai Areas</h3>

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

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Helpful information
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Man With Van Near Me FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-black">
                  {faq.q}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-blue-100">
            Book nearby van service
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Need a Man With Van Near You?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Send your pickup location, destination, item photos and preferred
            time. We will check van availability for your Dubai area.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-white px-8 py-4 text-lg font-black text-blue-700 hover:bg-blue-50"
            >
              Call {phoneDisplay}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-black text-white hover:bg-green-600"
            >
              Open WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black">Man with a Van Dubai</p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Professional man with van service for moving, delivery, boxes,
              furniture and direct transport across Dubai.
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
              Man With A Van Dubai
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
