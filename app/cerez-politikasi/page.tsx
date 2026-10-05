import type { Metadata } from "next"
import { LegalPage } from "@/components/legal-page"
import { CookieSettingsButton } from "@/components/cookie-consent"
import { SITE_URL } from "@/lib/contact-info"

export const metadata: Metadata = {
  title: "Çerez Politikası | Noyer Home",
  description: "Noyer Home web sitesinde kullanılan çerezler.",
  alternates: { canonical: `${SITE_URL}/cerez-politikasi/` },
}

export default function Page() {
  return (
    <LegalPage title="Çerez Politikası" updated="5 Ekim 2026">
      <p>Çerezler, ziyaret ettiğiniz sitenin tarayıcınıza kaydettiği küçük metin dosyalarıdır.</p>
      <h2>Kullandığımız çerezler</h2>
      <ul>
        <li><strong>Zorunlu:</strong> çerez tercihinizin hatırlanması. Bu kayıt tarayıcınızda tutulur ve onay gerektirmez.</li>
        <li><strong>Analitik (onaya bağlı):</strong> Google Analytics (_ga, _ga_*). Sayfa ziyaretlerini anonim olarak ölçer. Yalnızca &quot;Kabul et&quot; derseniz çalışır.</li>
      </ul>
      <p>Reklam veya yeniden pazarlama çerezi kullanmıyoruz.</p>
      <h2>Tercihinizi değiştirme</h2>
      <p>Verdiğiniz onayı istediğiniz zaman geri alabilir veya değiştirebilirsiniz:</p>
      <CookieSettingsButton />
      <p className="mt-4">Tarayıcınızın ayarlarından da çerezleri silebilir veya engelleyebilirsiniz.</p>
    </LegalPage>
  )
}
