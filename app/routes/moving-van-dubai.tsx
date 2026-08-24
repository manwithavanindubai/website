import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const services = [
  {
    title: "Moving Van With Driver",
    text: "Book an enclosed moving van with driver for direct pickup and delivery across Dubai.",
  },
  {
    title: "Small Moving Jobs",
    text: "Suitable for studio items, partial apartment moves, selected furniture, boxes and personal belongings.",
  },
  {
    title: "Furniture Moving",
    text: "Transport sofas, beds, mattresses, tables, cabinets, chairs and other suitable furniture.",
  },
  {
    title: "Single Item Moving",
    text: "Move one item or a few selected items without booking a large moving truck.",
  },
  {
    title: "Boxes & Luggage",
    text: "Direct van transport for moving boxes, cartons, suitcases and personal belongings.",
  },
  {
    title: "Optional Helper",
    text: "A helper can be arranged for carrying, loading, unloading and basic furniture handling.",
  },
];

const suitableItems = [
  "Sofas and armchairs",
  "Beds and mattresses",
  "Tables and chairs",
  "TV units and cabinets",
  "Office desks and chairs",
  "Moving boxes and cartons",
  "Suitcases and travel bags",
  "IKEA furniture",
  "Washing machines",
  "Cookers",
  "Small refrigerators",
  "Bicycles and sports items",
];

const benefits = [
  "Enclosed cargo van",
  "Van with driver",
  "Designed for small moves",
  "Suitable for furniture and boxes",
  "Optional loading helper",
  "Dubai-wide pickup and delivery",
];

const bookingSteps = [
  {
    number: "01",
    title: "Send Moving Details",
    text: "Share item photos, pickup location, drop-off location, access details and preferred time.",
  },
  {
    number: "02",
    title: "Confirm Van",
    text: "We check whether your items fit safely in the moving van and whether a helper is required.",
  },
  {
    number: "03",
    title: "Pickup & Delivery",
    text: "The van arrives at the agreed time for direct collection and delivery across Dubai.",
  },
];

const premiumAreas = [
  "Palm Jumeirah",
  "Dubai Marina",
  "JBR",
  "Bluewaters Island",
  "Downtown Dubai",
  "DIFC",
  "Business Bay",
  "City Walk",
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
  "Jumeirah",
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
    question: "What is a moving van service in Dubai?",
    answer:
      "A moving van service provides an enclosed cargo van with driver for smaller moving jobs, selected furniture, boxes, personal belongings and other suitable items.",
  },
  {
    question: "Is the moving van suitable for a full house move?",
    answer:
      "This service is mainly designed for small moves, studio items, partial apartment moves and selected furniture or boxes that fit safely in the available van.",
  },
  {
    question: "Can I book a moving van with a helper?",
    answer:
      "Yes. A helper can be arranged for carrying, loading, unloading and basic furniture handling when requested before booking.",
  },
  {
    question: "Can you move furniture in the van?",
    answer:
      "Yes. Suitable sofas, beds, mattresses, tables, chairs, cabinets, office furniture and other items can be transported when they fit safely inside the van.",
  },
  {
    question: "Do you offer same-day moving van service?",
    answer:
      "Same-day service may be available depending on the route, schedule, building access and van availability.",
  },
  {
    question: "How do I get a moving van quote?",
    answer:
      "Send item photos, pickup location, drop-off location, preferred date and access details by WhatsApp or phone.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Moving Van Dubai | Van With Driver for Small Moves",
  },
  {
    name: "description",
    content:
      "Moving van Dubai with driver for small moves, furniture, boxes and single items. Optional helper available. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/moving-van-dubai",
  },
  {
    property: "og:title",
    content: "Moving Van Dubai | Van With Driver",
  },
  {
    property: "og:description",
    content:
      "Enclosed moving van with driver for small moves, furniture, boxes and selected items across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/moving-van-dubai",
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

export default function MovingVanDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Moving Van Dubai",
    serviceType: "Moving Van With Driver",
    url: "https://manwithavanindubai.com/moving-van-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Moving van service in Dubai with driver for small moves, furniture, boxes and selected items.",
    areaServed: "Dubai, United Arab Emirates",
    provider: {
      "@type": "LocalBusiness",
      name: "Man with a Van Dubai",
      url: "https://manwithavanindubai.com",
      telephone: "+971551972617",
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
        name: "Moving Van Dubai",
        item: "https://manwithavanindubai.com/moving-van-dubai",
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
          alt="Moving van with driver in Dubai"
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
            <span className="text-white">Moving Van Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Van With Driver • Small Moves • Furniture • Boxes
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Moving Van Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Enclosed moving van with driver for small moves, furniture,
              boxes, single items and selected belongings across Dubai.
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
              Send item photos and both locations for a direct moving van quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Moving van for smaller jobs
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Move Furniture and Boxes Without a Large Truck
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              A large moving truck is not necessary for every job. If you have
              one item, a few pieces of furniture, boxes, studio contents or a
              partial move, an enclosed moving van can be a practical option.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our moving van service includes a driver and direct transport
              between your pickup and delivery locations across Dubai.
              A helper can also be arranged when carrying assistance is required.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/1000007422.jpg"
              alt="Cargo area of moving van Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Furniture and boxes for moving van"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />

              <img
                src="/1000007421.jpg"
                alt="White moving van Dubai"
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
              Moving van services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What You Can Use Our Moving Van For
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Designed for practical smaller moving and delivery jobs across Dubai.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-extrabold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>
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
                Suitable loads
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Furniture, Boxes, Appliances and Personal Items
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The number of items that can be transported depends on their
                dimensions, shape and safe loading space. Send clear photos
                before booking so van suitability can be checked.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {suitableItems.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 p-4"
                  >
                    <span className="font-black text-green-600">✓</span>
                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                Before booking
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Your Moving Details
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Photos of furniture and boxes",
                  "Pickup location",
                  "Drop-off location",
                  "Approximate item dimensions",
                  "Building or villa access",
                  "Lift availability",
                  "Parking distance",
                  "Preferred date and time",
                  "Whether a helper is required",
                ].map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">
                      {index + 1}
                    </span>

                    <span className="pt-1 text-slate-200">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={phoneLink}
                  className="rounded-xl bg-white px-6 py-4 text-center font-bold text-slate-950 hover:bg-slate-100"
                >
                  Call for a Quote
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-green-500 px-6 py-4 text-center font-bold text-white hover:bg-green-600"
                >
                  Send Moving Photos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Simple booking
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How Moving Van Booking Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bookingSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <span className="text-4xl font-black text-blue-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-extrabold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
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
              Moving Van Service Across Dubai
            </h2>
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
            <h3 className="text-xl font-extrabold">
              More Dubai Areas
            </h3>

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

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Helpful information
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Moving Van Dubai FAQs
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

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
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
              More Man With a Van Services
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                Man With a Van Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Van with driver for moving and delivery jobs.
              </p>
            </a>

            <a
              href="/small-moving-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                Small Moving Dubai
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Studio, furniture, boxes and partial moving jobs.
              </p>
            </a>

            <a
              href="/single-item-movers-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                Single Item Movers
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Moving service for one item or a few selected items.
              </p>
            </a>

            <a
              href="/hire-removal-van-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-xl font-extrabold">
                Hire Removal Van
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Removal van with driver for smaller moving jobs.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book a Moving Van in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send item photos, pickup location, drop-off location and preferred
            moving time by phone or WhatsApp.
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
            <p className="text-xl font-black">
              Moving Van Dubai
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Enclosed van with driver for small moves, furniture, boxes and single items.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-blue-300">
              Home
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

            <a
              href="/single-item-movers-dubai"
              className="font-bold hover:text-blue-300"
            >
              Single Item Movers Dubai
            </a>

            <a
              href="/hire-removal-van-dubai"
              className="font-bold hover:text-blue-300"
            >
              Hire Removal Van Dubai
            </a>

            <a
              href={phoneLink}
              className="font-bold hover:text-blue-300"
            >
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
