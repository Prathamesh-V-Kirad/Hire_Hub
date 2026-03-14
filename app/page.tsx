import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { JobCategoryCard } from "@/components/job-category-card"
import { JobCard } from "@/components/job-card"
import { FeaturedJobsCarousel } from "@/components/featured-jobs-carousel"
import { NewsletterCard } from "@/components/newsletter-card"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"
import { jobs, categories } from "@/lib/data"
import { AdBannerTop, AdBannerVertical, AdInline, AdFooter } from "@/components/ads"

export default function HomePage() {
  const featuredJobs = jobs.filter(job => job.featured)
  const latestJobs = jobs.slice(0, 6)
  const trendingJobs = jobs.filter(job => job.tags.includes('Fresher')).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Top Banner Ad */}
      <AdBannerTop />
      
      {/* Hero Section with Side Ads */}
      <div className="relative">
        {/* Desktop: 3-column grid with ads on sides */}
        <div className="hidden lg:grid lg:grid-cols-[160px_1fr_160px] lg:gap-4 lg:px-4 xl:gap-6 xl:px-6">
          {/* Left Ad - visible on lg screens */}
          <div className="flex justify-end pt-8">
            <AdBannerVertical position="left" sticky />
          </div>
          
          {/* Hero Content */}
          <Hero />
          
          {/* Right Ad - visible on lg screens */}
          <div className="flex justify-start pt-8">
            <AdBannerVertical position="right" sticky />
          </div>
        </div>

        {/* Tablet: 2-column grid with only right ad */}
        <div className="hidden md:grid md:grid-cols-[1fr_160px] md:gap-4 md:px-4 lg:hidden">
          {/* Hero Content */}
          <Hero />
          
          {/* Right Ad only on tablet */}
          <div className="flex justify-start pt-8">
            <AdBannerVertical position="right" sticky />
          </div>
        </div>

        {/* Mobile: Hero only, ad below */}
        <div className="md:hidden">
          <Hero />
          
          {/* Mobile ad below hero */}
          <div className="px-4 py-4">
            <AdBannerVertical position="left" />
          </div>
        </div>
      </div>

      {/* Job Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Explore by Category
              </h2>
              <p className="mt-2 text-muted-foreground">
                Find the perfect job type that matches your career goals
              </p>
            </div>
            <Link href="/jobs">
              <Button variant="ghost" className="gap-2">
                View All Categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {categories.map((category) => (
              <JobCategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* Inline Ad */}
          <AdInline className="mt-10" variant="banner" />
        </div>
      </section>

      {/* Featured Jobs Carousel */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Featured Opportunities
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Hand-picked jobs from top companies
                </p>
              </div>
            </div>
          </div>

          <FeaturedJobsCarousel jobs={featuredJobs} />
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Latest Job Openings
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fresh opportunities added daily
              </p>
            </div>
            <Link href="/jobs">
              <Button variant="outline" className="gap-2">
                View All Jobs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Jobs */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  Trending for Freshers
                </h2>
                <p className="mt-1 text-muted-foreground">
                  Most popular jobs for new graduates
                </p>
              </div>
            </div>
            <Link href="/jobs?tags=Fresher">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {trendingJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <NewsletterCard />
        </div>
      </section>

      {/* Footer Ad */}
      <AdFooter />

      <Footer />
    </div>
  )
}
