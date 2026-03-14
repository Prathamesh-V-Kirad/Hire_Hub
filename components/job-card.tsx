"use client"

import * as React from "react"
import Link from "next/link"
import { MapPin, Clock, Bookmark, BookmarkCheck, IndianRupee, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Job } from "@/lib/data"

interface JobCardProps {
  job: Job
  variant?: "default" | "compact"
}

export function JobCard({ job, variant = "default" }: JobCardProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false)

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
  }

  return (
    <Link href={`/jobs/${job.slug}`}>
      <Card className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 bg-card",
        variant === "compact" ? "p-4" : ""
      )}>
        <CardContent className={cn(
          "p-0",
          variant === "default" ? "p-6" : ""
        )}>
          <div className="flex gap-4">
            {/* Company Logo */}
            <div className="shrink-0">
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="h-full w-full object-contain p-1"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-lg font-bold text-muted-foreground">${job.company[0]}</span>`
                  }}
                />
              </div>
            </div>

            {/* Job Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 h-8 w-8"
                  onClick={toggleBookmark}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-4 w-4 text-primary fill-primary" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <IndianRupee className="h-3.5 w-3.5" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{job.postedAt}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary" className="text-xs">
                  {job.type}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-xs",
                    job.mode === "Remote" && "border-accent text-accent",
                    job.mode === "Hybrid" && "border-primary text-primary"
                  )}
                >
                  {job.mode}
                </Badge>
                {job.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Apply Button - Shows on hover for default variant */}
          {variant === "default" && (
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Experience: {job.experience}
              </span>
              <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
              </Button>
            </div>
          )}
        </CardContent>

        {/* Featured Badge */}
        {job.featured && (
          <div className="absolute top-0 right-0">
            <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
              Featured
            </div>
          </div>
        )}
      </Card>
    </Link>
  )
}
