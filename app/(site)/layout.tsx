import type React from "react"
import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <MainNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
