"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="inline-flex items-baseline gap-2">
          <span className="text-xl font-serif font-semibold tracking-tight">Real India</span>
          <span className="text-sm text-muted-foreground">Tribal Journeys</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link className="text-sm hover:text-primary" href="/destinations">
            Destinations
          </Link>
          <Link className="text-sm hover:text-primary" href="/gallery">
            Gallery
          </Link>
          <Link className="text-sm hover:text-primary" href="/blogs">
            Blogs
          </Link>
          <Link className="text-sm hover:text-primary" href="/stories">
            Traveler Stories
          </Link>
          <Link className="text-sm hover:text-primary" href="/reviews">
            Reviews
          </Link>
          <Link className="text-sm hover:text-primary" href="/about">
            About
          </Link>
          <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
            <Link href="/contact">Plan Your Experience</Link>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-border p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle Menu</span>
          <div className="h-4 w-6 space-y-1.5">
            <div className="h-0.5 w-6 bg-foreground" />
            <div className="h-0.5 w-6 bg-foreground" />
            <div className="h-0.5 w-6 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            <Link href="/destinations" onClick={() => setOpen(false)}>
              Destinations
            </Link>
            <Link href="/gallery" onClick={() => setOpen(false)}>
              Gallery
            </Link>
            <Link href="/blogs" onClick={() => setOpen(false)}>
              Blogs
            </Link>
            <Link href="/stories" onClick={() => setOpen(false)}>
              Traveler Stories
            </Link>
            <Link href="/reviews" onClick={() => setOpen(false)}>
              Reviews
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/contact">Plan Your Experience</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
