// Noyer Home proje vitrini. Kaynak: Drive > IS GORSELLERI > noyer.home.
// Kural: ilk hal ve tadilat gorselleri kullanilmaz; render'lar "render: true" ile isaretlenir
// ve sitede "3D Tasarım" etiketiyle gosterilir. Musteri isimleri kullanilmaz.
export type ShowcaseImage = { src: string; thumb: string; render?: boolean }
export type ShowcaseProject = {
  slug: string
  title: string
  location: string
  category: "konut" | "kurumsal"
  images: ShowcaseImage[]
  video: { src: string; poster: string } | null
}

/** Kart/başlıklarda gösterilen konum: Ankara dışı şehirler (İstanbul) ilçe gibi "…, Ankara" yazılmaz. */
export const placeLabel = (loc: string) => (loc === "Ankara" || loc === "İstanbul" ? loc : `${loc}, Ankara`)

export const showcaseProjects: ShowcaseProject[] = [
  {
    "slug": "metafor-rezidans-anahtar-teslim-mobilya-projemiz",
    "title": "Metafor Rezidans Anahtar Teslim Mobilya Projemiz",
    "location": "Metafor Rezidans",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-1.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-1-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-2.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-2-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-3.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-3-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-4.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-4-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-5.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-5-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-6.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-6-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-7.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-7-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-8.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-8-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-9.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-9-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-10.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-10-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-11.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-11-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-12.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-12-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-13.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-13-k.webp"
      },
      {
        "src": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-14.webp",
        "thumb": "/img/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz.mp4",
      "poster": "/media/projeler/metafor-rezidans-anahtar-teslim-mobilya-projemiz.jpg"
    }
  },
  {
    "slug": "mamak-skyline-tower",
    "title": "Mamak Skyline Tower",
    "location": "Mamak",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/mamak-skyline-tower-1.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-1-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-2.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-2-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-3.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-3-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-4.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-4-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-5.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-5-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-6.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-6-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-7.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-7-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-8.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-8-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-9.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-9-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-10.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-10-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-11.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-11-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-12.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-12-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-13.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-13-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-14.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-14-k.webp"
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-15.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-15-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-16.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-16-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-17.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-17-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-18.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-18-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-19.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-19-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-20.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-20-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-21.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-21-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/mamak-skyline-tower-22.webp",
        "thumb": "/img/projeler/mamak-skyline-tower-22-k.webp",
        "render": true
      }
    ],
    "video": {
      "src": "/media/projeler/mamak-skyline-tower.mp4",
      "poster": "/media/projeler/mamak-skyline-tower.jpg"
    }
  },
  {
    "slug": "panorama-beytepe-villalari",
    "title": "Panorama Beytepe Villaları",
    "location": "Beytepe",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/panorama-beytepe-villalari-1.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-1-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-2.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-2-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-3.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-3-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-4.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-4-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-5.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-5-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-6.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-6-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-7.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-7-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-8.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-8-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-9.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-9-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-10.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-10-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-11.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-11-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-12.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-12-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-13.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-13-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-14.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-14-k.webp"
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-15.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-15-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-16.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-16-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-17.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-17-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-18.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-18-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-19.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-19-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-20.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-20-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/panorama-beytepe-villalari-21.webp",
        "thumb": "/img/projeler/panorama-beytepe-villalari-21-k.webp",
        "render": true
      }
    ],
    "video": {
      "src": "/media/projeler/panorama-beytepe-villalari.mp4",
      "poster": "/media/projeler/panorama-beytepe-villalari.jpg"
    }
  },
  {
    "slug": "next-level-loft-ofis",
    "title": "Next Level Loft Ofis",
    "location": "Söğütözü",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/next-level-loft-ofis-1.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-1-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-2.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-2-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-3.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-3-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-4.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-4-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-5.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-5-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-6.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-6-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-7.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-7-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/next-level-loft-ofis-8.webp",
        "thumb": "/img/projeler/next-level-loft-ofis-8-k.webp",
        "render": true
      }
    ],
    "video": {
      "src": "/media/projeler/next-level-loft-ofis.mp4",
      "poster": "/media/projeler/next-level-loft-ofis.jpg"
    }
  },
  {
    "slug": "metromall-dubleks-ofis",
    "title": "Metromall Dubleks Ofis",
    "location": "Metromall",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/metromall-dubleks-ofis-1.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-1-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-2.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-2-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-3.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-3-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-4.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-4-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-5.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-5-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-6.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-6-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-7.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-7-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-8.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-8-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-9.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-9-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-10.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-10-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-11.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-11-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-12.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-12-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-13.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-13-k.webp"
      },
      {
        "src": "/img/projeler/metromall-dubleks-ofis-14.webp",
        "thumb": "/img/projeler/metromall-dubleks-ofis-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/metromall-dubleks-ofis.mp4",
      "poster": "/media/projeler/metromall-dubleks-ofis.jpg"
    }
  },
  {
    "slug": "adres-ankara-anahtar-teslim-mobilya-projemiz",
    "title": "Adres Ankara Anahtar Teslim Mobilya Projemiz",
    "location": "Ankara",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-1.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-1-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-2.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-2-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-3.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-3-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-4.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-4-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-5.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-5-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-6.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-6-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-7.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-7-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-8.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-8-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-9.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-9-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-10.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-10-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-11.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-11-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-12.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-12-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-13.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-13-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-14.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-14-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-15.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-15-k.webp"
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-16.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-16-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-17.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-17-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-18.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-18-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-19.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-19-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-20.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-20-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-21.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-21-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-22.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-22-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-23.webp",
        "thumb": "/img/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz-23-k.webp",
        "render": true
      }
    ],
    "video": {
      "src": "/media/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz.mp4",
      "poster": "/media/projeler/adres-ankara-anahtar-teslim-mobilya-projemiz.jpg"
    }
  },
  {
    "slug": "gozde-cocuk-anaokulu",
    "title": "Gözde Çocuk Anaokulu",
    "location": "Ankara",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-1.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-1-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-2.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-2-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-3.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-3-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-4.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-4-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-5.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-5-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-6.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-6-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-7.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-7-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-8.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-8-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-9.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-9-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-10.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-10-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-11.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-11-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-12.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-12-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-13.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-13-k.webp"
      },
      {
        "src": "/img/projeler/gozde-cocuk-anaokulu-14.webp",
        "thumb": "/img/projeler/gozde-cocuk-anaokulu-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/gozde-cocuk-anaokulu.mp4",
      "poster": "/media/projeler/gozde-cocuk-anaokulu.jpg"
    }
  },
  {
    "slug": "eryaman-yesil-vadi-sitesi",
    "title": "Eryaman Yeşil Vadi Sitesi",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-1.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-2.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-3.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-4.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-5.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-5-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-6.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-6-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-7.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-7-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-8.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-8-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-9.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-9-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-10.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-10-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-11.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-11-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-12.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-12-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-13.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-13-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-yesil-vadi-sitesi-14.webp",
        "thumb": "/img/projeler/eryaman-yesil-vadi-sitesi-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-yesil-vadi-sitesi.mp4",
      "poster": "/media/projeler/eryaman-yesil-vadi-sitesi.jpg"
    }
  },
  {
    "slug": "eryaman-ay-yildiz-sitesi",
    "title": "Eryaman Ay Yıldız Sitesi",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-1.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-2.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-3.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-4.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-5.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-5-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-6.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-6-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-7.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-7-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-8.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-8-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-9.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-9-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-10.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-10-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-11.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-11-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-12.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-12-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-13.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-13-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ay-yildiz-sitesi-14.webp",
        "thumb": "/img/projeler/eryaman-ay-yildiz-sitesi-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-ay-yildiz-sitesi.mp4",
      "poster": "/media/projeler/eryaman-ay-yildiz-sitesi.jpg"
    }
  },
  {
    "slug": "eryaman-ata-dostlar-sitesi",
    "title": "Eryaman Ata Dostlar Sitesi",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-1.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-2.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-3.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-4.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-5.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-5-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-6.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-6-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-7.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-7-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-8.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-8-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-9.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-9-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-10.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-10-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-11.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-11-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-12.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-12-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-13.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-13-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-ata-dostlar-sitesi-14.webp",
        "thumb": "/img/projeler/eryaman-ata-dostlar-sitesi-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-ata-dostlar-sitesi.mp4",
      "poster": "/media/projeler/eryaman-ata-dostlar-sitesi.jpg"
    }
  },
  {
    "slug": "integral-vize-istanbul-ofis-anahtar-teslim-projemiz",
    "title": "İntegral Vize İstanbul Ofis Anahtar Teslim Projemiz",
    "location": "İstanbul",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-1.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-1-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-2.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-2-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-3.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-3-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-4.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-4-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-5.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-5-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-6.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-6-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-7.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-7-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-8.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-8-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-9.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-9-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-10.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-10-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-11.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-11-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-12.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-12-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-13.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-13-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-14.webp",
        "thumb": "/img/projeler/integral-vize-istanbul-ofis-anahtar-teslim-projemiz-14-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "integral-vize-eryaman-ofisi",
    "title": "İntegral Vize Eryaman Ofisi",
    "location": "Eryaman",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-1.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-1-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-2.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-2-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-3.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-3-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-4.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-4-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-5.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-5-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-6.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-6-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-7.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-7-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-8.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-8-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-9.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-9-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-10.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-10-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-11.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-11-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-12.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-12-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-13.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-13-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-eryaman-ofisi-14.webp",
        "thumb": "/img/projeler/integral-vize-eryaman-ofisi-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/integral-vize-eryaman-ofisi.mp4",
      "poster": "/media/projeler/integral-vize-eryaman-ofisi.jpg"
    }
  },
  {
    "slug": "ovacik-lavanta-sitesi",
    "title": "Ovacık Lavanta Sitesi",
    "location": "Ovacık",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-1.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-1-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-2.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-2-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-3.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-3-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-4.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-4-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-5.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-5-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-6.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-6-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-7.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-7-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-8.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-8-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-9.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-9-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-10.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-10-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-11.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-11-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-12.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-12-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-13.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-13-k.webp"
      },
      {
        "src": "/img/projeler/ovacik-lavanta-sitesi-14.webp",
        "thumb": "/img/projeler/ovacik-lavanta-sitesi-14-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "ata-yildiz-goldelux-sitesi",
    "title": "Ata Yıldız Göldelux Sitesi",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-1.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-1-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-2.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-2-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-3.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-3-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-4.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-4-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-5.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-5-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-6.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-6-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-7.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-7-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-8.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-8-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-9.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-9-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-10.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-10-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-11.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-11-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-12.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-12-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-13.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-13-k.webp"
      },
      {
        "src": "/img/projeler/ata-yildiz-goldelux-sitesi-14.webp",
        "thumb": "/img/projeler/ata-yildiz-goldelux-sitesi-14-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "yenimahalle-yda-park",
    "title": "Yenimahalle YDA Park",
    "location": "Yenimahalle",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/yenimahalle-yda-park-1.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-1-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-2.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-2-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-3.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-3-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-4.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-4-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-5.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-5-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-6.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-6-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-7.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-7-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-8.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-8-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-9.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-9-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-10.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-10-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-11.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-11-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-12.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-12-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-13.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-13-k.webp"
      },
      {
        "src": "/img/projeler/yenimahalle-yda-park-14.webp",
        "thumb": "/img/projeler/yenimahalle-yda-park-14-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/yenimahalle-yda-park.mp4",
      "poster": "/media/projeler/yenimahalle-yda-park.jpg"
    }
  },
  {
    "slug": "saraykent-500-evler",
    "title": "Saraykent 500 Evler",
    "location": "Saraykent",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/saraykent-500-evler-1.webp",
        "thumb": "/img/projeler/saraykent-500-evler-1-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-2.webp",
        "thumb": "/img/projeler/saraykent-500-evler-2-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-3.webp",
        "thumb": "/img/projeler/saraykent-500-evler-3-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-4.webp",
        "thumb": "/img/projeler/saraykent-500-evler-4-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-5.webp",
        "thumb": "/img/projeler/saraykent-500-evler-5-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-6.webp",
        "thumb": "/img/projeler/saraykent-500-evler-6-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-7.webp",
        "thumb": "/img/projeler/saraykent-500-evler-7-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-8.webp",
        "thumb": "/img/projeler/saraykent-500-evler-8-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-9.webp",
        "thumb": "/img/projeler/saraykent-500-evler-9-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-10.webp",
        "thumb": "/img/projeler/saraykent-500-evler-10-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-11.webp",
        "thumb": "/img/projeler/saraykent-500-evler-11-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-12.webp",
        "thumb": "/img/projeler/saraykent-500-evler-12-k.webp"
      },
      {
        "src": "/img/projeler/saraykent-500-evler-13.webp",
        "thumb": "/img/projeler/saraykent-500-evler-13-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/saraykent-500-evler.mp4",
      "poster": "/media/projeler/saraykent-500-evler.jpg"
    }
  },
  {
    "slug": "eryaman-goksu-park-vadi-evleri",
    "title": "Eryaman Göksu Park Vadi Evleri",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-1.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-2.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-3.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-4.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-5.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-5-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-6.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-6-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-7.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-7-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-8.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-8-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-9.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-9-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-10.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-10-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-11.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-11-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-goksu-park-vadi-evleri-12.webp",
        "thumb": "/img/projeler/eryaman-goksu-park-vadi-evleri-12-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-goksu-park-vadi-evleri.mp4",
      "poster": "/media/projeler/eryaman-goksu-park-vadi-evleri.jpg"
    }
  },
  {
    "slug": "baglica-anahtar-teslim-daire",
    "title": "Bağlıca Anahtar Teslim Daire",
    "location": "Bağlıca",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-1.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-1-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-2.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-2-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-3.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-3-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-4.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-4-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-5.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-5-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-6.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-6-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-7.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-7-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-8.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-8-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-9.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-9-k.webp"
      },
      {
        "src": "/img/projeler/baglica-anahtar-teslim-daire-10.webp",
        "thumb": "/img/projeler/baglica-anahtar-teslim-daire-10-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/baglica-anahtar-teslim-daire.mp4",
      "poster": "/media/projeler/baglica-anahtar-teslim-daire.jpg"
    }
  },
  {
    "slug": "integral-vize-tunali-ofisi",
    "title": "İntegral Vize Tunalı Ofisi",
    "location": "Tunalı",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-1.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-1-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-2.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-2-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-3.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-3-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-4.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-4-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-5.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-5-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-6.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-6-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-7.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-7-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-8.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-8-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-9.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-9-k.webp"
      },
      {
        "src": "/img/projeler/integral-vize-tunali-ofisi-10.webp",
        "thumb": "/img/projeler/integral-vize-tunali-ofisi-10-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/integral-vize-tunali-ofisi.mp4",
      "poster": "/media/projeler/integral-vize-tunali-ofisi.jpg"
    }
  },
  {
    "slug": "bahcelievler-anahtar-teslim-mobilya",
    "title": "Bahçelievler Anahtar Teslim Mobilya",
    "location": "Bahçelievler",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-1.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-1-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-2.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-2-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-3.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-3-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-4.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-4-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-5.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-5-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-6.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-6-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-7.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-7-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-8.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-8-k.webp"
      },
      {
        "src": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-9.webp",
        "thumb": "/img/projeler/bahcelievler-anahtar-teslim-mobilya-9-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/bahcelievler-anahtar-teslim-mobilya.mp4",
      "poster": "/media/projeler/bahcelievler-anahtar-teslim-mobilya.jpg"
    }
  },
  {
    "slug": "eryaman-turkuaz-konutlari-anahtar-teslim-mobilya",
    "title": "Eryaman Turkuaz Konutları Anahtar Teslim Mobilya",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-1.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-2.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-3.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-4.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-5.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-5-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-6.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-6-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-7.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-7-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-8.webp",
        "thumb": "/img/projeler/eryaman-turkuaz-konutlari-anahtar-teslim-mobilya-8-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "yapracik-toki-konutlari",
    "title": "Yapracık TOKİ Konutları",
    "location": "Yapracık",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/yapracik-toki-konutlari-1.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-1-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-2.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-2-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-3.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-3-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-4.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-4-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-5.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-5-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-6.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-6-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-7.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-7-k.webp"
      },
      {
        "src": "/img/projeler/yapracik-toki-konutlari-8.webp",
        "thumb": "/img/projeler/yapracik-toki-konutlari-8-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/yapracik-toki-konutlari.mp4",
      "poster": "/media/projeler/yapracik-toki-konutlari.jpg"
    }
  },
  {
    "slug": "sogutlu-bahce-anahtar-teslim-mutfak-projemiz",
    "title": "Söğütlü Bahçe Anahtar Teslim Mutfak Projemiz",
    "location": "Söğütlü Bahçe",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-1.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-1-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-2.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-2-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-3.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-3-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-4.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-4-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-5.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-5-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-6.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-6-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-7.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-7-k.webp"
      },
      {
        "src": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-8.webp",
        "thumb": "/img/projeler/sogutlu-bahce-anahtar-teslim-mutfak-projemiz-8-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "turgut-ozal-mahallesi-anahtar-teslim-mobilya",
    "title": "Turgut Özal Mahallesi Anahtar Teslim Mobilya",
    "location": "Turgut Özal Mahallesi",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-1.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-1-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-2.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-2-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-3.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-3-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-4.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-4-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-5.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-5-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-6.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-6-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-7.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-7-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-8.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-8-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-9.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-9-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-10.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-10-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-11.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mobilya-11-k.webp",
        "render": true
      }
    ],
    "video": null
  },
  {
    "slug": "konum-eryaman",
    "title": "Konum Eryaman",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/konum-eryaman-1.webp",
        "thumb": "/img/projeler/konum-eryaman-1-k.webp"
      },
      {
        "src": "/img/projeler/konum-eryaman-2.webp",
        "thumb": "/img/projeler/konum-eryaman-2-k.webp"
      },
      {
        "src": "/img/projeler/konum-eryaman-3.webp",
        "thumb": "/img/projeler/konum-eryaman-3-k.webp"
      },
      {
        "src": "/img/projeler/konum-eryaman-4.webp",
        "thumb": "/img/projeler/konum-eryaman-4-k.webp"
      },
      {
        "src": "/img/projeler/konum-eryaman-5.webp",
        "thumb": "/img/projeler/konum-eryaman-5-k.webp"
      },
      {
        "src": "/img/projeler/konum-eryaman-6.webp",
        "thumb": "/img/projeler/konum-eryaman-6-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "eryaman-etaplar-anahtar-teslim-mobilya",
    "title": "Eryaman Etaplar Anahtar Teslim Mobilya",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-1.webp",
        "thumb": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-2.webp",
        "thumb": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-3.webp",
        "thumb": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-4.webp",
        "thumb": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-5.webp",
        "thumb": "/img/projeler/eryaman-etaplar-anahtar-teslim-mobilya-5-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-etaplar-anahtar-teslim-mobilya.mp4",
      "poster": "/media/projeler/eryaman-etaplar-anahtar-teslim-mobilya.jpg"
    }
  },
  {
    "slug": "eryaman-safir-rezidans",
    "title": "Eryaman Safir Rezidans",
    "location": "Eryaman",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/eryaman-safir-rezidans-1.webp",
        "thumb": "/img/projeler/eryaman-safir-rezidans-1-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-safir-rezidans-2.webp",
        "thumb": "/img/projeler/eryaman-safir-rezidans-2-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-safir-rezidans-3.webp",
        "thumb": "/img/projeler/eryaman-safir-rezidans-3-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-safir-rezidans-4.webp",
        "thumb": "/img/projeler/eryaman-safir-rezidans-4-k.webp"
      },
      {
        "src": "/img/projeler/eryaman-safir-rezidans-5.webp",
        "thumb": "/img/projeler/eryaman-safir-rezidans-5-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/eryaman-safir-rezidans.mp4",
      "poster": "/media/projeler/eryaman-safir-rezidans.jpg"
    }
  },
  {
    "slug": "incek-veteriner-mobilya-uygulamamiz",
    "title": "İncek Veteriner Mobilya Uygulamamız",
    "location": "İncek",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-1.webp",
        "thumb": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-1-k.webp"
      },
      {
        "src": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-2.webp",
        "thumb": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-2-k.webp"
      },
      {
        "src": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-3.webp",
        "thumb": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-3-k.webp"
      },
      {
        "src": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-4.webp",
        "thumb": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-4-k.webp"
      },
      {
        "src": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-5.webp",
        "thumb": "/img/projeler/incek-veteriner-mobilya-uygulamamiz-5-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi",
    "title": "GOP Mahallesi Anahtar Teslim Mutfak ve Banyo Uygulaması",
    "location": "GOP Mahallesi",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-1.webp",
        "thumb": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-1-k.webp"
      },
      {
        "src": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-2.webp",
        "thumb": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-2-k.webp"
      },
      {
        "src": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-3.webp",
        "thumb": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-3-k.webp"
      },
      {
        "src": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-4.webp",
        "thumb": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-4-k.webp"
      },
      {
        "src": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-5.webp",
        "thumb": "/img/projeler/gop-mahallesi-anahtar-teslim-mutfak-ve-banyo-uygulamasi-5-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz",
    "title": "Turgut Özal Mahallesi Anahtar Teslim Mutfak Projemiz",
    "location": "Turgut Özal Mahallesi",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-1.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-1-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-2.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-2-k.webp"
      },
      {
        "src": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-3.webp",
        "thumb": "/img/projeler/turgut-ozal-mahallesi-anahtar-teslim-mutfak-projemiz-3-k.webp"
      }
    ],
    "video": null
  },
  {
    "slug": "haskoy-anahtar-teslim-mobilya",
    "title": "Hasköy Anahtar Teslim Mobilya",
    "location": "Hasköy",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/haskoy-anahtar-teslim-mobilya-1.webp",
        "thumb": "/img/projeler/haskoy-anahtar-teslim-mobilya-1-k.webp"
      }
    ],
    "video": {
      "src": "/media/projeler/haskoy-anahtar-teslim-mobilya.mp4",
      "poster": "/media/projeler/haskoy-anahtar-teslim-mobilya.jpg"
    }
  },
  {
    "slug": "natura-incek",
    "title": "Natura İncek",
    "location": "İncek",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/natura-incek-1.webp",
        "thumb": "/img/projeler/natura-incek-1-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-2.webp",
        "thumb": "/img/projeler/natura-incek-2-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-3.webp",
        "thumb": "/img/projeler/natura-incek-3-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-4.webp",
        "thumb": "/img/projeler/natura-incek-4-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-5.webp",
        "thumb": "/img/projeler/natura-incek-5-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-6.webp",
        "thumb": "/img/projeler/natura-incek-6-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-7.webp",
        "thumb": "/img/projeler/natura-incek-7-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/natura-incek-8.webp",
        "thumb": "/img/projeler/natura-incek-8-k.webp",
        "render": true
      }
    ],
    "video": null
  },
  {
    "slug": "konut-tasarimi",
    "title": "Konut Tasarımı",
    "location": "Ankara",
    "category": "konut",
    "images": [
      {
        "src": "/img/projeler/konut-tasarimi-1.webp",
        "thumb": "/img/projeler/konut-tasarimi-1-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-2.webp",
        "thumb": "/img/projeler/konut-tasarimi-2-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-3.webp",
        "thumb": "/img/projeler/konut-tasarimi-3-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-4.webp",
        "thumb": "/img/projeler/konut-tasarimi-4-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-5.webp",
        "thumb": "/img/projeler/konut-tasarimi-5-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-6.webp",
        "thumb": "/img/projeler/konut-tasarimi-6-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-7.webp",
        "thumb": "/img/projeler/konut-tasarimi-7-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/konut-tasarimi-8.webp",
        "thumb": "/img/projeler/konut-tasarimi-8-k.webp",
        "render": true
      }
    ],
    "video": null
  },
  {
    "slug": "incek-balik-restorani",
    "title": "İncek Balık Restoranı",
    "location": "İncek",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/incek-balik-restorani-1.webp",
        "thumb": "/img/projeler/incek-balik-restorani-1-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-2.webp",
        "thumb": "/img/projeler/incek-balik-restorani-2-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-3.webp",
        "thumb": "/img/projeler/incek-balik-restorani-3-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-4.webp",
        "thumb": "/img/projeler/incek-balik-restorani-4-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-5.webp",
        "thumb": "/img/projeler/incek-balik-restorani-5-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-6.webp",
        "thumb": "/img/projeler/incek-balik-restorani-6-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-7.webp",
        "thumb": "/img/projeler/incek-balik-restorani-7-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/incek-balik-restorani-8.webp",
        "thumb": "/img/projeler/incek-balik-restorani-8-k.webp",
        "render": true
      }
    ],
    "video": null
  },
  {
    "slug": "cafe-roma-via",
    "title": "Cafe Roma Via",
    "location": "Mutlukent",
    "category": "kurumsal",
    "images": [
      {
        "src": "/img/projeler/cafe-roma-via-1.webp",
        "thumb": "/img/projeler/cafe-roma-via-1-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-2.webp",
        "thumb": "/img/projeler/cafe-roma-via-2-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-3.webp",
        "thumb": "/img/projeler/cafe-roma-via-3-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-4.webp",
        "thumb": "/img/projeler/cafe-roma-via-4-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-5.webp",
        "thumb": "/img/projeler/cafe-roma-via-5-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-6.webp",
        "thumb": "/img/projeler/cafe-roma-via-6-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-7.webp",
        "thumb": "/img/projeler/cafe-roma-via-7-k.webp",
        "render": true
      },
      {
        "src": "/img/projeler/cafe-roma-via-8.webp",
        "thumb": "/img/projeler/cafe-roma-via-8-k.webp",
        "render": true
      }
    ],
    "video": null
  }
]
