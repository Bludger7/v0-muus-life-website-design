// Uretim alanlari model/malzeme galerisi. Kaynak: Drive > Noyer_Home WEBSITE.
// Bunlar proje/teslim fotografi DEGIL; malzeme ve model ornekleridir.
export type GalleryGroup = { material: string; images: { src: string; thumb: string }[] }

export const productionCovers: Record<string, string> = {
  "kitchen": "/img/uretim/mutfak-agt-trendy-panel-1-k.webp",
  "wardrobe": "/img/uretim/gardirop-camli-3-k.webp",
  "living": "/img/uretim/tv-unitesi-model-1-k.webp",
  "bathroom": "/img/uretim/banyo-balon-3-k.webp",
  "antre": "/img/uretim/antre-vestiyer-dresuar-3-k.webp"
}

export const productionGallery: Record<string, GalleryGroup[]> = {
  "kitchen": [
    {
      "material": "AGT Trendy Panel",
      "images": [
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-1.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-2.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-3.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-3-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-4.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-4-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-5.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-5-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-6.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-6-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-7.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-7-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-8.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-8-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-agt-trendy-panel-9.webp",
          "thumb": "/img/uretim/mutfak-agt-trendy-panel-9-k.webp"
        }
      ]
    },
    {
      "material": "Ahşap Kaplama",
      "images": [
        {
          "src": "/img/uretim/mutfak-ahsap-kaplama-1.webp",
          "thumb": "/img/uretim/mutfak-ahsap-kaplama-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-ahsap-kaplama-2.webp",
          "thumb": "/img/uretim/mutfak-ahsap-kaplama-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-ahsap-kaplama-3.webp",
          "thumb": "/img/uretim/mutfak-ahsap-kaplama-3-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-ahsap-kaplama-4.webp",
          "thumb": "/img/uretim/mutfak-ahsap-kaplama-4-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-ahsap-kaplama-5.webp",
          "thumb": "/img/uretim/mutfak-ahsap-kaplama-5-k.webp"
        }
      ]
    },
    {
      "material": "Akrilik",
      "images": [
        {
          "src": "/img/uretim/mutfak-akrilik-1.webp",
          "thumb": "/img/uretim/mutfak-akrilik-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-akrilik-2.webp",
          "thumb": "/img/uretim/mutfak-akrilik-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-akrilik-3.webp",
          "thumb": "/img/uretim/mutfak-akrilik-3-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-akrilik-4.webp",
          "thumb": "/img/uretim/mutfak-akrilik-4-k.webp"
        }
      ]
    },
    {
      "material": "Balon",
      "images": [
        {
          "src": "/img/uretim/mutfak-balon-1.webp",
          "thumb": "/img/uretim/mutfak-balon-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-balon-2.webp",
          "thumb": "/img/uretim/mutfak-balon-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-balon-3.webp",
          "thumb": "/img/uretim/mutfak-balon-3-k.webp"
        }
      ]
    },
    {
      "material": "Highgloss",
      "images": [
        {
          "src": "/img/uretim/mutfak-highgloss-1.webp",
          "thumb": "/img/uretim/mutfak-highgloss-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-2.webp",
          "thumb": "/img/uretim/mutfak-highgloss-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-3.webp",
          "thumb": "/img/uretim/mutfak-highgloss-3-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-4.webp",
          "thumb": "/img/uretim/mutfak-highgloss-4-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-5.webp",
          "thumb": "/img/uretim/mutfak-highgloss-5-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-6.webp",
          "thumb": "/img/uretim/mutfak-highgloss-6-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-highgloss-7.webp",
          "thumb": "/img/uretim/mutfak-highgloss-7-k.webp"
        }
      ]
    },
    {
      "material": "Lake",
      "images": [
        {
          "src": "/img/uretim/mutfak-lake-1.webp",
          "thumb": "/img/uretim/mutfak-lake-1-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-2.webp",
          "thumb": "/img/uretim/mutfak-lake-2-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-3.webp",
          "thumb": "/img/uretim/mutfak-lake-3-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-4.webp",
          "thumb": "/img/uretim/mutfak-lake-4-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-5.webp",
          "thumb": "/img/uretim/mutfak-lake-5-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-6.webp",
          "thumb": "/img/uretim/mutfak-lake-6-k.webp"
        },
        {
          "src": "/img/uretim/mutfak-lake-7.webp",
          "thumb": "/img/uretim/mutfak-lake-7-k.webp"
        }
      ]
    }
  ],
  "wardrobe": [
    {
      "material": "Ahşap Kaplama",
      "images": [
        {
          "src": "/img/uretim/gardirop-ahsap-kaplama-1.webp",
          "thumb": "/img/uretim/gardirop-ahsap-kaplama-1-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-ahsap-kaplama-2.webp",
          "thumb": "/img/uretim/gardirop-ahsap-kaplama-2-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-ahsap-kaplama-3.webp",
          "thumb": "/img/uretim/gardirop-ahsap-kaplama-3-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-ahsap-kaplama-4.webp",
          "thumb": "/img/uretim/gardirop-ahsap-kaplama-4-k.webp"
        }
      ]
    },
    {
      "material": "Balon",
      "images": [
        {
          "src": "/img/uretim/gardirop-balon-1.webp",
          "thumb": "/img/uretim/gardirop-balon-1-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-2.webp",
          "thumb": "/img/uretim/gardirop-balon-2-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-3.webp",
          "thumb": "/img/uretim/gardirop-balon-3-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-4.webp",
          "thumb": "/img/uretim/gardirop-balon-4-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-5.webp",
          "thumb": "/img/uretim/gardirop-balon-5-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-6.webp",
          "thumb": "/img/uretim/gardirop-balon-6-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-7.webp",
          "thumb": "/img/uretim/gardirop-balon-7-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-balon-8.webp",
          "thumb": "/img/uretim/gardirop-balon-8-k.webp"
        }
      ]
    },
    {
      "material": "Camlı",
      "images": [
        {
          "src": "/img/uretim/gardirop-camli-1.webp",
          "thumb": "/img/uretim/gardirop-camli-1-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-2.webp",
          "thumb": "/img/uretim/gardirop-camli-2-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-3.webp",
          "thumb": "/img/uretim/gardirop-camli-3-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-4.webp",
          "thumb": "/img/uretim/gardirop-camli-4-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-5.webp",
          "thumb": "/img/uretim/gardirop-camli-5-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-6.webp",
          "thumb": "/img/uretim/gardirop-camli-6-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-camli-7.webp",
          "thumb": "/img/uretim/gardirop-camli-7-k.webp"
        }
      ]
    },
    {
      "material": "Lake",
      "images": [
        {
          "src": "/img/uretim/gardirop-lake-1.webp",
          "thumb": "/img/uretim/gardirop-lake-1-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-2.webp",
          "thumb": "/img/uretim/gardirop-lake-2-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-3.webp",
          "thumb": "/img/uretim/gardirop-lake-3-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-4.webp",
          "thumb": "/img/uretim/gardirop-lake-4-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-5.webp",
          "thumb": "/img/uretim/gardirop-lake-5-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-6.webp",
          "thumb": "/img/uretim/gardirop-lake-6-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-7.webp",
          "thumb": "/img/uretim/gardirop-lake-7-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-8.webp",
          "thumb": "/img/uretim/gardirop-lake-8-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-9.webp",
          "thumb": "/img/uretim/gardirop-lake-9-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-10.webp",
          "thumb": "/img/uretim/gardirop-lake-10-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-11.webp",
          "thumb": "/img/uretim/gardirop-lake-11-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-12.webp",
          "thumb": "/img/uretim/gardirop-lake-12-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-lake-13.webp",
          "thumb": "/img/uretim/gardirop-lake-13-k.webp"
        }
      ]
    },
    {
      "material": "MDFlam",
      "images": [
        {
          "src": "/img/uretim/gardirop-mdflam-1.webp",
          "thumb": "/img/uretim/gardirop-mdflam-1-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-2.webp",
          "thumb": "/img/uretim/gardirop-mdflam-2-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-3.webp",
          "thumb": "/img/uretim/gardirop-mdflam-3-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-4.webp",
          "thumb": "/img/uretim/gardirop-mdflam-4-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-5.webp",
          "thumb": "/img/uretim/gardirop-mdflam-5-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-6.webp",
          "thumb": "/img/uretim/gardirop-mdflam-6-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-7.webp",
          "thumb": "/img/uretim/gardirop-mdflam-7-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-8.webp",
          "thumb": "/img/uretim/gardirop-mdflam-8-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-9.webp",
          "thumb": "/img/uretim/gardirop-mdflam-9-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-10.webp",
          "thumb": "/img/uretim/gardirop-mdflam-10-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-11.webp",
          "thumb": "/img/uretim/gardirop-mdflam-11-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-12.webp",
          "thumb": "/img/uretim/gardirop-mdflam-12-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-13.webp",
          "thumb": "/img/uretim/gardirop-mdflam-13-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-14.webp",
          "thumb": "/img/uretim/gardirop-mdflam-14-k.webp"
        },
        {
          "src": "/img/uretim/gardirop-mdflam-15.webp",
          "thumb": "/img/uretim/gardirop-mdflam-15-k.webp"
        }
      ]
    }
  ],
  "living": [
    {
      "material": "",
      "images": [
        {
          "src": "/img/uretim/tv-unitesi-model-1.webp",
          "thumb": "/img/uretim/tv-unitesi-model-1-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-2.webp",
          "thumb": "/img/uretim/tv-unitesi-model-2-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-3.webp",
          "thumb": "/img/uretim/tv-unitesi-model-3-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-4.webp",
          "thumb": "/img/uretim/tv-unitesi-model-4-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-5.webp",
          "thumb": "/img/uretim/tv-unitesi-model-5-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-6.webp",
          "thumb": "/img/uretim/tv-unitesi-model-6-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-7.webp",
          "thumb": "/img/uretim/tv-unitesi-model-7-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-8.webp",
          "thumb": "/img/uretim/tv-unitesi-model-8-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-9.webp",
          "thumb": "/img/uretim/tv-unitesi-model-9-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-10.webp",
          "thumb": "/img/uretim/tv-unitesi-model-10-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-11.webp",
          "thumb": "/img/uretim/tv-unitesi-model-11-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-12.webp",
          "thumb": "/img/uretim/tv-unitesi-model-12-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-13.webp",
          "thumb": "/img/uretim/tv-unitesi-model-13-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-14.webp",
          "thumb": "/img/uretim/tv-unitesi-model-14-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-15.webp",
          "thumb": "/img/uretim/tv-unitesi-model-15-k.webp"
        },
        {
          "src": "/img/uretim/tv-unitesi-model-16.webp",
          "thumb": "/img/uretim/tv-unitesi-model-16-k.webp"
        }
      ]
    }
  ],
  "bathroom": [
    {
      "material": "Ahşap Kaplama",
      "images": [
        {
          "src": "/img/uretim/banyo-ahsap-kaplama-1.webp",
          "thumb": "/img/uretim/banyo-ahsap-kaplama-1-k.webp"
        },
        {
          "src": "/img/uretim/banyo-ahsap-kaplama-2.webp",
          "thumb": "/img/uretim/banyo-ahsap-kaplama-2-k.webp"
        },
        {
          "src": "/img/uretim/banyo-ahsap-kaplama-3.webp",
          "thumb": "/img/uretim/banyo-ahsap-kaplama-3-k.webp"
        }
      ]
    },
    {
      "material": "Balon",
      "images": [
        {
          "src": "/img/uretim/banyo-balon-1.webp",
          "thumb": "/img/uretim/banyo-balon-1-k.webp"
        },
        {
          "src": "/img/uretim/banyo-balon-2.webp",
          "thumb": "/img/uretim/banyo-balon-2-k.webp"
        },
        {
          "src": "/img/uretim/banyo-balon-3.webp",
          "thumb": "/img/uretim/banyo-balon-3-k.webp"
        },
        {
          "src": "/img/uretim/banyo-balon-4.webp",
          "thumb": "/img/uretim/banyo-balon-4-k.webp"
        },
        {
          "src": "/img/uretim/banyo-balon-5.webp",
          "thumb": "/img/uretim/banyo-balon-5-k.webp"
        },
        {
          "src": "/img/uretim/banyo-balon-6.webp",
          "thumb": "/img/uretim/banyo-balon-6-k.webp"
        }
      ]
    },
    {
      "material": "Lake",
      "images": [
        {
          "src": "/img/uretim/banyo-lake-1.webp",
          "thumb": "/img/uretim/banyo-lake-1-k.webp"
        },
        {
          "src": "/img/uretim/banyo-lake-2.webp",
          "thumb": "/img/uretim/banyo-lake-2-k.webp"
        },
        {
          "src": "/img/uretim/banyo-lake-3.webp",
          "thumb": "/img/uretim/banyo-lake-3-k.webp"
        },
        {
          "src": "/img/uretim/banyo-lake-4.webp",
          "thumb": "/img/uretim/banyo-lake-4-k.webp"
        },
        {
          "src": "/img/uretim/banyo-lake-5.webp",
          "thumb": "/img/uretim/banyo-lake-5-k.webp"
        },
        {
          "src": "/img/uretim/banyo-lake-6.webp",
          "thumb": "/img/uretim/banyo-lake-6-k.webp"
        }
      ]
    },
    {
      "material": "MDFlam",
      "images": [
        {
          "src": "/img/uretim/banyo-mdflam-1.webp",
          "thumb": "/img/uretim/banyo-mdflam-1-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-2.webp",
          "thumb": "/img/uretim/banyo-mdflam-2-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-3.webp",
          "thumb": "/img/uretim/banyo-mdflam-3-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-4.webp",
          "thumb": "/img/uretim/banyo-mdflam-4-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-5.webp",
          "thumb": "/img/uretim/banyo-mdflam-5-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-6.webp",
          "thumb": "/img/uretim/banyo-mdflam-6-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-7.webp",
          "thumb": "/img/uretim/banyo-mdflam-7-k.webp"
        },
        {
          "src": "/img/uretim/banyo-mdflam-8.webp",
          "thumb": "/img/uretim/banyo-mdflam-8-k.webp"
        }
      ]
    }
  ],
  "antre": [
    {
      "material": "Dresuar",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-2-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-3.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-3-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-4.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-4-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-5.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-5-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-6.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-6-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-7.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-7-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-8.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-8-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-9.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-9-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-10.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-10-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-11.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-11-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-12.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-12-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-13.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-13-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-14.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-14-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-15.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-15-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-16.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-16-k.webp"
        }
      ]
    },
    {
      "material": "Ahşap Kaplama",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-ahsap-kaplama-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-ahsap-kaplama-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-ahsap-kaplama-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-ahsap-kaplama-2-k.webp"
        }
      ]
    },
    {
      "material": "Balon",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-balon-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-balon-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-balon-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-balon-2-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-balon-3.webp",
          "thumb": "/img/uretim/antre-vestiyer-balon-3-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-balon-4.webp",
          "thumb": "/img/uretim/antre-vestiyer-balon-4-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-balon-5.webp",
          "thumb": "/img/uretim/antre-vestiyer-balon-5-k.webp"
        }
      ]
    },
    {
      "material": "Dresuar ve Vestiyer",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-ve-vestiyer-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-ve-vestiyer-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-dresuar-ve-vestiyer-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-dresuar-ve-vestiyer-2-k.webp"
        }
      ]
    },
    {
      "material": "Lake",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-lake-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-lake-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-lake-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-lake-2-k.webp"
        }
      ]
    },
    {
      "material": "MDFlam",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-mdflam-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-mdflam-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-mdflam-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-mdflam-2-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-mdflam-3.webp",
          "thumb": "/img/uretim/antre-vestiyer-mdflam-3-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-mdflam-4.webp",
          "thumb": "/img/uretim/antre-vestiyer-mdflam-4-k.webp"
        }
      ]
    },
    {
      "material": "Oturma Alanlı Vestiyer",
      "images": [
        {
          "src": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-1.webp",
          "thumb": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-1-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-2.webp",
          "thumb": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-2-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-3.webp",
          "thumb": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-3-k.webp"
        },
        {
          "src": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-4.webp",
          "thumb": "/img/uretim/antre-vestiyer-oturma-alanli-vestiyer-4-k.webp"
        }
      ]
    }
  ]
}
