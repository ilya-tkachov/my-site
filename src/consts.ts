import type { Site, Metadata, Socials } from "@types"

export const SITE: Site = {
  NAME: "Ilya Tkachov",
  EMAIL: "ilya.tkachov@hotmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
}

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home",
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "blog.",
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "work.",
}

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/ilya-tkachov",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ilyatkachov/",
  },
]
