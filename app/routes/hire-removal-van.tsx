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
    text: "Professional enclosed cargo van with driver for moving and delivery.",
    href: "/man-with-a-van-service",
  },
  {
    title: "Delivery Van With Man",
    text: "Direct delivery van with man for boxes, furniture and business items.",
    href: "/delivery-van-with-man",
  },
  {
    title: "Small Moving Dubai",
    text: "Van service for studios, apartments, offices and selected furniture.",
    href: "/small-moving-dubai",
  },
  {
    title: "Boxes Delivery Dubai",
    text: "Pickup and delivery for moving boxes, cartons and business stock.",
    href: "/boxes-delivery-dubai",
  },
  {
    title: "Furniture Delivery Dubai",
    text: "Pickup and transport for sofas, beds, tables, chairs and furniture.",
    href: "/ikea-furniture-delivery-dubai",
  },
  {
    title: "Luggage Delivery Dubai",
    text: "Direct luggage pickup and delivery between confirmed Dubai locations.",
    href: "/luggage-delivery-dubai",
  },
  {
    title: "Van With Driver Dubai",
    text: "Flexible removal van with driver for moving and direct transport.",
    href: "#book",
  },
];

const reasons = [
  "Removal van with professional driver",
  "Direct pickup and delivery",
  "Enclosed cargo space",
  "Optional helper by request",
  "Suitable for small moving jobs",
  "Furniture and boxes transport",
  "Dubai-wide service coverage",
  "Call and WhatsApp booking",
];

const items = [
  "Moving boxes and cartons",
  "Beds and mattresses",
  "Sofas and armchairs",
  "Dining tables and chairs",
  "Office desks and equipment",
  "Flat-pack furniture",
  "Suitcases and luggage",
  "Small household appliances",
  "Business stock",
  "Event items",
  "Single furniture items",
  "Small apartment contents",
];

const steps = [
  {
    number: "01",
    title: "Send Moving Details",
    text: "Send pickup and drop-off locations, item photos, preferred timing and access details.",
  },
  {
    number: "02",
    title: "Confirm Removal Van",
    text: "We check item size, van capacity, route, access and helper requirements before confirmation.",
  },
  {
    number: "03",
    title: "Pickup and Move",
    text: "The removal van with driver arrives at the agreed location and transports your items directly.",
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
    q: "What is a hire removal van service?",
    a: "A hire removal van service provides an enclosed cargo van with a driver for moving boxes, furniture, luggage and other suitable items between confirmed locations.",
  },
  {
    q: "Can I hire a removal van with a driver in Dubai?",
    a: "Yes. Our removal van service includes a professional driver for the confirmed pickup and delivery route.",
  },
  {
    q: "What can I move in a removal van?",
    a: "You can move boxes, sofas, mattresses, tables, chairs, office items, luggage, flat-pack furniture and other suitable household or business items.",
  },
  {
    q: "Can I hire a removal van for a small apartment move?",
    a: "Yes. The van is suitable for studio and small apartment moves when the complete load fits safely inside the cargo area.",
  },
  {
    q: "Do you provide a helper?",
    a: "Yes. A helper can be arranged for loading, unloading, carrying and basic furniture handling when requested before booking.",
  },
  {
    q: "Can I book a same-day removal van?",
    a: "Same-day service may be available depending on the route, item size, access and current van availability.",
  },
  {
    q: "Do you cover all Dubai areas?",
    a: "Yes. Removal van service is available across major residential, hotel, commercial and business areas of Dubai.",
  },
  {
    q: "Can you move furniture in the removal van?",
    a: "Yes. Selected furniture can be transported after checking dimensions, photos, access and safe loading space.",
  },
  {
    q: "Can I hire the van for boxes only?",
    a: "Yes. The removal van can be booked for boxes, cartons, business stock and other suitable loads.",
  },
  {
    q: "How do I get a removal van quote?",
    a: "Send pickup and drop-off locations, clear item photos, quantity, preferred timing, access details and whether a helper is required.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Hire Removal Van Dubai | Removal Van With Driver",
  },
  {
    name: "description",
    content:
      "Hire removal van in Dubai with professional driver for boxes, furniture and small moving. Enclosed cargo van service. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/hire-removal-van",
  },
  {
    property: "og:title",
    content: "Hire Removal Van Dubai | Van With Driver",
  },
  {
    property: "og:description",
    content:
      "Hire a removal van in Dubai for small moving, furniture, boxes and direct pickup and delivery with a professional driver.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/hire-removal-van",
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

export default function HireRemovalVan() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hire Removal Van Dubai",
    serviceType: "Hire Removal Van",
    url: "https://manwithavanindubai.com/hire-removal-van",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Hire removal van service in Dubai with driver for small moving, boxes, furniture and direct pickup and delivery.",
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
        name: "Hire Removal Van",
        item: "https://manwithavanindubai.com/hire-removal-van",
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
          alt="Hire removal van Dubai"
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
            <span className="text-white">Hire Removal Van</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-4 font-bold uppercase tracking-[0.18em] text-blue-300">
              REMOVAL VAN • VAN WITH DRIVER • MOVING • DELIVERY
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Hire Removal Van
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Hire a removal van in Dubai with a professional driver for small
              moving, furniture, boxes, luggage and direct pickup and delivery
              across Dubai.
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
              Send your pickup location, destination, item photos and preferred
              timing for a direct removal van quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Flexible moving van
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Hire a Removal Van With Driver in Dubai
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Hiring a removal van is a practical choice for small moves,
              furniture transport, boxes and direct deliveries when a large
              moving truck is not required.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our enclosed cargo van with driver can collect from homes,
              apartments, offices, shops and other confirmed Dubai locations
              and deliver directly to the destination.
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
              src="/1000007421.jpg"
              alt="Removal van with driver in Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Cargo space inside removal van"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />

              <img
                src="/1000007437.jpg"
                alt="Boxes ready for removal van transport"
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
              Removal van services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Removal Van Services Across Dubai
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
              What Can You Move in a Removal Van?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Removal van capacity depends on item dimensions, quantity and safe
              loading space. Send clear photos before booking.
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
              Hire your removal van
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Send Details for a Removal Van Quote
            </h2>

            <div className="mt-8 space-y-4">
              {[
                "Pickup location",
                "Drop-off location",
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
              How to Hire a Removal Van in Dubai
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
              Hire Removal Van Across Dubai
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
              Hire Removal Van FAQs
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
            Hire a Removal Van Today
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Send your pickup location, destination, item photos and preferred
            timing for a direct quote.
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
              Professional removal van with driver service for small moving,
              boxes, furniture and direct transport across Dubai.
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
              href="/delivery-van-with-man"
              className="font-bold hover:text-blue-300"
            >
              Delivery Van With Man
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
