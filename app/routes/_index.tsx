import type { MetaFunction } from "@remix-run/cloudflare";

const PHONE_DISPLAY = "+971 55 197 2617";
const PHONE_LINK = "tel:+971551972617";
const WHATSAPP_LINK = "https://wa.me/971551972617";

const services = [
  {
    title: "Man with a Van Dubai",
    text: "Enclosed cargo van with driver for luggage, boxes, furniture, hotel transfers, business deliveries and light moving jobs.",
    href: "/man-with-a-van-in-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Airport Luggage Delivery Dubai",
    text: "Pre-arranged luggage delivery from DXB or DWC airport to hotels, homes, serviced apartments and residences.",
    href: "/airport-luggage-delivery-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Luggage Delivery Dubai",
    text: "Direct suitcase and travel-bag delivery between airports, hotels, homes, offices and storage locations.",
    href: "/luggage-delivery-dubai",
    image: "/1000007422.jpg",
  },
  {
    title: "Hotel Luggage Transfer Dubai",
    text: "Hotel-to-hotel, hotel-to-airport and airport-to-hotel luggage transfer with a direct enclosed van service.",
    href: "/hotel-luggage-transfer-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Same-Day Small Movers Dubai",
    text: "Same-day transport for studio items, selected apartment furniture, office equipment and light moving jobs, subject to availability.",
    href: "/small-moving-dubai",
    image: "/1000007436.jpg",
  },
  {
    title: "Boxes Delivery Dubai",
    text: "Moving cartons, office boxes, storage boxes, packed personal belongings and business stock delivery across Dubai.",
    href: "/boxes-delivery-dubai",
    image: "/1000007423.jpg",
  },
  {
    title: "IKEA Furniture Delivery Dubai",
    text: "IKEA and store collection, flat-pack furniture transport and selected assembly support by prior arrangement.",
    href: "/ikea-furniture-delivery-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Private Jet Luggage Transfer",
    text: "Pre-arranged landside baggage transport for private aviation terminals, luxury hotels, villas and marinas.",
    href: "/private-jet-luggage-transfer-dubai",
    image: "/1000007422.jpg",
  },
];

const benefits = [
  "Enclosed cargo van — no pickup-truck image or open cargo bed",
  "Professional driver and optional helper",
  "Same-day service subject to route and availability",
  "Airport-to-hotel and hotel-to-airport luggage delivery",
  "Direct pickup and delivery across Dubai",
  "Suitable for luggage, boxes, furniture and small moves",
  "UAE inter-emirate routes available by arrangement",
  "Fast booking by phone or WhatsApp",
];

const steps = [
  {
    number: "01",
    title: "Send Your Details",
    text: "Share pickup and drop-off locations, item photos, quantities, preferred time, lift or stairs and helper requirements.",
  },
  {
    number: "02",
    title: "Get a Clear Quote",
    text: "We check the route, cargo size, loading requirements and van availability before confirming the price.",
  },
  {
    number: "03",
    title: "Pickup and Delivery",
    text: "The cargo van arrives at the agreed location and delivers your items directly to the confirmed destination.",
  },
];

const items = [
  "Suitcases and travel bags",
  "Moving boxes and cartons",
  "Sofas, beds and mattresses",
  "Tables, chairs and cabinets",
  "Office desks and equipment",
  "IKEA flat-pack furniture",
  "Hotel guest luggage",
  "Airport baggage transfers",
  "Storage unit collections",
  "Business stock and event items",
  "Single-item furniture delivery",
  "Small apartment moving items",
];

const areas = [
  "Dubai Marina",
  "JBR",
  "JLT",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "DIFC",
  "Jumeirah",
  "Al Barsha",
  "JVC",
  "Dubai Hills",
  "Arabian Ranches",
  "Al Quoz",
  "Deira",
  "Bur Dubai",
  "Dubai South",
  "Dubai Investment Park",
  "Jebel Ali",
  "Mirdif",
  "International City",
  "Dubai Silicon Oasis",
  "Motor City",
  "Sports City",
  "Discovery Gardens",
];

const faqs = [
  {
    q: "Do you provide airport-to-hotel luggage delivery in Dubai?",
    a: "Yes. Pre-arranged landside luggage delivery is available from DXB and DWC to hotels, homes, serviced apartments and other confirmed Dubai locations.",
  },
  {
    q: "Do you offer same-day movers in Dubai?",
    a: "Same-day small moving and delivery may be available depending on the route, item size, access requirements and van availability.",
  },
  {
    q: "Do you use a van or a pickup truck?",
    a: "The homepage promotes an enclosed cargo van service. Send item photos and dimensions so the correct vehicle capacity can be confirmed before booking.",
  },
  {
    q: "Can you provide a helper for loading and unloading?",
    a: "Yes. An optional helper can be arranged in advance for loading, unloading, carrying and selected furniture handling.",
  },
  {
    q: "Can you move a studio or small apartment?",
    a: "Yes, when the complete item list fits safely in the available cargo van. Send clear photos and a full list before booking.",
  },
  {
    q: "Can you collect furniture from IKEA or another shop?",
    a: "Yes. Store collection can be arranged when the order reference, collection point, package sizes and preferred timing are confirmed.",
  },
  {
    q: "Do you deliver outside Dubai?",
    a: "Yes. Routes may be arranged to Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Send pickup and drop-off locations, item photos, quantities, dimensions, preferred time, parking distance, lift or stair details and helper requirements.",
  },
];

export const meta: MetaFunction = () => [
  {
    title:
      "Man with a Van Dubai | Airport-to-Hotel Luggage Delivery & Same-Day Movers",
  },
  {
    name: "description",
    content:
      "Man with a van Dubai for airport-to-hotel luggage delivery, same-day small movers, boxes, furniture and hotel transfers. Call or WhatsApp +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/",
  },
  {
    property: "og:title",
    content:
      "Man with a Van Dubai | Airport-to-Hotel Luggage Delivery & Same-Day Movers",
  },
  {
    property: "og:description",
    content:
      "Cargo van with driver for airport luggage delivery, hotel transfers, same-day small moves, boxes and furniture across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/",
  },
  {
    property: "og:image",
    content: "https://manwithavanindubai.com/hiace-delivery-van-dubai.jpg",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
];

export default function Index() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Man with a Van Dubai",
    url: "https://manwithavanindubai.com/",
    image: "https://manwithavanindubai.com/hiace-delivery-van-dubai.jpg",
    telephone: "+971528065642",
    description:
      "Cargo van with driver for airport-to-hotel luggage delivery, same-day small movers, boxes, furniture and hotel transfers across Dubai.",
    areaServed: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Al Ain",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
    ],
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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="text-xl font-black tracking-tight">
            Man with a Van Dubai
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-200">
            <a href="/man-with-a-van-in-dubai" className="hover:text-white">Van Service</a>
            <a href="/luggage-delivery-dubai" className="hover:text-white">Luggage Delivery</a>
            <a href="/small-moving-dubai" className="hover:text-white">Same-Day Movers</a>
            <a href="/boxes-delivery-dubai" className="hover:text-white">Boxes</a>
            <a href="/airport-luggage-delivery-dubai" className="hover:text-white">Airport Delivery</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/hiace-delivery-van-dubai.jpg"
          alt="White enclosed cargo van for man with a van service in Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 font-bold uppercase tracking-[0.16em] text-blue-300">
              AIRPORT-TO-HOTEL LUGGAGE • SAME-DAY MOVERS • BOXES • FURNITURE
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Man with a Van Dubai
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-8 text-white sm:text-3xl">
              Airport-to-Hotel Luggage Delivery & Same-Day Movers
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Professional enclosed cargo van with driver for luggage, boxes,
              furniture, small moves, hotel transfers and business deliveries
              across Dubai.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_LINK}
                className="rounded-xl bg-blue-600 px-8 py-4 text-center text-lg font-black text-white hover:bg-blue-700"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-black text-white hover:bg-green-600"
              >
                WhatsApp for a Quote
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Send item photos, pickup and drop-off locations, preferred timing
              and helper requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Enclosed cargo van service
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Van Transport for Luggage, Moving and Delivery
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our service is designed for jobs that are too large for a normal
              car but do not require a large moving truck. The enclosed cargo van
              helps protect luggage, boxes and furniture during direct transport.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Book airport-to-hotel luggage delivery, same-day small moving,
              hotel transfers, furniture collection, box delivery, storage runs
              and business transport across Dubai.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <img
              src="/hiace-delivery-van-dubai.jpg"
              alt="White cargo delivery van in Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Enclosed van cargo space for luggage delivery"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007436.jpg"
                alt="Items loaded inside a cargo van for small moving"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">All service pages</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Our Dubai Van Services</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Select a service below to open its complete page, details and booking information.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                  <span className="mt-5 inline-block font-bold text-blue-600">Open service page →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">Suitable items</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">What Can We Carry?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Capacity depends on item size, quantity, access and safe loading space. Send clear photos and dimensions before confirmation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
            <img
              src="/1000007423.jpg"
              alt="Boxes and furniture prepared for cargo van delivery"
              className="h-72 w-full object-cover"
            />
            <div className="p-8 sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">Before booking</p>
              <h2 className="mt-3 text-3xl font-black">Send Complete Details for an Accurate Quote</h2>
              <div className="mt-7 space-y-3 text-slate-200">
                <p>• Pickup and drop-off locations</p>
                <p>• Clear photos of every item</p>
                <p>• Approximate dimensions and quantities</p>
                <p>• Lift, stairs and parking distance</p>
                <p>• Preferred date and time</p>
                <p>• Helper, dismantling or assembly requirements</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_LINK} className="rounded-xl bg-white px-6 py-4 text-center font-black text-slate-950">Call for a Quote</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-6 py-4 text-center font-black text-white">Send Photos</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">Simple booking</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">How Our Van Service Works</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <span className="text-4xl font-black text-blue-600">{step.number}</span>
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
            <p className="font-bold uppercase tracking-widest text-blue-400">Areas covered</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Man with a Van Across Dubai</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15">{area}</span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-4xl text-center leading-7 text-slate-300">
            UAE routes to Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain may also be arranged.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">Helpful information</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer list-none text-lg font-black">{faq.q}</summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.18em] text-blue-100">Direct booking</p>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">Book a Man with a Van in Dubai</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Send item photos, pickup location, drop-off location, preferred timing and helper requirements.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={PHONE_LINK} className="rounded-xl bg-white px-8 py-4 text-lg font-black text-blue-700">Call {PHONE_DISPLAY}</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-8 py-4 text-lg font-black text-white">Open WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-black">Man with a Van Dubai</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Enclosed cargo van with driver for airport luggage, hotel transfers, same-day small moves, boxes and furniture delivery.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {services.slice(0, 4).map((service) => (
              <a key={service.href} href={service.href} className="font-bold hover:text-blue-300">{service.title}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {services.slice(4).map((service) => (
              <a key={service.href} href={service.href} className="font-bold hover:text-blue-300">{service.title}</a>
            ))}
            <a href={PHONE_LINK} className="mt-2 font-black text-blue-300">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-black text-green-400">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
