const testimonials = [
  { name: "Anna, DE", quote: "Authentic and deeply respectful." },
  { name: "Marco, IT", quote: "A rare, meaningful journey." },
  { name: "Sara, US", quote: "Photography guidance was invaluable." },
  { name: "Kenji, JP", quote: "Ethics-first, never staged." },
  { name: "Meera, IN", quote: "Felt welcomed and safe throughout." },
]

export function TestimonialsStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div className="flex items-center gap-6 overflow-x-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-[260px] rounded-md border border-border bg-background p-4">
              <div className="text-sm">&ldquo;{t.quote}&rdquo;</div>
              <div className="mt-2 text-xs text-muted-foreground">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
