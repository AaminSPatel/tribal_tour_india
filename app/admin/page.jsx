"use client"

import { useState } from "react"
import { useData } from "@/context/data-context"

function SectionTabs({ active, setActive }) {
  const tabs = ["Blogs", "Destinations", "Gallery", "Stories", "Reviews"]
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((t) => (
        <button
          key={t}
          className={`rounded px-3 py-1 text-sm border ${active === t ? "bg-primary text-primary-foreground border-primary" : "border-border"}`}
          onClick={() => setActive(t)}
        >
          {t}
        </button>
      ))}
    </div>
  )
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input
        className="rounded-md border border-border bg-background px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <textarea
        className="min-h-28 rounded-md border border-border bg-background px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

export default function AdminPage() {
  const data = useData()
  const [active, setActive] = useState("Blogs")

  if (!data.isAdmin) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-serif text-3xl">Admin</h1>
        <p className="mt-2 text-muted-foreground">
          Access restricted. Click the tiny dot in the bottom-right corner 5 times to open the admin key dialog.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl">Admin Panel</h1>
        <button className="rounded border border-border px-3 py-2 text-sm" onClick={data.logout}>
          Logout
        </button>
      </div>
      <p className="mt-2 text-muted-foreground">Manage content. Changes persist to your browser’s local storage.</p>

      <div className="mt-6">
        <SectionTabs active={active} setActive={setActive} />
      </div>

      <div className="mt-6">
        {active === "Blogs" && <BlogsAdmin data={data} />}
        {active === "Destinations" && <DestinationsAdmin data={data} />}
        {active === "Gallery" && <GalleryAdmin data={data} />}
        {active === "Stories" && <StoriesAdmin data={data} />}
        {active === "Reviews" && <ReviewsAdmin data={data} />}
      </div>
    </div>
  )
}

function makeId(prefix) {
  return `${prefix}-${Date.now()}`
}

function BlogsAdmin({ data }) {
  const [draft, setDraft] = useState({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    coverImage: "",
    date: "",
    tags: "",
    content: "",
  })

  const submit = () => {
    const item = {
      ...draft,
      id: draft.id || makeId("b"),
      tags: draft.tags ? draft.tags.split(",").map((t) => t.trim()) : [],
    }
    data.addBlog(item)
    setDraft({ id: "", title: "", slug: "", excerpt: "", coverImage: "", date: "", tags: "", content: "" })
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-border bg-card p-4">
        <h2 className="font-serif text-lg">New / Edit Blog</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <TextInput label="Title" value={draft.title} onChange={(v) => setDraft({ ...draft, title: v })} />
          <TextInput label="Slug" value={draft.slug} onChange={(v) => setDraft({ ...draft, slug: v })} />
          <TextInput
            label="Cover Image URL"
            value={draft.coverImage}
            onChange={(v) => setDraft({ ...draft, coverImage: v })}
          />
          <TextInput label="Date (YYYY-MM-DD)" value={draft.date} onChange={(v) => setDraft({ ...draft, date: v })} />
          <TextInput
            label="Tags (comma separated)"
            value={draft.tags}
            onChange={(v) => setDraft({ ...draft, tags: v })}
          />
          <TextInput label="Excerpt" value={draft.excerpt} onChange={(v) => setDraft({ ...draft, excerpt: v })} />
        </div>
        <TextArea label="Content" value={draft.content} onChange={(v) => setDraft({ ...draft, content: v })} />
        <div className="flex justify-end">
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={submit}>
            Save Blog
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-left">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Date</th>
              <th className="p-2">Tags</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.blogs.map((b) => (
              <tr key={b.id} className="border-t border-border">
                <td className="p-2">{b.title}</td>
                <td className="p-2">{b.date}</td>
                <td className="p-2">{b.tags?.join(", ")}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      className="rounded border border-border px-2 py-1"
                      onClick={() => setDraft({ ...b, tags: b.tags?.join(", ") || "" })}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded border border-destructive text-destructive px-2 py-1"
                      onClick={() => data.deleteBlog(b.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.blogs.length === 0 && (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={4}>
                  No blogs yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DestinationsAdmin({ data }) {
  const [draft, setDraft] = useState({
    id: "",
    name: "",
    slug: "",
    region: "",
    tribe: "",
    summary: "",
    highlights: "",
    images: "",
    bestTime: "",
    ethicalNotes: "",
  })

  const submit = () => {
    const item = {
      ...draft,
      id: draft.id || makeId("d"),
      highlights: draft.highlights ? draft.highlights.split(",").map((t) => t.trim()) : [],
      images: draft.images ? draft.images.split(",").map((t) => t.trim()) : [],
    }
    data.addDestination(item)
    setDraft({
      id: "",
      name: "",
      slug: "",
      region: "",
      tribe: "",
      summary: "",
      highlights: "",
      images: "",
      bestTime: "",
      ethicalNotes: "",
    })
  }

  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-border bg-card p-4">
        <h2 className="font-serif text-lg">New / Edit Destination</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <TextInput label="Name" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} />
          <TextInput label="Slug" value={draft.slug} onChange={(v) => setDraft({ ...draft, slug: v })} />
          <TextInput label="Region" value={draft.region} onChange={(v) => setDraft({ ...draft, region: v })} />
          <TextInput label="Tribe" value={draft.tribe} onChange={(v) => setDraft({ ...draft, tribe: v })} />
          <TextInput label="Best Time" value={draft.bestTime} onChange={(v) => setDraft({ ...draft, bestTime: v })} />
          <TextInput
            label="Highlights (comma separated)"
            value={draft.highlights}
            onChange={(v) => setDraft({ ...draft, highlights: v })}
          />
          <TextInput
            label="Images (comma separated URLs)"
            value={draft.images}
            onChange={(v) => setDraft({ ...draft, images: v })}
          />
        </div>
        <TextArea label="Summary" value={draft.summary} onChange={(v) => setDraft({ ...draft, summary: v })} />
        <TextArea
          label="Ethical Notes"
          value={draft.ethicalNotes}
          onChange={(v) => setDraft({ ...draft, ethicalNotes: v })}
        />
        <div className="flex justify-end">
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={submit}>
            Save Destination
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Region</th>
              <th className="p-2">Tribe</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.destinations.map((d) => (
              <tr key={d.id} className="border-t border-border">
                <td className="p-2">{d.name}</td>
                <td className="p-2">{d.region}</td>
                <td className="p-2">{d.tribe}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      className="rounded border border-border px-2 py-1"
                      onClick={() =>
                        setDraft({
                          ...d,
                          highlights: d.highlights?.join(", ") || "",
                          images: d.images?.join(", ") || "",
                        })
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="rounded border border-destructive text-destructive px-2 py-1"
                      onClick={() => data.deleteDestination(d.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.destinations.length === 0 && (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={4}>
                  No destinations yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function GalleryAdmin({ data }) {
  const [draft, setDraft] = useState({ id: "", title: "", category: "", src: "", exif: "" })
  const submit = () => {
    const item = { ...draft, id: draft.id || makeId("g") }
    data.addPhoto(item)
    setDraft({ id: "", title: "", category: "", src: "", exif: "" })
  }
  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-border bg-card p-4">
        <h2 className="font-serif text-lg">New / Edit Photo</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <TextInput label="Title" value={draft.title} onChange={(v) => setDraft({ ...draft, title: v })} />
          <TextInput label="Category" value={draft.category} onChange={(v) => setDraft({ ...draft, category: v })} />
          <TextInput label="Image URL" value={draft.src} onChange={(v) => setDraft({ ...draft, src: v })} />
          <TextInput label="EXIF" value={draft.exif} onChange={(v) => setDraft({ ...draft, exif: v })} />
        </div>
        <div className="flex justify-end">
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={submit}>
            Save Photo
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-left">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Category</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.gallery.map((g) => (
              <tr key={g.id} className="border-t border-border">
                <td className="p-2">{g.title}</td>
                <td className="p-2">{g.category}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button className="rounded border border-border px-2 py-1" onClick={() => setDraft(g)}>
                      Edit
                    </button>
                    <button
                      className="rounded border border-destructive text-destructive px-2 py-1"
                      onClick={() => data.deletePhoto(g.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.gallery.length === 0 && (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={3}>
                  No photos yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function StoriesAdmin({ data }) {
  const [draft, setDraft] = useState({ id: "", slug: "", author: "", title: "", photos: "", content: "" })
  const submit = () => {
    const item = {
      ...draft,
      id: draft.id || makeId("s"),
      photos: draft.photos ? draft.photos.split(",").map((t) => t.trim()) : [],
    }
    data.addStory(item)
    setDraft({ id: "", slug: "", author: "", title: "", photos: "", content: "" })
  }
  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-border bg-card p-4">
        <h2 className="font-serif text-lg">New / Edit Story</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <TextInput label="Title" value={draft.title} onChange={(v) => setDraft({ ...draft, title: v })} />
          <TextInput label="Slug" value={draft.slug} onChange={(v) => setDraft({ ...draft, slug: v })} />
          <TextInput label="Author" value={draft.author} onChange={(v) => setDraft({ ...draft, author: v })} />
          <TextInput
            label="Photos (comma URLs)"
            value={draft.photos}
            onChange={(v) => setDraft({ ...draft, photos: v })}
          />
        </div>
        <TextArea label="Content" value={draft.content} onChange={(v) => setDraft({ ...draft, content: v })} />
        <div className="flex justify-end">
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={submit}>
            Save Story
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-left">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.stories.map((s) => (
              <tr key={s.id} className="border-t border-border">
                <td className="p-2">{s.title}</td>
                <td className="p-2">{s.author}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button
                      className="rounded border border-border px-2 py-1"
                      onClick={() => setDraft({ ...s, photos: s.photos?.join(", ") || "" })}
                    >
                      Edit
                    </button>
                    <button
                      className="rounded border border-destructive text-destructive px-2 py-1"
                      onClick={() => data.deleteStory(s.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.stories.length === 0 && (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={3}>
                  No stories yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ReviewsAdmin({ data }) {
  const [draft, setDraft] = useState({ id: "", name: "", rating: 5, text: "", date: "" })
  const submit = () => {
    const item = { ...draft, id: draft.id || makeId("r") }
    data.addReview(item)
    setDraft({ id: "", name: "", rating: 5, text: "", date: "" })
  }
  return (
    <div className="grid gap-6">
      <div className="grid gap-3 rounded-lg border border-border bg-card p-4">
        <h2 className="font-serif text-lg">New / Edit Review</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <TextInput label="Name" value={draft.name} onChange={(v) => setDraft({ ...draft, name: v })} />
          <TextInput label="Rating (1–5)" value={draft.rating} onChange={(v) => setDraft({ ...draft, rating: v })} />
          <TextInput label="Date (YYYY-MM-DD)" value={draft.date} onChange={(v) => setDraft({ ...draft, date: v })} />
        </div>
        <TextArea label="Text" value={draft.text} onChange={(v) => setDraft({ ...draft, text: v })} />
        <div className="flex justify-end">
          <button className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground" onClick={submit}>
            Save Review
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/30 text-left">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Rating</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.reviews.map((r) => (
              <tr key={r.id} className="border-t border-border">
                <td className="p-2">{r.name}</td>
                <td className="p-2">{r.rating}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <button className="rounded border border-border px-2 py-1" onClick={() => setDraft(r)}>
                      Edit
                    </button>
                    <button
                      className="rounded border border-destructive text-destructive px-2 py-1"
                      onClick={() => data.deleteReview(r.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.reviews.length === 0 && (
              <tr>
                <td className="p-3 text-muted-foreground" colSpan={3}>
                  No reviews yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
