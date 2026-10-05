import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/legal-page"
import { SITE_URL, EMAIL } from "@/lib/contact-info"

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Noyer Home",
  description: "Noyer Home web sitesi gizlilik politikası.",
  alternates: { canonical: `${SITE_URL}/gizlilik/` },
}

export default function Page() {
  return (
    <LegalPage title="Gizlilik Politikası" updated="5 Ekim 2026">
      <p>Noyer Home olarak web sitemizi ziyaret eden ve bize teklif talebi ileten kişilerin gizliliğine önem veriyoruz.</p>
      <h2>Topladığımız bilgiler</h2>
      <p>Yalnızca sizin bize ilettiğiniz bilgileri (ad, telefon, e-posta, talep detayları) ve çerez onayı verdiyseniz anonim ziyaret istatistiklerini topluyoruz. Sitede üyelik, ödeme veya kart bilgisi alınmaz.</p>
      <h2>Bilgileri nasıl kullanıyoruz</h2>
      <p>Bilgilerinizi yalnızca teklif hazırlamak, keşif planlamak ve size ulaşmak için kullanırız. Bilgileriniz satılmaz, reklam amacıyla üçüncü kişilerle paylaşılmaz.</p>
      <h2>Üçüncü taraf hizmetler</h2>
      <ul>
        <li>WhatsApp — teklif mesajlaşması (Meta)</li>
        <li>Google Analytics — yalnızca çerez onayı verirseniz, anonim istatistik</li>
        <li>Firebase Hosting — sitenin barındırılması (Google)</li>
      </ul>
      <p>Ayrıntılar için <Link href="/kvkk-aydinlatma/">KVKK Aydınlatma Metni</Link> ve <Link href="/cerez-politikasi/">Çerez Politikası</Link> sayfalarına bakabilirsiniz.</p>
      <h2>İletişim</h2>
      <p>Gizlilikle ilgili sorularınız için: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </LegalPage>
  )
}
