'use client'
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">About Real India Tribal Journeys</h1>
      <p className="mt-2 text-pretty leading-relaxed">
        We design respectful, community-first travel experiences in Gujarat’s tribal regions—prioritizing consent, fair
        compensation, and cultural dignity.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="font-serif text-xl">Our Approach</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Slow travel. Small groups. Local hosts. We co-create itineraries with communities and artisans to ensure
            benefits are direct, lasting, and mutually defined.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="font-serif text-xl">Ethical Guidelines</h2>
          <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
            <li>Consent-first photography and ceremonies.</li>
            <li>Honor local rhythms—market days, grazing routes, sacred time.</li>
            <li>Transparent pricing with community-aligned fees.</li>
          </ul>
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-border bg-card p-5">
        <h2 className="font-serif text-xl">Who We Are</h2>
        <p className="mt-2 text-sm leading-relaxed">
          A guide collective with years in fieldwork and cultural documentation. We believe the future of travel is
          reciprocal, careful, and deeply human.
        </p>
      </section>
    </div>
  )
}
