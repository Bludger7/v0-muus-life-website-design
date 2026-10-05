import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { SITE_URL, EMAIL, ADDRESS, PHONE_PRIMARY_DISPLAY } from "@/lib/contact-info"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Noyer Home",
  description: "Noyer Home kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: `${SITE_URL}/kvkk-aydinlatma/` },
}

export default function Page() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updated="5 Ekim 2026">
      <p>
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, Noyer Home olarak
        web sitemiz, teklif formumuz, WhatsApp, telefon ve e-posta kanallarımız üzerinden elde ettiğimiz kişisel
        verilerinizin hangi amaçlarla ve nasıl işlendiği konusunda sizi bilgilendirmek için hazırlanmıştır.
      </p>
      <h2>Veri sorumlusu</h2>
      <p>
        Noyer Home — {ADDRESS.street}, {ADDRESS.postalCode} {ADDRESS.district}/{ADDRESS.city}.
        E-posta: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> · Telefon: {PHONE_PRIMARY_DISPLAY}
      </p>
      <h2>İşlenen kişisel veriler</h2>
      <ul>
        <li>Kimlik ve iletişim: ad soyad, telefon numarası, e-posta adresi</li>
        <li>Talep bilgileri: mobilya türü, konum/semt, yaklaşık ölçü, mesajınız ve paylaştığınız mekân fotoğrafları</li>
        <li>Keşif ve sözleşme süreci: adres, ölçü ve proje bilgileri</li>
        <li>Site kullanımı: çerez onayı verdiyseniz anonimleştirilmiş ziyaret istatistikleri (Google Analytics)</li>
      </ul>
      <h2>İşleme amaçları ve hukuki sebepler</h2>
      <ul>
        <li>Teklif talebinizi değerlendirmek, sizinle iletişime geçmek ve keşif planlamak — bir sözleşmenin kurulmasıyla doğrudan ilgili olması (KVKK m.5/2-c)</li>
        <li>Üretim, montaj, garanti ve satış sonrası hizmetleri yürütmek — sözleşmenin ifası (m.5/2-c) ve hukuki yükümlülüklerin yerine getirilmesi (m.5/2-ç)</li>
        <li>Fatura ve muhasebe kayıtları — hukuki yükümlülük (m.5/2-ç)</li>
        <li>Site istatistikleri — yalnızca çerez bandında verdiğiniz açık rıza ile (m.5/1)</li>
      </ul>
      <h2>Toplama yöntemi</h2>
      <p>Verileriniz web sitemizdeki form, WhatsApp, telefon, e-posta ve yüz yüze görüşmeler aracılığıyla elektronik veya fiziki ortamda toplanır.</p>
      <h2>Aktarım</h2>
      <p>
        Verileriniz yalnızca yukarıdaki amaçlarla sınırlı olarak; iş birliği yaptığımız uygulama ekipleri, muhasebe ve
        hukuk danışmanlarımız ile yetkili kamu kurumlarına aktarılabilir. Teklif mesajlaşmalarında kullanılan WhatsApp
        ve site istatistikleri için kullanılan Google Analytics hizmetleri yurt dışında sunucu barındırabilir; bu
        aktarımlar KVKK m.9 kapsamındaki şartlara uygun yürütülür.
      </p>
      <h2>Saklama süresi</h2>
      <p>Sözleşmeye dönüşmeyen teklif talepleri en fazla 1 yıl, sözleşme ve fatura kayıtları ilgili mevzuatta öngörülen süreler boyunca saklanır; süre sonunda silinir veya anonimleştirilir.</p>
      <h2>Haklarınız</h2>
      <p>
        KVKK m.11 uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya
        silinmesini isteme, aktarıldığı üçüncü kişileri bilme, itiraz etme ve zararın giderilmesini talep etme
        haklarına sahipsiniz. Başvurularınızı <a href={`mailto:${EMAIL}`}>{EMAIL}</a> adresine iletebilirsiniz;
        en geç 30 gün içinde yanıtlanır.
      </p>
    </LegalPage>
  )
}
