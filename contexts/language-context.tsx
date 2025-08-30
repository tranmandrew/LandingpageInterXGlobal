'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'vi'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved language preference
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'en' || savedLang === 'vi')) {
      setLanguage(savedLang)
    }
  }, [])

  // Return a loading state until hydration is complete
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ 
        language: 'en', 
        setLanguage: () => {}, 
        t: (key: string) => translations['en'][key] || key 
      }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const translation = translations[language]?.[key]
    return translation || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Translation data
const translations = {
  en: {
    // Hero Section
    'hero.title.building': 'Building Bridges',
    'hero.title.across': 'Across Cultures',
    'hero.subtitle': 'Empowering global success through intercultural competence training, cross-cultural consulting, and transformative speaking engagements.',
    'hero.cta.explore': 'Explore Our Services',
    'hero.cta.watch': 'Watch Our Story',
    'hero.experience': '15+ Years Experience',
    
    // Services Section
    'services.title': 'Our Services',
    'services.description': 'The process of developing intercultural competence differs from group to group and person to person. InterX Global can draw from several programs to assemble solution packages for our clients.',
    'services.cta': 'Get Started',
    
    // Service Names
    'service.cross_cultural_training': 'Cross-cultural Training Programs',
    'service.intercultural_workshops': 'Intercultural Training Workshops',
    'service.speaking_engagements': 'Speaking Engagements',
    'service.business_coaching': 'Intercultural Business Coaching',
    'service.competence_consulting': 'Intercultural Competence Consulting',
    'service.study_abroad': 'Cross-cultural Training for Study Abroad',
    'service.immigration': 'Cross-cultural Training for Immigration',
    'service.language_training': 'Language Training',
    
    // Service Descriptions
    'service.cross_cultural_training.desc': 'Designed to ensure expats get a head start adapting to the new culture',
    'service.intercultural_workshops.desc': 'Enables associates to interact effectively with colleagues, clients and suppliers, across cultures',
    'service.speaking_engagements.desc': 'A cost effective method of introducing intercultural theory and practice to large groups',
    'service.business_coaching.desc': 'Specific culture-based issues can affect performance or business relationships',
    'service.competence_consulting.desc': 'Shaping corporate culture and policies toward developing an interculturally competent organization',
    'service.study_abroad.desc': 'Studying abroad requires not only academic preparation, but cultural readiness as well',
    'service.immigration.desc': 'The greatest challenge for immigrating families is adapting to the culture',
    'service.language_training.desc': 'Language Learning opens doors to cultural understanding and earns respect',
    
    // Service Features
    'service.feature.cultural_adaptation': 'Cultural adaptation strategies',
    'service.feature.integration_tips': 'Practical integration tips',
    'service.feature.ongoing_support': 'Ongoing support',
    'service.feature.interactive_workshops': 'Interactive workshops',
    'service.feature.real_world_scenarios': 'Real-world scenarios',
    'service.feature.team_building': 'Team building exercises',
    'service.feature.keynote_presentations': 'Keynote presentations',
    'service.feature.conference_talks': 'Conference talks',
    'service.feature.corporate_events': 'Corporate events',
    'service.feature.one_on_one_coaching': 'One-on-one coaching',
    'service.feature.performance_improvement': 'Performance improvement',
    'service.feature.relationship_building': 'Relationship building',
    'service.feature.policy_development': 'Policy development',
    'service.feature.cultural_assessment': 'Cultural assessment',
    'service.feature.strategic_planning': 'Strategic planning',
    'service.feature.academic_preparation': 'Academic preparation',
    'service.feature.cultural_orientation': 'Cultural orientation',
    'service.feature.student_support': 'Student support',
    'service.feature.family_integration': 'Family integration',
    'service.feature.community_connection': 'Community connection',
    'service.feature.cultural_navigation': 'Cultural navigation',
    'service.feature.professional_instruction': 'Professional instruction',
    'service.feature.cultural_context': 'Cultural context',
    'service.feature.business_communication': 'Business communication',
    
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.media': 'Media',
    'nav.contact': 'Contact',
    
    // Language Toggle
    'language.en': 'English',
    'language.vi': 'Tiếng Việt',
    
    // About Section
    'about.title': 'About InterX Global',
    'about.description': 'The world is growing smaller. We find ourselves in closer contact with colleagues, partners, clients and suppliers from diverse cultures.',
    'about.small.world.title': "It's a Small (Complex) World",
    'about.small.world.para1': 'Increasingly, we find ourselves in closer and more crucial contact with colleagues, partners, clients and suppliers from diverse cultures. We behave kindly, but misunderstandings, conflict and confusion still affect our international dealings, and our abilities to succeed. Why?',
    'about.small.world.para2': 'People from different cultures have different values, beliefs and thought patterns. Merely behaving kindly does not help when behaviors are interpreted differently from what we intend. To interact effectively with those from other cultures, we need intercultural competence.',
    'about.competence.title': 'Intercultural Competence',
    'about.competence.description': 'Intercultural competence is an essential management and life skill for success in the 21st Century. It requires:',
    'about.competence.understanding': 'Understanding of Culture',
    'about.competence.understanding.desc': 'An understanding of culture in general',
    'about.competence.mindset': 'Intercultural Mindset',
    'about.competence.mindset.desc': 'An intercultural mindset',
    'about.competence.skills': 'Intercultural Skills',
    'about.competence.skills.desc': 'Intercultural skills',
    'about.competence.knowledge': 'Cultural Knowledge',
    'about.competence.knowledge.desc': "Knowledge of others' cultures",
    'about.philosophy.title': 'Our Philosophy of Culture',
    'about.philosophy.point1': 'Other cultures are not good or bad, better or worse, or right or wrong. They are just different.',
    'about.philosophy.point2': 'Every culture, no matter how different, deserves respect.',
    'about.philosophy.point3': 'Our impressions of other cultures are comparisons with our own or with another culture with which we are familiar.',
    'about.philosophy.point4': 'Before we can understand another culture, we must first understand what culture is and how it affects behavior.',
    'about.philosophy.point5': 'We must know our own cultural profiles and accept that there are multiple, valid world views.',
    'about.philosophy.point6': 'Intercultural competence begins with intercultural sensitivity and empathy.',
    
    // Team Section
    'team.title': 'Meet Our Team',
    'team.description': 'Our experienced professionals bring decades of expertise in intercultural training and global business.',
    'team.member.john.name': 'John Knipfing',
    'team.member.john.role': 'Cultural Intelligence Consultant',
    'team.member.john.bio1': 'John Knipfing is a Cultural Intelligence consultant, who over the past several years has facilitated cross-cultural and intercultural training to hundreds of leaders and specialists from dozens of Fortune 200 companies and 40 different nations.',
    'team.member.john.bio2': 'As a speaker, John is frequently called on to address groups of 40 to 400 on topics related to culture in the workplace and in daily life. He has spoken to the Central & Eastern European Chamber of Commerce, the Danish Management Society and the Saigon Entrepreneurs Association.',
    'team.member.john.education1': 'B.A. in International Studies - SUNY Buffalo',
    'team.member.john.education2': 'M.A. in Adult Education and Training - University of Phoenix',
    'team.member.lam.name': 'Lam Tran',
    'team.member.lam.role': 'Business Development Leader',
    'team.member.lam.bio1': 'Lam Tran brings more than a decade of business development leadership, and customer service experience to InterX Global.',
    'team.member.lam.bio2': 'Most of Lam\'s career has been spent in organizations which were either based overseas or focused on international clientele. Consequently, she has developed a keen understanding of how culture can affect international interactions, and ultimately, business success.',
    'team.member.lam.bio3': 'Lam\'s extended exposure to a variety of cultures has inspired her to learn to bridge cultural gaps in order to maintain positive relationships and conduct business effectively across cultures.',
    
    // Media Section
    'media.title': 'Media Gallery',
    'media.description': 'Explore our training sessions, speaking engagements, and workshop highlights through our comprehensive media collection.',
    'media.tab.videos': 'Videos',
    'media.tab.images': 'Images',
    'media.video.intro': 'Introduction to Intercultural Competence',
    'media.video.workshop': 'Cross-Cultural Training Workshop Highlights',
    'media.video.success': 'Client Success Stories',
    'media.video.communication': 'Global Business Communication Tips',
    'media.video.intelligence': 'Cultural Intelligence in Action',
    'media.video.speaking': 'Speaking Engagement Highlights',
    'media.image.corporate': 'Corporate Training Session',
    'media.image.keynote': 'Keynote Speaking Event',
    'media.image.workshop': 'Interactive Workshop',
    'media.image.team': 'Cross-Cultural Team Building',
    'media.image.coaching': 'Business Coaching Session',
    'media.image.conference': 'International Conference',
    'media.image.study': 'Study Abroad Preparation',
    'media.image.immigration': 'Immigration Training Program',
    
    // Testimonials Section
    'testimonials.title': 'What Clients Are Saying About InterX Global',
    'testimonial.client1.name': 'Sarah Chen',
    'testimonial.client1.role': 'Global HR Director',
    'testimonial.client1.company': 'Tech Innovations Inc.',
    'testimonial.client1.text': 'InterX Global transformed our international team dynamics. Their cross-cultural training helped our diverse workforce collaborate more effectively, leading to a 40% increase in project success rates.',
    'testimonial.client2.name': 'Michael Schmidt',
    'testimonial.client2.role': 'International Business Manager',
    'testimonial.client2.company': 'European Trade Solutions',
    'testimonial.client2.text': 'Working with John and the InterX Global team was exceptional. Their intercultural competence consulting helped us navigate complex business relationships across 12 countries, saving us from costly misunderstandings.',

    // Contact Section
    'contact.title': 'Want to Know More?',
    'contact.description': 'Ready to enhance your intercultural competence? Get in touch with us to discuss your training needs.',
    'contact.form.title': 'Get In Touch',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell us about your intercultural training needs...',
    'contact.form.send': 'Send Message',
    'contact.info.email.title': 'Email Us',
    'contact.info.email.value': 'info@interxglobal.com',
    'contact.info.phone.title': 'Call Us',
    'contact.info.phone.value': 'Hotline: +84 (028) 3915 833',
    'contact.info.visit.title': 'Visit Us',
    'contact.info.visit.value': 'W Office Building, No. 100 Nguyen Thi Minh Khai Street, Vo Thi Sau Ward, District 3, Ho Chi Minh City',
    'contact.partners.title': 'Our Partners',
    'contact.partners.description': 'We work with leading organizations worldwide to deliver exceptional intercultural training experiences.',
    
    // Footer
    'footer.tagline': 'Empowering global success through intercultural competence training, cross-cultural consulting, and transformative speaking engagements.',
    'footer.company': 'InterX Global Co., Ltd.',
    'footer.services.title': 'Services',
    'footer.services.cross_cultural': 'Cross-cultural Training',
    'footer.services.workshops': 'Intercultural Workshops',
    'footer.services.speaking': 'Speaking Engagements',
    'footer.services.coaching': 'Business Coaching',
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.team': 'Our Team',
    'footer.company.media': 'Media',
    'footer.company.contact': 'Contact',
    'footer.copyright': 'Copyright © 2023. InterX Global. All rights reserved.',
  },
  vi: {
    // Hero Section
    'hero.title.building': 'Xây Dựng Cầu Nối',
    'hero.title.across': 'Xuyên Văn Hóa',
    'hero.subtitle': 'Trao quyền thành công toàn cầu thông qua đào tạo năng lực liên văn hóa, tư vấn đa văn hóa và các buổi nói chuyện truyền cảm hứng.',
    'hero.cta.explore': 'Khám Phá Dịch Vụ',
    'hero.cta.watch': 'Xem Câu Chuyện',
    'hero.experience': '15+ Năm Kinh Nghiệm',
    
    // Services Section
    'services.title': 'Dịch Vụ Của Chúng Tôi',
    'services.description': 'Quá trình phát triển năng lực liên văn hóa khác nhau giữa các nhóm và từng cá nhân. InterX Global có thể kết hợp nhiều chương trình để tạo ra các gói giải pháp phù hợp cho khách hàng.',
    'services.cta': 'Bắt Đầu',
    
    // Service Names
    'service.cross_cultural_training': 'Chương Trình Đào Tạo Đa Văn Hóa',
    'service.intercultural_workshops': 'Hội Thảo Đào Tạo Liên Văn Hóa',
    'service.speaking_engagements': 'Buổi Nói Chuyện',
    'service.business_coaching': 'Huấn Luyện Kinh Doanh Liên Văn Hóa',
    'service.competence_consulting': 'Tư Vấn Năng Lực Liên Văn Hóa',
    'service.study_abroad': 'Đào Tạo Đa Văn Hóa Cho Du Học',
    'service.immigration': 'Đào Tạo Đa Văn Hóa Cho Di Cư',
    'service.language_training': 'Đào Tạo Ngôn Ngữ',
    
    // Service Descriptions
    'service.cross_cultural_training.desc': 'Được thiết kế để đảm bảo người nước ngoài có khởi đầu thuận lợi khi thích nghi với văn hóa mới',
    'service.intercultural_workshops.desc': 'Giúp nhân viên tương tác hiệu quả với đồng nghiệp, khách hàng và nhà cung cấp từ các nền văn hóa khác nhau',
    'service.speaking_engagements.desc': 'Phương pháp hiệu quả về chi phí để giới thiệu lý thuyết và thực hành liên văn hóa cho các nhóm lớn',
    'service.business_coaching.desc': 'Các vấn đề dựa trên văn hóa cụ thể có thể ảnh hưởng đến hiệu suất hoặc mối quan hệ kinh doanh',
    'service.competence_consulting.desc': 'Định hình văn hóa doanh nghiệp và chính sách hướng tới phát triển tổ chức có năng lực liên văn hóa',
    'service.study_abroad.desc': 'Du học không chỉ cần chuẩn bị học thuật mà còn cần sẵn sàng về văn hóa',
    'service.immigration.desc': 'Thách thức lớn nhất đối với các gia đình di cư là thích nghi với văn hóa',
    'service.language_training.desc': 'Học ngôn ngữ mở ra cánh cửa hiểu biết văn hóa và giành được sự tôn trọng',
    
    // Service Features
    'service.feature.cultural_adaptation': 'Chiến lược thích nghi văn hóa',
    'service.feature.integration_tips': 'Mẹo tích hợp thực tế',
    'service.feature.ongoing_support': 'Hỗ trợ liên tục',
    'service.feature.interactive_workshops': 'Hội thảo tương tác',
    'service.feature.real_world_scenarios': 'Tình huống thực tế',
    'service.feature.team_building': 'Bài tập xây dựng nhóm',
    'service.feature.keynote_presentations': 'Thuyết trình chính',
    'service.feature.conference_talks': 'Nói chuyện hội nghị',
    'service.feature.corporate_events': 'Sự kiện doanh nghiệp',
    'service.feature.one_on_one_coaching': 'Huấn luyện một-một',
    'service.feature.performance_improvement': 'Cải thiện hiệu suất',
    'service.feature.relationship_building': 'Xây dựng mối quan hệ',
    'service.feature.policy_development': 'Phát triển chính sách',
    'service.feature.cultural_assessment': 'Đánh giá văn hóa',
    'service.feature.strategic_planning': 'Lập kế hoạch chiến lược',
    'service.feature.academic_preparation': 'Chuẩn bị học thuật',
    'service.feature.cultural_orientation': 'Định hướng văn hóa',
    'service.feature.student_support': 'Hỗ trợ sinh viên',
    'service.feature.family_integration': 'Tích hợp gia đình',
    'service.feature.community_connection': 'Kết nối cộng đồng',
    'service.feature.cultural_navigation': 'Điều hướng văn hóa',
    'service.feature.professional_instruction': 'Hướng dẫn chuyên nghiệp',
    'service.feature.cultural_context': 'Bối cảnh văn hóa',
    'service.feature.business_communication': 'Giao tiếp kinh doanh',
    
    // Navigation
    'nav.home': 'Trang Chủ',
    'nav.services': 'Dịch Vụ',
    'nav.about': 'Về Chúng Tôi',
    'nav.team': 'Đội Ngũ',
    'nav.media': 'Truyền Thông',
    'nav.contact': 'Liên Hệ',
    
    // Language Toggle
    'language.en': 'English',
    'language.vi': 'Tiếng Việt',
    
    // About Section
    'about.title': 'Về InterX Global',
    'about.description': 'Thế giới đang trở nên nhỏ hơn. Chúng ta thấy mình trong mối liên hệ gần gũi hơn với đồng nghiệp, đối tác, khách hàng và nhà cung cấp từ các nền văn hóa đa dạng.',
    'about.small.world.title': 'Đó Là Một Thế Giới Nhỏ (Phức Tạp)',
    'about.small.world.para1': 'Ngày càng nhiều, chúng ta thấy mình trong mối liên hệ gần gũi và quan trọng hơn với đồng nghiệp, đối tác, khách hàng và nhà cung cấp từ các nền văn hóa đa dạng. Chúng ta cư xử tử tế, nhưng sự hiểu lầm, xung đột và nhầm lẫn vẫn ảnh hưởng đến các giao dịch quốc tế của chúng ta, và khả năng thành công. Tại sao?',
    'about.small.world.para2': 'Những người từ các nền văn hóa khác nhau có các giá trị, niềm tin và mô hình suy nghĩ khác nhau. Chỉ cư xử tử tế không giúp ích gì khi các hành vi được hiểu khác với những gì chúng ta dự định. Để tương tác hiệu quả với những người từ các nền văn hóa khác, chúng ta cần năng lực liên văn hóa.',
    'about.competence.title': 'Năng Lực Liên Văn Hóa',
    'about.competence.description': 'Năng lực liên văn hóa là một kỹ năng quản lý và cuộc sống thiết yếu để thành công trong thế kỷ 21. Nó yêu cầu:',
    'about.competence.understanding': 'Hiểu Biết Về Văn Hóa',
    'about.competence.understanding.desc': 'Hiểu biết về văn hóa nói chung',
    'about.competence.mindset': 'Tư Duy Liên Văn Hóa',
    'about.competence.mindset.desc': 'Một tư duy liên văn hóa',
    'about.competence.skills': 'Kỹ Năng Liên Văn Hóa',
    'about.competence.skills.desc': 'Các kỹ năng liên văn hóa',
    'about.competence.knowledge': 'Kiến Thức Văn Hóa',
    'about.competence.knowledge.desc': 'Kiến thức về văn hóa của người khác',
    'about.philosophy.title': 'Triết Lý Văn Hóa Của Chúng Tôi',
    'about.philosophy.point1': 'Các nền văn hóa khác không tốt hay xấu, tốt hơn hay tệ hơn, hoặc đúng hay sai. Chúng chỉ khác biệt.',
    'about.philosophy.point2': 'Mọi nền văn hóa, dù khác biệt đến đâu, đều xứng đáng được tôn trọng.',
    'about.philosophy.point3': 'Ấn tượng của chúng ta về các nền văn hóa khác là sự so sánh với nền văn hóa của chính chúng ta hoặc với một nền văn hóa khác mà chúng ta quen thuộc.',
    'about.philosophy.point4': 'Trước khi chúng ta có thể hiểu một nền văn hóa khác, chúng ta phải hiểu văn hóa là gì và nó ảnh hưởng đến hành vi như thế nào.',
    'about.philosophy.point5': 'Chúng ta phải biết hồ sơ văn hóa của chính mình và chấp nhận rằng có nhiều quan điểm thế giới hợp lệ.',
    'about.philosophy.point6': 'Năng lực liên văn hóa bắt đầu với sự nhạy cảm và đồng cảm liên văn hóa.',
    
    // Team Section
    'team.title': 'Gặp Gỡ Đội Ngũ Của Chúng Tôi',
    'team.description': 'Các chuyên gia giàu kinh nghiệm của chúng tôi mang đến nhiều thập kỷ chuyên môn trong đào tạo liên văn hóa và kinh doanh toàn cầu.',
    'team.member.john.name': 'John Knipfing',
    'team.member.john.role': 'Tư Vấn Trí Tuệ Văn Hóa',
    'team.member.john.bio1': 'John Knipfing là một tư vấn Trí Tuệ Văn Hóa, người trong vài năm qua đã hỗ trợ đào tạo liên văn hóa và đa văn hóa cho hàng trăm nhà lãnh đạo và chuyên gia từ hàng chục công ty Fortune 200 và 40 quốc gia khác nhau.',
    'team.member.john.bio2': 'Là một diễn giả, John thường xuyên được mời phát biểu trước các nhóm từ 40 đến 400 người về các chủ đề liên quan đến văn hóa tại nơi làm việc và trong cuộc sống hàng ngày. Ông đã phát biểu tại Phòng Thương Mại Trung & Đông Âu, Hiệp Hội Quản Lý Đan Mạch và Hiệp Hội Doanh Nhân Sài Gòn.',
    'team.member.john.education1': 'Cử Nhân Nghiên Cứu Quốc Tế - SUNY Buffalo',
    'team.member.john.education2': 'Thạc Sĩ Giáo Dục Người Lớn và Đào Tạo - Đại Học Phoenix',
    'team.member.lam.name': 'Lam Tran',
    'team.member.lam.role': 'Lãnh Đạo Phát Triển Kinh Doanh',
    'team.member.lam.bio1': 'Lam Tran mang đến hơn một thập kỷ lãnh đạo phát triển kinh doanh và kinh nghiệm dịch vụ khách hàng cho InterX Global.',
    'team.member.lam.bio2': 'Phần lớn sự nghiệp của Lam được dành trong các tổ chức hoặc có trụ sở ở nước ngoài hoặc tập trung vào khách hàng quốc tế. Do đó, cô đã phát triển sự hiểu biết sâu sắc về cách văn hóa có thể ảnh hưởng đến các tương tác quốc tế, và cuối cùng, thành công trong kinh doanh.',
    'team.member.lam.bio3': 'Việc tiếp xúc mở rộng của Lam với nhiều nền văn hóa đã truyền cảm hứng cho cô học cách thu hẹp khoảng cách văn hóa để duy trì các mối quan hệ tích cực và tiến hành kinh doanh hiệu quả xuyên văn hóa.',
    
    // Media Section
    'media.title': 'Thư Viện Truyền Thông',
    'media.description': 'Khám phá các buổi đào tạo, buổi nói chuyện và điểm nổi bật hội thảo thông qua bộ sưu tập truyền thông toàn diện của chúng tôi.',
    'media.tab.videos': 'Phim',
    'media.tab.images': 'Hình Ảnh',
    'media.video.intro': 'Giới Thiệu Về Năng Lực Liên Văn Hóa',
    'media.video.workshop': 'Điểm Nổi Bật Hội Thảo Đào Tạo Đa Văn Hóa',
    'media.video.success': 'Câu Chuyện Thành Công Của Khách Hàng',
    'media.video.communication': 'Mẹo Giao Tiếp Kinh Doanh Toàn Cầu',
    'media.video.intelligence': 'Trí Tuệ Văn Hóa Trong Hành Động',
    'media.video.speaking': 'Điểm Nổi Bật Buổi Nói Chuyện',
    'media.image.corporate': 'Buổi Đào Tạo Doanh Nghiệp',
    'media.image.keynote': 'Sự Kiện Nói Chuyện Chính',
    'media.image.workshop': 'Hội Thảo Tương Tác',
    'media.image.team': 'Xây Dựng Nhóm Đa Văn Hóa',
    'media.image.coaching': 'Buổi Huấn Luyện Kinh Doanh',
    'media.image.conference': 'Hội Nghị Kinh Doanh Quốc Tế',
    'media.image.study': 'Chuẩn Bị Du Học',
    'media.image.immigration': 'Chương Trình Đào Tạo Di Cư',
    
    // Testimonials Section
    'testimonials.title': 'Khách Hàng Nói Gì Về InterX Global',
    'testimonial.client1.name': 'Sarah Chen',
    'testimonial.client1.role': 'Giám Đốc Nhân Sự Toàn Cầu',
    'testimonial.client1.company': 'Tech Innovations Inc.',
    'testimonial.client1.text': 'InterX Global đã thay đổi động lực nhóm quốc tế của chúng tôi. Đào tạo đa văn hóa của họ giúp lực lượng lao động đa dạng của chúng tôi hợp tác hiệu quả hơn, dẫn đến tỷ lệ thành công dự án tăng 40%.',
    'testimonial.client2.name': 'Michael Schmidt',
    'testimonial.client2.role': 'Quản Lý Kinh Doanh Quốc Tế',
    'testimonial.client2.company': 'European Trade Solutions',
    'testimonial.client2.text': 'Làm việc với John và nhóm InterX Global thật đặc biệt. Tư vấn năng lực liên văn hóa của họ giúp chúng tôi điều hướng các mối quan hệ kinh doanh phức tạp trên 12 quốc gia, giúp chúng tôi tránh những hiểu lầm tốn kém.',
    
    // Contact Section
    'contact.title': 'Muốn Biết Thêm?',
    'contact.description': 'Sẵn sàng nâng cao năng lực liên văn hóa của bạn? Liên hệ với chúng tôi để thảo luận về nhu cầu đào tạo.',
    'contact.form.title': 'Liên Hệ',
    'contact.form.name': 'Họ và Tên',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Số Điện Thoại',
    'contact.form.message': 'Tin Nhắn',
    'contact.form.message.placeholder': 'Hãy cho chúng tôi biết về nhu cầu đào tạo liên văn hóa của bạn...',
    'contact.form.send': 'Gửi Tin Nhắn',
    'contact.info.email.title': 'Email Chúng Tôi',
    'contact.info.email.value': 'info@interxglobal.com',
    'contact.info.phone.title': 'Gọi Chúng Tôi',
    'contact.info.phone.value': 'Hotline: +84 (028) 3915 833',
    'contact.info.visit.title': 'Ghé Thăm Chúng Tôi',
    'contact.info.visit.value': 'Tòa Nhà W Office, Số 100 Đường Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh',
    'contact.partners.title': 'Đối Tác Của Chúng Tôi',
    'contact.partners.description': 'Chúng tôi làm việc với các tổ chức hàng đầu trên toàn thế giới để mang đến những trải nghiệm đào tạo liên văn hóa xuất sắc.',
    
    // Footer
    'footer.tagline': 'Trao quyền thành công toàn cầu thông qua đào tạo năng lực liên văn hóa, tư vấn đa văn hóa và các buổi nói chuyện truyền cảm hứng.',
    'footer.company': 'InterX Global Co., Ltd.',
    'footer.services.title': 'Dịch Vụ',
    'footer.services.cross_cultural': 'Đào Tạo Đa Văn Hóa',
    'footer.services.workshops': 'Hội Thảo Liên Văn Hóa',
    'footer.services.speaking': 'Buổi Nói Chuyện',
    'footer.services.coaching': 'Huấn Luyện Kinh Doanh',
    'footer.company.title': 'Công Ty',
    'footer.company.about': 'Về Chúng Tôi',
    'footer.company.team': 'Đội Ngũ',
    'footer.company.media': 'Truyền Thông',
    'footer.company.contact': 'Liên Hệ',
    'footer.copyright': 'Bản quyền © 2023. InterX Global. Đã đăng ký bảo hộ.',
  }
}
