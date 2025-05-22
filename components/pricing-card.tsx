import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface PricingCardProps {
  title: string
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ title, description, features, popular = false }: PricingCardProps) {
  return (
    <Card
      className={`${
        popular
          ? "bg-gradient-to-b from-zinc-900 to-black border-red-500/20 shadow-xl shadow-red-500/5"
          : "bg-zinc-900/50 border-white/5 hover:border-red-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
      } rounded-xl overflow-hidden h-full flex flex-col relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 left-0">
          <div className="flex justify-center -translate-y-1/2">
            <Badge className="bg-red-500 text-white border-0 px-4 py-1 text-sm font-medium">Most Popular</Badge>
          </div>
        </div>
      )}

      <CardHeader className={`${popular ? "pt-8" : "pt-6"} pb-6 text-center`}>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-red-500">Custom Pricing</span>
        </div>
        <p className="text-sm text-zinc-500 mt-2">Tailored to your specific needs</p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full ${popular ? "bg-red-500" : "bg-zinc-700"} flex items-center justify-center shrink-0 mt-0.5`}
              >
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-zinc-300">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pb-8">
        <Button
          className={`w-full ${
            popular
              ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white"
              : "bg-zinc-800 hover:bg-zinc-700 text-white"
          } rounded-full py-6`}
        >
          Get Quote
        </Button>
      </CardFooter>
    </Card>
  )
}