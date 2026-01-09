"use client"

import Link from "next/link"
import { Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr")
  }

  const navLinks = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#team", label: t("nav.team") },
    { href: "#portfolio", label: t("nav.portfolio") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{ backgroundColor: 'var(--color-background)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="muus.life" width={200} height={70} className="h-16 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-(--color-foreground) opacity-70">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-(--color-accent) transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 ml-4 text-(--color-foreground) cursor-pointer hover:text-(--color-accent) transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{language.toUpperCase()}</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-(--color-foreground) cursor-pointer hover:text-(--color-accent) transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{language.toUpperCase()}</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-(--color-foreground) hover:text-(--color-accent) transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav 
          className="md:hidden border-t border-(--color-border) animate-in slide-in-from-top duration-200"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-(--color-foreground) hover:text-(--color-accent) transition-colors py-2 text-lg font-medium"
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
