"use client"

import { useEffect, useState } from "react"

// What the ENGINOS gateway serves at /.enginos/sites.json: every project
// mounted under the domain, by category. Only there when the site is
// opened through the gateway (knllabs.dev), so the section stays hidden
// anywhere else.
type SiteListing = {
  domain: string
  categories: {
    name: string
    url: string
    projects: {
      name: string
      url: string
      repo: string
      repoUrl: string
      description: string
      languages: string[]
    }[]
  }[]
}

const SITES_URL = "/.enginos/sites.json"

export default function LiveProjects() {
  const [listing, setListing] = useState<SiteListing | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(SITES_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: SiteListing | null) => {
        if (!cancelled && data?.categories) setListing(data)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  const categories = listing?.categories.filter((c) => c.projects.length > 0) ?? []
  if (categories.length === 0) return null

  return (
    <div className="mt-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-mono text-sm text-ink-200">Live on {listing?.domain}</h3>
        <span className="font-mono text-xs text-ink-400">running now, try them</span>
      </div>

      <div className="mt-6 space-y-8">
        {categories.map((category) => (
          <div key={category.name}>
            <a
              href={category.url}
              className="font-mono text-xs uppercase tracking-wider text-accent transition-colors hover:text-accent-soft"
            >
              {category.name}
            </a>
            <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {category.projects.map((project) => (
                <article
                  key={project.url}
                  className="group flex flex-col rounded-lg border border-ink-800 bg-ink-900/50 p-5 transition-colors hover:border-accent/40"
                >
                  <a href={project.url} className="flex items-center gap-2">
                    <span className="h-2 w-2 flex-shrink-0 rounded-full bg-accent" aria-hidden />
                    <h4 className="truncate font-semibold text-ink-100 transition-colors group-hover:text-accent">
                      {project.name}
                    </h4>
                  </a>
                  {project.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-300">{project.description}</p>
                  )}
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    {project.languages.slice(0, 3).map((language) => (
                      <span key={language} className="rounded-full bg-ink-800 px-3 py-1 font-mono text-[11px] text-ink-300">
                        {language}
                      </span>
                    ))}
                    <span className="ml-auto flex gap-3 font-mono text-xs">
                      <a href={project.url} className="text-accent transition-colors hover:text-accent-soft">
                        Open &rarr;
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener"
                        className="text-ink-400 transition-colors hover:text-accent"
                      >
                        Code
                      </a>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
