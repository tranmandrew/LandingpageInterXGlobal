'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { VideoSection } from "./video-section"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20"
    >
      <div className="absolute inset-0 bg-[url('/diverse-business-professionals-in-meeting.png')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">


        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
          <span className="font-[family-name:var(--font-playfair)] text-foreground">{t('hero.title.building')}</span>
          <br />
          <span className="text-primary">{t('hero.title.across')}</span>
        </h1>
        
        <VideoSection />
        
        <p className="text-xl md:text-2xl text-foreground/90 text-balance mb-6 leading-relaxed">
          {t('hero.subtitle')}
        </p>



        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {t('hero.cta.explore')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent hover:bg-primary/5 border-2">
            {t('hero.cta.watch')}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-foreground/70">
          <span>{t('hero.experience')}</span>
        </div>
      </div>
    </section>
  )
}
