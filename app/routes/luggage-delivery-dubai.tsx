import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Luggage Delivery Dubai | Fast & Secure Luggage Transport" },
    {
      name: "description",
      content:
        "Reliable luggage delivery in Dubai for airport transfers, hotels, homes and offices. Safe transport for suitcases, bags and boxes across Dubai and the UAE.",
    },
    {
      name: "keywords",
      content:
        "luggage delivery Dubai, luggage transport Dubai, airport luggage transfer Dubai, suitcase delivery Dubai, baggage delivery Dubai",
    },
  ];
};

export default function LuggageDeliveryDubai() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#222",
        lineHeight: "1.7",
      }}
    >
      <section
        style={{
          background: "#f4f7fa",
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Luggage Delivery Dubai
          </h1>

          <p
            style={{
              fontSize: "20px",
              marginBottom: "30px",
            }}
          >
            Fast, safe and reliable luggage transport for airports, hotels,
            homes and offices across Dubai.
          </p>

          <a
            href="/"
            style={{
              display: "inline-block",
              background: "#111",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Book Luggage Delivery
          </a>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>
            Reliable Luggage Transport in Dubai
          </h2>

          <p>
            Our luggage delivery service in Dubai is suitable for travellers,
            families, hotel guests, business clients and residents who need
            their suitcases, bags or boxes transported safely from one location
            to another.
          </p>

          <p>
            We can collect luggage from your hotel, apartment, villa, office or
            airport area and deliver it to your required destination in Dubai.
            Our van service is suitable for single suitcases as well as larger
            quantities of luggage.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#f8f8f8",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>Our Luggage Delivery Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {[
              "Airport luggage transfer",
              "Hotel to hotel luggage delivery",
              "Home and apartment luggage transport",
              "Suitcase and travel bag delivery",
              "Boxes and personal items transport",
              "Dubai to other UAE emirates",
            ].map((service) => (
              <div
                key={service}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ marginTop: 0 }}>{service}</h3>
                <p>
                  Safe collection and delivery with a professional van and
                  experienced driver.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>
            Airport Luggage Transfer Dubai
          </h2>

          <p>
            Travelling with several suitcases can be difficult, especially when
            your car or taxi does not have enough space. Our airport luggage
            transfer service provides a practical solution for transporting
            bags between airports, hotels, apartments and villas.
          </p>

          <p>
            Advance booking is recommended so that the van can arrive at the
            required pickup location at the agreed time.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#f8f8f8",
          padding: "60px 20px",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>Why Choose Our Service?</h2>

          <ul style={{ fontSize: "18px" }}>
            <li>Professional van with an experienced driver</li>
            <li>Suitable for suitcases, bags and boxes</li>
            <li>Pickup and delivery across Dubai</li>
            <li>Service available for individuals and businesses</li>
            <li>Advance and same-day bookings subject to availability</li>
            <li>Careful handling of your luggage</li>
          </ul>
        </div>
      </section>

      <section style={{ padding: "60px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>Areas We Cover</h2>

          <p>
            We provide luggage delivery in Dubai Marina, JBR, JLT, Palm
            Jumeirah, Downtown Dubai, Business Bay, DIFC, JVC, Dubai Hills, Al
            Barsha, Deira, Bur Dubai and other areas across Dubai.
          </p>

          <p>
            Transport to Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah,
            Umm Al Quwain and Al Ain may also be arranged.
          </p>
        </div>
      </section>

      <section
        style={{
          background: "#111",
          color: "#fff",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px" }}>
            Book Luggage Delivery in Dubai
          </h2>

          <p style={{ fontSize: "18px" }}>
            Send your pickup location, delivery location, number of bags and
            preferred time to receive a quotation.
          </p>

          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#fff",
              color: "#111",
              padding: "14px 28px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
