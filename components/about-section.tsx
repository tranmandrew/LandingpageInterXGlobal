'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            About InterX Global
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            The world is growing smaller. We find ourselves in closer contact with colleagues, partners, clients and
            suppliers from diverse cultures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">{t('about.small.world.title')}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t('about.small.world.para1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.small.world.para2')}
            </p>
          </div>
          <div className="relative">
            <img
              src="/diverse-team-collaboration.png"
              alt="Diverse team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">{t('about.competence.title')}</h3>
            <p className="text-center text-foreground/80 mb-8">
              {t('about.competence.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{t('about.competence.understanding')}</h4>
                <p className="text-sm text-foreground/70">{t('about.competence.understanding.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{t('about.competence.mindset')}</h4>
                <p className="text-sm text-foreground/70">{t('about.competence.mindset.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{t('about.competence.skills')}</h4>
                <p className="text-sm text-foreground/70">{t('about.competence.skills.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">{t('about.competence.knowledge')}</h4>
                <p className="text-sm text-foreground/70">{t('about.competence.knowledge.desc')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">{t('about.philosophy.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  {t('about.philosophy.point1')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{t('about.philosophy.point2')}</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  {t('about.philosophy.point3')}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  {t('about.philosophy.point4')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  {t('about.philosophy.point5')}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">
                  {t('about.philosophy.point6')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
