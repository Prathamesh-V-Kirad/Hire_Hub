import Link from "next/link"
import { Briefcase, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function JobNotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mx-auto h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6">
            <Briefcase className="h-10 w-10 text-muted-foreground" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-3">
            Job Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            This job posting may have been removed or is no longer available. 
            Don't worry, there are plenty more opportunities waiting for you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/jobs" className="gap-2">
                <Search className="h-4 w-4" />
                Browse All Jobs
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
