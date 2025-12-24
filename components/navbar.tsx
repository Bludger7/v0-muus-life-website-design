import Link from "next/link"
import { Globe } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{ backgroundColor: 'var(--color-background)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="muus.life" width={120} height={40} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-(--color-foreground) opacity-70">
          <Link href="#home" className="hover:text-(--color-accent) transition-colors">
            Ana Sayfa
          </Link>
          <Link href="#about" className="hover:text-(--color-accent) transition-colors">
            Hakkımızda
          </Link>
          <Link href="#services" className="hover:text-(--color-accent) transition-colors">
            Hizmetler
          </Link>
          <Link href="#team" className="hover:text-(--color-accent) transition-colors">
            Ekibimiz
          </Link>
          <Link href="#portfolio" className="hover:text-(--color-accent) transition-colors">
            Portfolyo
          </Link>
          <Link href="#contact" className="hover:text-(--color-accent) transition-colors">
            İletişim
          </Link>
          <div className="flex items-center gap-1.5 ml-4 text-(--color-foreground) cursor-pointer hover:text-(--color-accent)">
            <Globe className="w-4 h-4" />
            <span>TR</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
