import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 52 806 5642";
const phoneLink = "tel:+971528065642";
const whatsappLink = "https://wa.me/971528065642";

const services = [
  {
    title: "Man with a Van Dubai",
    description:
      "Reliable van with driver service for luggage, boxes, small furniture and everyday transport across Dubai.",
    href: "/man-with-a-van-in-dubai",
    image: "/1000007421.jpg",
  },
  {
    title: "Luggage Delivery Service Dubai",
    description:
      "Safe luggage collection and delivery between hotels, homes, airports and business locations.",
    href: "/luggage-delivery-dubai",
    image: "/1000007437.jpg",
  },
  {
    title: "Airport to Hotel Luggage Delivery",
    description:
      "Convenient luggage transport from Dubai airports to hotels, residences and serviced apartments.",
    href: "/airport-to-hotel-luggage-delivery-dubai",
    image: "/1000007422.jpg",
  },
  {
    title: "Small Moving Dubai",
    description:
      "Ideal for boxes, suitcases, mattresses, tables, chairs and a limited amount of household items.",
    href: "/small-moving-dubai",
    image: "/1000007436.jpg",
  },
  {
    title: "IKEA Furniture Delivery Dubai",
    description:
      "Collection and delivery of flat-pack and small IKEA furniture items throughout Dubai.",
    href: "/ikea-delivery-dubai",
    image: "/hiace-delivery-van-dubai.jpg",
  },
  {
    title: "Boxes Delivery Dubai",
    description:
      "Fast and careful transport for moving boxes, cartons, personal belongings and business supplies.",
    href: "/boxes-delivery-dubai",
    image: "/1000007423.jpg",
  },
  {
    title: "Small Furniture Delivery Dubai",
    description:
      "Transport for sofas, beds, tables, chairs, cabinets and other small furniture that fits safely in the van.",
    href: "/small-furniture-delivery-dubai",
    image: "/1000007437.jpg",
  },
  {
    title: "Same-Day Delivery Dubai",
    description:
      "Quick collection and delivery for urgent items, subject to vehicle availability and route timing.",
    href: "/same-day-delivery-dubai",
    image: "/1000007436.jpg",
  },
  {
    title: "Hotel Luggage Transfer Dubai",
    description:
      "Easy hotel-to-hotel, hotel-to-airport and hotel-to-residence luggage transfers across Dubai.",
    href: "/hotel-luggage-transfer-dubai",
    image: "/1000007422.jpg",
  },
  {
    title: "Exhibition & Event Delivery Dubai",
    description:
      "Transport for display items, boxes, stands, event materials and light exhibition equipment.",
    href: "/exhibition-event-delivery-dubai",
    image: "/1-ton-pickup-truck-man-van-dubai.jpg",
  },
  {
    title: "Dubai to Other Emirates Delivery",
    description:
      "Van delivery from Dubai to Abu Dhabi, Sharjah, Ajman, Al Ain, RAK, Fujairah and Umm Al Quwain.",
    href: "/dubai-to-other-emirates-delivery",
    image: "/slide1.png",
  },
];

const premiumAreas = [
  "Palm Jumeirah",
  "Emirates Hills",
  "Dubai Hills Estate",
  "Downtown Dubai",
  "DIFC",
  "Dubai Marina",
  "JBR",
  "Bluewaters Island",
  "Jumeirah",
  "Dubai Harbour",
  "City Walk",
  "Business Bay",
  "Arabian Ranches",
  "Jumeirah Golf Estates",
  "The Lakes",
  "The Meadows",
  "The Springs",
  "Dubai Creek Harbour",
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
  "Dragon Mart",
  "Dubai Sports City",
  "Motor City",
  "Studio City",
  "Dubai Production City",
  "Discovery Gardens",
  "The Gardens",
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
  "Muhaisnah",
  "Al Nahda",
  "Hor Al Anz",
  "Al Twar",
  "Al Rashidiya",
  "Al Warqa",
  "Nad Al Hamar",
  "Dubai Academic City",
  "Town Square",
  "Damac Hills",
  "Damac Hills 2",
  "Remraam",
  "Mudon",
];

const faqs = [
  {
    question: "What items can you transport?",
    answer:
      "We transport luggage, boxes, suitcases, small furniture, mattresses, event materials and other items that fit safely inside the van. We do not advertise large apartment or full-house moving.",
  },
  {
    question: "Do you provide service across all of Dubai?",
    answer:
      "Yes. We cover premium communities, central Dubai, residential areas, industrial areas and locations across the city.",
  },
  {
    question: "Can I book through WhatsApp?",
    answer:
      "Yes. Tap the WhatsApp button to open a blank chat and send your pickup location, drop-off location, item details and preferred time.",
  },
  {
    question: "Do you deliver outside Dubai?",
    answer:
      "Yes. Dubai-to-other-emirates delivery is available, including Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain.",
  },
];

export const meta: MetaFunction = () => [
  { title: "Man with a Van Dubai | Luggage & Small Moving Service" },
  {
    name: "description",
    content:
      "Man with a Van Dubai for luggage delivery, airport-to-hotel transfers, boxes, IKEA delivery and small moving. Call or WhatsApp +971 52 806 5642.",
  },
];

export default function Index() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/1000007421.jpg"
          alt="Man with a Van Dubai service vehicle"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20">
              Luggage • Boxes • Small Moving • Furniture Delivery
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Man with a Van Dubai
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Reliable van and driver service for luggage delivery, airport and
              hotel transfers, boxes, IKEA items, small furniture and light
              moving across Dubai and the UAE.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-blue-600 px-7 py-4 text-center text-lg font-bold text-white transition hover:bg-blue-700"
              >
                Call {phoneDisplay}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-7 py-4 text-center text-lg font-bold text-white transition hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                Fast response
              </div>
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                Clean cargo vans
              </div>
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15">
                Dubai-wide coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Our services
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Delivery and Small Moving Services in Dubai
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Select a service to view full details. Every service is also linked
              directly from this home page.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-extrabold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <div className="mt-6 flex gap-3">
                    <a
                      href={service.href}
                      className="flex-1 rounded-lg bg-slate-900 px-4 py-3 text-center font-bold text-white hover:bg-slate-800"
                    >
                      View Service
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp about ${service.title}`}
                      className="rounded-lg bg-green-500 px-4 py-3 font-bold text-white hover:bg-green-600"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Real service video
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              See the Van Service in Action
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The existing video remains on the home page in one clear section,
              helping customers see the vehicle and service before booking.
            </p>
            <div className="mt-7 space-y-4">
              {[
                "Suitable for luggage, boxes and limited furniture",
                "Call or WhatsApp directly without an email form",
                "WhatsApp opens without a pre-written message",
                "Service available across Dubai and other emirates",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="font-black text-green-600">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <video
              className="h-auto w-full"
              controls
              preload="metadata"
              poster="/video.png"
            >
              <source src="/1000007429.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Service areas
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Man with a Van Across Dubai
            </h2>
            <p className="mt-4 text-slate-300">
              Premium locations are shown first, followed by wider city coverage.
            </p>
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
            <p className="mt-6 text-slate-300">
              We also serve other locations throughout Dubai. Call or WhatsApp
              to confirm your pickup and drop-off area.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Customer feedback
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Customer Reviews
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Add genuine customer reviews here as they are collected. This
              section avoids publishing invented ratings or testimonials.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Reliable pickup and delivery service.",
              "Professional communication and careful handling.",
              "Convenient van service for luggage and boxes.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <div className="text-amber-500">★★★★★</div>
                <p className="mt-4 leading-7 text-slate-700">{text}</p>
                <p className="mt-5 text-sm font-bold text-slate-500">
                  Customer review placeholder
                </p>
              </div>
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
                className="group rounded-2xl border border-slate-200 bg-white p-6"
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

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book Man with a Van Dubai
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Contact us directly by phone or WhatsApp. No email form is required.
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
            <p className="text-xl font-black">Man with a Van Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Luggage delivery, small moving and van transport across Dubai.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
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
