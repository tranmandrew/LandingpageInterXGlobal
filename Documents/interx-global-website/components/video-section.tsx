

export function VideoSection() {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative aspect-video bg-muted">
          <iframe
            src="https://www.youtube.com/embed/ckIY3M5Xaoo?si=FPq-1GsVSATz9vXj"
            title="Intercultural Training Overview"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
