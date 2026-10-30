import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "~/data/portfolio";
import "./globals.css";

const title = "Krunal Asari — Portfolio";
const description =
  "Krunal Asari — Mathematics and Computing undergraduate at IIT Goa. Machine learning, full-stack development, and systems projects.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  authors: [{ name: profile.name, url: profile.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description,
    firstName: "Krunal",
    lastName: "Asari",
    images: [{ url: "/profile.jpg", width: 800, height: 800, alt: profile.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
