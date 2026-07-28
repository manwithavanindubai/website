import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => [
  {
    title: "Man With a Van in Dubai | Small Moving & Delivery",
  },
  {
    name: "description",
    content:
      "Reliable man with a van in Dubai for luggage delivery, boxes, furniture, single-item transport and small moving jobs. Call or WhatsApp for a quick quote.",
  },
];

const phone = "971528065642";

export default function ManWithAVanInDubai() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-semibold text-yellow-400">
            Fast • Reliable • Affordable
          </p>

          <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
            Man With a Van in Dubai
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Professional van and driver service for luggage delivery, boxes,
            furniture, appliances, single items and small moving jobs across
            Dubai.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+971528065642"
              className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Call +971 52 806 5642
            </a>

            <a
              href={`https://wa.me/${phone}?text=Hello%2C%20I%20need%20a%20man%20with%20a%20van%20in%20Dubai.`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-green-600 px-6 py-3 font-bold text-white"
            >
              WhatsApp for a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">
            Affordable Man and Van Service Across Dubai
          </h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            Our man with a van service is suitable for customers who need a
            reliable vehicle and experienced driver without booking a large
            moving truck. We provide flexible transport for homes, apartments,
            offices, hotels, shops and storage facilities.
          </p>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            We handle small moves, luggage, cartons, furniture, mattresses,
            appliances, bicycles, exhibition items and other goods throughout
            Dubai. A helper can also be arranged when loading or unloading
            assistance is required.
          </p>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Our Dubai Van Services</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-bold">Luggage Delivery Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Safe transport for suitcases, travel bags and boxes between
                hotels, apartments, airports and storage locations.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-bold">Small Moving Dubai</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ideal for studio moves, room moves, a few boxes, personal
                belongings and small apartment moving jobs.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-bold">Furniture Delivery</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Pickup and delivery of sofas, beds, tables, chairs, cabinets,
                appliances and single furniture items.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Areas We Serve in Dubai</h2>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            We provide man with a van services in Dubai Marina, JLT, JBR, JVC,
            Business Bay, Downtown Dubai, Palm Jumeirah, Al Barsha, Deira, Bur
            Dubai, Dubai Hills, Arabian Ranches, International City, Dubai
            Silicon Oasis and other areas across Dubai.
          </p>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-bold">Get a Quick Moving Quote</h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Send the pickup location, delivery location, item details and required
          time through WhatsApp for a quick quotation.
        </p>

        <a
          href={`https://wa.me/${phone}?text=Hello%2C%20please%20send%20me%20a%20quote%20for%20a%20van%20service%20in%20Dubai.`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-block rounded-lg bg-green-600 px-7 py-3 font-bold"
        >
          Contact Us on WhatsApp
        </a>
      </section>
    </main>
  );
}
