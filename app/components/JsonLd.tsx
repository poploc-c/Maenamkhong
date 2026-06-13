export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Mae Nam Khong",
        image: "https://maenamkhong.com/images/SOCIAL%20SIZE-157.jpg",
        url: "https://maenamkhong.com",
    telephone: "+6498264002",
    email: "info.maenamkhong@gmail.com",
    description:
      "Auckland's award-winning authentic Thai restaurant group. 7 locations across Auckland and Waikato.",
    servesCuisine: "Thai",
    priceRange: "$$",
    currenciesAccepted: "NZD",
    paymentAccepted: "Cash, Credit Card, EFTPOS",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2-4 Todd Plaza",
      addressLocality: "New Lynn",
      addressRegion: "Auckland",
      postalCode: "0600",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -36.9063,
      longitude: 174.6856,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "12:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "21:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/maenamkhongakl/",
    ],
    hasMap: "https://www.google.com/maps?q=mae+nam+khong+2-4+Todd+Plaza+New+Lynn",
    award: "Auckland Iconic Eats Award Winner",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
