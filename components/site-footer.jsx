import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="font-serif text-lg">Real India Tribal Journeys</div>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              Ethical, respectful, and immersive tribal experiences across Gujarat and beyond.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium">Explore</div>
            <ul className="mt-2 grid gap-2 text-sm">
              <li>
                <Link className="hover:text-primary" href="/destinations">
                  Destinations
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/stories">
                  Traveler Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Company</div>
            <ul className="mt-2 grid gap-2 text-sm">
              <li>
                <Link className="hover:text-primary" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/reviews">
                  Reviews
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="/contact">
                  Contact / Booking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium">Contact</div>
            <p className="mt-2 text-sm">WhatsApp: +91-XXXXXXXXXX</p>
            <p className="text-sm">Email: hello@realindia.example</p>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Real India Tribal Journeys. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
