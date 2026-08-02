# Doğrulama Bekleyen Proje Görselleri (Tur 2A)

Bu klasördeki **90 optimize WebP dosyası**, sitede yayınlanmak üzere hazırlanmış
ancak **gerçek uygulama fotoğrafı mı yoksa tasarım görselleştirmesi (render) mi
olduğu doğrulanmamış** görsellerdir.

Doğrulanmamış bir görseli "tamamladığımız proje" gibi yayınlamamak için tamamı
`public/img/` klasöründen buraya taşınmıştır. **Hiçbiri silinmedi.**

## Neden public dışına alındı?

`public/` altındaki her dosya siteyle birlikte yayınlanır ve doğrudan URL ile
erişilebilir olur. Koddan referansı kaldırmak tek başına yeterli değildir —
dosya yine internetten açılabilir. Bu yüzden dosyalar da taşındı.

## İçerik

| Kategori | Dosya (büyük + thumb) |
|---|---|
| mutfak | 4 görsel |
| giyinme | 3 görsel |
| yasam | 4 görsel |
| antre | 3 görsel |
| ofis | 13 görsel |
| magaza | 7 görsel |
| restoran | 11 görsel |

Toplam 45 görselin `<ad>.webp` (≤1600 px) ve `<ad>-thumb.webp` (~900 px)
sürümleri = 90 dosya.

> Bunların **24 tanesi** `/projeler` galerisinde, **30 tanesi**
> `/kurumsal-projeler` sayfasında yayındaydı (bir kısmı ortak).
> Numaralı listesi için kontakt föye bakın.

## Ek olarak taşınanlar (2. aşama)

| Dosya | Nerede kullanılıyordu | Yerine ne kondu |
|---|---|---|
| `slider-1..5.webp` | Ana sayfa hero arka planı | Proje fotoğrafı içermeyen, tamamen CSS ile kurulmuş marka arka planı (antrasit zemin + ceviz ışık lekeleri + lamel dokusu + logo filigranı) |
| `atolye-uretim.webp` | Hakkımızda sayfası | **Hiçbir görsel konmadı.** Bölüm tek sütunlu, görselsiz ve dengeli düzene alındı |

`atolye-uretim.webp` kaynağı `modern-furniture-production-workshop.jpg` idi ve alt
metni "Modern Mobilya Üretim Atölyesi" iddiasını taşıyordu; görselin gerçekten
Noyer Home atölyesine ait olduğu doğrulanmadığı için kaldırıldı.

## public/img içinde KALANLAR

Yalnızca **doğrulanmış ekip fotoğrafları**: `ekip-*.webp` (6 dosya).
Bunlar müşteri projesi değildir ve yayında kalır.

## Tur 2B'de yapılacak

1. Onaylanan görselleri buradan `public/img/` klasörüne geri taşı
2. `lib/projects.ts` içindeki `projects` dizisine kayıtlarını ekle
3. `/projeler` ve `/kurumsal-projeler` sayfalarında galeriyi geri aç
   (`<ProjectGallery />` ve `<OfficeProjects />` bileşenleri repoda duruyor)
4. Menü + footer bağlantılarını, sitemap kayıtlarını geri ekle, `noindex` kaldır
5. Ana sayfada `<Portfolio />` vitrinini geri aç
6. OG görselini isteğe bağlı olarak doğrulanmış bir fotoğrafla değiştir
7. `vercel.json` içindeki `_disabled_redirects` → `redirects` olarak etkinleştir
