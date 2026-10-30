"use client"

import { useState, type MouseEvent } from "react"
import Link from "next/link"
import { profile } from "~/data/portfolio"

const links = [
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/#education" },
  { label: "Contact", to: "/#contact" },
]

// Link does nothing when the URL already has this hash, so after scrolling away
// from a section, clicking its link again has to scroll back by hand.
function rescrollToSameHash(event: MouseEvent<HTMLAnchorElement>) {
  if (event.ctrlKey || event.metaKey || event.shiftKey) return
  const { hash, pathname } = event.currentTarget
  if (!hash || hash !== window.location.hash || pathname !== window.location.pathname) return
  const section = document.getElementById(hash.slice(1))
  if (!section) return
  event.preventDefault()
  section.scrollIntoView()
}

export default function TheNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/80 backdrop-blur">
      <nav className="container-px mx-auto flex max-w-content items-center justify-between py-4">
        <Link href="/#top" className="font-mono text-sm font-semibold tracking-wide text-ink-100" onClick={rescrollToSameHash}>
          <span className="text-accent">&gt;</span> {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="text-sm text-ink-300 transition-colors hover:text-accent"
              onClick={rescrollToSameHash}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener"
            className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Resume
          </a>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 text-ink-200 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 md:hidden">
          <div className="container-px mx-auto flex max-w-content flex-col gap-1 py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className="rounded-md px-2 py-2 text-sm text-ink-300 hover:bg-ink-800 hover:text-accent"
                onClick={(event) => {
                  setOpen(false)
                  rescrollToSameHash(event)
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              className="rounded-md px-2 py-2 text-sm text-accent hover:bg-ink-800"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
