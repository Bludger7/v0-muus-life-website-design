import Link from "next/link"
import { Globe } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#d4d3d0] transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Muus.life" width={120} height={40} className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#0F1E2E]/70">
          <Link href="#home" className="hover:text-[#A34A1B] transition-colors">
            Ana Sayfa
          </Link>
          <Link href="#about" className="hover:text-[#A34A1B] transition-colors">
            Hakkımızda
          </Link>
          <Link href="#services" className="hover:text-[#A34A1B] transition-colors">
            Hizmetler
          </Link>
          <Link href="#team" className="hover:text-[#A34A1B] transition-colors">
            Ekibimiz
          </Link>
          <Link href="#portfolio" className="hover:text-[#A34A1B] transition-colors">
            Portfolyo
          </Link>
          <Link href="#contact" className="hover:text-[#A34A1B] transition-colors">
            İletişim
          </Link>
          <div className="flex items-center gap-1.5 ml-4 text-[#0F1E2E] cursor-pointer hover:text-[#A34A1B]">
            <Globe className="w-4 h-4" />
            <span>TR</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
