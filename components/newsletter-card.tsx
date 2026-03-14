"use client"

import * as React from "react"
import { Mail, Bell, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function NewsletterCard() {
  const [email, setEmail] = React.useState("")
  const [isSubscribed, setIsSubscribed] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <CardContent className="p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Bell className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
            Never Miss a Job Update
          </h2>
          <p className="mb-8 text-muted-foreground">
            Get the latest job openings, internships, and career tips delivered straight to your inbox. Join 10,000+ job seekers.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-accent/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-accent" />
              <span className="font-medium text-foreground">
                Thanks for subscribing! Check your inbox for confirmation.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 pl-12 bg-background border-border"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-8">
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
