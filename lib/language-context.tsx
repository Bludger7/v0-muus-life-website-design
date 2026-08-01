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
    "nav.products": "Ürünler",
    "nav.office": "Ofis Çalışmaları",
    "nav.about": "Hakkımızda",
    "nav.team": "Ekibimiz",
    "nav.portfolio": "Portfolyo",
    "nav.contact": "İletişim",
    
    // Hero
    "hero.title": "Yaşayan Mekanlar Tasarlıyoruz",
    "hero.subtitle": "Profesyonel Mobilya Üretimleri & Tasarım Çözümleri",
    "hero.cta": "Çalışmalarımızı Keşfedin",
    "hero.cta2": "Hizmetlerimizi İnceleyin",
    
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
    "team.title": "Ekip",
    "team.thePrefix": "the ",
    "team.subtitle": "Profesyonel ekibimizle her projede mükemmelliği hedefliyoruz. Deneyim ve yaratıcılığı bir araya getirerek hayalinizdeki mekanları gerçeğe dönüştürüyoruz.",
    "team.role.founder": "Kurucu Ortak",
    "team.role.architect": "İç Mimar",
    "team.role.director": "Kurucu Ortak / Tasarım Direktörü",
    "team.role.site": "Şantiye Şefi",
    "team.role.operations": "Operasyon Sorumlusu",
    
    // Portfolio
    "portfolio.title": "Portfolyo",
    "portfolio.subtitle": "Son Projelerimizi Keşfedin",
    "portfolio.showMore": "Daha Fazla Göster",
    
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
    
    // Footer
    "footer.tagline": "Mobilya Üretim & Tasarım",
    "footer.contact": "İletişim",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.blog": "Blog",
    "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.office": "Office Projects",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "We Design Living Spaces",
    "hero.subtitle": "Professional Furniture Production & Design Solutions",
    "hero.cta": "Explore Our Work",
    "hero.cta2": "View Our Services",
    
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
    "team.title": "Team",
    "team.thePrefix": "the ",
    "team.subtitle": "We aim for excellence in every project with our professional team. By combining experience and creativity, we turn the spaces of your dreams into reality.",
    "team.role.founder": "Co-Founder",
    "team.role.architect": "Interior Architect",
    "team.role.director": "Co-Founder / Design Director",
    "team.role.site": "Site Manager",
    "team.role.operations": "Operations Manager",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Explore Our Latest Projects",
    "portfolio.showMore": "Show More",
    
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
    
    // Footer
    "footer.tagline": "Furniture Production & Design",
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
    return translations[language][key] || key
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
