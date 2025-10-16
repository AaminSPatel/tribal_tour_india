"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useData } from "@/context/data-context"

export default function BlogDetail() {
  const { slug } = useParams()
  const { getBySlug } = useData()
  const blog = getBySlug("blogs", slug)

  if (!blog) return <p>Blog not found.</p>

  return (
    <article className="prose prose-neutral max-w-3xl">
      <img
        src={blog.coverImage || "/placeholder.svg"}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-semibold">{blog.title}</h1>
      <p className="text-sm text-muted-foreground">
        {new Date(blog.date).toLocaleDateString()} · {blog.author}
      </p>
      <p className="mt-4">{blog.content}</p>
      <div className="mt-8">
        <Link href="/blogs" className="text-primary underline">
          Back to Blogs
        </Link>
      </div>
    </article>
  )
}
