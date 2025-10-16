import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { TopExperiences } from "@/components/top-experiences"
import { MapGujarat } from "@/components/map-gujarat"
import { BlogTeasers } from "@/components/blog-teasers"
import { MosaicGallery } from "@/components/mosaic-gallery"
import { TestimonialsStrip } from "@/components/testimonials-strip"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <TopExperiences />
      <MapGujarat />
      <BlogTeasers />
      <MosaicGallery />
      <TestimonialsStrip />
    </>
  )
}
