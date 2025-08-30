'use client'

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function TeamSection() {
  const { t } = useLanguage()
  return (
    <section id="team" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="/JohnWebsitePic1.jpg"
                    alt="John Knipfing"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('team.member.john.name')}</h3>
                  <p className="text-secondary font-semibold mb-4">{t('team.member.john.role')}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t('team.member.john.bio1')}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t('team.member.john.bio2')}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    <p>{t('team.member.john.education1')}</p>
                    <p>{t('team.member.john.education2')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="/LamTranPic1.png" alt="Lam Tran" className="w-full h-64 md:h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-primary">{t('team.member.lam.name')}</h3>
                  <p className="text-secondary font-semibold mb-4">{t('team.member.lam.role')}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t('team.member.lam.bio1')}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {t('team.member.lam.bio2')}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t('team.member.lam.bio3')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
