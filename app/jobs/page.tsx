"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Search, Briefcase, Loader2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { JobFilterSidebar, type Filters } from "@/components/job-filter-sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { jobs as allJobs } from "@/lib/data"
import { AdBannerTop, AdSidebar, AdInline, AdFooter } from "@/components/ads"

const JOBS_PER_PAGE = 9

export default function JobsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")
  const initialSearch = searchParams.get("search")

  const [searchQuery, setSearchQuery] = React.useState(initialSearch || "")
  const [sortBy, setSortBy] = React.useState("latest")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isLoading, setIsLoading] = React.useState(false)
  const [filters, setFilters] = React.useState<Filters>({
    categories: initialCategory ? [initialCategory] : [],
    modes: [],
    types: [],
    experience: [],
    locations: [],
  })

  // Filter jobs based on all criteria
  const filteredJobs = React.useMemo(() => {
    let result = [...allJobs]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.skills.some((skill) => skill.toLowerCase().includes(query)) ||
          job.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((job) => filters.categories.includes(job.category))
    }

    // Mode filter
    if (filters.modes.length > 0) {
      result = result.filter((job) => filters.modes.includes(job.mode))
    }

    // Type filter
    if (filters.types.length > 0) {
      result = result.filter((job) => filters.types.includes(job.type))
    }

    // Experience filter
    if (filters.experience.length > 0) {
      result = result.filter((job) =>
        filters.experience.some(
          (exp) =>
            job.experience.toLowerCase().includes(exp.toLowerCase()) ||
            (exp === "Fresher" && job.tags.includes("Fresher"))
        )
      )
    }

    // Location filter
    if (filters.locations.length > 0) {
      result = result.filter((job) =>
        filters.locations.some((loc) =>
          job.location.toLowerCase().includes(loc.toLowerCase())
        )
      )
    }

    // Sorting
    switch (sortBy) {
      case "latest":
        // Jobs are already sorted by latest
        break
      case "salary-high":
        result.sort((a, b) => {
          const aNum = parseInt(a.salary.replace(/[^0-9]/g, "")) || 0
          const bNum = parseInt(b.salary.replace(/[^0-9]/g, "")) || 0
          return bNum - aNum
        })
        break
      case "salary-low":
        result.sort((a, b) => {
          const aNum = parseInt(a.salary.replace(/[^0-9]/g, "")) || 0
          const bNum = parseInt(b.salary.replace(/[^0-9]/g, "")) || 0
          return aNum - bNum
        })
        break
    }

    return result
  }, [searchQuery, filters, sortBy])

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  )

  // Count active filters
  const activeFiltersCount = Object.values(filters).reduce(
    (acc, arr) => acc + arr.length,
    0
  )

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [filters, searchQuery, sortBy])

  // Simulate loading
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 500)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Top Banner Ad */}
      <AdBannerTop />

      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background border-b border-border">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                Browse Jobs
              </h1>
              <p className="text-muted-foreground">
                {filteredJobs.length} jobs found
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, company, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Search"
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <JobFilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              activeFiltersCount={activeFiltersCount}
            />
            {/* Sidebar Ad */}
            <AdSidebar size="medium" />
          </div>

          {/* Jobs Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Showing</span>
                <Badge variant="secondary">
                  {(currentPage - 1) * JOBS_PER_PAGE + 1}-
                  {Math.min(currentPage * JOBS_PER_PAGE, filteredJobs.length)}
                </Badge>
                <span>of {filteredJobs.length} jobs</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                    <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Cards */}
            {paginatedJobs.length > 0 ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {paginatedJobs.map((job, index) => (
                    <React.Fragment key={job.id}>
                      <JobCard job={job} />
                      {/* Insert inline ad after every 6th job */}
                      {index === 5 && paginatedJobs.length > 6 && (
                        <div className="md:col-span-2 xl:col-span-3">
                          <AdInline variant="banner" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum: number
                        if (totalPages <= 5) {
                          pageNum = i + 1
                        } else if (currentPage <= 3) {
                          pageNum = i + 1
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i
                        } else {
                          pageNum = currentPage - 2 + i
                        }
                        return (
                          <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setCurrentPage(pageNum)}
                            className="w-9"
                          >
                            {pageNum}
                          </Button>
                        )
                      })}
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No jobs found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setFilters({
                      categories: [],
                      modes: [],
                      types: [],
                      experience: [],
                      locations: [],
                    })
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Ad */}
      <AdFooter />

      <Footer />
    </div>
  )
}
