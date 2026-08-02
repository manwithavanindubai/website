import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 52 806 5642";
const phoneLink = "tel:+971528065642";
const whatsappLink = "https://wa.me/971528065642";

const services = [
  { title: "Luggage Delivery Dubai", text: "Airport, hotel, home and inter-hotel luggage transport.", href: "/luggage-delivery-dubai" },
  { title: "Small Moving Dubai", text: "Studio, partial apartment, office and selected furniture moves.", href: "/small-moving-dubai" },
  { title: "Boxes Delivery Dubai", text: "Moving cartons, office boxes, storage boxes and business stock.", href: "/boxes-delivery-dubai" },
  { title: "IKEA Furniture Delivery Dubai", text: "Store pickup, flat-pack furniture transport and selected assembly support.", href: "/ikea-furniture-delivery-dubai" },
  { title: "Hotel Luggage Transfer Dubai", text: "Hotel-to-hotel, airport, residence and family luggage delivery.", href: "/hotel-luggage-transfer-dubai" },
  { title: "VIP Airport Luggage Delivery", text: "DXB, DWC, luxury hotel and Abu Dhabi airport luggage routes.", href: "/airport-luggage-delivery-dubai" },
  { title: "Private Jet Luggage Transfer", text: "Private aviation terminal, luxury hotel, villa and marina luggage support.", href: "/private-jet-luggage-transfer-dubai" },
  { title: "Furniture Pickup and Delivery", text: "Sofas, beds, tables, chairs, cabinets and office furniture transport.", href: "#book" },
];

const reasons = [
  "Direct van service with driver",
  "Optional helper by prior request",
  "Enclosed cargo space",
  "Dubai-wide pickup and delivery",
  "Suitable for homes, hotels and offices",
  "Phone and WhatsApp booking",
  "Clear details before confirmation",
  "UAE inter-emirate routes available",
];

const items = [
  "Suitcases and travel bags",
  "Moving boxes and cartons",
  "Beds and mattresses",
  "Sofas and armchairs",
  "Dining tables and chairs",
  "Office desks and equipment",
  "IKEA flat-pack furniture",
  "Small appliances",
  "Business stock and event items",
  "Storage unit collections",
  "Hotel guest belongings",
  "Single-item deliveries",
];

const steps = [
  { number: "01", title: "Send the Details", text: "Share both locations, item photos, preferred time, access details and whether a helper is required." },
  { number: "02", title: "Confirm the Service", text: "We check capacity, route, access, loading requirements and availability before confirmation." },
  { number: "03", title: "Pickup and Delivery", text: "The van arrives at the agreed location and delivers the items directly to the confirmed destination." },
];

const premiumAreas = [
  "Palm Jumeirah","Dubai Marina","JBR","Bluewaters Island","Dubai Harbour","Downtown Dubai",
  "DIFC","Business Bay","City Walk","Jumeirah","Dubai Hills Estate","Emirates Hills",
  "Arabian Ranches","Jumeirah Golf Estates"
];

const otherAreas = [
  "JLT","JVC","JVT","Al Barsha","Barsha Heights","Al Sufouh","Dubai Internet City",
  "Dubai Media City","Dubai Knowledge Park","Umm Suqeim","Al Wasl","Al Safa","Al Quoz",
  "Meydan","Nad Al Sheba","Mirdif","Dubai Silicon Oasis","International City",
  "Dubai Sports City","Motor City","Studio City","Discovery Gardens","Al Furjan",
  "Dubai South","Expo City Dubai","Dubai Investment Park","Jebel Ali","Deira",
  "Bur Dubai","Karama","Oud Metha","Al Garhoud","Al Qusais","Al Nahda",
  "Al Rashidiya","Al Warqa","Town Square","Damac Hills","Damac Hills 2","Remraam","Mudon"
];

const faqs = [
  { q: "What does a man with a van service include?", a: "It normally includes a cargo van with driver for direct pickup and delivery. A helper, carrying support, dismantling or assembly can be arranged separately when confirmed before booking." },
  { q: "What items can you move?", a: "We transport luggage, boxes, small furniture, mattresses, tables, chairs, office items, flat-pack furniture, household items and selected appliances. Send photos so capacity can be checked." },
  { q: "Do you provide a helper?", a: "Yes. A helper can be arranged for loading, unloading, carrying or basic furniture handling when requested in advance." },
  { q: "Can you move a studio or small apartment?", a: "Yes, when the contents fit safely in the van. Share the complete item list, photos and building access details before confirmation." },
  { q: "Do you offer airport and hotel luggage delivery?", a: "Yes. Pre-arranged luggage transport is available between airports, hotels, homes, serviced apartments and other confirmed locations." },
  { q: "Can you collect furniture from IKEA or another store?", a: "Yes. Store pickup and direct furniture delivery can be arranged when order details, package sizes, collection point and timing are confirmed." },
  { q: "Do you offer same-day service?", a: "Same-day service may be available depending on the route, item size, access and van availability." },
  { q: "Can you deliver outside Dubai?", a: "Yes. Inter-emirate transport may be arranged to Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah and Umm Al Quwain." },
  { q: "How do I get an accurate quote?", a: "Send pickup and drop-off locations, item photos, quantities, preferred timing, lift or stair details, parking distance and whether a helper is required." },
  { q: "Is packing included?", a: "Packing is not automatically included. Items should normally be packed and ready unless packing support is discussed and confirmed separately." },
  { q: "Can you move large or heavy items?", a: "Large or heavy items must be checked individually. Send dimensions, weight and clear photos so the correct vehicle and manpower can be confirmed." },
  { q: "Can the van wait at pickup or delivery?", a: "Waiting can be arranged, but extended waiting time, parking fees and access delays should be discussed before confirmation." },
];

export const meta: MetaFunction = () => [
  { title: "Man with a Van Dubai | Van with Driver for Moving & Delivery" },
  { name: "description", content: "Professional man with a van Dubai service for luggage, boxes, furniture, small moving, airport and hotel transfers. Call or WhatsApp +971 52 806 5642." },
  { tagName: "link", rel: "canonical", href: "https://manwithavanindubai.com/man-with-a-van-in-dubai" },
  { property: "og:title", content: "Man with a Van Dubai | Van with Driver for Moving & Delivery" },
  { property: "og:description", content: "Direct van service for luggage, boxes, furniture, small moves, hotels, airports and business deliveries across Dubai." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://manwithavanindubai.com/man-with-a-van-in-dubai" },
  { property: "og:image", content: "https://manwithavanindubai.com/1000007421.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
];

export default function ManWithAVanInDubai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Man with a Van Dubai",
    serviceType: "Van with Driver for Moving and Delivery",
    url: "https://manwithavanindubai.com/man-with-a-van-in-dubai",
    image: "https://manwithavanindubai.com/1000007421.jpg",
    description: "Professional man with a van service for luggage, boxes, furniture, small moves, airport transfers, hotel deliveries and business transport across Dubai.",
    areaServed: ["Dubai","Abu Dhabi","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain","Al Ain"],
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
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://manwithavanindubai.com/" },
      { "@type": "ListItem", position: 2, name: "Man with a Van Dubai", item: "https://manwithavanindubai.com/man-with-a-van-in-dubai" },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img src="/1000007421.jpg" alt="Man with a van service Dubai" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-200">
            <a href="/" className="hover:text-white">Home</a><span>›</span><span className="text-white">Man with a Van Dubai</span>
          </nav>
          <div className="max-w-4xl">
            <p className="mb-4 font-bold uppercase tracking-[0.18em] text-blue-300">LUGGAGE • BOXES • FURNITURE • SMALL MOVING • AIRPORT TRANSFERS</p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl lg:text-8xl">Man with a Van Dubai</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-2xl">
              Professional van with driver service for luggage, boxes, small furniture, airport transfers, hotel deliveries and light moving jobs across Dubai.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneLink} className="rounded-xl bg-blue-600 px-8 py-4 text-center text-lg font-black text-white hover:bg-blue-700">Call {phoneDisplay}</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-8 py-4 text-center text-lg font-black text-white hover:bg-green-600">WhatsApp</a>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">Send item photos, pickup and drop-off locations, preferred timing and access details for a direct quote.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">Direct van transport</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">A Flexible Van Service for Moving and Delivery</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A man with a van service is ideal when a full moving truck is too large but a normal car is not suitable. It gives you a practical cargo vehicle with a driver for direct collection and delivery.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Use it for luggage, moving boxes, selected furniture, office equipment, hotel transfers, airport baggage, store collections, storage runs and other light transport jobs across Dubai.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200">
                  <span className="font-black text-green-600">✓</span><span className="font-semibold text-slate-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <img src="/1000007421.jpg" alt="Van with driver for moving and delivery in Dubai" className="h-80 w-full rounded-3xl object-cover shadow-2xl" />
            <div className="grid gap-5 sm:grid-cols-2">
              <img src="/1000007422.jpg" alt="Cargo space inside the moving van" className="h-56 w-full rounded-2xl object-cover shadow-lg" />
              <img src="/1000007437.jpg" alt="Luggage and boxes ready for van delivery" className="h-56 w-full rounded-2xl object-cover shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">Main services</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Van Services Available Across Dubai</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <a key={service.title} href={service.href} className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                <span className="mt-5 inline-block font-bold text-blue-600">View service →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">Suitable items</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">What Can Be Moved in the Van?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Capacity depends on item dimensions, quantity, access and safe loading space. Send clear photos before booking.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-slate-200 p-4">
                  <span className="font-black text-green-600">✓</span><span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="book" className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="font-bold uppercase tracking-widest text-blue-400">Before booking</p>
            <h2 className="mt-3 text-3xl font-black">Send Complete Details for an Accurate Quote</h2>
            <div className="mt-8 space-y-4">
              {[
                "Pickup and drop-off locations",
                "Clear photos of all items",
                "Approximate item dimensions",
                "Building, villa or office access",
                "Lift availability and parking distance",
                "Preferred date and time",
                "Whether a helper is required",
                "Any dismantling or assembly request",
              ].map((detail, index) => (
                <div key={detail} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">{index + 1}</span>
                  <span className="pt-1 text-slate-200">{detail}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={phoneLink} className="rounded-xl bg-white px-6 py-4 text-center font-black text-slate-950 hover:bg-slate-100">Call for a Quote</a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-6 py-4 text-center font-black text-white hover:bg-green-600">Send Photos</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">Simple process</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">How the Man with a Van Service Works</h2>
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
          <div className="mt-12">
            <h3 className="text-xl font-black text-amber-300">Premium Dubai Areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {premiumAreas.map((area) => <span key={area} className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15">{area}</span>)}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-black">More Dubai Areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherAreas.map((area) => <span key={area} className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">{area}</span>)}
            </div>
          </div>
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
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">Send your item photos, pickup location, drop-off location, preferred time and helper requirements.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={phoneLink} className="rounded-xl bg-white px-8 py-4 text-lg font-black text-blue-700 hover:bg-blue-50">Call {phoneDisplay}</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-500 px-8 py-4 text-lg font-black text-white hover:bg-green-600">Open WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-xl font-black">Man with a Van Dubai</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Professional van with driver service for luggage, boxes, furniture, small moves, airport transfers and hotel deliveries.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm md:items-end">
            <a href="/" className="font-bold hover:text-blue-300">Home</a>
            <a href="/luggage-delivery-dubai" className="font-bold hover:text-blue-300">Luggage Delivery Dubai</a>
            <a href="/small-moving-dubai" className="font-bold hover:text-blue-300">Small Moving Dubai</a>
            <a href="/airport-luggage-delivery-dubai" className="font-bold hover:text-blue-300">VIP Airport Luggage Delivery</a>
            <a href={phoneLink} className="font-bold hover:text-blue-300">{phoneDisplay}</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bold text-green-400 hover:text-green-300">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
