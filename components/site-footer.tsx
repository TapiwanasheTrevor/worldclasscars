import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-16 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/logo.jpg"
                alt="Worldclass Car Rental"
                width={50}
                height={50}
                className="rounded-full ring-2 ring-white/20"
              />
            </div>
            <p className="text-zinc-400 mb-6">
              Providing premium luxury car rental services with unparalleled attention to detail and customer
              satisfaction.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/share/18kYJPUFTx/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/worldclass25?s=21&t=yFfKoyfIq0Yyyb13effO6A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/worldclass_carrental?igsh=MW0xMnBoaG9hb3dzNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Our Fleet", "Services", "Contact Us", "FAQs"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-zinc-400 hover:text-red-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Exotic Car Rentals",
                "Luxury Sedan Rentals",
                "Chauffeur Services",
                "Premium SUV Rentals",
                "Corporate Services",
                "Special Events",
              ].map((item, index) => (
                <li key={index}>
                  <Link href="/services" className="text-zinc-400 hover:text-red-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">31 Herbert Chitepo Ave, Belvedere, Harare</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">+263 77 999 9774</span>
              </li>
              <li className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-500 shrink-0"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-zinc-400">info@worldclasscars.co.zw</span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-red-500 shrink-0" />
                <span className="text-zinc-400">Mon-Fri: 8AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} World Class Car Rental. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="text-xs text-zinc-500 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
