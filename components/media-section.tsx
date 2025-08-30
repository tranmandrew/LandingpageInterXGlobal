"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ImageIcon } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function MediaSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"videos" | "images">("videos")

  const videos = [
    {
      id: 1,
      titleKey: "media.video.intro",
      thumbnail: "/business-presentation-thumbnail.png",
      duration: "5:32",
    },
    {
      id: 2,
      titleKey: "media.video.workshop",
      thumbnail: "/workshop-training.png",
      duration: "8:15",
    },
    {
      id: 3,
      titleKey: "media.video.success",
      thumbnail: "/client-testimonial-video.png",
      duration: "6:45",
    },
    {
      id: 4,
      titleKey: "media.video.communication",
      thumbnail: "/business-communication-tips.png",
      duration: "4:20",
    },
    {
      id: 5,
      titleKey: "media.video.intelligence",
      thumbnail: "/cultural-intelligence-training.png",
      duration: "7:10",
    },
    {
      id: 6,
      titleKey: "media.video.speaking",
      thumbnail: "/keynote-speaking-event.png",
      duration: "3:55",
    },
  ]

  const images = [
    {
      id: 1,
      titleKey: "media.image.corporate",
      src: "/corporate-training-workshop-diverse-team.png",
      alt: "Corporate training session with diverse participants",
    },
    {
      id: 2,
      titleKey: "media.image.keynote",
      src: "/keynote-speaker-large-audience.png",
      alt: "John Knipfing delivering keynote presentation",
    },
    {
      id: 3,
      titleKey: "media.image.workshop",
      src: "/interactive-workshop-group-activities.png",
      alt: "Interactive workshop with group activities",
    },
    {
      id: 4,
      titleKey: "media.image.team",
      src: "/cross-cultural-team-building-exercise.png",
      alt: "Cross-cultural team building exercise",
    },
    {
      id: 5,
      titleKey: "media.image.coaching",
      src: "/business-coaching-one-on-one.png",
      alt: "One-on-one business coaching session",
    },
    {
      id: 6,
      titleKey: "media.image.conference",
      src: "/international-business-conference.png",
      alt: "International business conference presentation",
    },
    {
      id: 7,
      titleKey: "media.image.study",
      src: "/study-abroad-preparation-students.png",
      alt: "Study abroad preparation session with students",
    },
    {
      id: 8,
      titleKey: "media.image.immigration",
      src: "/immigration-training-families.png",
      alt: "Immigration training program for families",
    },
  ]

  return (
    <section id="media" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
            {t('media.title')}
          </h2>
          <p className="text-xl text-foreground/80 text-balance max-w-3xl mx-auto">
            {t('media.description')}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 flex">
            <Button
              variant={activeTab === "videos" ? "default" : "ghost"}
              onClick={() => setActiveTab("videos")}
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              {t('media.tab.videos')}
            </Button>
            <Button
              variant={activeTab === "images" ? "default" : "ghost"}
              onClick={() => setActiveTab("images")}
              className="flex items-center gap-2"
            >
              <ImageIcon className="h-4 w-4" />
              {t('media.tab.images')}
            </Button>
          </div>
        </div>

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-gray-800 border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={t(video.titleKey)}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-800">
                    <h3 className="font-semibold text-balance text-white text-lg">{t(video.titleKey)}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "images" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer bg-gray-800 border-gray-700"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-semibold text-balance text-lg">{t(image.titleKey)}</h3>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
