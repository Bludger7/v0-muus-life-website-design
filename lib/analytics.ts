// GTM dataLayer olaylari. Mevcut GTM kurulumunu degistirmez; yalnizca olay iter.
// window.dataLayer yoksa (SSR, GTM engellendi, adblock) sessizce no-op olur.

type DataLayerEvent = Record<string, unknown> & { event: string }

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

function push(payload: DataLayerEvent): void {
  try {
    if (typeof window === "undefined") return
    if (!Array.isArray(window.dataLayer)) return
    window.dataLayer.push(payload)
  } catch {
    // Olay gonderimi hicbir zaman kullanici akisini bozmamali.
  }
}

/** WhatsApp baglantisi tiklamasi. location: hero | floating_button | contact | footer | cta */
export function trackWhatsAppClick(location: string): void {
  push({ event: "whatsapp_click", click_location: location })
}

/** Telefon baglantisi tiklamasi. */
export function trackPhoneClick(location: string, phone?: string): void {
  push({ event: "phone_click", click_location: location, ...(phone ? { phone_number: phone } : {}) })
}

/** Yalnizca Web3Forms basarili yanit dondurdugunde cagrilir. */
export function trackContactFormSuccess(furnitureType?: string): void {
  push({
    event: "contact_form_success",
    ...(furnitureType ? { furniture_type: furnitureType } : {}),
  })
}
