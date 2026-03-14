"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, Briefcase, MapPin, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { featuredCompanies } from "@/lib/data"

const trendingSearches = [
  "Software Engineer",
  "Data Analyst",
  "Product Manager",
  "Frontend Developer",
  "Machine Learning",
]

export function Hero() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/jobs?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            Over 10,000+ jobs available
          </Badge>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">Find the Best Jobs for </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Freshers
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
            Discover off-campus drives, internships, work from home opportunities, and entry-level tech roles tailored for fresh graduates.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mx-auto mb-8 max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Job title, skills, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-12 text-base bg-card border-border shadow-sm"
                />
              </div>
              <Button type="submit" size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20">
                Search Jobs
              </Button>
            </div>
          </form>

          {/* Trending Searches */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-muted-foreground">Trending:</span>
            {trendingSearches.map((search) => (
              <Badge
                key={search}
                variant="outline"
                className="cursor-pointer hover:bg-secondary transition-colors"
                onClick={() => router.push(`/jobs?search=${encodeURIComponent(search)}`)}
              >
                {search}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Briefcase className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-sm text-muted-foreground">Active Jobs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">200+</span>
              </div>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Locations</p>
            </div>
          </div>

          {/* Trusted Companies */}
          <div className="pt-8 border-t border-border">
            <p className="mb-6 text-sm text-muted-foreground">Trusted by top companies</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {featuredCompanies.slice(0, 6).map((company) => (
                <div
                  key={company.name}
                  className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-8 w-8 object-contain rounded"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <span className="text-sm font-medium text-muted-foreground hidden sm:inline">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
