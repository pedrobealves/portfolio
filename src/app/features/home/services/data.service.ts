import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Profile } from '../models/profile.model'
import { Education } from '../models/education.model'
import { Skill } from '../models/skill.model'
import { Project } from '../models/project.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient)
  private baseUrl = 'assets'

  getProfile() {
    return this.http.get<Profile>(`${this.baseUrl}/profile.json`)
  }

  getEducation() {
    return this.http.get<Education[]>(`${this.baseUrl}/education.json`)
  }

  getSkills() {
    return this.http.get<Skill[]>(`${this.baseUrl}/skills.json`)
  }

  getProjects() {
    return this.http.get<Project[]>(`${this.baseUrl}/projects.json`)
  }
}
