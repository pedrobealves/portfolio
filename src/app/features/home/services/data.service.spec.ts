import { provideHttpClient, withXhr } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { vi } from 'vitest'
import { DataService } from './data.service'

const CONTENT_FILES = ['profile.json', 'education.json', 'skills.json', 'projects.json']

describe('DataService', () => {
  let service: DataService
  let http: HttpTestingController

  const flushAllExcept = (file: string) => {
    CONTENT_FILES.filter((name) => name !== file).forEach((name) =>
      http.expectOne(`assets/${name}`).flush([])
    )
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withXhr()), provideHttpClientTesting()]
    })
    service = TestBed.inject(DataService)
    http = TestBed.inject(HttpTestingController)
  })

  afterEach(() => http.verify())

  it('serves each content file from a single cached request', () => {
    const projects = [
      { title: 'ng+', year: '2023', description: '', image: '', technologies: [] }
    ]
    http.expectOne('assets/projects.json').flush(projects)
    flushAllExcept('projects.json')
    expect(service.projects()).toEqual(projects)
    expect(service.projects()).toEqual(projects)
  })

  it('falls back to empty content and flags failure when a request errors', () => {
    vi.spyOn(console, 'error')
    http.expectOne('assets/skills.json').flush('erro', { status: 500, statusText: 'Server Error' })
    flushAllExcept('skills.json')
    expect(service.skills()).toEqual([])
    expect(service.loadFailed()).toBe(true)
    expect(console.error).toHaveBeenCalled()
  })
})
