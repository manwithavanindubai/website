import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 52 806 5642";
const phoneLink = "tel:+971528065642";
const whatsappLink = "https://wa.me/971528065642";

const terminals = [
  {
    title: "Jetex Private Terminal",
    location: "Dubai South / Al Maktoum International",
    text: "Pre-arranged landside luggage collection and delivery for private aviation passengers, crews and authorised representatives.",
  },
  {
    title: "ExecuJet Private Jet Terminal",
    location: "Mohammed Bin Rashid Aerospace Hub, Dubai South",
    text: "Premium van support for baggage movements connected with ExecuJet's private aviation facility at Dubai South.",
  },
  {
    title: "ExecuJet Dubai International FBO",
    location: "Dubai International Airport",
    text: "Landside luggage transfer for confirmed private aviation movements at Dubai International Airport.",
  },
  {
    title: "DC Aviation Al-Futtaim VIP Terminal",
    location: "Dubai South",
    text: "Discreet baggage and crew-luggage transport connected with confirmed arrivals and departures at the DCAF VIP terminal.",
  },
  {
    title: "RoyalJet FBO / VIP Terminal",
    location: "Zayed International Airport, Abu Dhabi",
    text: "Pre-booked luggage transfer between Dubai and RoyalJet's Abu Dhabi FBO and VIP terminal.",
  },
  {
    title: "Al Majlis VIP Service",
    location: "Dubai International Airport",
    text: "Luggage delivery coordinated around authorised landside meeting points for confirmed Al Majlis travel arrangements.",
  },
];

const conciergeRoutes = [
  {
    title: "Private Terminal to Luxury Hotel",
    text: "Direct luggage delivery from a confirmed landside terminal meeting point to a hotel concierge, bell desk or authorised receiving contact.",
  },
  {
    title: "Luxury Hotel to Private Terminal",
    text: "Scheduled hotel pickup timed around private aviation departure plans and passenger transport arrangements.",
  },
  {
    title: "Private Terminal to Villa or Residence",
    text: "Premium baggage delivery to private villas, residences, serviced apartments and staff accommodation.",
  },
  {
    title: "Crew Luggage and Operational Bags",
    text: "Van transport for crew baggage, uniforms, equipment cases and personal bags, subject to item and access confirmation.",
  },
  {
    title: "Private Terminal to Marina or Yacht",
    text: "Luggage delivery to authorised marina reception points, yacht agents or confirmed landside contacts.",
  },
  {
    title: "Dubai to Abu Dhabi Private Aviation",
    text: "Inter-emirate luggage transfer between Dubai locations and private aviation facilities in Abu Dhabi.",
  },
];

const luxuryDestinations = [
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
  "The Lana, Dorchester Collection",
  "The Ritz-Carlton DIFC",
  "Waldorf Astoria Dubai Palm Jumeirah",
  "The St. Regis Dubai, The Palm",
  "Emirates Palace Mandarin Oriental, Abu Dhabi",
  "The St. Regis Abu Dhabi",
];

const guestProfiles = [
  "Private jet passengers",
  "Business executives",
  "Luxury hotel guests",
  "Family offices",
  "Diplomatic and protocol guests",
  "Private aviation crews",
  "Event speakers and delegates",
  "Yacht and marina guests",
];

const luggageTypes = [
  "Premium suitcases",
  "Cabin and hand luggage",
  "Family and group baggage",
  "Crew luggage",
  "Garment bags",
  "Golf bags",
  "Business equipment cases",
  "Event and exhibition luggage",
  "Designer shopping bags",
  "Personal boxes and cartons",
  "Oversized baggage by prior check",
  "Hotel guest belongings",
];

const standards = [
  "Pre-arranged direct van service",
  "Clear passenger or representative coordination",
  "Authorised landside pickup only",
  "Enclosed cargo transport",
  "Optional helper by prior request",
  "Dubai and Abu Dhabi routes",
  "Hotel, villa, marina and residence delivery",
  "Phone and WhatsApp booking",
];

const steps = [
  {
    number: "01",
    title: "Send Flight and Terminal Details",
    text: "Share the terminal or FBO name, flight timing, passenger or crew contact, luggage quantity and authorised meeting point.",
  },
  {
    number: "02",
    title: "Confirm the Premium Route",
    text: "We confirm timing, destination, van capacity, waiting arrangements and any access restrictions before dispatch.",
  },
  {
    number: "03",
    title: "Collect and Deliver Directly",
    text: "The luggage is collected from the permitted landside point and delivered to the confirmed hotel, residence, marina or onward airport.",
  },
];

const faqs = [
  {
    question: "Can you collect luggage directly from a private jet terminal?",
    answer:
      "Yes, when an authorised landside meeting point, passenger or handling contact and collection time are confirmed in advance. We do not enter restricted airside areas.",
  },
  {
    question: "Do you provide luggage transfer from Jetex Dubai South?",
    answer:
      "Yes, pre-arranged landside luggage delivery can be coordinated for confirmed Jetex Dubai South arrivals or departures.",
  },
  {
    question: "Can you collect from ExecuJet or DC Aviation Al-Futtaim?",
    answer:
      "Yes, subject to correct terminal details, landside access instructions and coordination with the passenger, crew or authorised representative.",
  },
  {
    question: "Do you transfer luggage between Dubai and RoyalJet Abu Dhabi?",
    answer:
      "Yes. Dubai-to-Abu Dhabi private aviation luggage transfer can be arranged as an inter-emirate booking.",
  },
  {
    question: "Can luggage be delivered to a yacht or marina?",
    answer:
      "Yes, when the marina, yacht agent, reception point or authorised landside receiving contact is confirmed before delivery.",
  },
  {
    question: "Can you deliver to luxury hotels and private residences?",
    answer:
      "Yes. Please provide the hotel guest name, reservation details when required, concierge or receiving contact and preferred delivery time.",
  },
  {
    question: "Is your company affiliated with the terminals or hotels listed?",
    answer:
      "No. We are an independent van transport provider. The names on this page describe service locations only and do not imply partnership or endorsement.",
  },
  {
    question: "How do I request a private aviation luggage quote?",
    answer:
      "Send the FBO or terminal name, flight timing, number of bags, pickup contact, destination, photos when useful and required collection time by phone or WhatsApp.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Private Jet Luggage Transfer Dubai | FBO & VIP Terminal Service",
  },
  {
    name: "description",
    content:
      "Private jet luggage transfer Dubai for Jetex, ExecuJet, DC Aviation Al-Futtaim, RoyalJet, luxury hotels, villas and marinas. Call +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/private-jet-luggage-transfer-dubai",
  },
  {
    property: "og:title",
    content: "Private Jet Luggage Transfer Dubai | FBO & VIP Terminal Service",
  },
  {
    property: "og:description",
    content:
      "Premium landside luggage transport between private aviation terminals, luxury hotels, villas, marinas and Abu Dhabi.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/private-jet-luggage-transfer-dubai",
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

export default function PrivateJetLuggageTransferDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Private Jet Luggage Transfer Dubai",
    serviceType: "Private Aviation and VIP Terminal Luggage Transport",
    url: "https://manwithavanindubai.com/private-jet-luggage-transfer-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Premium landside luggage transport between private aviation terminals, luxury hotels, residences, marinas and airports in Dubai and Abu Dhabi.",
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
        name: "Private Jet Luggage Transfer Dubai",
        item: "https://manwithavanindubai.com/private-jet-luggage-transfer-dubai",
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

      <section className="relative overflow-hidden bg-black text-white">
        <img
          src="/1000007421.jpg"
          alt="Private jet luggage transfer van Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-slate-950/40" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-300"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-white">
              Private Jet Luggage Transfer Dubai
            </span>
          </nav>

          <div className="max-w-4xl">
            <p className="mb-5 font-bold uppercase tracking-[0.2em] text-amber-300">
              PRIVATE AVIATION • FBO • VIP TERMINALS • LUXURY HOTELS
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">
              Private Jet Luggage Transfer Dubai
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Premium, pre-arranged luggage transport for private aviation
              passengers, crews, executives, families and luxury hospitality
              guests.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-amber-400 px-8 py-4 text-center text-lg font-black text-slate-950 hover:bg-amber-300"
              >
                Private Booking {phoneDisplay}
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

            <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-300">
              Collections are completed from authorised landside meeting points
              only. Airside, customs-controlled and security-restricted access
              is not included.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-amber-200 bg-amber-50 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center text-sm font-semibold leading-6 text-slate-700">
          Independent van transport provider — not affiliated with or endorsed
          by any airport, FBO, private aviation company, hotel or marina named
          on this page.
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Premium baggage logistics
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              A Dedicated Van for the Luggage Behind the Journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Private aviation passengers often require a separate vehicle for
              suitcases, crew bags, garment bags, golf equipment, premium
              shopping, event cases or family luggage. This service connects
              the confirmed private terminal meeting point with the required
              hotel, villa, residence, marina or onward airport.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Every booking is coordinated around the exact terminal or FBO,
              passenger or representative contact, authorised collection point,
              luggage quantity and destination instructions.
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
              alt="Premium van for private aviation luggage Dubai"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Private aviation luggage and suitcases"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007422.jpg"
                alt="Enclosed cargo space for VIP baggage"
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
              Private aviation locations
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              FBO and VIP Terminal Coverage
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Advance coordination is required for every terminal or FBO
              collection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {terminals.map((terminal) => (
              <article
                key={terminal.title}
                className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/15"
              >
                <div className="inline-flex rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-950">
                  FBO / VIP
                </div>
                <p className="mt-5 font-bold uppercase tracking-wider text-amber-300">
                  {terminal.location}
                </p>
                <h3 className="mt-3 text-2xl font-black">{terminal.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{terminal.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Concierge routes
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Private Aviation Luggage Transfer Options
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conciergeRoutes.map((route) => (
              <article
                key={route.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-black">{route.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{route.text}</p>
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
                Guest profiles
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Suitable for Executive, Family and Crew Travel
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                This service is designed for clients who require a separate,
                enclosed luggage vehicle while passenger transport is handled
                independently.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {guestProfiles.map((guest) => (
                  <div
                    key={guest}
                    className="flex gap-3 rounded-xl bg-white p-4 ring-1 ring-amber-200"
                  >
                    <span className="font-black text-amber-600">✓</span>
                    <span className="font-semibold text-slate-700">{guest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-black p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-amber-300">
                Dispatch requirements
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Details Required Before the Van Is Sent
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Terminal or FBO name",
                  "Flight number and scheduled timing",
                  "Passenger, crew or representative contact",
                  "Authorised landside meeting point",
                  "Number and type of luggage items",
                  "Destination hotel, villa, marina or airport",
                  "Waiting-time requirements",
                  "Oversized or specialised item details",
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
              Luxury destinations
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Delivery to Leading Hotels and Premium Addresses
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Luggage can be delivered to a confirmed concierge, bell desk,
              residence manager, marina contact or authorised representative.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {luxuryDestinations.map((destination) => (
              <span
                key={destination}
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm"
              >
                {destination}
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
                Luggage and equipment
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Premium Baggage and Travel Items
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Send clear photos and approximate dimensions for oversized,
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
                Booking process
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                How Private Jet Luggage Transfer Works
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

      <section className="bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-amber-300">
              Access and responsibility
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Important Private Aviation Conditions
            </h2>
          </div>

          <div className="mt-10 space-y-4 text-slate-200">
            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              All collections and deliveries are performed from authorised
              landside locations only. Restricted airside, customs-controlled
              and security-controlled zones are excluded.
            </p>

            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              The client or authorised representative must arrange terminal
              permission, baggage release, customs clearance and any required
              access before the van arrives.
            </p>

            <p className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              Flight changes, waiting time, parking fees and revised terminal
              instructions should be communicated immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-amber-600">
              Private booking questions
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
              Related premium services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Complete the Airport and Hotel Journey
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            <a
              href="/airport-luggage-delivery-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">
                VIP Airport Luggage Delivery
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                DXB, DWC, airport terminal and Abu Dhabi luggage routes.
              </p>
            </a>

            <a
              href="/hotel-luggage-transfer-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">
                Hotel Luggage Transfer Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hotel-to-hotel, airport, residence and family luggage delivery.
              </p>
            </a>

            <a
              href="/luggage-delivery-dubai"
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-amber-200 hover:shadow-md"
            >
              <h3 className="text-xl font-black">Luggage Delivery Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                General luggage transport across Dubai and the UAE.
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
            Arrange Private Jet Luggage Transfer
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Send the FBO or terminal name, flight timing, luggage quantity,
            destination and authorised collection contact.
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
            <p className="text-xl font-black">
              Private Jet Luggage Transfer Dubai
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Independent landside luggage transport for private aviation
              terminals, luxury hotels, residences, marinas and Abu Dhabi
              routes.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-amber-300">
              Home
            </a>

            <a
              href="/airport-luggage-delivery-dubai"
              className="font-bold hover:text-amber-300"
            >
              VIP Airport Luggage Delivery
            </a>

            <a
              href="/hotel-luggage-transfer-dubai"
              className="font-bold hover:text-amber-300"
            >
              Hotel Luggage Transfer Dubai
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
