"use client"

import Link from "next/link"
import { Building2, GraduationCap, Home, Landmark, Award, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const iconMap = {
  building: Building2,
  'graduation-cap': GraduationCap,
  home: Home,
  landmark: Landmark,
  award: Award,
}

interface JobCategoryCardProps {
  category: {
    id: string
    name: string
    description: string
    icon: string
    count: number
  }
}

export function JobCategoryCard({ category }: JobCategoryCardProps) {
  const Icon = iconMap[category.icon as keyof typeof iconMap] || Building2

  return (
    <Link href={`/jobs?category=${category.id}`}>
      <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 bg-card">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className={cn(
              "flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
              "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
            )}>
              <Icon className="h-6 w-6" />
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
          
          <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {category.description}
          </p>
          
          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">{category.count}</span>
            <span className="text-sm text-muted-foreground">openings</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
