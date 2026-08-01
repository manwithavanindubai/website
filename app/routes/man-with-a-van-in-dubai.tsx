import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 52 806 5642";
const phoneLink = "tel:+971528065642";
const whatsappLink = "https://wa.me/971528065642";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Man with a Van Dubai | Professional Van & Driver Service",
    },
    {
      name: "description",
      content:
        "Professional man with a van Dubai service for luggage, boxes, small furniture, airport transfers, hotel deliveries, office moves and UAE-wide transport. Call or WhatsApp +971 52 806 5642.",
    },
    {
      name: "keywords",
      content:
        "man with a van Dubai, van with driver Dubai, moving van Dubai, luggage delivery Dubai, small movers Dubai, furniture delivery Dubai, airport luggage transfer Dubai",
    },
    {
      property: "og:title",
      content: "Man with a Van Dubai | Professional Van Service",
    },
    {
      property: "og:description",
      content:
        "Reliable van with driver service across Dubai and the UAE. Luggage, boxes, furniture, airport, hotel, office and urgent deliveries.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content:
        "https://manwithavanindubai.com/man-with-a-van-in-dubai",
    },
    {
      property: "og:image",
      content: "https://manwithavanindubai.com/1000007421.jpg",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      tagName: "link",
      rel: "canonical",
      href:
        "https://manwithavanindubai.com/man-with-a-van-in-dubai",
    },
  ];
};

const services = [
  {
    title: "Luggage Delivery Dubai",
    description:
      "Secure collection and delivery of suitcases, travel bags and personal belongings between homes, hotels, airports and business locations.",
    href: "/luggage-delivery-dubai",
  },
  {
    title: "Airport Luggage Transfer",
    description:
      "Reliable luggage transport between Dubai airports, hotels, residences, cruise terminals and private aviation terminals.",
    href: "/airport-luggage-delivery-dubai",
  },
  {
    title: "Hotel Luggage Transfer",
    description:
      "Door-to-door baggage delivery between hotels, serviced apartments, villas, airports and tourist destinations.",
    href: "/hotel-luggage-transfer-dubai",
  },
  {
    title: "Boxes Delivery Dubai",
    description:
      "Safe transport for moving boxes, cartons, documents, stock, equipment and packaged personal belongings.",
    href: "/boxes-delivery-dubai",
  },
  {
    title: "Small Moving Dubai",
    description:
      "Practical moving service for studios, rooms, small apartments, staff accommodation and light office relocations.",
    href: "/small-moving-dubai",
  },
  {
    title: "Small Furniture Delivery",
    description:
      "Transport for sofas, beds, mattresses, tables, chairs, cabinets, shelves and other small furniture items.",
    href: "/small-furniture-delivery-dubai",
  },
  {
    title: "Private Jet Luggage Transfer",
    description:
      "Discreet and punctual luggage delivery for VIP travellers, private aviation passengers and executive clients.",
    href: "/private-jet-luggage-transfer-dubai",
  },
  {
    title: "Exhibition & Event Delivery",
    description:
      "Transport for displays, exhibition materials, event equipment, promotional items, stands and business supplies.",
    href: "/exhibition-event-delivery-dubai",
  },
  {
    title: "Same-Day Delivery Dubai",
    description:
      "Fast collection and delivery for urgent items across Dubai, subject to vehicle and driver availability.",
    href: "/same-day-delivery-dubai",
  },
];

const suitableFor = [
  "Suitcases and travel bags",
  "Moving boxes and cartons",
  "Beds and mattresses",
  "Sofas and chairs",
  "Tables and desks",
  "Televisions and displays",
  "Office equipment",
  "Shop and exhibition items",
  "Bicycles and sports equipment",
  "Packed household belongings",
  "Small appliances",
  "Business stock and supplies",
];

const locations = [
  "Dubai Marina",
  "Jumeirah Beach Residence",
  "Palm Jumeirah",
  "Downtown Dubai",
  "Business Bay",
  "Dubai International Financial Centre",
  "Jumeirah",
  "Emirates Hills",
  "Arabian Ranches",
  "Dubai Hills Estate",
  "Jumeirah Village Circle",
  "Jumeirah Lake Towers",
  "Bluewaters Island",
  "City Walk",
  "Al Barsha",
  "Al Quoz",
  "Dubai Silicon Oasis",
  "Dubai Investment Park",
  "Dubai South",
  "Dubai Sports City",
  "Motor City",
  "International City",
  "Mirdif",
  "Deira",
  "Bur Dubai",
  "Al Karama",
  "Al Nahda",
  "Al Garhoud",
  "Dubai Festival City",
  "Dubai Creek Harbour",
];

const benefits = [
  {
    title: "Dedicated Van with Driver",
    text:
      "A suitable commercial van with an experienced driver is arranged according to your items, collection point and destination.",
  },
  {
    title: "Direct Door-to-Door Transport",
    text:
      "Your belongings are collected from the agreed location and delivered directly to the destination without unnecessary handling.",
  },
  {
    title: "Flexible Booking",
    text:
      "Book for one delivery, several stops, a few hours or a full working day, depending on your transport requirement.",
  },
  {
    title: "Helper Available",
    text:
      "A helper can be arranged when assistance is required for carrying, loading, unloading or positioning larger items.",
  },
  {
    title: "Dubai and UAE Coverage",
    text:
      "Transport is available across Dubai and for deliveries to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.",
  },
  {
    title: "Clear Communication",
    text:
      "Share item photos, pickup location, destination and preferred timing by WhatsApp to receive a clear quotation.",
  },
];

const faqs = [
  {
    question: "How much does a man with a van cost in Dubai?",
    answer:
      "The price depends on the pickup and delivery locations, number and size of items, required time, parking access, number of helpers and whether dismantling or assembly is needed. Send the details by WhatsApp for an accurate quotation.",
  },
  {
    question: "Can I book only a van and driver?",
    answer:
      "Yes. You can book a van with a professional driver for collection and delivery. A helper can also be added when loading or unloading assistance is required.",
  },
  {
    question: "Do you provide same-day service?",
    answer:
      "Same-day and urgent bookings are available depending on the schedule, distance and vehicle availability. Early booking is recommended.",
  },
  {
    question: "Can you deliver luggage to Dubai Airport?",
    answer:
      "Yes. Luggage transfers can be arranged between residences, hotels, Dubai International Airport, Al Maktoum International Airport and private aviation terminals, subject to terminal access rules.",
  },
  {
    question: "Do you move complete villas or large apartments?",
    answer:
      "The service is primarily designed for small moves, luggage, boxes, furniture and light commercial transport. For large moves, the requirements must be reviewed before confirmation.",
  },
  {
    question: "Do you provide transport outside Dubai?",
    answer:
      "Yes. UAE-wide delivery is available to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "Man with a Van Dubai",
  url: "https://manwithavanindubai.com/man-with-a-van-in-dubai",
  image: "https://manwithavanindubai.com/1000007421.jpg",
  telephone: "+971528065642",
  description:
    "Professional man with a van service in Dubai for luggage, boxes, small furniture, airport transfers, hotel delivery, office transport and UAE-wide delivery.",
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
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971528065642",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu", "Hindi"],
  },
  sameAs: ["https://wa.me/971528065642"],
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

export default function ManWithAVanDubai() {
  return (
    <main className="bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/1000007421.jpg"
            alt="Professional man with a van service in Dubai"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              Professional Van & Driver Service Across Dubai
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Man with a Van Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Reliable door-to-door transport for luggage, boxes, small
              furniture, studio moves, airport transfers, hotel deliveries,
              office equipment, exhibitions and business items across Dubai
              and the UAE.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-amber-400 px-7 py-4 text-center text-lg font-bold text-slate-950 shadow-lg transition hover:bg-amber-300"
              >
                Call {phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-green-600 px-7 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-green-500"
              >
                WhatsApp for a Quote
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <strong className="block text-lg">Dubai Wide</strong>
                <span className="text-slate-300">All major areas</span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <strong className="block text-lg">UAE Delivery</strong>
                <span className="text-slate-300">All Emirates</span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <strong className="block text-lg">Flexible</strong>
                <span className="text-slate-300">Single or hourly</span>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <strong className="block text-lg">Direct</strong>
                <span className="text-slate-300">Door to door</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img
              src="/1000007437.jpg"
              alt="Van with driver for deliveries and small moves in Dubai"
              className="h-[320px] w-full rounded-2xl object-cover sm:h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Reliable Local Transport
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              A Professional Man with a Van Service for Everyday Transport
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              When your items are too large for a car but do not require a
              large moving truck, our man with a van service provides a
              practical and cost-effective solution. We handle collections,
              deliveries and small relocations for residents, tourists,
              hotels, offices, shops and businesses throughout Dubai.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our service is suitable for one item, several boxes, luggage,
              furniture, business equipment or a complete small move. Every
              booking is planned according to the item size, access,
              collection location, destination and required timing.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-100 p-7 sm:p-10">
            <h3 className="text-2xl font-black">
              Send These Details for a Quick Quote
            </h3>

            <ol className="mt-6 space-y-4">
              {[
                "Photos or a clear list of the items",
                "Exact pickup location",
                "Exact delivery location",
                "Preferred date and time",
                "Floor number and lift availability",
                "Whether a helper is required",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Complete Van Services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What Our Man with a Van Service Covers
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Choose a dedicated service page below or contact us directly
              with your transport details.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{service.title}</h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className="mt-6 font-bold text-amber-700 hover:text-amber-600"
                >
                  View Service →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Items */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/1000007421.jpg"
              alt="Dubai van delivery service for boxes luggage and furniture"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Items We Transport
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Suitable for Personal, Residential and Business Deliveries
            </h2>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {suitableFor.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-700">
                    ✓
                  </span>
                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-950 py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-400">
              Professional Service
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Why Customers Choose Our Van Service
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-xl font-black text-amber-300">
                  {benefit.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport, Hotel and VIP */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-amber-50 to-slate-100 p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-700">
                Airport, Hotel & VIP Transfers
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Luggage Transport for Travellers and Executive Clients
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We provide scheduled luggage collection and delivery between
                Dubai International Airport, Al Maktoum International Airport,
                hotels, villas, serviced apartments, cruise terminals and
                private aviation facilities.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                The service is suitable for families, groups, tourists,
                business travellers, cabin crew and VIP passengers who need
                additional luggage space or separate baggage transport.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black">
                Popular Transfer Routes
              </h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                {[
                  "Dubai Airport to hotel",
                  "Hotel to Dubai Airport",
                  "Hotel to hotel luggage transfer",
                  "Residence to airport",
                  "Airport to villa or apartment",
                  "DXB to Abu Dhabi",
                  "Dubai to Al Maktoum Airport",
                  "Private terminal to hotel",
                ].map((route) => (
                  <li
                    key={route}
                    className="flex items-center gap-3 border-b border-slate-100 pb-3"
                  >
                    <span className="text-amber-600">●</span>
                    <span className="font-medium">{route}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Dubai Service Areas
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Man with a Van Available Across Dubai
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Collection and delivery can be arranged in residential,
              commercial, hotel, airport and industrial areas throughout
              Dubai.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="rounded-full bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
              >
                {location}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black">
              Delivery to All Emirates
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              We also arrange transport from Dubai to Abu Dhabi, Sharjah,
              Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain and Al Ain.
              Long-distance quotations are based on the route, items, loading
              requirements and waiting time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
            Simple Booking Process
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Book Your Van in Four Easy Steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Send Your Details",
              text:
                "Share the items, pickup location, destination and preferred time.",
            },
            {
              number: "02",
              title: "Receive a Quote",
              text:
                "We review the job and provide a clear quotation based on your requirements.",
            },
            {
              number: "03",
              title: "Confirm Booking",
              text:
                "Confirm the date, time, vehicle and any helper requirement.",
            },
            {
              number: "04",
              title: "Collection & Delivery",
              text:
                "The driver arrives at the agreed location and completes the delivery.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <span className="text-4xl font-black text-amber-500">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-black">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-600">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Man with a Van Dubai FAQs
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-6 text-lg font-black">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amber-400">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center md:px-8 lg:py-20">
          <h2 className="text-3xl font-black text-slate-950 sm:text-4xl">
            Need a Man with a Van in Dubai?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-800">
            Send your item photos, pickup location, destination and preferred
            timing for a quick quotation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-slate-950 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-800"
            >
              Call {phoneDisplay}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-500"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Buttons */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 shadow-2xl md:hidden">
        <a
          href={phoneLink}
          className="rounded-lg bg-slate-950 px-4 py-3 text-center font-bold text-white"
        >
          Call Now
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-green-600 px-4 py-3 text-center font-bold text-white"
        >
          WhatsApp
        </a>
      </div>

      <div className="h-16 md:hidden" />
    </main>
  );
}
