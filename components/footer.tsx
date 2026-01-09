"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)] py-16 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">muus.life</h3>
            <p className="text-[var(--color-muted-foreground)]">{t("footer.tagline")}</p>
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
              <span>Ankara, Türkiye</span>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t("footer.quickLinks")}</h4>
            <nav className="flex flex-col space-y-2 text-[var(--color-muted-foreground)]">
              <Link href="#about" className="hover:text-[var(--color-background)] transition-colors">
                {t("nav.about")}
              </Link>
              <Link href="#team" className="hover:text-white transition-colors">
                {t("nav.team")}
              </Link>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                {t("nav.portfolio")}
              </Link>
              <Link href="/blog" className="hover:text-white transition-colors">
                {t("footer.blog")}
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t("footer.contact")}</h4>
            <div className="space-y-1 text-[var(--color-muted-foreground)]">
              <p>Şehit Osman Avcı Mah. Kaplan Cad. No:11</p>
              <p>Alpak&Neva ARMONIA Sitesi C Blok No:9, 06824</p>
              <p>Etimesgut/Ankara</p>
              <p className="mt-2 pt-2 border-t border-[var(--color-border)] font-mono text-sm">Tel: 0501 530 77 36</p>
            </div>
          </div>

          {/* Quick Links */}

        </div>

        <div className="pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-muted-foreground)] text-sm">
          <p>© 2025 muus.life Design. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
