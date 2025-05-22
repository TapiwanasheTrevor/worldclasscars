import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  image: string
}

export default function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
  return (
    <Card className="bg-zinc-900/50 border border-white/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 rounded-xl overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">{title}</h3>
        <p className="text-zinc-400 mb-6 flex-1">{description}</p>
        <Button
          variant="ghost"
          className="justify-between text-red-500 hover:text-red-400 hover:bg-red-500/10 p-0 mt-auto"
        >
          <span>Learn More</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
