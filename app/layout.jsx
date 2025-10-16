import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { Playfair_Display, Poppins } from "next/font/google"
import { Suspense } from "react"
import { DataProvider } from "@/context/data-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import AdminLogin from "@/components/admin-login"
import SecretAdminTrigger from "@/components/secret-admin-trigger"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Real India Tribal Journeys | Ethical Tribal Tourism in Gujarat",
  description:
    "Walk with tribes and experience real India. Curated destinations, respectful photography, festival visits, and craft journeys across Gujarat’s Dang, Kutch, and Rathwa regions.",
  keywords:
    "Gujarat tribal tourism, Dang forests, Kutch crafts, Rathwa Pithora art, ethical travel, responsible tourism India, pastoral life, community-based tourism",
  authors: [{ name: "Real India Tribal Journeys" }],
  openGraph: {
    title: "Real India Tribal Journeys",
    description:
      "Ethical, immersive journeys with tribal communities across Gujarat. Destinations, gallery, traveler stories, and blogs.",
    url: "https://real-india-tribal.example",
    siteName: "Real India Tribal Journeys",
    images: [{ url: "/kutch-sunset.jpg", width: 1200, height: 630, alt: "Kutch Sunset" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real India Tribal Journeys",
    description:
      "Ethical, immersive journeys with tribal communities across Gujarat. Destinations, gallery, traveler stories, and blogs.",
    images: ["/kutch-sunset.jpg"],
  },
  alternates: {
    canonical: "https://real-india-tribal.example",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <DataProvider>
          <Suspense fallback={<div className="px-4 py-10">Loading...</div>}>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AdminLogin />
            <SecretAdminTrigger />
            <Analytics />
          </Suspense>
        </DataProvider>
      </body>
    </html>
  )
}
