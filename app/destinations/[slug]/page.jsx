"use client"

import Image from "next/image"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useData } from "@/context/data-context"

export default function DestinationDetailPage() {
  const { slug } = useParams()
  const { destinations } = useData()
  const d = destinations.find((x) => x.slug === slug)

  if (!d) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p>
          Destination not found.{" "}
          <Link className="text-primary" href="/destinations">
            Back to Destinations
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-serif text-3xl">{d.name}</h1>
        <Link className="text-sm text-primary" href="/destinations">
          ← All Destinations
        </Link>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">
        {d.region} • {d.tribe} • Best time: {d.bestTime}
      </div>
      <p className="mt-4 leading-relaxed">{d.summary}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {d.images?.map((src) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={d.name}
            width={800}
            height={600}
            className="h-56 w-full rounded-md object-cover"
          />
        ))}
      </div>

      <div className="mt-6">
        <h2 className="font-serif text-xl">Highlights</h2>
        <ul className="mt-2 list-disc pl-6">
          {d.highlights?.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="font-serif text-xl">Ethical Notes</h2>
        <p className="mt-2 text-sm text-muted-foreground">{d.ethicalNotes}</p>
      </div>

      <div className="mt-8">
        <Link href="/contact" className="inline-block rounded bg-primary px-4 py-2 text-primary-foreground">
          Plan this Experience
        </Link>
      </div>
    </div>
  )
}
