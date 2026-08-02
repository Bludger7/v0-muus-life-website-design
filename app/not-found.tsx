import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Noyer Home",
  description: "Aradığınız sayfa bulunamadı.",
  robots: { index: false, follow: true },
}

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler/", label: "Hizmetler" },
  { href: "/projeler/", label: "Projeler" },
  { href: "/kurumsal-projeler/", label: "Kurumsal Projeler" },
  { href: "/iletisim/", label: "İletişim" },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] flex flex-col items-center justify-center px-4 py-16 text-center">
      <Link href="/" className="mb-8 inline-flex">
        <Image src="/logo.png" alt="Noyer Home" width={160} height={54} className="h-11 w-auto" priority />
      </Link>

      <p className="text-5xl md:text-6xl font-bold text-[#704f36]">404</p>
      <h1 className="mt-4 text-xl md:text-2xl font-bold text-slate-900">Aradığınız sayfa bulunamadı</h1>
      <p className="mt-3 max-w-md text-sm md:text-base text-slate-600 leading-relaxed">
        Sayfa taşınmış veya adres hatalı yazılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
      </p>

      <nav className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
