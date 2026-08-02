// Koddaki mevcut iletisim bilgilerinin tek kaynagi.
// Buradaki degerler halihazirda sitede yayinda olan bilgilerdir; tahmin eklenmemistir.

export const SITE_URL = "https://noyerhome.com"

/** WhatsApp hattı — sitede kullanilan numara. */
export const WHATSAPP_PHONE = "905015307736"
export const WHATSAPP_MESSAGE = "Merhaba, mobilya teklifi almak istiyorum"
export const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

/** Sitede gorunen iki telefon numarasi. */
export const PHONE_PRIMARY_DISPLAY = "0501 530 77 36"
export const PHONE_PRIMARY_TEL = "+905015307736"
export const PHONE_SECONDARY_DISPLAY = "0501 530 07 67"
export const PHONE_SECONDARY_TEL = "+905015300767"

export const EMAIL = "bilgi@noyerhome.com"

export const ADDRESS = {
  street: "Şehit Osman Avcı Mah. Kaplan Cad. No:11, Alpak&Neva ARMONIA Sitesi C Blok No:9",
  postalCode: "06824",
  district: "Etimesgut",
  city: "Ankara",
  country: "TR",
}

/** Dogrulanmis tek sosyal hesap. */
export const INSTAGRAM_URL = "https://instagram.com/noyer.home"

/** Hafta ici calisma saatleri (sitede yayinda). Cumartesi bilgisi teyit edilmedi, eklenmedi. */
export const OPENING_HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "09:00",
  closes: "18:00",
}
