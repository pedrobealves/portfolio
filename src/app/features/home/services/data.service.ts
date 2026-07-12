import { httpResource } from '@angular/common/http'
import { Injectable, Signal, computed, effect } from '@angular/core'
import { Education } from '../models/education.model'
import { Profile } from '../models/profile.model'
import { Project } from '../models/project.model'
import { Skill } from '../models/skill.model'

type ContentResource<T> = {
  value: Signal<T>
  error: Signal<unknown>
  reload(): boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly profile = this.contentResource<Profile | undefined>('profile.json', undefined)
  readonly educations = this.contentResource<Education[]>('education.json', [])
  readonly skills = this.contentResource<Skill[]>('skills.json', [])
  readonly projects = this.contentResource<Project[]>('projects.json', [])

  private readonly contents = [this.profile, this.educations, this.skills, this.projects]

  readonly loadFailed = computed(() => this.contents.some((content) => content.error() !== undefined))

  constructor() {
    effect(() => {
      this.contents
        .filter((content) => content.error() !== undefined)
        .forEach((content) => console.error('Falha ao carregar conteúdo', content.error()))
    })
  }

  retry() {
    this.contents.filter((content) => content.error() !== undefined).forEach((content) => content.reload())
  }

  private contentResource<T>(file: string, fallback: T): ContentResource<T> {
    const resource = httpResource<T>(() => `assets/${file}`)
    return {
      value: computed(() => (resource.hasValue() ? resource.value() : fallback)),
      error: resource.error,
      reload: () => resource.reload()
    }
  }
}
