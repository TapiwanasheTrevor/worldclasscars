import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

interface TeamMemberProps {
  name: string
  position: string
  image: string
  bio: string
}

export default function TeamMember({ name, position, image, bio }: TeamMemberProps) {
  return (
    <Card className="bg-zinc-900/50 border border-white/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 rounded-xl overflow-hidden h-full group">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-500 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-red-500 font-medium mb-4">{position}</p>
        <p className="text-zinc-400">{bio}</p>
      </CardContent>
    </Card>
  )
}
