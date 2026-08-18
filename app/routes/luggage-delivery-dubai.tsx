import type { MetaFunction } from "@remix-run/cloudflare";

const phoneDisplay = "+971 55 197 2617";
const phoneLink = "tel:+971551972617";
const whatsappLink = "https://wa.me/971551972617";

const luggageTypes = [
  "Suitcases and travel bags",
  "Cabin bags and hand luggage",
  "Multiple family suitcases",
  "Hotel guest luggage",
  "Boxes and personal belongings",
  "Sports bags and equipment bags",
  "Business and exhibition luggage",
  "Long-stay and relocation luggage",
];

const transferOptions = [
  {
    title: "Airport to Hotel",
    text: "Luggage collection from Dubai airport terminals and delivery to hotels, serviced apartments or residences.",
  },
  {
    title: "Hotel to Airport",
    text: "Scheduled hotel luggage pickup and delivery to the correct airport terminal before your departure.",
  },
  {
    title: "Hotel to Hotel",
    text: "Convenient luggage transfer when changing hotels, resorts or serviced apartments within Dubai.",
  },
  {
    title: "Home to Hotel",
    text: "Collection from your home or residence and direct delivery to a hotel anywhere in Dubai.",
  },
  {
    title: "Hotel to Residence",
    text: "Luggage delivery from hotels to apartments, villas, staff accommodation or short-term rentals.",
  },
  {
    title: "Dubai to Other Emirates",
    text: "Luggage transport from Dubai to Abu Dhabi, Sharjah, Ajman, Al Ain, RAK, Fujairah and UAQ.",
  },
];

const bookingDetails = [
  "Pickup location and access details",
  "Drop-off location and contact person",
  "Number of suitcases, bags or boxes",
  "Photos of the luggage when helpful",
  "Preferred pickup date and time",
  "Airport terminal or hotel name",
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
    question: "Can you collect luggage directly from Dubai Airport?",
    answer:
      "Airport collection can be arranged when the terminal, meeting point, arrival details and contact information are confirmed in advance. Airport access and waiting arrangements should be discussed before booking.",
  },
  {
    question: "Can you deliver luggage between two hotels?",
    answer:
      "Yes. Hotel-to-hotel luggage transfer is available across Dubai. Please provide both hotel names, booking names and the contact details of the receiving person.",
  },
  {
    question: "How many suitcases can the van carry?",
    answer:
      "Capacity depends on the size and shape of the luggage. Send the number of bags and clear photos so we can confirm whether everything will fit safely in one van.",
  },
  {
    question: "Will WhatsApp open with an automatic message?",
    answer:
      "No. The WhatsApp button opens a blank chat, allowing you to write your own message.",
  },
  {
    question: "Do you provide luggage delivery outside Dubai?",
    answer:
      "Yes. Delivery can be arranged from Dubai to other emirates, subject to route, timing and vehicle availability.",
  },
];

export const meta: MetaFunction = () => [
  {
    title: "Luggage Delivery Service Dubai | Airport & Hotel Transfers",
  },
  {
    name: "description",
    content:
      "Luggage delivery service Dubai for airport, hotel, home and inter-hotel transfers. Call or WhatsApp +971 52 806 5642 for a direct quote.",
  },
];

export default function LuggageDeliveryDubai() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="/1000007437.jpg"
          alt="Luggage delivery service Dubai"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/35" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <a
            href="/"
            className="mb-7 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/20"
          >
            ← Back to Home
          </a>

          <div className="max-w-3xl">
            <p className="mb-4 font-bold uppercase tracking-widest text-blue-300">
              Airport • Hotel • Home • UAE Transfers
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
              Luggage Delivery Service Dubai
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Reliable transport for suitcases, travel bags, boxes and personal
              belongings between Dubai airports, hotels, homes and business
              locations.
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
              WhatsApp opens as a blank chat with no automatic message.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Door-to-door luggage transport
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Move Your Luggage Without Moving Everything Else
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              This service is suitable when you need luggage moved separately
              from passengers. It can help during hotel changes, airport
              transfers, short-term stays, relocation days, business trips and
              family travel.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We focus on direct van transport rather than large household
              moving. Send the collection and delivery details, the number of
              bags and your preferred time so the job can be checked properly.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {luggageTypes.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <span className="font-black text-green-600">✓</span>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <img
              src="/1000007437.jpg"
              alt="Van loaded with luggage in Dubai"
              className="h-80 w-full rounded-2xl object-cover shadow-xl"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <img
                src="/1000007422.jpg"
                alt="Clean cargo space for luggage transport"
                className="h-56 w-full rounded-2xl object-cover shadow-lg"
              />
              <img
                src="/1000007421.jpg"
                alt="White luggage delivery van in Dubai"
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
              Luggage Collection and Delivery Routes
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose the transfer type that matches your journey.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {transferOptions.map((option) => (
              <article
                key={option.title}
                className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-extrabold">{option.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <p className="font-bold uppercase tracking-widest text-blue-400">
                Before booking
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Send These Details for an Accurate Quote
              </h2>

              <div className="mt-8 space-y-4">
                {bookingDetails.map((detail, index) => (
                  <div key={detail} className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 font-black">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-slate-200">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                Careful transport
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Suitable Vehicle for Multiple Bags and Boxes
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                The enclosed cargo van protects luggage from direct sun, road
                dust and open-air exposure during transport. Items should be
                packed and closed properly before collection.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Enclosed cargo space",
                  "Suitable for individual and family luggage",
                  "Direct pickup and delivery",
                  "Hotel, airport, home and office collection",
                  "Dubai-wide and inter-emirate service",
                  "Call and WhatsApp contact only",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="font-black text-green-600">✓</span>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  Send Details on WhatsApp
                </a>
              </div>
            </div>
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
              Luggage Delivery Across Dubai
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

      <section className="bg-blue-600 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Book Luggage Delivery in Dubai
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Send your pickup, drop-off, luggage quantity and preferred time by
            phone or WhatsApp.
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
            <p className="text-xl font-black">Luggage Delivery Service Dubai</p>
            <p className="mt-2 text-sm text-slate-400">
              Airport, hotel, home and inter-emirate luggage transport.
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
