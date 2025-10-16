"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

const DataContext = createContext(null)

const seedBlogs = [
  {
    id: "b1",
    title: "Walking with the Bharwad Pastoralists",
    slug: "bharwad-pastoral-life",
    excerpt: "A day across the salt pans and grasslands with Gujarat’s pastoral community.",
    coverImage: "/kutch-sunset.jpg",
    date: "2024-10-22",
    tags: ["Pastoral Life", "Gujarat", "Culture"],
    content: "We set out at dawn, the bells of the herd ringing softly. The Bharwad move with the land’s seasons...",
  },
  {
    id: "b2",
    title: "Rathwa Pithora: A Living Wall Art",
    slug: "rathwa-pithora-art",
    excerpt: "Inside homes where deities ride horses across freshly whitewashed walls.",
    coverImage: "/warli-art-gujarat.jpg",
    date: "2024-11-02",
    tags: ["Art", "Rathwa", "Culture"],
    content: "Pithora paintings are ceremonies first and artworks second, woven into ritual time...",
  },
  {
    id: "b3",
    title: "Respectful Photography in Tribal Regions",
    slug: "respectful-photography",
    excerpt: "Consent-first approach to making portraits and field notes.",
    coverImage: "/portrait-tribal.jpg",
    date: "2024-12-01",
    tags: ["Ethics", "Photography"],
    content: "The photograph is always a conversation. Ask, listen, share, and where possible, give back...",
  },
  {
    id: "b4",
    title: "Dang Festival Calendar",
    slug: "dang-festival-calendar",
    excerpt: "A month-by-month look at dances, fairs, and ceremonies.",
    coverImage: "/tribal-festival-gujarat.jpg",
    date: "2025-01-15",
    tags: ["Festivals", "Dang"],
    content: "From winter’s harvest songs to monsoon dances, the Dang calendar is a rhythm of community...",
  },
  {
    id: "b5",
    title: "Craft Traditions of Kutch",
    slug: "kutch-crafts",
    excerpt: "Weaving, block printing, and bell-making across artisan villages.",
    coverImage: "/kutch-1.jpg",
    date: "2025-02-10",
    tags: ["Crafts", "Kutch"],
    content: "We followed the copper clang through the alleys where bell-makers shape sound from metal...",
  },
  {
    id: "b6",
    title: "A Guide to Tribal Landscapes",
    slug: "tribal-landscapes",
    excerpt: "Grasslands, scrub forest, and riverine corridors shaping ways of life.",
    coverImage: "/dang-forest-2.jpg",
    date: "2025-03-12",
    tags: ["Landscapes"],
    content: "Terrain is teacher. Villages align with water, wind, and grazing routes...",
  },
]

const seedDestinations = [
  {
    id: "d1",
    name: "Dang Highlands",
    slug: "dang-highlands",
    region: "South Gujarat",
    tribe: "Dangi",
    summary: "Forest villages, monsoon dances, and sacred groves.",
    highlights: ["Village Walks", "Festival Visits", "Forest Trails"],
    images: ["/dang-forest-1.jpg", "/dang-forest-2.jpg"],
    bestTime: "Oct–Mar",
    ethicalNotes: "Always seek community consent for ceremonies. Avoid invasive photography.",
  },
  {
    id: "d2",
    name: "Anklav & Chhota Udepur",
    slug: "anklav-chhota-udepur",
    region: "Central Gujarat",
    tribe: "Rathwa",
    summary: "Pithora art, weekly haats, and seasonal rituals.",
    highlights: ["Pithora Painting", "Market Day", "River Walks"],
    images: ["/warli-art-gujarat.jpg", "/portrait-tribal.jpg"],
    bestTime: "Nov–Feb",
    ethicalNotes: "Treat Pithora as ceremony; follow local guidance.",
  },
  {
    id: "d3",
    name: "Banni Grasslands",
    slug: "banni-grasslands",
    region: "Kutch",
    tribe: "Bharwad & Maldhari",
    summary: "Pastoral life on the move with salt pans and grasslands.",
    highlights: ["Herding Days", "Salt Pans", "Craft Villages"],
    images: ["/kutch-salt-flats.jpg", "/kutch-2.jpg"],
    bestTime: "Dec–Feb",
    ethicalNotes: "Do not stress animals for photos; respect routes and timings.",
  },
]

const seedGallery = [
  {
    id: "g1",
    title: "Tribal Portrait",
    category: "People",
    src: "/portrait-tribal.jpg",
    exif: "50mm • f/2 • 1/250 • ISO 200",
  },
  {
    id: "g2",
    title: "Festival Dance",
    category: "Festivals",
    src: "/tribal-festival-gujarat.jpg",
    exif: "24mm • f/4 • 1/160 • ISO 800",
  },
  {
    id: "g3",
    title: "Craft Traditions",
    category: "Crafts",
    src: "/kutch-1.jpg",
    exif: "35mm • f/2.8 • 1/200 • ISO 400",
  },
  {
    id: "g4",
    title: "Landscapes",
    category: "Landscapes",
    src: "/kutch-sunset.jpg",
    exif: "28mm • f/8 • 1/400 • ISO 100",
  },
  {
    id: "g5",
    title: "Pastoral Life",
    category: "People",
    src: "/kutch-nomads.jpg",
    exif: "85mm • f/2 • 1/320 • ISO 200",
  },
  {
    id: "g6",
    title: "Forest Trail",
    category: "Landscapes",
    src: "/dang-forests-gujarat.jpg",
    exif: "24mm • f/5.6 • 1/200 • ISO 200",
  },
]

const seedStories = [
  {
    id: "s1",
    slug: "a-monsoon-visit",
    author: "Anika Sharma",
    title: "A Monsoon Visit to Dang",
    photos: ["/dang-forest-1.jpg"],
    content:
      "We arrived under a sky thick with rain. The village gathered for dance, and a grandmother taught me the rhythm...",
  },
  {
    id: "s2",
    slug: "learning-to-listen",
    author: "Marco Alves",
    title: "Learning to Listen in Banni",
    photos: ["/kutch-nomads.jpg"],
    content: "I thought I knew how to take pictures, but the herder’s silence taught me patience before the shutter...",
  },
]

const seedReviews = [
  { id: "r1", name: "Priya", rating: 5, text: "Thoughtful, respectful, and unforgettable.", date: "2025-04-01" },
  { id: "r2", name: "Ethan", rating: 5, text: "The best cultural travel experience I’ve had.", date: "2025-03-20" },
]

const STORAGE_KEY = "ri-data-v1"
const ADMIN_KEY = "tribal-admin"

export function DataProvider({ children }) {
  const [state, setState] = useState({
    blogs: seedBlogs,
    destinations: seedDestinations,
    gallery: seedGallery,
    stories: seedStories,
    reviews: seedReviews,
    inquiries: [],
  })
  const [isAdmin, setIsAdmin] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setState((s) => ({ ...s, ...JSON.parse(raw) }))
      const admin = sessionStorage.getItem("ri-admin") === "1"
      if (admin) setIsAdmin(true)
    } catch {}
  }, [])
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  const upsert = (collection, item) => {
    setState((s) => {
      const exists = s[collection].some((x) => x.id === item.id)
      const next = exists ? s[collection].map((x) => (x.id === item.id ? item : x)) : [item, ...s[collection]]
      return { ...s, [collection]: next }
    })
  }
  const remove = (collection, id) => setState((s) => ({ ...s, [collection]: s[collection].filter((x) => x.id !== id) }))

  const getBySlug = (collection, slug) => {
    const arr = state[collection] || []
    return arr.find((x) => x.slug === slug)
  }

  const login = (key) => {
    const ok = key === ADMIN_KEY
    setIsAdmin(ok)
    if (ok) sessionStorage.setItem("ri-admin", "1")
    return ok
  }
  const logout = () => {
    setIsAdmin(false)
    sessionStorage.removeItem("ri-admin")
  }

  const api = useMemo(
    () => ({
      // collections
      blogs: state.blogs,
      destinations: state.destinations,
      gallery: state.gallery,
      stories: state.stories,
      reviews: state.reviews,
      inquiries: state.inquiries,
      // helpers
      getBySlug,
      // CRUD
      addBlog: (item) => upsert("blogs", item),
      updateBlog: (item) => upsert("blogs", item),
      deleteBlog: (id) => remove("blogs", id),
      addDestination: (item) => upsert("destinations", item),
      updateDestination: (item) => upsert("destinations", item),
      deleteDestination: (id) => remove("destinations", id),
      addPhoto: (item) => upsert("gallery", item),
      updatePhoto: (item) => upsert("gallery", item),
      deletePhoto: (id) => remove("gallery", id),
      addStory: (item) => upsert("stories", item),
      updateStory: (item) => upsert("stories", item),
      deleteStory: (id) => remove("stories", id),
      addReview: (item) => upsert("reviews", item),
      updateReview: (item) => upsert("reviews", item),
      deleteReview: (id) => remove("reviews", id),
      addInquiry: (item) => setState((s) => ({ ...s, inquiries: [item, ...s.inquiries] })),
      // admin
      isAdmin,
      login,
      loginAdmin: login,
      logout,
      showAdminLogin,
      setShowAdminLogin,
    }),
    [state, isAdmin, showAdminLogin],
  )

  return <DataContext.Provider value={api}>{children}</DataContext.Provider>
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error("useData must be used within DataProvider")
  return ctx
}
