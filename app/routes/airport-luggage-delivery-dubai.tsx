import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const airports = [
  {
    title: "Dubai International Airport (DXB)",
    subtitle: "Terminal 1 • Terminal 2 • Terminal 3",
    text: "Pre-arranged luggage collection and delivery for guests using DXB, including hotel, residence, private aviation and business travel connections.",
  },
  {
    title: "Al Maktoum International Airport (DWC)",
    subtitle: "Dubai World Central • Dubai South",
    text: "Premium luggage and baggage transport for passengers, crews, private aviation guests and Dubai South connections.",
  },
  {
    title: "Zayed International Airport (AUH)",
    subtitle: "Abu Dhabi Main Terminal",
    text: "Long-distance premium luggage transfer between Dubai and Zayed International Airport, subject to route and booking confirmation.",
  },
  {
    title: "Airport Cargo & Logistics Locations",
    subtitle: "Dubai South • SkyCargo-related collections",
    text: "Van transport for approved landside cargo, baggage and shipment collections when documents, access and release arrangements are confirmed.",
  },
];

const privateAviation = [
  {
    title: "Jetex Dubai South",
    text: "Landside luggage support for confirmed private aviation arrivals or departures at the Jetex FBO terminal in Dubai South.",
  },
  {
    title: "ExecuJet Dubai South",
    text: "Premium baggage transport for guests and crews using ExecuJet's private aviation facility at Mohammed Bin Rashid Aerospace Hub.",
  },
  {
    title: "ExecuJet Dubai International",
    text: "Pre-arranged luggage transfer for private aviation movements at Dubai International Airport, subject to access instructions.",
  },
  {
    title: "DC Aviation Al-Futtaim VIP Terminal",
    text: "Discreet van support for approved luggage collections and deliveries connected with the Dubai South VIP terminal.",
  },
  {
    title: "RoyalJet FBO / VIP Terminal",
    text: "Dubai-to-Abu Dhabi luggage transfer for guests using RoyalJet's FBO and VIP facilities at Zayed International Airport.",
  },
  {
    title: "Al Majlis VIP Service at DXB",
    text: "Luggage transport can be coordinated around confirmed Al Majlis travel arrangements and permitted landside meeting points.",
  },
];

const vipHotels = [
  "Burj Al Arab Jumeirah",
  "Atlantis The Royal",
  "Atlantis, The Palm",
  "One&Only The Palm",
  "One&Only Royal Mirage",
  "Bulgari Resort Dubai",
  "Four Seasons Resort Dubai at Jumeirah Beach",
  "Mandarin Oriental Jumeira",
  "Jumeirah Al Naseem",
  "Jumeirah Mina Al Salam",
  "Armani Hotel Dubai",
  "Address Downtown",
  "Address Sky View",
  "Palace Downtown",
  "The Ritz-Carlton, Dubai International Financial Centre",
  "Waldorf Astoria Dubai Palm Jumeirah",
  "Kempinski Hotel Mall of the Emirates",
  "Sofitel Dubai The Palm",
  "The Lana, Dorchester Collection",
  "The St. Regis Dubai, The Palm",
];

const clients = [
  "Private jet passengers",
  "Luxury hotel guests",
  "Business executives",
  "Diplomatic and protocol guests",
  "VIP families",
  "Airline and private aviation crews",
  "Event speakers and delegates",
  "Long-stay and relocation guests",
];

const luggageTypes = [
  "Premium suitcases and trolley bags",
  "Cabin bags and hand luggage",
  "Family and group luggage",
  "Crew and staff baggage",
  "Golf bags and sports equipment",
  "Exhibition and event luggage",
  "Designer shopping bags and cartons",
  "Boxes and personal belongings",
  "Oversized luggage by prior approval",
  "Business equipment cases",
  "Hotel guest luggage",
  "Private aviation baggage",
];

const steps = [
  {
    number: "01",
    title: "Share Flight and Access Details",
    text: "Send airport, terminal or FBO name, flight timing, luggage quantity, passenger or crew contact and the exact meeting point.",
  },
  {
    number: "02",
    title: "Confirm the Premium Transfer",
    text: "We confirm the route, van capacity, waiting arrangement, hotel or residence details and any access restrictions.",
  },
  {
    number: "03",
    title: "Discreet Collection and Delivery",
    text: "The luggage is collected from the permitted landside point and delivered directly to the confirmed destination.",
  },
];

const standards = [
  "Pre-arranged direct van service",
  "Professional communication",
  "Discreet handling for VIP guests",
  "Enclosed luggage transport",
  "Airport, hotel, residence and FBO routes",
  "Dubai and Abu Dhabi coverage",
  "Optional helper by prior request",
  "Phone and WhatsApp coordination",
];

const faqs = [
  {
    question: "Can you collect luggage from DXB Terminal 1, Terminal 2 or Terminal 3?",
    answer:
      "Yes, collection can be arranged from a permitted landside meeting point when the terminal, timing, passenger contact and access instructions are confirmed in advance.",
  },
  {
    question: "Do you provide luggage delivery from DWC and Dubai South private terminals?",
    answer:
      "Yes. We can arrange landside luggage transport connected with DWC, Jetex, ExecuJet and DC Aviation Al-Futtaim when the client provides the correct terminal and access details.",
  },
  {
    question: "Can you collect baggage from a private jet terminal?",
    answer:
      "Yes, subject to terminal permission, landside access and coordination with the passenger, crew, handling agent or authorised representative. We do not enter restricted airside areas.",
  },
  {
    question: "Do you deliver luggage from Dubai to Zayed International Airport?",
    answer:
      "Yes. Dubai-to-Abu Dhabi airport luggage delivery can be arranged as a pre-booked inter-emirate service.",
  },
  {
    question: "Can you deliver luggage to luxury hotels such as Burj Al Arab or Atlantis The Royal?",
    answer:
      "Yes. Please provide the guest name, reservation details when required, hotel receiving contact and preferred delivery time.",
  },
  {
    question: "Do you handle SkyCargo or cargo terminal collections?",
    answer:
      "We can transport approved landside shipments and released items when all documents, collection references, customs requirements and terminal access instructions are completed by the customer.",
  },
  {
    question: "Is this service affiliated with the airports, FBOs or hotels listed?",
    answer:
      "No. We are an independent van transport provider. Airport, FBO and hotel names are used only to describe service locations and must not be understood as partnerships or endorsements.",
  },
  {
    question: "How do I receive a VIP airport luggage quote?",
    answer:
      "Send the airport or terminal name, flight time, number of bags, photos when useful, pickup contact, destination and required collection time by phone or WhatsApp.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "VIP Airport Luggage Delivery Dubai | DXB, DWC & Private Terminals",
  },
  {
    name: "description",
    content:
      "VIP airport luggage delivery Dubai for DXB terminals, DWC, private aviation terminals, luxury hotels and Abu Dhabi airport transfers. Call +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/airport-luggage-delivery-dubai",
  },
  {
    property: "og:title",
    content: "VIP Airport Luggage Delivery Dubai | DXB, DWC & Private Terminals",
  },
  {
    property: "og:description",
    content:
      "Premium luggage transport between Dubai airports, private aviation terminals, luxury hotels, residences and Abu Dhabi.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/airport-luggage-delivery-dubai",
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

export default function AirportLuggageDeliveryDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "VIP Airport Luggage Delivery Dubai",
    serviceType: "Airport and Private Aviation Luggage Transport",
    url: "https://manwithavanindubai.com/airport-luggage-delivery-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Premium luggage transport between Dubai International Airport, Al Maktoum International Airport, private aviation terminals, hotels, residences and Zayed International Airport.",
    areaServed: [
      "Dubai",
      "Dubai South",
      "Abu Dhabi",
      "United Arab Emirates",
    ],
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971528065642",
      areaServed: "United Arab Emirates",
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
        name: "VIP Airport Luggage Delivery Dubai",
        item: "https://manwithavanindubai.com/airport-luggage-delivery-dubai",
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
          alt="VIP airport luggage delivery van Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-950/95 to-slate-900/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-white">VIP Airport Luggage Delivery Dubai</span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-5 font-bold uppercase tracking-[0.2em] text-amber-300">
              DXB • DWC • PRIVATE AVIATION • LUXURY HOTELS • ABU DHABI
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              VIP Airport Luggage Delivery Dubai
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Premium, discreet van transport for airport luggage, private jet
              passengers, luxury hotel guests, executives, families and crews.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-amber-400 px-8 py-4 text-center text-lg font-black text-slate-950 hover:bg-amber-300"
              >
                VIP Call {phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-black text-white hover:bg-green-600"
              >
                WhatsApp Concierge
              </a>
            </div>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-300">
              Airport and FBO collections are completed only from authorised
              landside meeting points. Restricted airside access is not included.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-200 bg-amber-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm font-semibold leading-6 text-slate-700">
          Independent transport provider — not affiliated with or endorsed by
          any airport, airline, FBO, cargo operator or hotel named on this page.
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Premium airport logistics
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              A Discreet Luggage Service for High-Value Journeys
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              VIP passengers often travel with multiple suitcases, business
              equipment, family luggage, premium shopping, golf bags or crew
              baggage. Our role is to move those items directly between the
              confirmed airport meeting point and the required hotel, residence,
              office or onward airport.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every premium booking should include exact flight timing, terminal
              or FBO name, luggage quantity, passenger or representative contact
              and destination instructions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {standards.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-amber-600">◆</span>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/1000007421.jpg"
              alt="Premium luggage van for airport delivery Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="VIP luggage and suitcases ready for transport"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007422.jpg"
                alt="Clean enclosed cargo space for airport luggage"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-amber-300">
              Commercial airports
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Airport Terminal Coverage
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Pre-arranged luggage transfer for Dubai and Abu Dhabi airport
              journeys.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {airports.map((airport) => (
              <article
                key={airport.title}
                className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/15"
              >
                <p className="font-bold uppercase tracking-wider text-amber-300">
                  {airport.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-black">{airport.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{airport.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Private aviation
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Private Jet and VIP Terminal Luggage Support
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These services require advance coordination and authorised
              landside collection instructions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {privateAviation.map((terminal) => (
              <article
                key={terminal.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-widest text-amber-800">
                  VIP / FBO
                </div>
                <h3 className="text-xl font-black">{terminal.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{terminal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-amber-700">
                Premium guest profiles
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Designed for VIP, Executive and Private Aviation Guests
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The service is suitable for guests who need a separate vehicle
                for luggage while passenger transport is handled independently.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {clients.map((client) => (
                  <div
                    key={client}
                    className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-amber-200"
                  >
                    <span className="font-black text-amber-600">✓</span>
                    <span className="font-semibold text-slate-700">{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-amber-300">
                Required booking details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Information Needed Before Dispatch
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Airport, terminal or FBO name",
                  "Flight number and scheduled timing",
                  "Authorised landside meeting point",
                  "Passenger, crew or handling contact",
                  "Number and type of luggage items",
                  "Destination hotel, residence or airport",
                  "Waiting-time requirements",
                  "Any oversized or high-value item details",
                ].map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
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

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Luxury hotel routes
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Airport Luggage Delivery to Dubai's Leading Hotels
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Delivery can be arranged to hotel concierge, bell desk or another
              authorised receiving contact.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {vipHotels.map((hotel) => (
              <span
                key={hotel}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm"
              >
                {hotel}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-amber-600">
                Luggage capacity
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Premium Baggage, Equipment and Travel Items
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Send photos and approximate dimensions for oversized,
                specialised or high-value cases before confirmation.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {luggageTypes.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                  >
                    <span className="font-black text-amber-600">◆</span>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-amber-600">
                Three-stage service
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                How VIP Airport Luggage Delivery Works
              </h2>

              <div className="mt-8 space-y-5">
                {steps.map((step) => (
                  <article
                    key={step.number}
                    className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
                  >
                    <span className="text-4xl font-black text-amber-500">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-amber-300">
              Important information
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Airport and FBO Access Conditions
            </h2>
          </div>

          <div className="mt-10 space-y-4 text-slate-200">
            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Collections and deliveries are performed from authorised landside
              areas only. The service does not include entry into restricted
              airside, customs-controlled or security-controlled zones.
            </p>
            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              The client is responsible for obtaining release documents,
              terminal permissions, cargo references, customs clearance and any
              other authorisation required before the van arrives.
            </p>
            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Waiting time, parking charges, terminal access restrictions and
              changes to flight timing should be discussed before confirmation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              VIP service questions
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-black">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-amber-700">
              Related services
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Complete Your Luggage Journey
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            <a
              href="/hotel-luggage-transfer-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">Hotel Luggage Transfer Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel-to-hotel, hotel-to-airport and residence transfers.
              </p>
            </a>

            <a
              href="/luggage-delivery-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">Luggage Delivery Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                General luggage delivery for hotels, homes and UAE routes.
              </p>
            </a>

            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">Man with a Van Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Direct van transport for luggage, boxes and furniture.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-bold uppercase tracking-[0.2em] text-amber-300">
            Private booking line
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Book VIP Airport Luggage Delivery
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Send the airport or FBO name, flight timing, luggage quantity,
            destination and authorised meeting contact.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-amber-400 px-8 py-4 text-lg font-black text-slate-950 hover:bg-amber-300"
            >
              Call {phoneDisplay}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-lg font-black text-white hover:bg-green-600"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black">VIP Airport Luggage Delivery Dubai</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Independent landside van transport for DXB, DWC, private aviation,
              luxury hotels and Abu Dhabi airport routes.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-amber-300">
              Home
            </a>
            <a
              href="/hotel-luggage-transfer-dubai"
              className="font-bold hover:text-amber-300"
            >
              Hotel Luggage Transfer Dubai
            </a>
            <a
              href="/luggage-delivery-dubai"
              className="font-bold hover:text-amber-300"
            >
              Luggage Delivery Dubai
            </a>
            <a href={phoneLink} className="font-bold hover:text-amber-300">
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
