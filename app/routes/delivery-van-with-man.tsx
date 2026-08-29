import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const services = [
  {
    title: "Man With Van Near Me",
    text: "Local van with driver service across Dubai for moving and delivery.",
    href: "/man-with-van-near-me",
  },
  {
    title: "Man With A Van Service",
    text: "Professional enclosed cargo van with driver for small moving and delivery.",
    href: "/man-with-a-van-service",
  },
  {
    title: "Boxes Delivery Dubai",
    text: "Pickup and delivery for moving boxes, cartons and business stock.",
    href: "/boxes-delivery-dubai",
  },
  {
    title: "Furniture Delivery Dubai",
    text: "Direct pickup and transport for sofas, beds, tables, chairs and furniture.",
    href: "/ikea-furniture-delivery-dubai",
  },
  {
    title: "Luggage Delivery Dubai",
    text: "Pre-booked luggage pickup and direct delivery across Dubai.",
    href: "/luggage-delivery-dubai",
  },
  {
    title: "Small Moving Dubai",
    text: "Van with driver for studios, small apartments, offices and selected furniture.",
    href: "/small-moving-dubai",
  },
  {
    title: "Hotel Luggage Transfer",
    text: "Hotel, residence and airport-related luggage transport by enclosed van.",
    href: "/hotel-luggage-transfer-dubai",
  },
  {
    title: "Van With Driver Dubai",
    text: "Flexible delivery van with driver for direct pickup and delivery jobs.",
    href: "#book",
  },
];

const reasons = [
  "Delivery van with professional driver",
  "Direct pickup and delivery",
  "Enclosed cargo space",
  "Optional helper by request",
  "Suitable for boxes and furniture",
  "Fast local Dubai delivery",
  "Phone and WhatsApp booking",
  "Dubai-wide service coverage",
];

const items = [
  "Moving boxes and cartons",
  "Furniture and home items",
  "Suitcases and luggage",
  "Office desks and equipment",
  "Flat-pack furniture",
  "Small household appliances",
  "Business stock",
  "Event items",
  "Hotel guest belongings",
  "Single-item deliveries",
  "Retail and shop items",
  "Parcels and packages",
];

const steps = [
  {
    number: "01",
    title: "Send Delivery Details",
    text: "Send pickup location, delivery location, item photos, quantity and preferred timing.",
  },
  {
    number: "02",
    title: "Confirm Van Service",
    text: "We check the route, item size, cargo capacity, access and helper requirements.",
  },
  {
    number: "03",
    title: "Pickup and Delivery",
    text: "The delivery van with driver arrives at the confirmed location and delivers your items directly.",
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
    q: "What is a delivery van with man service?",
    a: "A delivery van with man service provides an enclosed cargo van with a professional driver for direct pickup and delivery of suitable items.",
  },
  {
    q: "What can I send with a delivery van?",
    a: "You can transport boxes, furniture, luggage, office items, flat-pack furniture, business stock, hotel belongings and selected household items.",
  },
  {
    q: "Do you provide a driver with the delivery van?",
    a: "Yes. The service includes a professional driver for the confirmed pickup and delivery route.",
  },
  {
    q: "Can I request a helper for loading and unloading?",
    a: "Yes. A helper can be arranged for carrying, loading, unloading and basic furniture handling when requested in advance.",
  },
  {
    q: "Do you offer same-day delivery van service?",
    a: "Same-day service may be available depending on route, item size, access and current van availability.",
  },
  {
    q: "Can you deliver furniture?",
    a: "Yes. Selected furniture such as sofas, beds, mattresses, tables, chairs and flat-pack furniture can be transported after checking dimensions and photos.",
  },
  {
    q: "Do you provide delivery across Dubai?",
    a: "Yes. Delivery van service is available across major residential, hotel, commercial and business areas in Dubai.",
  },
  {
    q: "Can you collect items from a shop or store?",
    a: "Yes. Store and shop pickup can be arranged when collection details, item size and timing are confirmed in advance.",
  },
  {
    q: "Can I book the van for boxes and luggage?",
    a: "Yes. Boxes, cartons, suitcases and luggage are common items transported in our enclosed delivery van.",
  },
  {
    q: "How do I get a delivery quote?",
    a: "Send pickup and delivery locations, clear item photos, quantity, preferred timing, access details and whether a helper is required.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Delivery Van With Man Dubai | Van With Driver Delivery",
  },
  {
    name: "description",
    content:
      "Delivery van with man in Dubai for boxes, furniture, luggage and direct pickup and delivery. Enclosed van with driver. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/delivery-van-with-man",
  },
  {
    property: "og:title",
    content: "Delivery Van With Man Dubai | Fast Pickup & Delivery",
  },
  {
    property: "og:description",
    content:
      "Book a delivery van with man in Dubai for boxes, furniture, luggage, business items and direct pickup and delivery.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/delivery-van-with-man",
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

export default function DeliveryVanWithMan() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Delivery Van With Man Dubai",
    serviceType: "Delivery Van With Man",
    url: "https://manwithavanindubai.com/delivery-van-with-man",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Delivery van with man service in Dubai for boxes, furniture, luggage, business items and direct pickup and delivery.",
    areaServed: "Dubai",
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
        name: "Delivery Van With Man",
        item: "https://manwithavanindubai.com/delivery-van-with-man",
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
          alt="Delivery van with man Dubai"
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
            <span className="text-white">Delivery Van With Man</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 font-bold uppercase tracking-[0.18em] text-blue-300">
              DELIVERY VAN • VAN WITH MAN • MOVING • DELIVERY
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Delivery Van With Man
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Professional delivery van with man in Dubai for boxes, furniture,
              luggage, business items and direct pickup and delivery with an
              enclosed cargo van and driver.
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
              Send pickup and delivery locations, item photos and preferred
              timing for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Direct delivery service
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Reliable Delivery Van With Man in Dubai
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A delivery van with man is a practical option when you need direct
              transport for items that are too large for a normal car but do not
              require a large truck.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our enclosed cargo van with driver can be used for boxes,
              furniture, luggage, office items, shop collections, business stock
              and other suitable delivery jobs across Dubai.
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
              alt="Delivery van with man service in Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Enclosed cargo van for Dubai delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />

              <img
                src="/1000007437.jpg"
                alt="Boxes and luggage ready for van delivery"
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
              Delivery services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Delivery Van Services Across Dubai
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
              Items we deliver
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              What Can a Delivery Van Transport?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Capacity depends on item size, quantity and safe loading space.
              Send clear photos before booking so the delivery load can be
              checked.
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
              Book your delivery van
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Send Details for a Quick Delivery Quote
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Pickup location",
                "Delivery location",
                "Clear item photos",
                "Item quantity and dimensions",
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
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              How Delivery Van With Man Service Works
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
              Areas covered
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Delivery Van With Man Across Dubai
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
              Delivery Van With Man FAQs
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
            Direct booking
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Book a Delivery Van With Man
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Send your pickup location, delivery location, item photos and
            preferred timing for a direct quote.
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
              Professional delivery van with man service for boxes, furniture,
              luggage and direct pickup and delivery across Dubai.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-blue-300">
              Home
            </a>

            <a
              href="/man-with-van-near-me"
              className="font-bold hover:text-blue-300"
            >
              Man With Van Near Me
            </a>

            <a
              href="/man-with-a-van-service"
              className="font-bold hover:text-blue-300"
            >
              Man With A Van Service
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
