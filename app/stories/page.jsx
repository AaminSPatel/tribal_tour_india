'use client'
import Link from "next/link"
import { useData } from "@/context/data-context"

export default function StoriesPage() {
  const { stories } = useData()
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">Traveler Stories</h1>
      <p className="mt-2 text-pretty leading-relaxed">
        Guest reflections and photo sets from immersive experiences across Gujarat’s tribal regions.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {stories.map((s) => (
          <Link
            key={s.id}
            href={`/stories/${s.slug}`}
            className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-sm"
          >
            <img
              src={(s.photos && s.photos[0]) || "/placeholder.svg?height=200&width=400&query=story"}
              alt={s.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-medium">{s.title}</h2>
              <div className="mt-1 text-xs text-muted-foreground">By {s.author}</div>
              <p className="mt-2 text-sm line-clamp-3">{s.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
