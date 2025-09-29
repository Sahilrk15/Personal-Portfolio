import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sahil Kadbhane - Software Engineer & AI / ML Engineer",
  description:
    "Personal website of Sahil Kadbhane, an Software Engineer passionate about AI, Full Stack Development, Machine Learning, and AI Tools.",
  icons: {
    icon: "/SK_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
