"use client"

import { useState } from "react"
import { useData } from "@/context/data-context"

export default function ContactPage() {
  const { addInquiry } = useData()
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", message: "" })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    addInquiry({ id: `q-${Date.now()}`, ...form, date: new Date().toISOString() })
    setSent(true)
    setForm({ name: "", email: "", whatsapp: "", message: "" })
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-serif text-3xl">Contact / Booking</h1>
      <p className="mt-2 text-pretty leading-relaxed">
        Share your interests and dates. We’ll suggest ethical, season-aware itineraries that work for communities.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-4 rounded-lg border border-border bg-card p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-1 text-sm">
            <span>Name</span>
            <input
              className="rounded-md border border-border bg-background px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input
              type="email"
              className="rounded-md border border-border bg-background px-3 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label className="grid gap-1 text-sm">
            <span>WhatsApp</span>
            <input
              className="rounded-md border border-border bg-background px-3 py-2"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            />
          </label>
        </div>
        <label className="grid gap-1 text-sm">
          <span>Message</span>
          <textarea
            className="min-h-28 rounded-md border border-border bg-background px-3 py-2"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </label>
        <div className="flex items-center gap-3">
          <button className="rounded bg-primary px-4 py-2 text-primary-foreground" type="submit">
            Send Inquiry
          </button>
          {sent && <span className="text-sm text-green-600">Thanks! We’ll reply soon.</span>}
        </div>
      </form>
    </div>
  )
}
