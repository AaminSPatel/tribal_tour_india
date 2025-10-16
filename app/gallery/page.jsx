"use client"

import { useMemo, useState } from "react"
import { useData } from "@/context/data-context"

export default function GalleryPage() {
  const { gallery } = useData()
  const categories = useMemo(() => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))], [gallery])
  const [active, setActive] = useState("All")
  const [light, setLight] = useState(null)

  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">Gallery</h1>
      <p className="mt-2 text-pretty leading-relaxed">Masonry-style gallery with categories and EXIF details.</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded px-3 py-1 text-sm border ${active === c ? "bg-primary text-primary-foreground border-primary" : "border-border"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {items.map((g) => (
          <figure
            key={g.id}
            className="mb-4 break-inside-avoid rounded-lg overflow-hidden border border-border bg-card"
          >
            <img
              src={g.src || "/placeholder.svg?height=400&width=600&query=gallery"}
              alt={g.title}
              className="w-full object-cover cursor-zoom-in"
              onClick={() => setLight(g)}
            />
            <figcaption className="p-3">
              <div className="text-sm font-medium">{g.title}</div>
              <div className="text-xs text-muted-foreground">{g.category}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      {light && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLight(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={light.src || "/placeholder.svg"} alt={light.title} className="w-full rounded-md" />
            <div className="mt-2 text-sm text-muted-foreground">{light.exif}</div>
            <div className="mt-3 flex justify-end">
              <button className="rounded border px-3 py-1" onClick={() => setLight(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
