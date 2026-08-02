import {
  SITE_URL,
  EMAIL,
  ADDRESS,
  INSTAGRAM_URL,
  OPENING_HOURS,
  PHONE_PRIMARY_TEL,
  PHONE_SECONDARY_TEL,
} from "@/lib/contact-info"

// Yalnizca kodda ve yayindaki iletisim bilgilerinde dogrulanan alanlar kullanilir.
// Bilincli olarak DISARIDA birakilanlar (veri dogrulanmadigi icin):
//   foundingDate, numberOfEmployees, aggregateRating, review, geo/latitude/longitude,
//   priceRange, cumartesi calisma saatleri, hizmet verilen marka listesi, uretim kapasitesi.
// Instagram disinda sosyal hesap eklenmemistir.

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Noyer Home",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  email: EMAIL,
  telephone: PHONE_PRIMARY_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.district,
    addressRegion: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  sameAs: [INSTAGRAM_URL],
}

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Noyer Home",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE_URL}/#organization` },
}

const furnitureStore = {
  "@type": "FurnitureStore",
  "@id": `${SITE_URL}/#business`,
  name: "Noyer Home",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  email: EMAIL,
  telephone: PHONE_PRIMARY_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.district,
    addressRegion: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  areaServed: { "@type": "City", name: "Ankara" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: OPENING_HOURS.days,
      opens: OPENING_HOURS.opens,
      closes: OPENING_HOURS.closes,
    },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: PHONE_PRIMARY_TEL, contactType: "customer service", areaServed: "TR", availableLanguage: ["tr"] },
    { "@type": "ContactPoint", telephone: PHONE_SECONDARY_TEL, contactType: "customer service", areaServed: "TR", availableLanguage: ["tr"] },
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  sameAs: [INSTAGRAM_URL],
}

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, website, furnitureStore],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // Icerik statik ve kod icinde tanimli; kullanici girdisi yoktur.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
