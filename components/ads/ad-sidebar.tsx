"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AdSidebarProps {
  className?: string
  size?: "small" | "medium" | "large"
  sticky?: boolean
}

export function AdSidebar({ className, size = "large", sticky = true }: AdSidebarProps) {
  const [isLoaded, setIsLoaded] = React.useState(false)

  // Lazy load the ad
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const sizeClasses = {
    small: "h-[250px] w-[300px]",
    medium: "h-[300px] w-[300px]",
    large: "h-[600px] w-[300px]",
  }

  const sizeLabels = {
    small: "300 x 250 Medium Rectangle",
    medium: "300 x 300 Square",
    large: "300 x 600 Half Page",
  }

  return (
    <div
      className={cn(
        "hidden lg:block transition-all duration-300",
        sticky && "sticky top-24",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/30",
          sizeClasses[size]
        )}
      >
        <div className="text-center p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Advertisement
          </p>
          <p className="text-sm text-muted-foreground/70 mt-1">
            {sizeLabels[size]}
          </p>
        </div>
      </div>
    </div>
  )
}
