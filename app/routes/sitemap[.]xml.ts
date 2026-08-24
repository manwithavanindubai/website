import type { LoaderFunctionArgs } from "@remix-run/cloudflare";

export async function loader({ request }: LoaderFunctionArgs) {
  const baseUrl = "https://manwithavanindubai.com";

  const pages = [
    "",
    "/airport-luggage-delivery-dubai",
    "/boxes-delivery-dubai",
    "/hotel-luggage-transfer-dubai",
    "/ikea-furniture-delivery-dubai",
    "/luggage-delivery-dubai",
    "/man-with-a-van-in-dubai",
    "/private-jet-luggage-transfer-dubai",
    "/small-moving-dubai",
    "/single-item-movers-dubai",
"/hire-removal-van-dubai",
"/moving-van-dubai",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
