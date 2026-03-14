"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AdFooterProps {
  className?: string
}

export function AdFooter({ className }: AdFooterProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const adRef = React.useRef<HTMLDivElement>(null)

  // Lazy load using Intersection Observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsLoaded(true), 100)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "50px" }
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={adRef}
      className={cn(
        "w-full bg-muted/30 border-t border-border py-4 transition-all duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[250px] max-w-[970px] w-full mx-auto items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/50">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Advertisement
            </p>
            <p className="text-sm text-muted-foreground/70">
              970 x 250 Billboard
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
