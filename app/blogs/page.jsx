"use client"

import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { useData } from "@/context/data-context"

export default function BlogsPage() {
  const { blogs } = useData()
  const params = useSearchParams()
  const router = useRouter()
  const page = Number(params.get("page") || 1)
  const perPage = 6
  const totalPages = Math.max(1, Math.ceil(blogs.length / perPage))
  const start = (page - 1) * perPage
  const items = blogs
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(start, start + perPage)

  const goto = (p) => {
    if (p < 1 || p > totalPages) return
    const sp = new URLSearchParams(params)
    sp.set("page", String(p))
    router.push(`/blogs?${sp.toString()}`)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">Blogs</h1>
      <p className="mt-2 text-pretty leading-relaxed">
        Field notes, guides, and reflections from Gujarat’s tribal regions. Browse the latest six posts per page.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((b) => (
          <article key={b.id} className="rounded-lg border border-border bg-card overflow-hidden">
            <img
              src={b.coverImage || "/placeholder.svg?height=200&width=400&query=blog cover"}
              alt={b.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="font-medium line-clamp-2">{b.title}</h2>
              <div className="mt-1 text-xs text-muted-foreground">
                {new Date(b.date).toLocaleDateString()} {b.tags?.length ? "· " + b.tags.join(", ") : ""}
              </div>
              <p className="mt-2 text-sm line-clamp-3">{b.excerpt}</p>
              <Link href={`/blogs/${b.slug}`} className="mt-3 inline-block text-sm text-primary underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          disabled={page <= 1}
          onClick={() => goto(page - 1)}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Prev
        </button>
        <div className="text-sm">
          Page {page} of {totalPages}
        </div>
        <button
          disabled={page >= totalPages}
          onClick={() => goto(page + 1)}
          className="rounded border px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
