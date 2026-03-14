"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AdBannerVerticalProps {
  className?: string
  position?: "left" | "right"
  sticky?: boolean
}

export function AdBannerVertical({ 
  className, 
  position = "left",
  sticky = true 
}: AdBannerVerticalProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)

  // Lazy load the ad to not block page rendering
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        sticky && "lg:sticky lg:top-24",
        className
      )}
    >
      {/* Desktop: 160x600 skyscraper or 300x600 half page */}
      <div
        className={cn(
          "hidden lg:flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30",
          "w-[160px] h-[600px]"
        )}
      >
        <div className="text-center p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Advertisement
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            160 x 600
          </p>
          <p className="text-xs text-muted-foreground/70">
            Wide Skyscraper
          </p>
        </div>
      </div>

      {/* Mobile: 320x100 banner (shown below hero) */}
      <div
        className={cn(
          "lg:hidden flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30",
          "w-full h-[100px]"
        )}
      >
        <div className="text-center p-2">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Advertisement
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            320 x 100 Large Mobile Banner
          </p>
        </div>
      </div>
    </div>
  )
}
