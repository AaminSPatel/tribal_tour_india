"use client"

export default function AboutPage() {
  const teamImages = [
    {
      id: 1,
      title: "Community First",
      description:
        "We work directly with tribal communities, ensuring fair compensation and cultural respect in every journey.",
      image: "/portrait-tribal.jpg",
    },
    {
      id: 2,
      title: "Authentic Experiences",
      description:
        "From festival celebrations to daily rituals, we create meaningful connections with local traditions.",
      image: "/tribal-festival-gujarat.jpg",
    },
    {
      id: 3,
      title: "Craft & Heritage",
      description: "Supporting artisans and traditional crafts through direct engagement and fair-trade practices.",
      image: "/kutch-1.jpg",
    },
    {
      id: 4,
      title: "Sustainable Travel",
      description: "Small groups, slow travel, and minimal environmental impact to preserve these precious landscapes.",
      image: "/dang-forest-1.jpg",
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-12">
        <h1 className="font-serif text-4xl font-bold text-primary">About Real India Tribal Journeys</h1>
        <p className="mt-4 text-pretty leading-relaxed text-foreground/80">
          We design respectful, community-first travel experiences in Gujarat's tribal regions—prioritizing consent,
          fair compensation, and cultural dignity. Our mission is to create journeys that benefit everyone involved.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-8">Our Values in Action</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {teamImages.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-12">
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold text-primary mb-3">Our Approach</h2>
          <p className="text-sm leading-relaxed text-foreground/80">
            Slow travel. Small groups. Local hosts. We co-create itineraries with communities and artisans to ensure
            benefits are direct, lasting, and mutually defined. Every rupee spent supports local livelihoods.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-6">
          <h2 className="font-serif text-xl font-semibold text-primary mb-3">Ethical Guidelines</h2>
          <ul className="text-sm leading-relaxed text-foreground/80 space-y-2">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Consent-first photography and ceremonies.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Honor local rhythms—market days, grazing routes, sacred time.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              <span>Transparent pricing with community-aligned fees.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-8">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-4">Who We Are</h2>
        <p className="text-foreground/80 leading-relaxed mb-4">
          A guide collective with years in fieldwork and cultural documentation. We believe the future of travel is
          reciprocal, careful, and deeply human. Our team includes anthropologists, photographers, and community
          liaisons who are committed to ethical storytelling and sustainable tourism.
        </p>
        <p className="text-foreground/80 leading-relaxed">
          Every journey we create is a conversation between travelers and communities—one built on mutual respect,
          curiosity, and a shared commitment to preserving the rich cultural heritage of Gujarat's tribal regions.
        </p>
      </section>
    </div>
  )
}

