export function MapGujarat() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="font-serif text-2xl md:text-3xl">Gujarat Tribal Map</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Explore key regions and communities. Pins are illustrative for this demo.
      </p>
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        <div className="relative">
          <img
            src="/map-of-gujarat-tribal-regions.jpg"
            alt="Map of Gujarat highlighting tribal regions"
            className="h-[320px] w-full object-cover md:h-[420px]"
          />
          {/* Simulated pins */}
          <div className="absolute left-[20%] top-[40%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
          <div className="absolute left-[55%] top-[35%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary" />
          <div className="absolute left-[70%] top-[55%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
