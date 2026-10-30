import TheNavbar from "~/components/TheNavbar"
import HeroSection from "~/components/HeroSection"
import AboutSection from "~/components/AboutSection"
import SkillsSection from "~/components/SkillsSection"
import ProjectsSection from "~/components/ProjectsSection"
import EducationSection from "~/components/EducationSection"
import ActivitiesSection from "~/components/ActivitiesSection"
import ContactSection from "~/components/ContactSection"
import TheFooter from "~/components/TheFooter"
import { profile } from "~/data/portfolio"

// Tells search engines this page is the profile of a specific person. Add the
// LinkedIn URL to sameAs once profile.links.linkedin is a real profile.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${profile.url}/`,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    url: `${profile.url}/`,
    image: `${profile.url}/profile.jpg`,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    affiliation: { "@type": "CollegeOrUniversity", name: profile.institute },
    sameAs: [profile.links.github, profile.links.kaggle],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <TheNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ActivitiesSection />
        <ContactSection />
      </main>
      <TheFooter />
    </div>
  )
}
