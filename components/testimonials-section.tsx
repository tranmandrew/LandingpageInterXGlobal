'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
  {
    nameKey: "testimonial.client1.name",
    roleKey: "testimonial.client1.role",
    companyKey: "testimonial.client1.company",
    textKey: "testimonial.client1.text",
  },
  {
    nameKey: "testimonial.client2.name",
    roleKey: "testimonial.client2.role", 
    companyKey: "testimonial.client2.company",
    textKey: "testimonial.client2.text",
  },
]

export function TestimonialsSection() {
  const { t } = useLanguage()
  
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)] text-white">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-gray-800 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg text-gray-300 leading-relaxed italic">
                    "{t(testimonial.textKey)}"
                  </blockquote>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold text-lg">
                        {t(testimonial.nameKey).charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {t(testimonial.nameKey)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t(testimonial.roleKey)} • {t(testimonial.companyKey)}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}