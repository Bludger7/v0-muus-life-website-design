// Hizmet landing sayfalari. "Malzeme, teslim ve fiyat bilgileri" metinleri
// Mucahit'in ONAYLADIGI metinlerdir (9 Eki 2026); kelimesi kelimesine korunmali.
// Fiyat/garanti/malzeme bilgisi bu bolumde oldugu icin SSS'de tekrar edilmez.

export type Service = {
  slug: string
  key: "kitchen" | "wardrobe" | "living" | "bathroom" | "antre" | "office"
  name: string
  h1: string
  title: string
  description: string
  intro: string[]
  materials: { name: string; text: string }[]
  includes: string[]
  faq: { q: string; a: string }[]
  projects: string[]
}

const PROCESS_FAQ = {
  q: "Süreç nasıl işliyor?",
  a: "Önce Ankara'daki mekânınızda yerinde keşif yapıp ölçü alıyoruz. İhtiyacınıza göre tasarımı ve malzeme seçimini birlikte netleştiriyor, teklif hazırlıyoruz. Onaydan sonra üretim kendi atölyemizde yapılıyor ve montaj ekibimizce yerinde kuruluyor.",
}
const KAPAKLAR = [
  { name: "Suntalam kapak", text: "Ekonomik, dayanıklı ve geniş renk/desen seçeneği." },
  { name: "MDFlam kapak", text: "Pürüzsüz yüzeyli, bakımı kolay ve dayanıklı kapak." },
  { name: "Highgloss kapak", text: "Işığı yansıtan parlak yüzey; küçük alanlarda ferahlık sağlar." },
  { name: "Akrilik kapak", text: "Yüksek parlaklıkta, kolay temizlenen modern kapak." },
  { name: "Balon (membran) kapak", text: "Çizgili ve profilli modellere uygun, klasik ve modern seçenek." },
  { name: "Lake kapak", text: "Mat veya parlak, istenen renkte boyanan pürüzsüz yüzey." },
  { name: "MDF üzeri doğal ahşap kaplama kapak", text: "Doğal ahşap dokusu ve sıcak görünüm." },
]

export const services: Service[] = [
  {
    slug: "mutfak-mobilyalari-ankara",
    key: "kitchen",
    name: "Mutfak Mobilyaları",
    h1: "Ankara Ölçüye Özel Mutfak Dolabı",
    title: "Ankara Mutfak Dolabı | Ölçüye Özel Üretim ve Montaj | Noyer Home",
    description: "Ankara'da ölçüye özel mutfak dolabı: yerinde keşif, lake, akrilik, highgloss ve doğal ahşap kaplama kapak, kuvars ve porselen tezgâh, ortalama 25 günde üretim ve montaj.",
    intro: [
      "Mutfak, evin en çok kullanılan ve ölçüye en hassas alanı. Hazır modüller duvar, tesisat ve pencere ölçülerine çoğu zaman uymaz; boşluklar ve kullanılamayan köşeler kalır.",
      "Noyer Home olarak mutfağınızı yerinde ölçüp dolapları milimetrik olarak kendi atölyemizde üretiyor, montajını kendi ekibimizle yapıyoruz. Üst dolaplar, boy dolapları, ada ve depolama çözümleri mekânınıza göre planlanıyor.",
    ],
    materials: [
      ...KAPAKLAR,
      { name: "Tezgâh seçenekleri", text: "Granit, kompozit, Çimstone kuvars, akrilik ve porselen tezgâh." },
    ],
    includes: ["Alt ve üst dolaplar", "Boy dolabı ve ankastre dolapları", "Mutfak adası", "Kiler ve çekmece düzenleri", "Aydınlatmalı raf ve vitrin dolapları"],
    faq: [PROCESS_FAQ, { q: "Eski mutfağın sökümünü yapıyor musunuz?", a: "Keşif sırasında mevcut durumu birlikte değerlendiriyoruz; söküm ve hazırlık işleri teklif kapsamında ayrıca belirtilir." }],
    projects: ["metafor-rezidans-anahtar-teslim-mobilya-projemiz", "sogutlu-bahce-anahtar-teslim-mutfak-projemiz", "turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz", "gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi", "haskoy-anahtar-teslim-mobilya", "mamak-skyline-tower"],
  },
  {
    slug: "gardirop-giyinme-odasi-ankara",
    key: "wardrobe",
    name: "Gardırop ve Giyinme Odaları",
    h1: "Ankara Ölçüye Özel Gardırop ve Giyinme Odası",
    title: "Ankara Gardırop ve Giyinme Odası | Ölçüye Özel | Noyer Home",
    description: "Ankara'da ölçüye özel gardırop, sürgülü dolap ve giyinme odası (walk-in) üretimi. Lake, MDFlam, akrilik ve doğal ahşap kaplama kapak seçenekleri, yerinde montaj.",
    intro: [
      "Duvardan duvara gardırop ya da ayrı bir giyinme odası; asıl fark iç düzende ortaya çıkar. Askı, çekmece, raf ve ayakkabılık bölümlerini kullanım alışkanlıklarınıza göre planlıyoruz.",
      "Tavana kadar ölçüye özel üretim sayesinde boşluk kalmaz, toz birikmez ve odanın tüm yüksekliği depolamaya katılır.",
    ],
    materials: [...KAPAKLAR],
    includes: ["Kanatlı ve sürgülü gardıroplar", "Walk-in giyinme odası", "Aydınlatmalı iç düzen", "Çekmece ve takı bölmeleri", "Çocuk ve genç odası dolapları"],
    faq: [PROCESS_FAQ, { q: "Çatı katı veya eğimli duvara dolap yapılır mı?", a: "Evet. Ölçüye özel üretim yaptığımız için eğimli tavan, kolon ve niş gibi alanlara uygun dolaplar planlayabiliyoruz." }],
    projects: ["eryaman-safir-rezidans", "eryaman-etaplar-anahtar-teslim-mobilya", "mamak-skyline-tower", "adres-ankara-anahtar-teslim-mobilya-projemiz", "eryaman-ata-dostlar-sitesi", "yenimahalle-yda-park"],
  },
  {
    slug: "tv-unitesi-ankara",
    key: "living",
    name: "TV Ünitesi ve Salon",
    h1: "Ankara Ölçüye Özel TV Ünitesi ve Salon Mobilyaları",
    title: "Ankara TV Ünitesi | Ölçüye Özel Salon Mobilyası | Noyer Home",
    description: "Ankara'da duvar ölçüsüne göre TV ünitesi, lambri, kitaplık ve salon depolama üniteleri. Gizli kablo yönetimi ve aydınlatmalı raf detayları.",
    intro: [
      "TV ünitesi salonun odak noktası. Duvar ölçüsüne göre üretilen bir ünite; kabloları gizler, cihazlara yer açar ve lambri, niş ve aydınlatmayla mekânın karakterini belirler.",
      "Ünitenin genişliğini, yüksekliğini ve depolama ihtiyacını yerinde ölçüp planlıyor, atölyemizde üretip montajını yapıyoruz.",
    ],
    materials: [...KAPAKLAR],
    includes: ["Duvar tipi ve yerden TV üniteleri", "Lambri ve duvar panelleri", "Kitaplık ve vitrin dolapları", "Gizli kablo kanalları", "LED aydınlatmalı niş ve raflar"],
    faq: [PROCESS_FAQ, { q: "Kablolar görünmez mi?", a: "Ünite tasarlanırken priz ve anten noktaları dikkate alınır; kablolar ünite içinden ve kanallardan geçirilerek gizlenir." }],
    projects: ["baglica-anahtar-teslim-daire", "ovacik-lavanta-sitesi", "adres-ankara-anahtar-teslim-mobilya-projemiz", "panorama-beytepe-villalari", "eryaman-yesil-vadi-sitesi"],
  },
  {
    slug: "banyo-dolabi-ankara",
    key: "bathroom",
    name: "Banyo Mobilyaları",
    h1: "Ankara Ölçüye Özel Banyo Dolabı",
    title: "Ankara Banyo Dolabı | Ölçüye Özel Lavabo Altı ve Boy Dolabı | Noyer Home",
    description: "Ankara'da neme dayanıklı malzemelerle ölçüye özel banyo dolabı, lavabo altı ünite, boy dolabı ve çamaşır makinesi dolabı üretimi.",
    intro: [
      "Banyo; nem, buhar ve su teması nedeniyle malzeme seçiminin en önemli olduğu alan. Dolapları neme dayanıklı gövde ve kapaklarla, lavabo ve tesisat ölçülerine göre üretiyoruz.",
      "Lavabo altı ünite, aynalı dolap, boy dolabı ve çamaşır makinesi/kurutucu dolapları dar alanlarda bile depolamayı artırır.",
    ],
    materials: [...KAPAKLAR],
    includes: ["Lavabo altı dolaplar", "Aynalı ve aydınlatmalı dolaplar", "Boy dolapları", "Çamaşır makinesi ve kurutucu dolapları", "Havlu ve depolama nişleri"],
    faq: [PROCESS_FAQ, { q: "Çamaşır makinesi ve kurutucu üst üste dolaba alınabilir mi?", a: "Evet. Cihaz ölçüleri ve havalandırma payı dikkate alınarak kapaklı dolap içinde üst üste yerleşim yapılabilir." }],
    projects: ["gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi", "sogutlu-bahce-anahtar-teslim-mutfak-projemiz", "metafor-rezidans-anahtar-teslim-mobilya-projemiz", "mamak-skyline-tower", "eryaman-goksu-park-vadi-evleri"],
  },
  {
    slug: "vestiyer-antre-dolabi-ankara",
    key: "antre",
    name: "Antre ve Vestiyer",
    h1: "Ankara Ölçüye Özel Vestiyer ve Antre Dolabı",
    title: "Ankara Vestiyer ve Antre Dolabı | Ölçüye Özel | Noyer Home",
    description: "Ankara'da giriş ölçüsüne göre vestiyer, ayakkabılık, oturma alanlı vestiyer, dresuar ve aynalı antre dolabı üretimi.",
    intro: [
      "Evin ilk izlenimi antrede oluşur. Dar girişlerde bile ayakkabı, mont ve çanta için yeterli depolama; oturma alanı ve ayna ile birlikte planlanabilir.",
      "Vestiyer, ayakkabılık ve dresuarı giriş ölçünüze göre üretiyor, kapı açılış yönlerini ve geçiş alanını dikkate alarak yerleştiriyoruz.",
    ],
    materials: [...KAPAKLAR],
    includes: ["Vestiyer ve portmanto", "Ayakkabılık", "Oturma alanlı vestiyer", "Dresuar ve ayna", "Lambri ve duvar panelleri"],
    faq: [PROCESS_FAQ, { q: "Dar bir antreye vestiyer sığar mı?", a: "Keşifte geçiş genişliğini ve kapı açılışlarını ölçüyoruz; sığ derinlikli dolaplar ve duvara monte çözümlerle dar girişlerde de verimli planlama yapılabiliyor." }],
    projects: ["metafor-rezidans-anahtar-teslim-mobilya-projemiz", "ovacik-lavanta-sitesi", "eryaman-ay-yildiz-sitesi", "ata-yildiz-goldelux-sitesi", "saraykent-500-evler"],
  },
  {
    slug: "kurumsal-ofis-mobilyasi-ankara",
    key: "office",
    name: "Ofis ve Kurumsal",
    h1: "Ankara Kurumsal ve Ofis Mobilyası Üretimi",
    title: "Ankara Ofis ve Kurumsal Mobilya | Ölçüye Özel Üretim | Noyer Home",
    description: "Ankara'da ofis, eğitim, klinik, kafe ve restoran projeleri için ölçüye özel mobilya üretimi ve montajı: banko, dolap, duvar paneli ve depolama.",
    intro: [
      "Ofis ve ticari mekânlarda mobilya hem marka kimliğini taşır hem de yoğun kullanıma dayanmak zorundadır. Bankolar, arşiv ve depolama dolapları, duvar panelleri ve özel ölçü üniteleri projeye göre üretiyoruz.",
      "Ofis, anaokulu, veteriner kliniği, kafe ve restoran gibi farklı ölçekte projelerde üretim ve montaj sürecini iş takvimine uygun planlıyoruz.",
    ],
    materials: [...KAPAKLAR],
    includes: ["Karşılama bankoları", "Yönetici ve çalışma masaları", "Arşiv ve depolama dolapları", "Duvar panelleri ve lambri", "Kafe ve restoran mobilyaları"],
    faq: [PROCESS_FAQ, { q: "Mesai saatleri dışında montaj yapılabilir mi?", a: "İş akışınızı aksatmamak için montaj takvimini sizinle birlikte planlıyoruz; uygun durumlarda mesai dışı çalışma yapılabilir." }],
    projects: ["metromall-dubleks-ofis", "integral-vize-istanbul-ofis-anahtar-teslim-projemiz", "integral-vize-eryaman-ofisi", "integral-vize-tunali-ofisi", "gozde-cocuk-anaokulu", "incek-veteriner-mobilya-uygulamamiz", "next-level-loft-ofis"],
  },
]

export type InfoBlock = { title: string; paragraphs: string[] }

const KAPAK_INFO: InfoBlock = {
  title: "Kapak Seçenekleri",
  paragraphs: ["Tasarım tercihlerinize ve bütçenize uygun olarak Suntalam, MDFlam, Highgloss, akrilik, balon (membran), lake ve MDF üzeri doğal ahşap kaplama seçenekleri sunuyoruz. Kapak seçimini, ürünün kullanım amacı ve mekânın genel tasarımıyla birlikte değerlendiriyoruz."],
}
const GOVDE_INFO: InfoBlock = {
  title: "Gövde ve Donanım",
  paragraphs: ["Ürün gövdelerinde tercihe göre MDFlam veya Suntalam kullanıyoruz. Menteşe ve ray sistemlerinde standart tercihimiz Samet’tir. Talep ve bütçe doğrultusunda Häfele veya Blum donanım seçeneklerini de değerlendiriyoruz."],
}
const TEZGAH_INFO: InfoBlock = {
  title: "Mutfak Tezgâhı Seçenekleri",
  paragraphs: ["Mutfak projelerinde granit, kompozit, Çimstone kuvars, akrilik ve porselen tezgâh seçenekleri sunuyoruz. Malzeme seçimini kullanım ihtiyaçları, tasarım tercihleri ve bütçe doğrultusunda birlikte belirliyoruz."],
}
const TESLIM_MUTFAK: InfoBlock = {
  title: "Üretim ve Teslim Süresi",
  paragraphs: ["Mutfak projelerimizde ortalama teslim süresi 25 gündür. Projenin kapsamına, seçilen malzemelere ve özel üretim detaylarına göre teslim takvimi değişebilir. Projenize ait teslim süresi teklif aşamasında netleştirilir."],
}
const TESLIM_GENEL: InfoBlock = {
  title: "Üretim ve Teslim Süresi",
  paragraphs: ["Mutfak, gardırop, TV ünitesi ve diğer özel üretim mobilyalarımızda ortalama teslim süresi 25 gündür. Projenin kapsamı, seçilen malzemeler ve özel üretim detaylarına göre teslim takvimi değişebilir. Siparişinize ait teslim süresi teklif aşamasında netleştirilir."],
}
const FIYAT_INFO: InfoBlock = {
  title: "Fiyatlandırma",
  paragraphs: [
    "Her proje için ölçü ve ihtiyaçlara özel teklif hazırlıyoruz. Fiyatlandırmada ürün ölçüleri, ilgili iş kalemine göre metretül veya metrekare hesabı, kapak ve gövde malzemeleri ile seçilen donanım ve aksesuarlar dikkate alınır.",
    "Menteşe, ray ve pantolonluk gibi donanım tercihleri de toplam bedeli etkiler. Projenin kapsamı ve malzeme seçimleri netleştirildikten sonra teklifimizi sunuyoruz.",
  ],
}
const GARANTI_INFO: InfoBlock = {
  title: "Garanti",
  paragraphs: ["Ürün ve uygulamalarımızda 1 yıl firma garantisi sunuyoruz. Garanti kapsamına ilişkin ayrıntılar teklif ve sözleşmede belirtilir."],
}

/** "Malzeme, teslim ve fiyat bilgileri" bölümü (onaylı metinler). */
export const serviceInfo = (s: Service): InfoBlock[] =>
  s.key === "kitchen"
    ? [KAPAK_INFO, GOVDE_INFO, TEZGAH_INFO, TESLIM_MUTFAK, FIYAT_INFO, GARANTI_INFO]
    : [KAPAK_INFO, GOVDE_INFO, TESLIM_GENEL, FIYAT_INFO, GARANTI_INFO]

export const serviceBySlug = (s: string) => services.find((x) => x.slug === s)
export const servicesForProject = (projectSlug: string) => services.filter((s) => s.projects.includes(projectSlug))
