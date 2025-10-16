export function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-[240px_1fr]">
        <img src="/portrait-tribal-guide.jpg" alt="Your guide" className="h-60 w-60 rounded-lg object-cover" />
        <div>
          <h2 className="font-serif text-2xl md:text-3xl">Meet Your Guide</h2>
          <p className="mt-3 text-pretty leading-relaxed">
            I&apos;m a local photographer and cultural guide specializing in tribal communities across Gujarat. My
            journeys prioritize ethics, consent, and meaningful connections—never staged, always real.
          </p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>• 10+ years guiding remote cultural experiences</li>
            <li>• Respectful photography: consent-first approach</li>
            <li>• Custom itineraries aligned with festivals and seasons</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
