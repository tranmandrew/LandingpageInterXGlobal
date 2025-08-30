import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react"

export function UrgencySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50 border-y border-orange-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-200">
            <Clock className="w-4 h-4 animate-pulse" />
            Limited Time Offer
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            🎯 <span className="text-red-600">Free Cultural Assessment</span> for First 10 Companies
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get a comprehensive analysis of your team's intercultural competence. 
            <span className="font-semibold text-red-600"> Only 3 spots remaining this month!</span>
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">45-minute consultation</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Custom action plan</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">No obligation</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Claim Free Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-4 h-4" />
              <span>Join 47 companies who've already claimed their assessment</span>
            </div>
            <div className="text-xs text-gray-500">
              *Limited to companies with 50+ employees. Offer expires in 7 days.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
