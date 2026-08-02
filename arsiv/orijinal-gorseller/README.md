# Orijinal Görsel Arşivi

Bu klasör, sitede **artık doğrudan kullanılmayan** orijinal fotoğraf dosyalarını saklar.
Dosyalar silinmemiştir; yalnızca herkese açık `public/` alanının dışına taşınmıştır.

## Neden taşındı?

`public/` altındaki her dosya siteyle birlikte yayınlanır ve internetten erişilebilir olur.
Kullanılmayan yüksek çözünürlüklü orijinaller hem gereksiz yayın boyutu oluşturuyor hem de
istenmeden dışarıya açık kalıyordu.

## Klasörler

- `images/` — eski `public/images/` klasörünün tamamı (85 dosya)
- `public-root/` — `public/` kökündeki stok/AI görünümlü ve kullanılmayan görseller (10 dosya)

## Yayında ne kullanılıyor?

Sitede kullanılan görseller `public/img/` altındaki optimize edilmiş WebP sürümlerdir:

- `<ad>.webp` — büyük sürüm (lightbox, en fazla ~1600 px uzun kenar)
- `<ad>-thumb.webp` — kart/thumbnail sürümü (~900 px)

Hangi fotoğrafın hangi kategoriye ve alt metne karşılık geldiği `lib/projects.ts`
dosyasında tanımlıdır.

## Yeni bir fotoğraf yayına almak için

1. Orijinali bu arşivden (veya yeni çekimden) alın.
2. `public/img/` altına URL dostu adla (küçük harf, tireli, Türkçe karaktersiz)
   WebP olarak ekleyin: büyük + `-thumb` sürüm.
3. `lib/projects.ts` içine kategori, TR/EN alt metin ve sıra bilgisiyle kaydını girin.

> Not: Arşivdeki bazı dosyalar ekip fotoğrafı veya kişisel içerik olabilir; paylaşmadan
> önce kontrol edin.
