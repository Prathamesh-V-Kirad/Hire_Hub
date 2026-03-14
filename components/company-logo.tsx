"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CompanyLogoProps {
  src: string
  alt: string
  className?: string
}

export function CompanyLogo({ src, alt, className }: CompanyLogoProps) {
  const [hasError, setHasError] = React.useState(false)

  if (hasError) {
    return (
      <div className={cn("h-20 w-20 rounded-xl bg-secondary flex items-center justify-center", className)}>
        <span className="text-2xl font-bold text-muted-foreground">
          {alt[0]}
        </span>
      </div>
    )
  }

  return (
    <div className={cn("h-20 w-20 rounded-xl bg-secondary flex items-center justify-center overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-contain p-2"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
