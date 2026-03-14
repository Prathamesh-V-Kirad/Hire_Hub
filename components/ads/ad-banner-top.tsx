"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AdBannerTopProps {
  className?: string
}

export function AdBannerTop({ className }: AdBannerTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLoaded, setIsLoaded] = React.useState(false)

  // Lazy load the ad after initial page render
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Simulate ad loading
      const loadTimer = setTimeout(() => setIsLoaded(true), 100)
      return () => clearTimeout(loadTimer)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "w-full bg-secondary/50 border-b border-border transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center py-3">
          <div className="flex h-[90px] w-full max-w-[728px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/50">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Advertisement
              </p>
              <p className="text-sm text-muted-foreground/70">
                728 x 90 Leaderboard
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close advertisement</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
