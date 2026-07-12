import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { HomeHeader } from './home-header'

describe('HomeHeader', () => {
  it('renders the profile headline under the name', async () => {
    TestBed.configureTestingModule({
      imports: [HomeHeader],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    const http = TestBed.inject(HttpTestingController)
    const fixture = TestBed.createComponent(HomeHeader)
    TestBed.tick()
    http.expectOne('assets/i18n/pt-BR/profile.json').flush({
      name: 'Pedro Bernardi',
      user: 'p',
      description: 'AI Software Engineer · GenAI, LLMOps & AI Agents',
      email: 'e',
      repository: 'r',
      socialLinks: []
    })
    http.match(() => true).forEach((r) => r.flush([]))
    await TestBed.inject(ApplicationRef).whenStable()
    fixture.detectChanges()
    const text = (fixture.nativeElement as HTMLElement).textContent ?? ''
    expect(text).toContain('AI Software Engineer')
  })
})
