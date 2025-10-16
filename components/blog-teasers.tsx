import Link from "next/link"

const posts = [
  { title: "Photographing with Respect", href: "/blogs", img: "/respectful-photography.jpg" },
  { title: "Festival Calendar: What to Expect", href: "/blogs", img: "/tribal-festival-calendar.jpg" },
  { title: "Craft Traditions of Kutch", href: "/blogs", img: "/craft-traditions.jpg" },
]

export function BlogTeasers() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-serif text-2xl md:text-3xl">From the Blog</h2>
        <Link className="text-sm text-primary hover:underline" href="/blogs">
          Read all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.title} href={p.href} className="rounded-lg border border-border bg-card">
            <img src={p.img || "/placeholder.svg"} alt={p.title} className="h-40 w-full rounded-t-lg object-cover" />
            <div className="p-3">
              <div className="font-medium">{p.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
