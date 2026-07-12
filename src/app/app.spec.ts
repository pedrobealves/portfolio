import { provideHttpClientTesting } from '@angular/common/http/testing'
import { DOCUMENT, LOCALE_ID } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { App } from './app'
import { appConfig } from './app.config'
import { Home } from './home/home'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        ...appConfig.providers,
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    }).compileComponents()
  })

  it('creates the app', () => {
    const fixture = TestBed.createComponent(App)
    expect(fixture.componentInstance).toBeTruthy()
  })

  it('sets the document language and localized title', () => {
    TestBed.createComponent(App)
    const doc = TestBed.inject(DOCUMENT)
    expect(doc.documentElement.lang).toBe('pt-BR')
    expect(TestBed.inject(Title).getTitle()).toContain('AI Software Engineer')
  })

  it('renders the home page on the root route', async () => {
    const harness = await RouterTestingHarness.create()
    const home = await harness.navigateByUrl('/', Home)
    expect(home).toBeTruthy()
  })
})
