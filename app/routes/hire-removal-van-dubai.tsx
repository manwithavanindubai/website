import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const serviceTypes = [
  {
    title: "Van With Driver",
    text: "Hire an enclosed moving van with an experienced driver for direct transport across Dubai.",
  },
  {
    title: "Small Removal Jobs",
    text: "Suitable for studio items, partial apartment moves, selected furniture, boxes and personal belongings.",
  },
  {
    title: "Furniture Transport",
    text: "Move sofas, beds, tables, cabinets, chairs and other suitable furniture items.",
  },
  {
    title: "Boxes & Cartons",
    text: "Transport moving boxes, cartons, luggage and personal or business items.",
  },
  {
    title: "Office Item Moving",
    text: "Move desks, chairs, printers, computers, files and other small office items.",
  },
  {
    title: "Optional Helper",
    text: "A helper can be arranged for loading, unloading, carrying and basic furniture handling.",
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
  "Bicycles",
];

const reasons = [
  "Enclosed van with driver",
  "Ideal for small removal jobs",
  "Optional loading and unloading helper",
  "Suitable for furniture and boxes",
  "Dubai-wide pickup and delivery",
  "Call and WhatsApp booking",
];

const bookingSteps = [
  {
    number: "01",
    title: "Send Your Details",
    text: "Share pickup, drop-off, item photos, access details and preferred date and time.",
  },
  {
    number: "02",
    title: "Confirm Van & Helper",
    text: "We check van suitability and whether you need a helper for loading or unloading.",
  },
  {
    number: "03",
    title: "Van Arrives",
    text: "The removal van arrives at the agreed time for direct pickup and delivery.",
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
    question: "What is included when I hire a removal van in Dubai?",
    answer:
      "The service includes an enclosed van with driver for direct pickup and delivery. A helper can also be arranged when requested before booking.",
  },
  {
    question: "Is this service suitable for a full house move?",
    answer:
      "This service is mainly designed for smaller moves, selected furniture, boxes, studio items and partial apartment or office moves that fit safely in the available van.",
  },
  {
    question: "Can I hire a helper with the van?",
    answer:
      "Yes. A helper can be arranged for carrying, loading, unloading and basic furniture handling when required.",
  },
  {
    question: "Can you move furniture and appliances?",
    answer:
      "Yes, suitable sofas, beds, tables, cabinets, washing machines, cookers and small refrigerators can be transported when they fit safely in the van.",
  },
  {
    question: "Do you offer same-day removal van hire?",
    answer:
      "Same-day service may be available depending on the route, access, schedule and vehicle availability.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Send pickup and drop-off locations, item photos, preferred date, access details and whether you need a helper by WhatsApp or phone.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Hire Removal Van Dubai | Van With Driver",
  },
  {
    name: "description",
    content:
      "Hire removal van Dubai with driver for small moves, furniture, boxes and selected items. Optional helper available. Call or WhatsApp +971 55 197 2617.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: "https://manwithavanindubai.com/hire-removal-van-dubai",
  },
  {
    property: "og:title",
    content: "Hire Removal Van Dubai | Van With Driver",
  },
  {
    property: "og:description",
    content:
      "Hire an enclosed removal van with driver for small moving jobs, furniture, boxes and selected items across Dubai.",
  },
  {
    property: "og:type",
    content: "website",
  },
  {
    property: "og:url",
    content: "https://manwithavanindubai.com/hire-removal-van-dubai",
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

export default function HireRemovalVanDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hire Removal Van Dubai",
    serviceType: "Removal Van Hire With Driver",
    url: "https://manwithavanindubai.com/hire-removal-van-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description:
      "Removal van hire in Dubai with driver for small moving jobs, furniture, boxes and selected items.",
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
        name: "Hire Removal Van Dubai",
        item: "https://manwithavanindubai.com/hire-removal-van-dubai",
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
          alt="Hire removal van with driver in Dubai"
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
            <span className="text-white">Hire Removal Van Dubai</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Van With Driver • Small Moves • Furniture • Boxes
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Hire Removal Van Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Hire an enclosed removal van with driver for small moves,
              furniture, boxes and selected items across Dubai.
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
              Send item photos, pickup and drop-off locations for a direct quote.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Van hire for smaller removals
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              A Practical Van for Small Moving Jobs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Not every move needs a large truck or a full relocation team.
              Our removal van service is designed for smaller jobs where an
              enclosed cargo van is more suitable.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              It can be used for selected furniture, boxes, studio items,
              partial apartment moves, office items and other suitable loads.
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
              src="/1000007422.jpg"
              alt="Removal van cargo space in Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007437.jpg"
                alt="Boxes and furniture ready for removal van"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />

              <img
                src="/1000007421.jpg"
                alt="White removal van in Dubai"
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
              Removal van services
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Hire a Van for Small Removals in Dubai
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose the option that best matches your moving or delivery job.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((service) => (
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
                What fits in the van
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Furniture, Boxes, Appliances and More
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vehicle suitability depends on item dimensions, quantity and
                safe loading space. Send clear photos before booking so we can
                check whether one van is suitable.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {suitableItems.map((item) => (
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
                Booking information
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send Complete Details Before Confirmation
              </h2>

              <div className="mt-8 space-y-4">
                {[
                  "Pickup and drop-off locations",
                  "Clear photos of all items",
                  "Approximate dimensions if required",
                  "Building, villa or office access",
                  "Lift availability",
                  "Parking distance",
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
                  Send Photos
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
              Easy booking
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              How Removal Van Hire Works
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

                <h3 className="mt-5 text-xl font-extrabold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
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
              Removal Van Hire Across Dubai
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
              More Van Services in Dubai
            </h2>
          </div>

          <div className="mx-auto mt-9 grid max-w-5xl gap-6 md:grid-cols-3">
            <a
              href="/man-with-a-van-in-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">
                Man with a Van Dubai
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Van with driver for furniture, boxes, deliveries and small moving jobs.
              </p>
            </a>

            <a
              href="/small-moving-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">
                Small Moving Dubai
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Small moving service for studio contents, furniture, boxes and office items.
              </p>
            </a>

            <a
              href="/single-item-movers-dubai"
              className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-extrabold">
                Single Item Movers
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Move one item or a few selected furniture pieces across Dubai.
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Hire a Removal Van in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send your item photos, pickup location, drop-off location and
            preferred time by phone or WhatsApp.
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
              Hire Removal Van Dubai
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Van with driver for small removals, furniture, boxes and selected items.
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
