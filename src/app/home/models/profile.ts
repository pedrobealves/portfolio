export type SocialLink = {
  name: string
  href: string
  icon: string
}

export type Profile = {
  name: string
  user: string
  description: string
  email: string
  repository: string
  socialLinks: SocialLink[]
}
