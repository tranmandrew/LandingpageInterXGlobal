import { Star, Quote, TrendingUp, Users, Globe, Award } from "lucide-react"

const testimonials = [
  {
    quote: "InterX Global transformed our international team's communication. Our productivity increased by 40% within 3 months.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechCorp International",
    rating: 5
  },
  {
    quote: "The cultural training program exceeded our expectations. Our expat employees now feel confident and integrated.",
    author: "Marcus Rodriguez",
    role: "HR Director",
    company: "Global Manufacturing Co.",
    rating: 5
  },
  {
    quote: "Professional, engaging, and results-driven. InterX Global helped us build a truly inclusive workplace culture.",
    author: "Dr. Emily Watson",
    role: "CEO",
    company: "Innovation Labs",
    rating: 5
  }
]

const stats = [
  { icon: Users, value: "500+", label: "Companies Served" },
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
  { icon: Award, value: "15+", label: "Years Experience" }
]

export function SocialProofSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary/20">
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            Don't just take our word for it. Here's what global leaders say about our intercultural training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border/50 pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-primary font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Global Team?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 500+ companies that have already improved their intercultural competence and global success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
