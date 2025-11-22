import Link from "next/link"
import { Globe } from "lucide-react"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Muus.life
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#home" className="hover:text-slate-900 transition-colors">
            Ana Sayfa
          </Link>
          <Link href="#about" className="hover:text-slate-900 transition-colors">
            Hakkımızda
          </Link>
          <Link href="#portfolio" className="hover:text-slate-900 transition-colors">
            Portfolyo
          </Link>
          <Link href="#contact" className="hover:text-slate-900 transition-colors">
            İletişim
          </Link>
          <div className="flex items-center gap-1.5 ml-4 text-slate-900 cursor-pointer hover:opacity-80">
            <Globe className="w-4 h-4" />
            <span>TR</span>
          </div>
        </nav>

        {/* Mobile Menu Toggle would go here - omitting for simplicity based on screenshots */}
      </div>
    </header>
  )
}
