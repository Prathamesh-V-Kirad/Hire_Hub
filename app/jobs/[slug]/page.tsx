import { notFound } from "next/navigation"
import Link from "next/link"
import { 
  MapPin, 
  IndianRupee, 
  Clock, 
  Building2, 
  GraduationCap, 
  Briefcase,
  Calendar,
  Users,
  ExternalLink,
  Share2,
  Bookmark,
  ArrowLeft,
  CheckCircle2,
  Twitter,
  Linkedin,
  Copy
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JobCard } from "@/components/job-card"
import { CompanyLogo } from "@/components/company-logo"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { jobs } from "@/lib/data"
import type { Metadata } from "next"
import { AdBannerTop, AdSidebar, AdInline, AdFooter } from "@/components/ads"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const job = jobs.find(j => j.slug === slug)
  
  if (!job) {
    return {
      title: "Job Not Found | HireHub"
    }
  }

  return {
    title: `${job.title} at ${job.company} | HireHub`,
    description: job.description,
  }
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export default async function JobDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const job = jobs.find(j => j.slug === slug)

  if (!job) {
    notFound()
  }

  // Get similar jobs (same category, excluding current job)
  const similarJobs = jobs
    .filter(j => j.category === job.category && j.id !== job.id)
    .slice(0, 3)

  // JSON-LD structured data for SEO
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: new Date().toISOString(),
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
      logo: job.companyLogo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
      },
    },
    employmentType: job.type.toUpperCase().replace(" ", "_"),
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: {
        "@type": "QuantitativeValue",
        value: job.salary,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <Navbar />

      {/* Top Banner Ad - 728x90 */}
      <AdBannerTop />

      {/* 3-Column Grid Layout */}
      <main className="mx-auto max-w-[1280px] px-4 py-8">
        {/* Back Button */}
        <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Link>

        {/* Responsive grid: Mobile=1col, Tablet=2col (content+right), Desktop=3col */}
        <div className="grid gap-6 md:grid-cols-[1fr_320px] lg:grid-cols-[300px_1fr_300px]">
          {/* Left Sidebar - Ads Only (Desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <AdSidebar size="large" sticky={false} />
            </div>
          </aside>

          {/* Main Content */}
          <div className="space-y-6">
            {/* Header Card */}
            <Card className="rounded-xl shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="shrink-0">
                    <CompanyLogo src={job.companyLogo} alt={job.company} />
                  </div>

                  {/* Job Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {job.featured && (
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      )}
                      <Badge variant="secondary">{job.type}</Badge>
                      <Badge variant="outline" className={
                        job.mode === "Remote" ? "border-accent text-accent" :
                        job.mode === "Hybrid" ? "border-primary text-primary" : ""
                      }>
                        {job.mode}
                      </Badge>
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                      {job.title}
                    </h1>

                    <div className="flex items-center gap-2 text-lg text-muted-foreground mb-4">
                      <Building2 className="h-5 w-5" />
                      <span>{job.company}</span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <IndianRupee className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>Posted {job.postedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border">
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Apply Now
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Bookmark className="h-4 w-4" />
                    Save Job
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="lg" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Copy className="h-4 w-4" />
                        Copy Link
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </CardContent>
            </Card>

            {/* Inline Ad - 336x280 after Job Description */}
            <AdInline variant="rectangle" />

            {/* Responsibilities */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Collaborate with cross-functional teams to define, design, and ship new features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Work on bug fixing and improving application performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Continuously discover, evaluate, and implement new technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Maintain code quality and participate in code reviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Skills Required */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Criteria */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.qualifications.map((qual, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{qual}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">1</span>
                    <span className="text-muted-foreground">Click on the &quot;Apply Now&quot; button to visit the official application page</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">2</span>
                    <span className="text-muted-foreground">Create an account or log in to the company&apos;s career portal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">3</span>
                    <span className="text-muted-foreground">Fill out the application form with your details and upload your resume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">4</span>
                    <span className="text-muted-foreground">Submit your application and wait for the recruiter to contact you</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Job Meta Information Card - Mobile Only */}
            <Card className="rounded-xl shadow-sm md:hidden">
              <CardHeader>
                <CardTitle>Job Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <Badge variant="outline" className="capitalize">
                    {job.category.replace("-", " ")}
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="text-sm font-medium text-foreground">
                    {job.experience}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location</span>
                  <span className="text-sm font-medium text-foreground">
                    {job.location}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Salary</span>
                  <span className="text-sm font-medium text-foreground">
                    {job.salary}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Posted</span>
                  <span className="text-sm font-medium text-foreground">
                    {job.postedAt}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar (Tablet & Desktop) */}
          <aside className="hidden md:block">
            <div className="sticky top-24 space-y-6">
              {/* Job Meta Information Card */}
              <Card className="rounded-xl shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Job Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <Badge variant="outline" className="capitalize text-xs">
                      {job.category.replace("-", " ")}
                    </Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium text-foreground">
                      {job.experience}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium text-foreground text-right max-w-[120px] truncate">
                      {job.location}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-medium text-foreground">
                      {job.salary}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Posted</span>
                    <span className="font-medium text-foreground">
                      {job.postedAt}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Work Mode</span>
                    <span className="font-medium text-foreground">
                      {job.mode}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Right Sidebar Ad - 300x600 */}
              <AdSidebar size="large" sticky={false} />
            </div>
          </aside>
        </div>

        {/* Similar Jobs - Full Width */}
        {similarJobs.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Similar Jobs</h2>
              <Link href={`/jobs?category=${job.category}`}>
                <Button variant="ghost">View All</Button>
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {similarJobs.map((similarJob) => (
                <JobCard key={similarJob.id} job={similarJob} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer Ad - 970x250 */}
      <AdFooter />

      <Footer />
    </div>
  )
}
