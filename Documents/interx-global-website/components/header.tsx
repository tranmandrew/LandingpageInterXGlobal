"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { ThemeToggle } from "./theme-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center">
                <div className="p-4 overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dxnohgxkg/image/upload/v1756549045/White-No_BackgroundInterX_gg03px.png" 
                    alt="InterX Global Logo" 
                    className="h-28 w-auto max-w-full"
                  />
                </div>
              </a>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">
                {t('nav.team')}
              </a>
              <a href="#media" className="text-foreground hover:text-primary transition-colors">
                {t('nav.media')}
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <div className="flex items-center gap-4 px-3 py-2 border-b border-border mb-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </a>
              <a href="#team" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.team')}
              </a>
              <a href="#media" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.media')}
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
