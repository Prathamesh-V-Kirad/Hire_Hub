"use client"

import * as React from "react"
import { X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export interface Filters {
  categories: string[]
  modes: string[]
  types: string[]
  experience: string[]
  locations: string[]
}

interface JobFilterSidebarProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  activeFiltersCount: number
}

const filterOptions = {
  categories: [
    { value: "off-campus", label: "Off Campus Jobs" },
    { value: "internship", label: "Internships" },
    { value: "work-from-home", label: "Work From Home" },
    { value: "government", label: "Government Jobs" },
  ],
  modes: [
    { value: "Remote", label: "Remote" },
    { value: "Onsite", label: "Onsite" },
    { value: "Hybrid", label: "Hybrid" },
  ],
  types: [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Internship", label: "Internship" },
    { value: "Contract", label: "Contract" },
  ],
  experience: [
    { value: "Fresher", label: "Fresher" },
    { value: "0-1 years", label: "0-1 years" },
    { value: "0-2 years", label: "0-2 years" },
    { value: "0-3 years", label: "0-3 years" },
  ],
  locations: [
    { value: "Bangalore", label: "Bangalore" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Delhi", label: "Delhi" },
    { value: "Remote", label: "Remote" },
    { value: "All India", label: "All India" },
  ],
}

function FilterContent({ filters, onFiltersChange }: Omit<JobFilterSidebarProps, 'activeFiltersCount'>) {
  const handleFilterChange = (
    category: keyof Filters,
    value: string,
    checked: boolean
  ) => {
    const newFilters = { ...filters }
    if (checked) {
      newFilters[category] = [...newFilters[category], value]
    } else {
      newFilters[category] = newFilters[category].filter((v) => v !== value)
    }
    onFiltersChange(newFilters)
  }

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      modes: [],
      types: [],
      experience: [],
      locations: [],
    })
  }

  const hasActiveFilters = Object.values(filters).some((f) => f.length > 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold text-foreground">Filters</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(filters).map(([category, values]) =>
            values.map((value) => (
              <Badge
                key={`${category}-${value}`}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {value}
                <button
                  onClick={() =>
                    handleFilterChange(category as keyof Filters, value, false)
                  }
                  className="ml-1 rounded-full p-0.5 hover:bg-muted"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))
          )}
        </div>
      )}

      {/* Filter Accordions */}
      <Accordion type="multiple" defaultValue={["categories", "modes", "types"]} className="w-full">
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium">
            Job Category
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.categories.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${option.value}`}
                    checked={filters.categories.includes(option.value)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("categories", option.value, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`category-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Work Mode */}
        <AccordionItem value="modes">
          <AccordionTrigger className="text-sm font-medium">
            Work Mode
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.modes.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`mode-${option.value}`}
                    checked={filters.modes.includes(option.value)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("modes", option.value, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`mode-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Job Type */}
        <AccordionItem value="types">
          <AccordionTrigger className="text-sm font-medium">
            Job Type
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.types.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`type-${option.value}`}
                    checked={filters.types.includes(option.value)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("types", option.value, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`type-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Experience */}
        <AccordionItem value="experience">
          <AccordionTrigger className="text-sm font-medium">
            Experience Level
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.experience.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`exp-${option.value}`}
                    checked={filters.experience.includes(option.value)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("experience", option.value, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`exp-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Locations */}
        <AccordionItem value="locations">
          <AccordionTrigger className="text-sm font-medium">
            Location
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {filterOptions.locations.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`loc-${option.value}`}
                    checked={filters.locations.includes(option.value)}
                    onCheckedChange={(checked) =>
                      handleFilterChange("locations", option.value, !!checked)
                    }
                  />
                  <Label
                    htmlFor={`loc-${option.value}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export function JobFilterSidebar({ filters, onFiltersChange, activeFiltersCount }: JobFilterSidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-20 rounded-xl border border-border bg-card p-6">
          <FilterContent filters={filters} onFiltersChange={onFiltersChange} />
        </div>
      </aside>

      {/* Mobile Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 flex items-center justify-center">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-6">
            <SheetTitle>Filter Jobs</SheetTitle>
          </SheetHeader>
          <FilterContent filters={filters} onFiltersChange={onFiltersChange} />
        </SheetContent>
      </Sheet>
    </>
  )
}
