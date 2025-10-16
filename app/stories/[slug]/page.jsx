"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useData } from "@/context/data-context"

export default function StoryDetailPage() {
  const { slug } = useParams()
  const { stories } = useData()
  const s = stories.find((x) => x.slug === slug)

  if (!s) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p>
          Story not found.{" "}
          <Link className="text-primary" href="/stories">
            Back to Stories
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-serif text-3xl">{s.title}</h1>
        <Link className="text-sm text-primary" href="/stories">
          ← All Stories
        </Link>
      </div>
      <div className="mt-1 text-sm text-muted-foreground">By {s.author}</div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {s.photos?.map((src) => (
          <Image
            key={src}
            src={src || "/placeholder.svg"}
            alt={s.title}
            width={800}
            height={600}
            className="h-56 w-full rounded-md object-cover"
          />
        ))}
      </div>

      <article className="prose prose-invert mt-6 max-w-none">
        <p className="leading-relaxed">{s.content}</p>
      </article>
    </div>
  )
}
