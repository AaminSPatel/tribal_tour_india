import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[80vh] bg-[center] bg-cover"
      style={{
        backgroundImage: "url('/tribal-journeys-in-india-rustic-earthy-tones.jpg')",
        backgroundAttachment: "fixed",
      }}
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-background/50" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-center gap-6 px-4 py-24 md:py-32">
        <h1 className="font-serif text-balance text-4xl font-semibold md:text-6xl">
          Walk with Tribes. Feel the Real India.
        </h1>
        <p className="max-w-prose text-pretty text-base md:text-lg">
          Guided journeys rooted in respect, culture, and story—crafted by a local expert.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/contact">Plan Your Tribal Experience</Link>
          </Button>
          <Button asChild variant="secondary" className="bg-secondary text-secondary-foreground">
            <Link href="/gallery">View Photo Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
