import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-background)] py-16 border-t border-[var(--color-border)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">muus.life</h3>
            <p className="text-[var(--color-muted-foreground)]">Mobilya Üretim & Tasarım</p>
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted-foreground)]">
              <span>Ankara, Türkiye</span>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">İletişim</h4>
            <div className="space-y-1 text-[var(--color-muted-foreground)]">
              <p>Şehit Osman Avcı, Kaplan Cd.</p>
              <p>no:11 No 9, 06824</p>
              <p>Etimesgut/Ankara</p>
              <p className="mt-2 pt-2 border-t border-[var(--color-border)] font-mono text-sm">Tel: 0501 530 77 36</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Hızlı Bağlantılar</h4>
            <nav className="flex flex-col space-y-2 text-[var(--color-muted-foreground)]">
              <Link href="#about" className="hover:text-[var(--color-background)] transition-colors">
                Hakkımızda
              </Link>
              <Link href="#portfolio" className="hover:text-white transition-colors">
                Portfolyo
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                İletişim
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] text-center text-[var(--color-muted-foreground)] text-sm">
          <p>© 2025 muus.life Design. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
