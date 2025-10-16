"use client"

import { useData } from "@/context/data-context"

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-accent text-lg" : "text-gray-300 text-lg"}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const { reviews } = useData()

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-12">
        <h1 className="font-serif text-4xl font-bold text-primary">Traveler Reviews</h1>
        <p className="mt-3 text-pretty leading-relaxed text-foreground/80">
          Testimonials and ratings from travelers who've experienced Real India Tribal Journeys. Your feedback shapes
          our commitment to respectful, authentic cultural travel.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-lg border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary">{review.name}</h3>
                  <p className="text-sm text-foreground/60">{new Date(review.date).toLocaleDateString()}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
              <p className="mt-4 text-foreground leading-relaxed italic">"{review.text}"</p>
            </div>
          ))
        ) : (
          <p className="text-foreground/60">No reviews yet. Be the first to share your experience!</p>
        )}
      </div>

      <section className="mt-12 rounded-lg border border-accent/30 bg-accent/5 p-8">
        <h2 className="font-serif text-2xl font-semibold text-primary mb-4">Share Your Experience</h2>
        <p className="text-foreground/80 mb-6">
          Have you traveled with us? We'd love to hear about your journey and how we can continue to improve.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Write a Review
        </a>
      </section>
    </div>
  )
}
