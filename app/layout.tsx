import type { Metadata } from "next"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  metadataBase: new URL("https://iamrobin.dev"),
  title: "Robin Singh | AI Backend Engineer",
  description:
    "AI Backend Engineer building production-grade LLM infrastructure, agentic workflows, and high-throughput microservices.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Robin Singh | AI Backend Engineer",
    description:
      "Production LLM infrastructure, agentic workflows, and high-throughput microservices.",
    url: "/",
    siteName: "Robin Singh",
    images: [{ url: "/og-image.png", width: 1734, height: 907, alt: "Robin Singh, AI Backend Engineer" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Singh | AI Backend Engineer",
    description:
      "Production LLM infrastructure, agentic workflows, and high-throughput microservices.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
