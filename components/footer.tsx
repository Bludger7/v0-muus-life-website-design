"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { PHONE_PRIMARY_DISPLAY, PHONE_PRIMARY_TEL, PHONE_SECONDARY_DISPLAY, PHONE_SECONDARY_TEL } from "@/lib/contact-info"
import { trackPhoneClick } from "@/lib/analytics"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)] py-12 md:py-16 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Noyer Home</h3>
            <p className="text-[var(--color-muted-foreground)] text-sm md:text-base">{t("footer.tagline")}</p>
            <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--color-muted-foreground)]">
              <span>Ankara, Türkiye</span>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-semibold text-base md:text-lg">{t("footer.quickLinks")}</h4>
            <nav className="flex flex-col space-y-2 text-[var(--color-muted-foreground)] text-sm md:text-base">
              <Link href="/hizmetler" className="hover:text-[var(--color-background)] transition-colors">
                {t("nav.services")}
              </Link>
              {/* TUR 2A: /projeler ve /kurumsal-projeler baglantilari, proje
                  gorselleri dogrulanana kadar cikarildi. Tur 2B'de geri gelecek. */}
              <Link href="/hakkimizda" className="hover:text-white transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="/iletisim" className="hover:text-white transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
          {/* Address */}
          <div className="space-y-3 md:space-y-4">
            <h4 className="font-semibold text-base md:text-lg">{t("footer.contact")}</h4>
            <div className="space-y-1 text-[var(--color-muted-foreground)] text-sm md:text-base">
              <p>Şehit Osman Avcı Mah. Kaplan Cad. No:11</p>
              <p>Alpak&Neva ARMONIA Sitesi C Blok No:9, 06824</p>
              <p>Etimesgut/Ankara</p>
              <p className="mt-2 pt-2 border-t border-[var(--color-border)] font-mono text-xs md:text-sm">
                Tel:{" "}
                <a
                  href={`tel:${PHONE_PRIMARY_TEL}`}
                  onClick={() => trackPhoneClick("footer", PHONE_PRIMARY_TEL)}
                  className="hover:text-[var(--color-background)] transition-colors"
                >
                  {PHONE_PRIMARY_DISPLAY}
                </a>
                {" · "}
                <a
                  href={`tel:${PHONE_SECONDARY_TEL}`}
                  onClick={() => trackPhoneClick("footer", PHONE_SECONDARY_TEL)}
                  className="hover:text-[var(--color-background)] transition-colors"
                >
                  {PHONE_SECONDARY_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-muted-foreground)] text-xs md:text-sm">
          <p>© 2026 Noyer Home. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
