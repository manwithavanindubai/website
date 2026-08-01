import type { MetaFunction } from "@remix-run/cloudflare";

const PHONE_DISPLAY = "+971 52 806 5642";
const PHONE_LINK = "tel:+971528065642";
const WHATSAPP_LINK = "https://wa.me/971528065642";

export const meta: MetaFunction = () => [
  {
    title: "Man with a Van Dubai | Professional Van with Driver Service",
  },
  {
    name: "description",
    content:
      "Premium man with a van Dubai service for luggage, boxes, small furniture, airport transfers, hotel deliveries, studio moves, exhibitions and UAE-wide transport. Call or WhatsApp +971 52 806 5642.",
  },
  {
    name: "keywords",
    content:
      "man with a van Dubai, van with driver Dubai, luggage delivery Dubai, small movers Dubai, boxes delivery Dubai, airport luggage transfer Dubai, furniture delivery Dubai",
  },
  {
    name: "robots",
    content: "index, follow",
  },
  {
    property: "og:title",
    content: "Man with a Van Dubai | Premium Van & Driver Service",
  },
  {
    property: "og:description",
    content:
      "Professional door-to-door van service for luggage, boxes, furniture, airports, hotels, business deliveries and small moves across Dubai and the UAE.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/man-with-a-van-in-dubai",
  },
  {
    property: "og:image",
    content: "https://manwithavanindubai.com/1000007421.jpg",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/man-with-a-van-in-dubai",
  },
];

type IconName =
  | "van"
  | "luggage"
  | "airport"
  | "hotel"
  | "boxes"
  | "home"
  | "furniture"
  | "event"
  | "office"
  | "vip"
  | "clock"
  | "map"
  | "helper"
  | "shield"
  | "phone"
  | "whatsapp"
  | "arrow"
  | "check"
  | "quote";

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "van":
      return (
        <svg {...common}>
          <path d="M3 6h11v10H3z" />
          <path d="M14 9h4l3 3v4h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M5 18H3v-2m13 2h-2" />
        </svg>
      );
    case "luggage":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="15" rx="2" />
          <path d="M9 6V4h6v2M9 10v7m6-7v7M6 12h12" />
        </svg>
      );
    case "airport":
      return (
        <svg {...common}>
          <path d="m3 11 18-6-7 14-3-6-8-2Z" />
          <path d="m11 13 3 6" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...common}>
          <path d="M4 21V5h10v16M14 9h6v12M7 8h2m2 0h1M7 12h2m2 0h1M7 16h2m2 0h1m6-4h1m-1 4h1" />
        </svg>
      );
    case "boxes":
      return (
        <svg {...common}>
          <path d="m4 8 8-4 8 4-8 4-8-4Z" />
          <path d="m4 8 8 4v8l-8-4V8Zm16 0-8 4v8l8-4V8Z" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v11h14V10M9 21v-7h6v7" />
        </svg>
      );
    case "furniture":
      return (
        <svg {...common}>
          <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
          <path d="M4 11h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z" />
          <path d="M5 18v3m14-3v3" />
        </svg>
      );
    case "event":
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4zM8 3v4m8-4v4M4 9h16" />
          <path d="M8 13h3m2 0h3m-8 3h3" />
        </svg>
      );
    case "office":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V4h8v3M3 12h18M9 12v2h6v-2" />
        </svg>
      );
    case "vip":
      return (
        <svg {...common}>
          <path d="m12 3 2.4 4.9L20 9l-4 3.9.9 5.6L12 16l-4.9 2.5.9-5.6L4 9l5.6-1.1L12 3Z" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="m3 6 5-2 8 3 5-2v13l-5 2-8-3-5 2V6Z" />
          <path d="M8 4v13m8-10v13" />
        </svg>
      );
    case "helper":
      return (
        <svg {...common}>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 21v-3a6 6 0 0 1 12 0v3" />
          <path d="m16 11 2 2 4-4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20 11.5A8.5 8.5 0 1 1 6.2 18L3 21l1-4A8.5 8.5 0 0 1 20 11.5Z" />
          <path d="M8.5 8.5c.8 3 3 5.2 6 6" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14m-5-5 5 5-5 5" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 4 4 10-10" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M5 11h5v6H4v-6c0-4 2-6 6-7M15 11h5v6h-6v-6c0-4 2-6 6-7" />
        </svg>
      );
  }
}

const services = [
  {
    icon: "luggage" as IconName,
    title: "Luggage Delivery Dubai",
    text: "Secure transport for suitcases, travel bags and personal belongings between homes, hotels, airports and serviced apartments.",
    href: "/luggage-delivery-dubai",
  },
  {
    icon: "airport" as IconName,
    title: "Airport Luggage Transfer",
    text: "Scheduled baggage delivery between DXB, Al Maktoum Airport, hotels, residences, cruise terminals and private aviation facilities.",
    href: "/airport-luggage-delivery-dubai",
  },
  {
    icon: "hotel" as IconName,
    title: "Hotel Luggage Transfer",
    text: "Door-to-door baggage movement between hotels, resorts, villas, apartments and airports across Dubai.",
    href: "/hotel-luggage-transfer-dubai",
  },
  {
    icon: "boxes" as IconName,
    title: "Boxes Delivery Dubai",
    text: "Professional transport for cartons, moving boxes, documents, business stock and packaged household items.",
    href: "/boxes-delivery-dubai",
  },
  {
    icon: "home" as IconName,
    title: "Small Moving Dubai",
    text: "A practical option for rooms, studios, staff accommodation, small apartments and light relocations.",
    href: "/small-moving-dubai",
  },
  {
    icon: "furniture" as IconName,
    title: "Small Furniture Delivery",
    text: "Transport for beds, mattresses, sofas, tables, chairs, cabinets, shelving and other compact furniture.",
    href: "/small-furniture-delivery-dubai",
  },
  {
    icon: "event" as IconName,
    title: "Exhibition & Event Delivery",
    text: "Delivery of display stands, exhibition equipment, promotional materials, event stock and business supplies.",
    href: "/exhibition-event-delivery-dubai",
  },
  {
    icon: "office" as IconName,
    title: "Office & Business Delivery",
    text: "Reliable transport for office equipment, documents, shop stock, printers, screens and commercial items.",
    href: "/office-business-delivery-dubai",
  },
  {
    icon: "vip" as IconName,
    title: "Private Jet & VIP Transfer",
    text: "Discreet luggage and item transport for private aviation passengers, executive travellers and VIP clients.",
    href: "/private-jet-luggage-transfer-dubai",
  },
];

const trustCards = [
  {
    icon: "van" as IconName,
    title: "Dedicated Van",
    text: "A suitable commercial van is allocated according to your items, route and booking duration.",
  },
  {
    icon: "helper" as IconName,
    title: "Helper Available",
    text: "Loading and unloading assistance can be arranged when required.",
  },
  {
    icon: "clock" as IconName,
    title: "Flexible Booking",
    text: "Book one delivery, multiple stops, a few hours or a full working day.",
  },
  {
    icon: "map" as IconName,
    title: "UAE-Wide Coverage",
    text: "Dubai collections with delivery across all seven Emirates.",
  },
];

const itemGroups = [
  {
    icon: "luggage" as IconName,
    title: "Travel & Luggage",
    items: ["Suitcases", "Travel bags", "Flight cases", "Personal belongings"],
  },
  {
    icon: "boxes" as IconName,
    title: "Boxes & Cartons",
    items: ["Moving boxes", "Documents", "Packed items", "Business stock"],
  },
  {
    icon: "furniture" as IconName,
    title: "Furniture",
    items: ["Beds", "Mattresses", "Sofas", "Tables and chairs"],
  },
  {
    icon: "office" as IconName,
    title: "Business Items",
    items: ["Printers", "Screens", "Event equipment", "Office supplies"],
  },
];

const routes = [
  "Dubai Airport to Hotel",
  "Hotel to Dubai Airport",
  "Hotel to Hotel",
  "Residence to Airport",
  "DXB to Abu Dhabi",
  "Dubai to Al Maktoum Airport",
  "Private Terminal to Hotel",
  "Cruise Terminal to Residence",
];

const locations = [
  "Dubai Marina",
  "JBR",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "DIFC",
  "Jumeirah",
  "Emirates Hills",
  "Dubai Hills",
  "Arabian Ranches",
  "JVC",
  "JLT",
  "Bluewaters Island",
  "City Walk",
  "Al Barsha",
  "Al Quoz",
  "Dubai South",
  "Dubai Silicon Oasis",
  "Dubai Investment Park",
  "Motor City",
  "Sports City",
  "Mirdif",
  "Deira",
  "Bur Dubai",
  "Al Karama",
  "Al Garhoud",
  "Festival City",
  "Dubai Creek Harbour",
];

const faqs = [
  {
    q: "How much does a man with a van cost in Dubai?",
    a: "The price depends on the pickup and delivery locations, number and size of items, booking duration, parking access, floor level, lift availability, number of helpers and whether dismantling or assembly is required. Send item photos and the full route by WhatsApp for an accurate quotation.",
  },
  {
    q: "Can I book only a van and driver?",
    a: "Yes. You can book a van with a professional driver for direct collection and delivery. A helper can also be added when carrying, loading or unloading assistance is needed.",
  },
  {
    q: "Do you provide same-day service?",
    a: "Same-day and urgent bookings may be available depending on the route, timing and vehicle schedule. Advance booking is recommended for airport, hotel and long-distance jobs.",
  },
  {
    q: "Can you deliver luggage to Dubai Airport?",
    a: "Yes. Luggage transfer can be arranged between residences, hotels, Dubai International Airport, Al Maktoum International Airport, cruise terminals and private aviation facilities, subject to access and parking rules.",
  },
  {
    q: "Do you provide delivery outside Dubai?",
    a: "Yes. We arrange transport from Dubai to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.",
  },
  {
    q: "Do you move complete villas or large apartments?",
    a: "Our main service is designed for luggage, boxes, small furniture, studio moves, small apartments and light commercial transport. Larger moves must be reviewed before confirmation.",
  },
];

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Man with a Van Dubai",
  url: "https://manwithavanindubai.com/man-with-a-van-in-dubai",
  image: "https://manwithavanindubai.com/1000007421.jpg",
  telephone: "+971528065642",
  description:
    "Professional man with a van service in Dubai for luggage, boxes, small furniture, airport transfers, hotel delivery, studio moving, exhibitions and UAE-wide transport.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971528065642",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu", "Hindi"],
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

export default function ManWithAVanDubai() {
  return (
    <main className="overflow-hidden bg-white pb-20 text-slate-950 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.24),transparent_36%),linear-gradient(135deg,#020617_0%,#0f172a_52%,#111827_100%)]" />
        <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 -z-10 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-bold text-amber-200">
              <Icon name="shield" className="h-4 w-4" />
              Professional Van with Driver Service
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
              Man with a Van
              <span className="block bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Dubai
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Premium door-to-door transport for luggage, boxes, small
              furniture, airport transfers, hotel deliveries, studio moves,
              exhibitions and business items across Dubai and the UAE.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-400 px-7 py-4 text-lg font-black text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
              >
                <Icon name="phone" className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-7 py-4 text-lg font-black text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                WhatsApp for Quote
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Dubai Wide", "All major areas"],
                ["UAE Delivery", "All Emirates"],
                ["Flexible", "Single or hourly"],
                ["Direct", "Door to door"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur"
                >
                  <div className="text-base font-black text-white">{title}</div>
                  <div className="mt-1 text-xs text-slate-400">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/20 to-sky-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl">
              <div className="flex min-h-[330px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-100 sm:min-h-[460px]">
                <img
                  src="/1000007421.jpg"
                  alt="Professional man with a van service in Dubai"
                  className="h-auto max-h-[560px] w-full object-contain"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-8">
              <div className="rounded-2xl border border-white/60 bg-white/95 p-4 text-slate-950 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-amber-100 p-2 text-amber-700">
                    <Icon name="clock" className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black">Same-Day</div>
                    <div className="text-xs text-slate-500">Subject to availability</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/95 p-4 text-slate-950 shadow-xl backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">
                    <Icon name="helper" className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-black">Helper</div>
                    <div className="text-xs text-slate-500">Available on request</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-8 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {trustCards.map((card) => (
            <div
              key={card.title}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                <Icon name={card.icon} className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-black">{card.title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="rounded-[2rem] bg-slate-100 p-4">
              <div className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                <img
                  src="/1000007437.jpg"
                  alt="Dubai van delivery service for luggage boxes and furniture"
                  className="h-auto max-h-[540px] w-full object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-7 -right-2 max-w-[250px] rounded-2xl bg-slate-950 p-5 text-white shadow-2xl sm:right-6">
              <div className="flex items-start gap-3">
                <Icon name="quote" className="mt-1 h-6 w-6 text-amber-300" />
                <p className="text-sm font-semibold leading-6">
                  A practical option when your items are too large for a car
                  but do not need a large moving truck.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
              Reliable Local Transport
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              One Professional Van Service for Personal, Travel and Business Needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our man with a van service is designed for customers who need a
              reliable commercial vehicle, an experienced driver and clear
              door-to-door transport without booking a large moving truck.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "One item or several items",
                "Single trip or multiple stops",
                "Short booking or full day",
                "Driver only or helper included",
                "Dubai local or UAE-wide",
                "Residential or commercial",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-slate-950 py-20 text-white lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-300">
              Complete Service Range
            </div>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              Man with a Van Services Across Dubai
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Choose the service that matches your job or send the full details
              directly by WhatsApp for a custom quotation.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[280px] flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.09]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/10">
                  <Icon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-black">{service.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">
                  {service.text}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 font-black text-amber-300 transition group-hover:gap-3"
                >
                  View Service
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ITEMS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
              Items We Transport
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Suitable for Everyday Household, Travel and Business Items
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Send clear photos of your items so we can confirm the right van,
              loading support and accurate price before the booking.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 font-black text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Send Item Photos
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {itemGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-amber-600 shadow-sm">
                  <Icon name={group.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-black">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Icon name="check" className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP AIRPORT */}
      <section className="bg-amber-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-2xl">
            <div className="grid lg:grid-cols-[1.05fr_.95fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-black text-amber-200">
                  <Icon name="vip" className="h-4 w-4" />
                  Airport, Hotel & VIP Transfers
                </div>
                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Discreet Luggage Transport for Travellers and Executive Clients
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Scheduled collection and delivery can be arranged between
                  Dubai International Airport, Al Maktoum International
                  Airport, hotels, residences, cruise terminals and private
                  aviation facilities.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {routes.map((route) => (
                    <div
                      key={route}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <span className="text-amber-300">
                        <Icon name="airport" className="h-5 w-5" />
                      </span>
                      <span className="font-bold">{route}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[360px] bg-slate-100 p-6 lg:min-h-full">
                <div className="flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-white">
                  <img
                    src="/1000007421.jpg"
                    alt="VIP airport luggage transfer van in Dubai"
                    className="h-auto max-h-[620px] w-full object-contain"
                  />
                </div>
                <div className="absolute bottom-10 left-10 right-10 rounded-2xl border border-white/60 bg-white/95 p-5 text-slate-950 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                      <Icon name="shield" className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-black">Professional & Discreet</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Suitable for families, groups, business travellers and VIP passengers.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
            Simple Booking Process
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Book Your Van in Four Clear Steps
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Send Details", "Share item photos, pickup, destination and preferred time."],
            ["02", "Receive Quote", "We review the job and send a clear quotation."],
            ["03", "Confirm Booking", "Confirm the date, timing, van and helper requirement."],
            ["04", "Collection & Delivery", "The driver arrives and completes the agreed transport."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="absolute -right-3 -top-6 text-8xl font-black text-slate-100">
                {number}
              </div>
              <div className="relative">
                <div className="text-sm font-black text-amber-600">STEP {number}</div>
                <h3 className="mt-4 text-xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="bg-slate-100 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
                Dubai Service Areas
              </div>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                Available Across Residential, Hotel, Commercial and Industrial Areas
              </h2>
              <div className="mt-7 rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                    <Icon name="map" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">All Emirates Delivery</h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      Dubai to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah,
                      Fujairah, Umm Al Quwain and Al Ain.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <span
                  key={location}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 shadow-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
            Man with a Van Dubai FAQs
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-sm open:border-amber-300 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black">
                <span>{faq.q}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-open:rotate-45 group-open:bg-amber-400 group-open:text-slate-950">
                  +
                </span>
              </summary>
              <p className="mt-5 border-t border-slate-100 pt-5 leading-8 text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-amber-400">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-950/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center md:px-8 lg:py-24">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-amber-300 shadow-xl">
            <Icon name="van" className="h-8 w-8" />
          </div>
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Need a Professional Man with a Van in Dubai?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Send item photos, pickup location, destination and preferred time
            for a quick quotation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Icon name="phone" className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* MOBILE ACTION BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a
          href={PHONE_LINK}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-4 font-black text-white"
        >
          <Icon name="phone" className="h-5 w-5" />
          Call Now
        </a>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-4 font-black text-white"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </main>
  );
}
