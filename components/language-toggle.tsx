'use client'

import { useLanguage } from '@/contexts/language-context'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="relative group">
      <button
        onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 border border-primary/20"
        aria-label={`Switch to ${language === 'en' ? 'Vietnamese' : 'English'}`}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {language === 'en' ? 'VI' : 'EN'}
        </span>
      </button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {t(`language.${language === 'en' ? 'vi' : 'en'}`)}
      </div>
    </div>
  )
}
