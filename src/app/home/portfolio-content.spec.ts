import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { vi } from 'vitest'
import { PortfolioContent } from './portfolio-content'

const CONTENT_FILES = [
  'profile.json',
  'education.json',
  'skills.json',
  'projects.json',
  'experience.json'
]
const url = (file: string) => `assets/i18n/pt-BR/${file}`

describe('PortfolioContent', () => {
  let service: PortfolioContent
  let http: HttpTestingController

  const flushAllExcept = (file: string) => {
    CONTENT_FILES.filter((name) => name !== file).forEach((name) =>
      http.expectOne(url(name)).flush([])
    )
  }

  const whenStable = () => TestBed.inject(ApplicationRef).whenStable()

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    service = TestBed.inject(PortfolioContent)
    http = TestBed.inject(HttpTestingController)
    TestBed.tick()
  })

  afterEach(() => http.verify())

  it('serves each content file from the locale folder', async () => {
    const projects = [{ title: 'ng+', year: '2023', description: '', image: '', technologies: [] }]
    http.expectOne(url('projects.json')).flush(projects)
    flushAllExcept('projects.json')
    await whenStable()
    expect(service.projects.value()).toEqual(projects)
  })

  it('falls back to empty content and flags failure when a request errors', async () => {
    vi.spyOn(console, 'error')
    http.expectOne(url('skills.json')).flush('erro', { status: 500, statusText: 'Server Error' })
    flushAllExcept('skills.json')
    await whenStable()
    expect(service.skills.value()).toEqual([])
    expect(service.loadFailed()).toBe(true)
    expect(console.error).toHaveBeenCalled()
  })

  it('reloads only the failed content and clears the failure flag on success', async () => {
    vi.spyOn(console, 'error')
    http.expectOne(url('skills.json')).flush('erro', { status: 500, statusText: 'Server Error' })
    flushAllExcept('skills.json')
    await whenStable()
    expect(service.loadFailed()).toBe(true)

    service.retry()
    TestBed.tick()
    const skills = [{ name: 'Angular' }]
    http.expectOne(url('skills.json')).flush(skills)
    await whenStable()
    expect(service.skills.value()).toEqual(skills)
    expect(service.loadFailed()).toBe(false)
  })
})
