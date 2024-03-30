interface SocialMedia {
  links: {
    name: string
    href: string
    logo?: string
  }[]
}

export interface Profile {
  name: string
  description: string
  user: string
  socialMedias: SocialMedia
}
