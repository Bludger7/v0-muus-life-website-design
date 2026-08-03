"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "tr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.home": "Ana Sayfa",
    "nav.services": "Hizmetler",
    "nav.products": "Projeler",
    "nav.office": "Kurumsal Projeler",
    "nav.about": "Hakkımızda",
    "nav.team": "Ekibimiz",
    "nav.portfolio": "Portfolyo",
    "nav.contact": "İletişim",

    // Hero
    "hero.title": "Mekânınıza Özel Mobilyalar Üretiyoruz",
    "hero.subtitle": "Ölçüye özel mobilya üretimi — keşiften montaja tek elden",
    "hero.cta": "Çalışmalarımızı Keşfedin",
    "hero.cta2": "Hizmetlerimizi İnceleyin",
    "hero.ctaWhatsapp": "WhatsApp'tan Teklif Al",

    // Trust band
    "trust.custom": "Ölçüye Özel Üretim",
    "trust.survey": "Ankara'da Yerinde Keşif",
    "trust.install": "Profesyonel Montaj",
    "trust.warranty": "1 Yıl Garanti",

    // Uygulama galerisi
    "gallery.title": "Proje Galerisi",
    "gallery.subtitle": "Ölçüye özel mobilya, yaşam alanı ve kurumsal mekân çalışmalarımızdan seçkiler.",
    "gallery.all": "Tümü",
    "gallery.filterLabel": "Kategori filtresi",
    "gallery.close": "Görseli kapat",
    "gallery.prev": "Önceki görsel",
    "gallery.next": "Sonraki görsel",
    "gallery.empty": "Bu kategoride görsel bulunmuyor.",

    // Gecici galeri sayfasi (gorsel dogrulamasi bekleniyor)
    "placeholder.title": "Proje Arşivimizi Hazırlıyoruz",
    "placeholder.text": "Proje görsellerimizi yeniden düzenliyoruz. Bu bölüm kısa süre içinde yayına alınacak. Bu arada mekânınızın fotoğraflarını veya yaklaşık ölçülerini WhatsApp üzerinden gönderebilir, ihtiyacınızı birlikte değerlendirebiliriz.",
    "placeholder.services": "Hizmetlerimizi İnceleyin",

    // Son teklif cagrisi
    "cta.title": "Projenizi Birlikte Değerlendirelim",
    "cta.text": "Mekânınızın fotoğraflarını veya yaklaşık ölçülerini WhatsApp üzerinden gönderin; sizin için değerlendirip dönüş yapalım.",

    // Process strip
    "process.title": "Nasıl Çalışıyoruz?",
    "process.subtitle": "Keşiften montaja kadar tüm süreci tek elden yürütüyoruz.",
    "process.step1": "Keşif",
    "process.step1.desc": "Mekânı yerinde ölçüyor, ihtiyaç ve kullanım alışkanlıklarınızı dinliyoruz.",
    "process.step2": "Tasarım",
    "process.step2.desc": "Ölçülere uygun tasarımı hazırlıyor, malzeme ve renk seçimini birlikte netleştiriyoruz.",
    "process.step3": "Üretim",
    "process.step3.desc": "Onaylanan projeyi planlı ve kontrollü bir üretim süreciyle hazırlıyoruz.",
    "process.step4": "Montaj",
    "process.step4.desc": "Ürünleri mekânınıza kuruyor, teslim öncesi son kontrolleri yapıyoruz.",

    // Service categories (7)
    "cat.title": "Üretim Alanlarımız",
    "cat.subtitle": "Ölçüye özel mobilya ihtiyacınız hangi alandaysa, üretimini tek elden yapıyoruz.",
    "cat.quote": "Teklif Al",
    "cat.kitchen": "Mutfak Mobilyaları",
    "cat.kitchen.desc": "Ölçüye özel mutfak dolapları, tezgah ve depolama çözümleri üretiyoruz.",
    "cat.wardrobe": "Gardırop ve Giyinme Odaları",
    "cat.wardrobe.desc": "Ray kapaklı gardıroplar ve walk-in giyinme odalarını mekâna göre planlıyoruz.",
    "cat.living": "TV Ünitesi ve Salon",
    "cat.living.desc": "TV üniteleri, kitaplık ve salon depolama birimlerini duvar ölçüsüne göre üretiyoruz.",
    "cat.bathroom": "Banyo Mobilyaları",
    "cat.bathroom.desc": "Neme dayanıklı malzemelerle banyo dolabı ve lavabo altı üniteleri hazırlıyoruz.",
    "cat.kids": "Genç ve Çocuk Odaları",
    "cat.kids.desc": "Çalışma masası, dolap ve yatak birimlerini oda ölçüsüne göre birlikte kurguluyoruz.",
    "cat.antre": "Antre ve Vestiyer",
    "cat.antre.desc": "Antre dolabı, vestiyer ve ayna ünitelerini giriş ölçüsüne göre üretiyoruz.",
    "cat.office": "Ofis ve Kurumsal",
    "cat.office.desc": "Ofis, mağaza ve restoran projelerinde seri üretim disipliniyle çalışıyoruz.",
    "cat.other": "Ölçüye Özel Diğer Üretimler",
    "cat.other.desc": "Antre, vestiyer ve standart dışı ölçülerdeki özel taleplerinizi üretiyoruz.",
    
    // About
    "about.title": "Hakkımızda",
    "about.p1": "Noyer Home, kişiye özel ve kurumsal ölçekli mobilya üretiminde, tasarımı mühendislik disipliniyle birleştiren çağdaş bir üretim markasıdır. Her projede estetik bütünlüğü, malzeme kalitesini ve uzun ömürlü kullanım deneyimini aynı standartta sunmayı hedefler.",
    "about.p2": "Üretim yaklaşımımız; ölçüye özel tasarım, yüksek dayanıklılık ve kusursuz işçilik üzerine kuruludur. Ev, ofis ve ticari alanlar için geliştirilen tüm çözümlerimiz, baştan sona kontrollü ve şeffaf bir süreçle hayata geçirilir.",
    "about.p3": "Noyer Home, tekil yaşam alanlarından kapsamlı kurumsal projelere kadar her işinde kalıcı memnuniyet, sürdürülebilir kalite ve zamansız tasarım anlayışını esas alır.",
    "about.mission": "Misyonumuz",
    "about.mission.text": "İhtiyaca özel, yüksek kaliteli ve uzun ömürlü mobilyalar üretmek. Her müşterimizin yaşam ve çalışma alanını, işlevselliği artıran ve kalite standardını yükselten çözümlerle yeniden şekillendirmek.",
    "about.vision": "Vizyonumuz",
    "about.vision.text": "Türkiye'de ve uluslararası pazarda kişiye özel ve kurumsal mobilya üretimi denildiğinde akla gelen öncü marka olmak.",
    
    // Services
    "services.title": "Hizmetlerimiz",
    "social.media.title": "Sosyal Medya",
    "services.subtitle": "Kişiye özel yaşam alanlarından kurumsal projelere kadar geniş bir yelpazede profesyonel mobilya üretim çözümleri sunuyoruz.",
    "services.corporate": "Kurumsal Projeler",
    "services.corporate.desc": "Noyer Home, kurumsal firmalara özel mobilya üretiminde yüksek hassasiyet, seri üretim disiplini ve kurumsal kimliğe tam uyum sağlayan profesyonel çözümler sunar.",
    "services.custom": "Kişiye Özel Projeler",
    "services.custom.desc": "Noyer Home, yaşam alanlarını tamamen kişiye uygun hale getiren ölçüye özel mobilya üretiminde uzman bir yapıya sahiptir.",
    "services.office": "1. Ofis ve Çalışma Alanları",
    "services.office.desc": "Yönetici odaları, çalışma masası sistemleri, toplantı alanları, depolama çözümleri.",
    "services.store": "2. Mağaza ve Perakende Alanları",
    "services.store.desc": "Teşhir üniteleri, raf sistemleri, karşılama bankoları, mağaza dekorasyonu.",
    "services.restaurant": "3. Restoran, Kafe ve Otel Alanları",
    "services.restaurant.desc": "Masa-sandalye grupları, sabit oturum alanları, servis üniteleri, otel mobilyaları.",
    "services.project": "4. Proje Yönetimi",
    "services.project.desc": "Marka uyumlu üretim, yerinde keşif, üretim takvimi oluşturma ve anahtar teslim montaj.",
    "services.kitchen": "1. Mutfak Tasarımı",
    "services.kitchen.desc": "Ölçüye özel dolap sistemleri, modern ve klasik tasarım seçenekleri, üst düzey donanım.",
    "services.wardrobe": "2. Giyinme Odası ve Depolama",
    "services.wardrobe.desc": "Walk-in giyinme odaları, ray dolaplar, özel modül kombinasyonları.",
    "services.living": "3. Yaşam ve Dinlenme Alanları",
    "services.living.desc": "TV üniteleri, kitaplıklar, yatak odası mobilyaları, başlık ve baza sistemleri.",
    "services.entry": "4. Antre",
    "services.entry.desc": "Vestiyer sistemleri, yerinde ölçüm, malzeme seçimi ve uçtan uca süreç yönetimi.",
    "services.showLess": "Daha Az Göster",
    "services.showMore": "+ Daha Fazla",
    
    // Team
    "team.title": "Ekibimiz",
    "team.thePrefix": "",
    "team.subtitle": "Profesyonel ekibimizle her projede mükemmelliği hedefliyoruz. Deneyim ve yaratıcılığı bir araya getirerek hayalinizdeki mekanları gerçeğe dönüştürüyoruz.",
    "team.role.founder": "Kurucu Ortak",
    "team.role.architect": "İç Mimar",
    "team.role.director": "Firma Sahibi",
    "team.role.site": "Şantiye Şefi",
    "team.role.operations": "Operasyon Sorumlusu",
    
    // Portfolio
    "portfolio.title": "Portfolyo",
    "portfolio.subtitle": "Çalışmalarımızdan seçkiler",
    "portfolio.showMore": "Tüm Projeleri Gör",
    "portfolio.card.kitchen": "Mutfak Tasarımı",
    "portfolio.card.wardrobe": "Giyinme Odası Tasarımı",
    "portfolio.card.corporate": "Kurumsal Mobilya Tasarımı",
    "portfolio.cat.villa": "Villa Projesi",
    "portfolio.cat.office": "Ofis Projesi",
    "portfolio.cat.bedroom": "Yatak Odası",
    "portfolio.cat.restaurant": "Restoran Projesi",
    "portfolio.cat.commercial": "Ticari Alan",
    "portfolio.cat.public": "Ortak Kullanım Alanı",
    
    // Contact
    "contact.title": "İletişime Geçin",
    "contact.subtitle": "Vizyonunuzu birlikte hayata geçirelim",
    "contact.name": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.message": "Mesajınız",
    "contact.file": "Dosya Ekle (İsteğe bağlı)",
    "contact.fileSelect": "Dosya seçin veya sürükleyin",
    "contact.send": "Gönder",
    "contact.whatsapp": "WhatsApp ile iletişim",
    "contact.address": "Adres",
    "contact.phone": "İletişim",
    "contact.hours": "Hafta içi 09:00 - 18:00",
    "contact.social": "Sosyal Medya",
    "contact.showMap": "Haritada Göster",
    // Contact form (Web3Forms)
    "contact.phoneField": "Telefon",
    "contact.emailOptional": "E-posta (isteğe bağlı)",
    "contact.furnitureType": "Mobilya Türü",
    "contact.furnitureTypeSelect": "Seçiniz",
    "contact.location": "Proje Konumu",
    "contact.locationPlaceholder": "örn. Çankaya / Ankara",
    "contact.size": "Yaklaşık Ölçü (isteğe bağlı)",
    "contact.sizePlaceholder": "örn. 3.5m duvar",
    "contact.photoNote": "Görsellerinizi WhatsApp üzerinden iletebilirsiniz.",
    "contact.kvkk": "Kişisel verilerimin teklif amacıyla işlenmesine onay veriyorum.",
    "contact.kvkkValue": "Onay verildi",
    "contact.sending": "Gönderiliyor...",
    "contact.success": "Talebiniz alındı, en kısa sürede döneceğiz.",
    "contact.error": "Gönderilemedi, lütfen WhatsApp'tan ulaşın.",
    "contact.formDisabled": "Form geçici olarak devre dışı, WhatsApp'tan yazın.",
    "form.type.kitchen": "Mutfak",
    "form.type.wardrobe": "Gardırop / Giyinme Odası",
    "form.type.living": "TV Ünitesi / Salon",
    "form.type.bathroom": "Banyo",
    "form.type.kids": "Genç / Çocuk Odası",
    "form.type.office": "Ofis / Kurumsal",
    "form.type.other": "Diğer",
    
    // Footer
    "footer.tagline": "Ölçüye Özel Mobilya Üretimi",
    "footer.contact": "İletişim",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.blog": "Blog",
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.products": "Projects",
    "nav.office": "Corporate Projects",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "We Craft Furniture Tailored to Your Space",
    "hero.subtitle": "Custom furniture production — from survey to installation, all from one source",
    "hero.cta": "Explore Our Work",
    "hero.cta2": "View Our Services",
    "hero.ctaWhatsapp": "Get a Quote on WhatsApp",

    // Trust band
    "trust.custom": "Made-to-Measure Production",
    "trust.survey": "On-Site Survey in Ankara",
    "trust.install": "Professional Installation",
    "trust.warranty": "1 Year Warranty",

    // Project gallery
    "gallery.title": "Project Gallery",
    "gallery.subtitle": "A selection from our made-to-measure furniture, living space and corporate interior work.",
    "gallery.all": "All",
    "gallery.filterLabel": "Category filter",
    "gallery.close": "Close image",
    "gallery.prev": "Previous image",
    "gallery.next": "Next image",
    "gallery.empty": "There are no images in this category.",

    // Temporary gallery page (awaiting image verification)
    "placeholder.title": "We Are Preparing Our Project Archive",
    "placeholder.text": "We are reorganising our project visuals and this section will be published shortly. In the meantime you can send photos of your space or its approximate dimensions via WhatsApp and we can review your needs together.",
    "placeholder.services": "Explore Our Services",

    // Final quote CTA
    "cta.title": "Let's Review Your Project Together",
    "cta.text": "Send photos of your space or its approximate dimensions via WhatsApp and we will review them and get back to you.",

    // Process strip
    "process.title": "How We Work",
    "process.subtitle": "We manage the entire process from survey to installation ourselves.",
    "process.step1": "Survey",
    "process.step1.desc": "We measure the space on site and listen to your needs and daily habits.",
    "process.step2": "Design",
    "process.step2.desc": "We prepare a design that fits the measurements and decide materials and colors together.",
    "process.step3": "Production",
    "process.step3.desc": "We prepare the approved project through a planned and controlled production process.",
    "process.step4": "Installation",
    "process.step4.desc": "We install the units in your space and run final checks before handover.",

    // Service categories (7)
    "cat.title": "What We Produce",
    "cat.subtitle": "Whatever space your custom furniture is for, we handle its production from a single source.",
    "cat.quote": "Get a Quote",
    "cat.kitchen": "Kitchen Furniture",
    "cat.kitchen.desc": "We produce made-to-measure kitchen cabinets, countertops and storage solutions.",
    "cat.wardrobe": "Wardrobes and Dressing Rooms",
    "cat.wardrobe.desc": "We plan sliding-door wardrobes and walk-in dressing rooms according to the space.",
    "cat.living": "TV Unit and Living Room",
    "cat.living.desc": "We build TV units, bookcases and living room storage to fit your wall dimensions.",
    "cat.bathroom": "Bathroom Furniture",
    "cat.bathroom.desc": "We prepare bathroom cabinets and under-sink units using moisture-resistant materials.",
    "cat.kids": "Kids and Teen Rooms",
    "cat.kids.desc": "We plan desks, wardrobes and bed units together, sized to the room.",
    "cat.antre": "Entryway and Coat Storage",
    "cat.antre.desc": "We build entryway cabinets, coat units and mirror units sized to your hallway.",
    "cat.office": "Office and Corporate",
    "cat.office.desc": "We work with mass production discipline on office, retail and restaurant projects.",
    "cat.other": "Other Custom Production",
    "cat.other.desc": "We produce entryway units, coat systems and requests in non-standard dimensions.",
    
    // About
    "about.title": "About Us",
    "about.p1": "Noyer Home is a contemporary production brand that combines design with engineering discipline in custom and corporate-scale furniture production. In every project, we aim to deliver aesthetic integrity, material quality, and long-lasting user experience at the same standard.",
    "about.p2": "Our production approach is built on custom design, high durability, and flawless craftsmanship. All our solutions developed for homes, offices, and commercial spaces are realized through a controlled and transparent process from start to finish.",
    "about.p3": "Noyer Home is based on lasting satisfaction, sustainable quality, and timeless design philosophy in all its work, from individual living spaces to comprehensive corporate projects.",
    "about.mission": "Our Mission",
    "about.mission.text": "To produce custom, high-quality, and long-lasting furniture. To reshape the living and working spaces of each of our customers with solutions that enhance functionality and raise quality standards.",
    "about.vision": "Our Vision",
    "about.vision.text": "To be the leading brand that comes to mind when custom and corporate furniture production is mentioned in Turkey and international markets.",
    
    // Services
    "services.title": "Our Services",
    "social.media.title": "Social Media",
    "services.subtitle": "We offer professional furniture production solutions in a wide range from custom living spaces to corporate projects.",
    "services.corporate": "Corporate Projects",
    "services.corporate.desc": "Noyer Home provides professional solutions with high precision, mass production discipline, and full compliance with corporate identity in custom furniture production for corporate companies.",
    "services.custom": "Custom Projects",
    "services.custom.desc": "Noyer Home has an expert structure in custom furniture production that completely customizes living spaces.",
    "services.office": "1. Office and Work Spaces",
    "services.office.desc": "Executive offices, desk systems, meeting areas, storage solutions.",
    "services.store": "2. Store and Retail Spaces",
    "services.store.desc": "Display units, shelf systems, reception desks, store decoration.",
    "services.restaurant": "3. Restaurant, Cafe and Hotel Spaces",
    "services.restaurant.desc": "Table-chair groups, fixed seating areas, service units, hotel furniture.",
    "services.project": "4. Project Management",
    "services.project.desc": "Brand-compatible production, on-site inspection, production schedule creation, and turnkey installation.",
    "services.kitchen": "1. Kitchen Design",
    "services.kitchen.desc": "Custom cabinet systems, modern and classic design options, high-end hardware.",
    "services.wardrobe": "2. Dressing Room and Storage",
    "services.wardrobe.desc": "Walk-in dressing rooms, sliding wardrobes, custom module combinations.",
    "services.living": "3. Living and Rest Areas",
    "services.living.desc": "TV units, bookcases, bedroom furniture, headboard and base systems.",
    "services.entry": "4. Entryway",
    "services.entry.desc": "Wardrobe systems, on-site measurement, material selection, and end-to-end process management.",
    "services.showLess": "Show Less",
    "services.showMore": "+ Show More",
    
    // Team
    "team.title": "Our Team",
    // team.thePrefix artik team.tsx icinde render edilmiyor (baslik sadelestirildi);
    // tam metin dogrudan team.title icinde tutuluyor.
    "team.thePrefix": "",
    "team.subtitle": "We aim for excellence in every project with our professional team. By combining experience and creativity, we turn the spaces of your dreams into reality.",
    "team.role.founder": "Co-Founder",
    "team.role.architect": "Interior Architect",
    "team.role.director": "Owner",
    "team.role.site": "Site Manager",
    "team.role.operations": "Operations Manager",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "A selection of our work",
    "portfolio.showMore": "View All Projects",
    "portfolio.card.kitchen": "Kitchen Design",
    "portfolio.card.wardrobe": "Dressing Room Design",
    "portfolio.card.corporate": "Corporate Furniture Design",
    "portfolio.cat.villa": "Villa Project",
    "portfolio.cat.office": "Office Project",
    "portfolio.cat.bedroom": "Bedroom",
    "portfolio.cat.restaurant": "Restaurant Project",
    "portfolio.cat.commercial": "Commercial Space",
    "portfolio.cat.public": "Shared Space",
    
    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Let's bring your vision to life together",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.message": "Your Message",
    "contact.file": "Attach File (Optional)",
    "contact.fileSelect": "Select or drag files",
    "contact.send": "Send",
    "contact.whatsapp": "Contact via WhatsApp",
    "contact.address": "Address",
    "contact.phone": "Contact",
    "contact.hours": "Weekdays 09:00 - 18:00",
    "contact.social": "Social Media",
    "contact.showMap": "Show on Map",
    // Contact form (Web3Forms)
    "contact.phoneField": "Phone",
    "contact.emailOptional": "Email (optional)",
    "contact.furnitureType": "Furniture Type",
    "contact.furnitureTypeSelect": "Select",
    "contact.location": "Project Location",
    "contact.locationPlaceholder": "e.g. Çankaya / Ankara",
    "contact.size": "Approximate Size (optional)",
    "contact.sizePlaceholder": "e.g. 3.5m wall",
    "contact.photoNote": "You can send your photos via WhatsApp.",
    "contact.kvkk": "I consent to the processing of my personal data for the purpose of receiving a quote.",
    "contact.kvkkValue": "Consent given",
    "contact.sending": "Sending...",
    "contact.success": "We received your request, we will get back to you shortly.",
    "contact.error": "Could not be sent, please reach us on WhatsApp.",
    "contact.formDisabled": "The form is temporarily unavailable, please write to us on WhatsApp.",
    "form.type.kitchen": "Kitchen",
    "form.type.wardrobe": "Wardrobe / Dressing Room",
    "form.type.living": "TV Unit / Living Room",
    "form.type.bathroom": "Bathroom",
    "form.type.kids": "Kids / Teen Room",
    "form.type.office": "Office / Corporate",
    "form.type.other": "Other",
    
    // Footer
    "footer.tagline": "Made-to-Measure Furniture Production",
    "footer.contact": "Contact",
    "footer.quickLinks": "Quick Links",
    "footer.blog": "Blog",
    "footer.rights": "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("tr")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang && (savedLang === "tr" || savedLang === "en")) {
      setLanguageState(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    // NOT: `|| key` kullanilmaz. Bos string ("") falsy oldugu icin gecerli bir
    // ceviri olmasina ragmen anahtarin kendisi ekrana basiliyordu
    // (orn. team.thePrefix -> "team.thePrefixEkibimiz"). Yalnizca anahtar
    // gercekten tanimsizsa anahtar adina dusulur.
    const value = translations[language][key]
    return value !== undefined ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
