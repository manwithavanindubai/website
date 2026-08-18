import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const transferServices = [
  {
    title: "Hotel to Hotel Transfer",
    text: "Direct luggage collection and delivery when changing hotels, resorts or serviced apartments in Dubai.",
  },
  {
    title: "Hotel to Airport",
    text: "Scheduled luggage pickup from your hotel and delivery to the correct Dubai airport terminal.",
  },
  {
    title: "Airport to Hotel",
    text: "Collection from Dubai airport and delivery to hotels, resorts, serviced apartments or residences.",
  },
  {
    title: "Hotel to Residence",
    text: "Move suitcases, boxes and personal belongings from a hotel to an apartment, villa or staff accommodation.",
  },
  {
    title: "Residence to Hotel",
    text: "Convenient luggage collection from your home and direct delivery to your hotel before check-in.",
  },
  {
    title: "Group and Family Luggage",
    text: "Suitable for multiple suitcases, family travel, group bookings, business guests and long-stay visitors.",
  },
];

const luggageItems = [
  "Suitcases and trolley bags",
  "Cabin bags and hand luggage",
  "Family travel luggage",
  "Hotel guest belongings",
  "Boxes and personal items",
  "Sports and equipment bags",
  "Business travel luggage",
  "Long-stay guest luggage",
  "Shopping bags and cartons",
  "Event and exhibition bags",
  "Crew and staff luggage",
  "Oversized bags by prior check",
];

const steps = [
  {
    number: "01",
    title: "Send Hotel Details",
    text: "Share both hotel names, guest name, room or booking details, luggage quantity and preferred time.",
  },
  {
    number: "02",
    title: "Confirm Collection",
    text: "We confirm the pickup point, receiving contact, van capacity and any waiting arrangements.",
  },
  {
    number: "03",
    title: "Direct Transfer",
    text: "The luggage is collected and delivered directly to the next hotel, airport or residence.",
  },
];

const reasons = [
  "Direct door-to-door luggage transport",
  "Suitable for families and business guests",
  "Hotel, airport and residence transfers",
  "Enclosed cargo van",
  "Dubai-wide service",
  "Phone and WhatsApp booking",
];

const premiumHotelsAreas = [
  "Palm Jumeirah",
  "Jumeirah",
  "Dubai Marina",
  "JBR",
  "Bluewaters Island",
  "Dubai Harbour",
  "Downtown Dubai",
  "DIFC",
  "Business Bay",
  "City Walk",
  "Al Sufouh",
  "Umm Suqeim",
  "Madinat Jumeirah",
  "Dubai Hills Estate",
];

const moreAreas = [
  "JLT",
  "JVC",
  "JVT",
  "Al Barsha",
  "Barsha Heights",
  "Dubai Internet City",
  "Dubai Media City",
  "Dubai Knowledge Park",
  "Al Wasl",
  "Al Safa",
  "Al Quoz",
  "Meydan",
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
  "Arabian Ranches",
];

const faqs = [
  {
    question: "Can you transfer luggage between two hotels in Dubai?",
    answer:
      "Yes. Hotel-to-hotel luggage transfer is available across Dubai. Please provide both hotel names, guest or booking names, luggage quantity and the receiving contact details.",
  },
  {
    question: "Can you collect luggage before hotel check-in time?",
    answer:
      "Yes, when the receiving hotel agrees to accept the luggage. Please confirm this with the hotel and share the correct contact person before booking.",
  },
  {
    question: "Can you deliver luggage from a hotel to Dubai Airport?",
    answer:
      "Yes. Please provide the airport terminal, departure time, hotel pickup point and preferred collection time in advance.",
  },
  {
    question: "How many suitcases can the van carry?",
    answer:
      "Capacity depends on the size and shape of the luggage. Send the number of bags and clear photos so we can confirm whether everything fits safely.",
  },
  {
    question: "Do you offer same-day hotel luggage transfer?",
    answer:
      "Same-day transfer may be available depending on route, timing, hotel access and vehicle availability.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send both locations, hotel names, luggage quantity, photos when helpful, preferred pickup time and receiving contact details.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Hotel Luggage Transfer Dubai | Hotel to Hotel Delivery",
  },
  {
    name: "description",
    content:
      "Hotel luggage transfer Dubai for hotel-to-hotel, airport, residence and family luggage delivery. Call or WhatsApp +971 52 806 5642.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/hotel-luggage-transfer-dubai",
  },
  {
    property: "og:title",
    content: "Hotel Luggage Transfer Dubai | Hotel to Hotel Delivery",
  },
  {
    property: "og:description",
    content:
      "Direct luggage transfer between Dubai hotels, airports, homes and serviced apartments.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/hotel-luggage-transfer-dubai",
  },
  {
    property: "og:image",
    content: "https://manwithavanindubai.com/1000007437.jpg",
  },
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
];

export default function HotelLuggageTransferDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hotel Luggage Transfer Dubai",
    serviceType: "Hotel Luggage Collection and Delivery",
    url: "https://manwithavanindubai.com/hotel-luggage-transfer-dubai",
    image: "https://manwithavanindubai.com/1000007437.jpg",
    description:
      "Hotel-to-hotel, hotel-to-airport and airport-to-hotel luggage transfer across Dubai.",
    areaServed: "Dubai, United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971528065642",
      areaServed: "Dubai, United Arab Emirates",
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
        name: "Hotel Luggage Transfer Dubai",
        item: "https://manwithavanindubai.com/hotel-luggage-transfer-dubai",
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
          src="/1000007437.jpg"
          alt="Hotel luggage transfer service Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/35" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200"
          >
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-white">Hotel Luggage Transfer Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Hotel to Hotel • Airport • Residence • Family Luggage
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Hotel Luggage Transfer Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Direct luggage collection and delivery between Dubai hotels,
              airports, homes and serviced apartments.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={phoneLink}
                className="rounded-xl bg-blue-600 px-7 py-4 text-center text-lg font-bold text-white hover:bg-blue-700"
              >
                Call {phoneDisplay}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-7 py-4 text-center text-lg font-bold text-white hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              Send both hotel names, luggage quantity and preferred collection time.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Convenient hotel transfer
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Move Your Bags Without Carrying Them Yourself
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Changing hotels, checking out early or waiting for a later
              check-in can make luggage difficult to manage. Our direct van
              service helps move bags separately between locations.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              The service is suitable for tourists, families, business guests,
              airline crews, long-stay visitors and hotel groups across Dubai.
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
              src="/1000007437.jpg"
              alt="Suitcases ready for hotel transfer in Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Cargo van space for hotel luggage"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007421.jpg"
                alt="Van for hotel luggage transfer Dubai"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Transfer options
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Hotel Luggage Services in Dubai
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {transferServices.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-extrabold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                What we transport
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Suitcases, Travel Bags, Boxes and Personal Items
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Capacity depends on luggage size and quantity. Send clear photos
                when possible so the correct van can be confirmed before
                booking.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {luggageItems.map((item) => (
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

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                Before booking
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Complete Details for a Smooth Transfer
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Pickup hotel name and address",
                  "Drop-off hotel, airport or residence",
                  "Guest or booking name",
                  "Number of suitcases and bags",
                  "Preferred pickup date and time",
                  "Receiving contact person",
                  "Airport terminal when applicable",
                  "Any hotel storage or concierge instructions",
                ].map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">
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

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How Hotel Luggage Transfer Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={phoneLink}
              className="rounded-xl bg-slate-900 px-6 py-4 text-center font-bold text-white hover:bg-slate-800"
            >
              Call for a Quote
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
            >
              Send Hotel Details
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-400">
              Areas covered
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Hotel Luggage Transfer Across Dubai
            </h2>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-extrabold text-amber-300">
              Premium Hotel Areas
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {premiumHotelsAreas.map((area) => (
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
                className="rounded-2xl border border-slate-200 bg-white p-6"
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

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Related services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More Van Services in Dubai
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-6 md:grid-cols-3">
            <a
              href="/luggage-delivery-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                Luggage Delivery Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Airport, hotel, home and inter-emirate luggage transport.
              </p>
            </a>

            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">Man with a Van Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                General van transport for boxes, furniture and deliveries.
              </p>
            </a>

            <a
              href="/small-moving-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">Small Moving Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Studio, apartment and small office moving.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book Hotel Luggage Transfer in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send both hotel names, luggage quantity, collection time and
            receiving contact details by phone or WhatsApp.
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
            <p className="text-xl font-black">Hotel Luggage Transfer Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Hotel-to-hotel, airport and residence luggage delivery.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-blue-300">
              Home
            </a>
            <a
              href="/luggage-delivery-dubai"
              className="font-bold hover:text-blue-300"
            >
              Luggage Delivery Dubai
            </a>
            <a
              href="/man-with-a-van-in-dubai"
              className="font-bold hover:text-blue-300"
            >
              Man with a Van Dubai
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
