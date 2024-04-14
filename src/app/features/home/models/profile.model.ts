interface SocialMedia {
  links: {
    name: string
    href: string
    icon: string
  }[]
}

export interface Profile {
  name: string
  description: string
  user: string
  socialMedias: SocialMedia
}
