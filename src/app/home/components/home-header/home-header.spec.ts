import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HomeHeader } from './home-header'

async function renderHeader(locale: string): Promise<ComponentFixture<HomeHeader>> {
  TestBed.configureTestingModule({
    imports: [HomeHeader],
    providers: [
      provideHttpClient(withFetch()),
      provideHttpClientTesting(),
      { provide: LOCALE_ID, useValue: locale }
    ]
  })
  const http = TestBed.inject(HttpTestingController)
  const fixture = TestBed.createComponent(HomeHeader)
  TestBed.tick()
  http.expectOne(`assets/i18n/${locale}/profile.json`).flush({
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
  return fixture
}

describe('HomeHeader', () => {
  it('renders the profile headline under the name', async () => {
    const fixture = await renderHeader('pt-BR')
    const text = (fixture.nativeElement as HTMLElement).textContent ?? ''
    expect(text).toContain('AI Software Engineer')
  })

  it('points the switcher at the en build labelled EN under pt-BR', async () => {
    const fixture = await renderHeader('pt-BR')
    const link = (fixture.nativeElement as HTMLElement).querySelector('.header__lang')
    expect(link?.getAttribute('href')).toBe('/en/')
    expect(link?.textContent?.trim()).toBe('EN')
  })

  it('points the switcher at the pt build labelled PT under en', async () => {
    const fixture = await renderHeader('en')
    const link = (fixture.nativeElement as HTMLElement).querySelector('.header__lang')
    expect(link?.getAttribute('href')).toBe('/')
    expect(link?.textContent?.trim()).toBe('PT')
  })
})
