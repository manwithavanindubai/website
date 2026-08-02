import type { MetaFunction } from "@remix-run/cloudflare";

const PHONE_DISPLAY = "+971 52 806 5642";
const PHONE_LINK = "tel:+971528065642";
const WHATSAPP_LINK = "https://wa.me/971528065642";

const services = [
  {
    title: "Man with a Van Dubai",
    text: "Van with driver for luggage, boxes, furniture, small moves, hotel transfers and business deliveries.",
    href: "/man-with-a-van-in-dubai",
    image: "/1-ton-pickup-truck-man-van-dubai.jpg",
  },
  {
    title: "Luggage Delivery Dubai",
    text: "Airport, hotel, residence and inter-hotel luggage delivery for guests, families and business travellers.",
    href: "/luggage-delivery-dubai",
    image: "/1000007422.jpg",
  },
  {
    title: "Small Moving Dubai",
    text: "Practical transport for studios, selected apartment items, office furniture and light moving jobs.",
    href: "/small-moving-dubai",
    image: "/1000007436.jpg",
  },
  {
    title: "Boxes Delivery Dubai",
    text: "Moving cartons, office boxes, storage boxes, business stock and packed personal belongings.",
    href: "/boxes-delivery-dubai",
    image: "/1000007423.jpg",
  },
  {
    title: "IKEA Furniture Delivery Dubai",
    text: "Store pickup, flat-pack furniture transport and selected assembly support across Dubai.",
    href: "/ikea-furniture-delivery-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Hotel Luggage Transfer Dubai",
    text: "Hotel-to-hotel, hotel-to-airport and residence luggage transfer with direct van delivery.",
    href: "/hotel-luggage-transfer-dubai",
    image: "/1-ton-pickup-truck-man-van-dubai.jpg",
  },
  {
    title: "VIP Airport Luggage Delivery",
    text: "Premium landside luggage transport for DXB, DWC, luxury hotels, residences and Abu Dhabi routes.",
    href: "/airport-luggage-delivery-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Private Jet Luggage Transfer",
    text: "Pre-arranged landside baggage transport for private aviation terminals, luxury hotels, villas and marinas.",
    href: "/private-jet-luggage-transfer-dubai",
    image: "/1000007422.jpg",
  },
];

const whyChooseUs = [
  "Real Dubai van service with original vehicle photos",
  "Direct pickup and delivery with driver",
  "Optional helper arranged in advance",
  "Enclosed cargo space for luggage and furniture",
  "Clear booking details before dispatch",
  "Dubai-wide service and UAE inter-emirate routes",
  "Suitable for private, hotel and business customers",
  "Call and WhatsApp booking",
];

const process = [
  {
    number: "01",
    title: "Send the Details",
    text: "Share pickup and drop-off locations, item photos, quantity, preferred timing and access information.",
  },
  {
    number: "02",
    title: "Confirm the Right Van",
    text: "We check cargo capacity, route, loading requirements, helper needs and availability before confirmation.",
  },
  {
    number: "03",
    title: "Pickup and Direct Delivery",
    text: "The van arrives at the agreed location and delivers your items directly to the confirmed destination.",
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

const moreAreas = [
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

const useCases = [
  "Suitcases and travel bags",
  "Moving boxes and cartons",
  "Sofas, beds and mattresses",
  "Tables, chairs and cabinets",
  "Office desks and equipment",
  "IKEA flat-pack furniture",
  "Storage unit collections",
  "Hotel guest luggage",
  "Airport baggage transfers",
  "Business stock and event items",
  "Single-item deliveries",
  "Inter-emirate van transport",
];

const faqs = [
  {
    q: "What services do you provide in Dubai?",
    a: "We provide man with a van service, luggage delivery, small moving, boxes delivery, IKEA furniture delivery, hotel luggage transfer, VIP airport luggage delivery and private aviation luggage transfer.",
  },
  {
    q: "Do you provide a helper?",
    a: "Yes. A helper can be arranged in advance for loading, unloading, carrying and selected furniture handling.",
  },
  {
    q: "Can you move a studio or small apartment?",
    a: "Yes, when the complete contents fit safely in the available van. Send photos and a full item list before booking.",
  },
  {
    q: "Do you deliver luggage from Dubai airports?",
    a: "Yes. Pre-arranged landside luggage transport is available from DXB and DWC to hotels, homes, serviced apartments and other confirmed locations.",
  },
  {
    q: "Can you collect from IKEA or another store?",
    a: "Yes. Store pickup can be arranged when the order reference, collection point, package sizes and timing are confirmed.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Same-day service may be available depending on the route, item size, access requirements and van availability.",
  },
  {
    q: "Can you deliver outside Dubai?",
    a: "Yes. Inter-emirate routes may be arranged to Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  },
  {
    q: "How can I get an accurate quote?",
    a: "Send pickup and drop-off locations, clear item photos, quantities, preferred date and time, lift or stair details, parking distance and helper requirements.",
  },
  {
    q: "Is packing included?",
    a: "Packing is not automatically included. Items should normally be packed and ready unless packing support is agreed separately.",
  },
  {
    q: "Can you transport large or heavy items?",
    a: "Large or heavy items must be checked individually. Send dimensions, weight and clear photos before confirmation.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Man with a Van Dubai | Luggage, Moving & Delivery Service",
  },
  {
    name: "description",
    content:
      "Professional man with a van Dubai service for luggage, boxes, furniture, small moving, hotel and airport transfers. Call or WhatsApp +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/",
  },
  {
    property: "og:title",
    content: "Man with a Van Dubai | Luggage, Moving & Delivery Service",
  },
  {
    property: "og:description",
    content:
      "Direct van service across Dubai for luggage, boxes, furniture, small moving, hotels, airports and business deliveries.",
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
    content: "https://manwithavanindubai.com/1-ton-pickup-truck-man-van-dubai.jpg",
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
    image: "https://manwithavanindubai.com/1-ton-pickup-truck-man-van-dubai.jpg",
    telephone: "+971528065642",
    description:
      "Professional van with driver service for luggage, boxes, furniture, small moving, airport transfers, hotel deliveries and business transport.",
    areaServed: [
      "Dubai",
      "Abu Dhabi",
      "Sharjah",
      "Ajman",
      "Ras Al Khaimah",
      "Fujairah",
      "Umm Al Quwain",
      "Al Ain",
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

      <header className="border-b border-white/10 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <a href="/" className="text-xl font-black">
            Man with a Van Dubai
          </a>

          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-slate-200">
            <a href="/man-with-a-van-in-dubai" className="hover:text-white">Van Service</a>
            <a href="/luggage-delivery-dubai" className="hover:text-white">Luggage</a>
            <a href="/small-moving-dubai" className="hover:text-white">Small Moving</a>
            <a href="/boxes-delivery-dubai" className="hover:text-white">Boxes</a>
            <a href="/airport-luggage-delivery-dubai" className="hover:text-white">Airport VIP</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/1-ton-pickup-truck-man-van-dubai.jpg"
          alt="White cargo van in Dubai for moving and delivery"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="mb-5 font-bold uppercase tracking-[0.18em] text-blue-300">
              LUGGAGE • BOXES • FURNITURE • SMALL MOVING • AIRPORT TRANSFERS
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Man with a Van Dubai
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Professional van with driver service for luggage, boxes, furniture,
              small moves, hotel transfers, airport baggage and business
              deliveries across Dubai.
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
                WhatsApp
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Send item photos, pickup and drop-off locations, preferred timing
              and helper requirements for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Real Dubai van service
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              One Van Service for Moving, Luggage and Delivery
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our man with a van service is suitable when a full moving truck is
              unnecessary but a normal car is too small. It provides a practical
              enclosed cargo vehicle with a driver for direct pickup and delivery.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Use the service for suitcases, boxes, selected furniture, office
              equipment, hotel transfers, airport baggage, store collections,
              storage runs and light moving jobs across Dubai.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/hiace-delivery-van-dubai.jpg"
              alt="High roof cargo van for moving in Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Clean enclosed cargo space inside Dubai delivery van"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007436.jpg"
                alt="Furniture and luggage loaded for small moving in Dubai"
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
              Our main services
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Professional Van Services Across Dubai
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                  <span className="mt-5 inline-block font-bold text-blue-600">
                    View service →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Suitable jobs
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              What Can We Carry in the Van?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Capacity depends on item size, quantity, access and safe loading
              space. Send clear photos and dimensions before confirmation.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
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

          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">
            <img
              src="/1000007423.jpg"
              alt="Large cargo space for boxes and furniture delivery in Dubai"
              className="h-72 w-full object-cover"
            />
            <div className="p-8 sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                Before booking
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Send Complete Details for an Accurate Quote
              </h2>
              <div className="mt-7 space-y-3 text-slate-200">
                <p>• Pickup and drop-off locations</p>
                <p>• Clear photos of every item</p>
                <p>• Approximate dimensions and quantities</p>
                <p>• Lift, stairs and parking distance</p>
                <p>• Preferred date and time</p>
                <p>• Helper, dismantling or assembly requirements</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_LINK}
                  className="rounded-xl bg-white px-6 py-4 text-center font-black text-slate-950"
                >
                  Call for a Quote
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-500 px-6 py-4 text-center font-black text-white"
                >
                  Send Photos
                </a>
              </div>
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
              How Our Van Service Works
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {process.map((step) => (
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
              Man with a Van Across Dubai
            </h2>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-black text-amber-300">
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
            <h3 className="text-xl font-black">More Dubai Areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {moreAreas.map((area) => (
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
              Frequently Asked Questions
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
            Book a Man with a Van in Dubai
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Send your item photos, pickup location, drop-off location, preferred
            timing and helper requirements.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_LINK}
              className="rounded-xl bg-white px-8 py-4 text-lg font-black text-blue-700"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-black text-white"
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
              Professional van with driver service for luggage, boxes, furniture,
              small moves, hotel transfers, airport luggage and business
              deliveries.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/man-with-a-van-in-dubai" className="font-bold hover:text-blue-300">
              Man with a Van Dubai
            </a>
            <a href="/luggage-delivery-dubai" className="font-bold hover:text-blue-300">
              Luggage Delivery Dubai
            </a>
            <a href="/small-moving-dubai" className="font-bold hover:text-blue-300">
              Small Moving Dubai
            </a>
            <a href="/airport-luggage-delivery-dubai" className="font-bold hover:text-blue-300">
              VIP Airport Luggage Delivery
            </a>
            <a href={PHONE_LINK} className="font-bold hover:text-blue-300">
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
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
