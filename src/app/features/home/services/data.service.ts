import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable, Signal, inject, signal } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { catchError, of } from 'rxjs'
import { Education } from '../models/education.model'
import { Profile } from '../models/profile.model'
import { Project } from '../models/project.model'
import { Skill } from '../models/skill.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient)
  private failed = signal(false)

  readonly loadFailed = this.failed.asReadonly()
  readonly profile = this.fetchJson<Profile | undefined>('profile.json', undefined)
  readonly educations = this.fetchJson<Education[]>('education.json', [])
  readonly skills = this.fetchJson<Skill[]>('skills.json', [])
  readonly projects = this.fetchJson<Project[]>('projects.json', [])

  private fetchJson<T>(file: string, fallback: T): Signal<T> {
    const content$ = this.http.get<T>(`assets/${file}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(`Falha ao carregar ${file}`, error)
        this.failed.set(true)
        return of(fallback)
      })
    )
    return toSignal(content$, { initialValue: fallback })
  }
}
