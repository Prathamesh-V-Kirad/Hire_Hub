"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AdInlineProps {
  className?: string
  variant?: "banner" | "rectangle"
}

export function AdInline({ className, variant = "banner" }: AdInlineProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const adRef = React.useRef<HTMLDivElement>(null)

  // Lazy load using Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Simulate ad loading delay
            setTimeout(() => setIsLoaded(true), 100)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "100px" }
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const variantClasses = {
    banner: "h-[100px] w-full",
    rectangle: "h-[280px] w-full max-w-[336px] mx-auto",
  }

  const variantLabels = {
    banner: "Inline Banner Ad",
    rectangle: "336 x 280 Large Rectangle",
  }

  return (
    <div
      ref={adRef}
      className={cn(
        "my-6 transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30",
          variantClasses[variant]
        )}
      >
        <div className="text-center p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Advertisement
          </p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            {variantLabels[variant]}
          </p>
        </div>
      </div>
    </div>
  )
}
