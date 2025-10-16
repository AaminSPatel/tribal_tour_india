'use client'
import { useData } from "@/context/data-context"
import Link from "next/link"
//import { useData } from "@/context/data-context"

export default function DestinationsPage() {
  const { destinations } = useData()
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">Destinations & Experiences</h1>
      <p className="mt-2 text-pretty leading-relaxed">
        Explore curated cultural journeys grouped by tribe and region. Click a destination to view highlights, images,
        and ethical notes.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((d) => (
          <Link
            key={d.id}
            href={`/destinations/${d.slug}`}
            className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-sm"
          >
            <img
              src={(d.images && d.images[0]) || "/placeholder.svg?height=200&width=400&query=destination"}
              alt={d.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-medium">{d.name}</h2>
              <div className="mt-1 text-xs text-muted-foreground">
                {d.region} · {d.tribe}
              </div>
              <p className="mt-2 text-sm line-clamp-3">{d.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
