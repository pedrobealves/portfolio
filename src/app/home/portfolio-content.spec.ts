import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { vi } from 'vitest'
import { PortfolioContent } from './portfolio-content'

const CONTENT_FILES = ['profile.json', 'education.json', 'skills.json', 'projects.json']

describe('PortfolioContent', () => {
  let service: PortfolioContent
  let http: HttpTestingController

  const flushAllExcept = (file: string) => {
    CONTENT_FILES.filter((name) => name !== file).forEach((name) =>
      http.expectOne(`assets/${name}`).flush([])
    )
  }

  const whenStable = () => TestBed.inject(ApplicationRef).whenStable()

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()]
    })
    service = TestBed.inject(PortfolioContent)
    http = TestBed.inject(HttpTestingController)
    TestBed.tick()
  })

  afterEach(() => http.verify())

  it('serves each content file from a single cached request', async () => {
    const projects = [
      { title: 'ng+', year: '2023', description: '', image: '', technologies: [] }
    ]
    http.expectOne('assets/projects.json').flush(projects)
    flushAllExcept('projects.json')
    await whenStable()
    expect(service.projects.value()).toEqual(projects)
    expect(service.projects.value()).toEqual(projects)
  })

  it('falls back to empty content and flags failure when a request errors', async () => {
    vi.spyOn(console, 'error')
    http.expectOne('assets/skills.json').flush('erro', { status: 500, statusText: 'Server Error' })
    flushAllExcept('skills.json')
    await whenStable()
    expect(service.skills.value()).toEqual([])
    expect(service.loadFailed()).toBe(true)
    expect(console.error).toHaveBeenCalled()
  })

  it('reloads only the failed content and clears the failure flag on success', async () => {
    vi.spyOn(console, 'error')
    http.expectOne('assets/skills.json').flush('erro', { status: 500, statusText: 'Server Error' })
    flushAllExcept('skills.json')
    await whenStable()
    expect(service.loadFailed()).toBe(true)

    service.retry()
    TestBed.tick()
    const skills = [{ name: 'Angular' }]
    http.expectOne('assets/skills.json').flush(skills)
    await whenStable()
    expect(service.skills.value()).toEqual(skills)
    expect(service.loadFailed()).toBe(false)
  })
})
