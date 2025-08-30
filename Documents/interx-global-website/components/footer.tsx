'use client'

import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              inter<span className="text-secondary">X</span> Global
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              {t('footer.tagline')}
            </p>
            <p className="text-sm text-muted-foreground">{t('footer.company')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('footer.services.cross_cultural')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('footer.services.workshops')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('footer.services.speaking')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t('footer.services.coaching')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t('footer.company.about')}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">
                  {t('footer.company.team')}
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-primary transition-colors">
                  {t('footer.company.media')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  {t('footer.company.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
