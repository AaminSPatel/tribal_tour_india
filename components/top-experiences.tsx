import Link from "next/link"

const experiences = [
  { title: "Rathwa Pithora Village", href: "/destinations", img: "/rathwa-pithora-art.jpg" },
  { title: "Bharwad Pastoral Trails", href: "/destinations", img: "/bharwad-pastoral-life.jpg" },
  { title: "Dang Festival Circuit", href: "/destinations", img: "/dang-festival.jpg" },
  { title: "Crafts of Kutch", href: "/destinations", img: "/kutch-crafts.jpg" },
]

export function TopExperiences() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-serif text-2xl md:text-3xl">Top Experiences</h2>
        <Link className="text-sm text-primary hover:underline" href="/destinations">
          See all
        </Link>
      </div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
        {experiences.map((e) => (
          <Link
            key={e.title}
            href={e.href}
            className="min-w-[260px] snap-start rounded-lg border border-border bg-card"
            aria-label={e.title}
          >
            <img src={e.img || "/placeholder.svg"} alt={e.title} className="h-44 w-full rounded-t-lg object-cover" />
            <div className="p-3">
              <div className="font-medium">{e.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
