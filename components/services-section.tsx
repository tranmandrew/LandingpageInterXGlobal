'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Mic, UserCheck, Building, GraduationCap, Home, Languages } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const services = [
  {
    icon: Users,
    titleKey: "service.cross_cultural_training",
    descriptionKey: "service.cross_cultural_training.desc",
    features: ["service.feature.cultural_adaptation", "service.feature.integration_tips", "service.feature.ongoing_support"],
  },
  {
    icon: MessageSquare,
    titleKey: "service.intercultural_workshops",
    descriptionKey: "service.intercultural_workshops.desc",
    features: ["service.feature.interactive_workshops", "service.feature.real_world_scenarios", "service.feature.team_building"],
  },
  {
    icon: Mic,
    titleKey: "service.speaking_engagements",
    descriptionKey: "service.speaking_engagements.desc",
    features: ["service.feature.keynote_presentations", "service.feature.conference_talks", "service.feature.corporate_events"],
  },
  {
    icon: UserCheck,
    titleKey: "service.business_coaching",
    descriptionKey: "service.business_coaching.desc",
    features: ["service.feature.one_on_one_coaching", "service.feature.performance_improvement", "service.feature.relationship_building"],
  },
  {
    icon: Building,
    titleKey: "service.competence_consulting",
    descriptionKey: "service.competence_consulting.desc",
    features: ["service.feature.policy_development", "service.feature.cultural_assessment", "service.feature.strategic_planning"],
  },
  {
    icon: GraduationCap,
    titleKey: "service.study_abroad",
    descriptionKey: "service.study_abroad.desc",
    features: ["service.feature.academic_preparation", "service.feature.cultural_orientation", "service.feature.student_support"],
  },
  {
    icon: Home,
    titleKey: "service.immigration",
    descriptionKey: "service.immigration.desc",
    features: ["service.feature.family_integration", "service.feature.community_connection", "service.feature.cultural_navigation"],
  },
  {
    icon: Languages,
    titleKey: "service.language_training",
    descriptionKey: "service.language_training.desc",
    features: ["service.feature.professional_instruction", "service.feature.cultural_context", "service.feature.business_communication"],
  },
]

export function ServicesSection() {
  const { t } = useLanguage()
  
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)] text-white">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 text-balance max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700 flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-balance text-white">{t(service.titleKey)}</CardTitle>
                <CardDescription className="text-balance text-gray-300">{t(service.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-4 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {t(feature)}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full bg-gray-700 text-white hover:bg-primary/20 border-2 border-gray-600 hover:border-primary/50 transition-all duration-300">
                  {t('services.cta')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
