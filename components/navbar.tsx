"use client"

import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/hizmetler", label: t("nav.services") },
    { href: "/urunler", label: t("nav.products") },
    { href: "/ofis-calismalari", label: t("nav.office") },
    { href: "/hakkimizda", label: t("nav.about") },
    { href: "/iletisim", label: t("nav.contact") },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "backdrop-blur-md shadow-sm" 
          : "backdrop-blur-sm"
      }`}
      style={{ backgroundColor: scrolled ? 'var(--color-background)' : 'rgba(250, 249, 247, 0.9)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Noyer Home" width={140} height={48} className="h-9 md:h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-medium text-(--color-foreground)">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive(link.href) 
                  ? "bg-slate-900 text-white" 
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 ml-2 px-3 py-2 rounded-md text-slate-700 cursor-pointer hover:bg-slate-100 transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold">{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-slate-700 cursor-pointer hover:text-slate-900 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-semibold">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav 
          className="lg:hidden border-t border-slate-200 animate-in slide-in-from-top duration-200"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
