const images = [
  { alt: "People", src: "/portrait-tribal-people.jpg" },
  { alt: "Festivals", src: "/tribal-festival.jpg" },
  { alt: "Crafts", src: "/tribal-crafts.jpg" },
  { alt: "Landscapes", src: "/tribal-landscapes.jpg" },
  { alt: "People", src: "/tribal-portrait.jpg" },
  { alt: "Crafts", src: "/placeholder.svg?height=460&width=600" },
]

export function MosaicGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="font-serif text-2xl md:text-3xl">Photo Stories</h2>
      <div className="mt-4 columns-2 gap-4 md:columns-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            className="mb-4 w-full break-inside-avoid rounded-lg border border-border object-cover"
          />
        ))}
      </div>
    </section>
  )
}
