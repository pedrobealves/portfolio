import { provideHttpClientTesting } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { App } from './app'
import { appConfig } from './app.config'
import { Home } from './home/home'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [...appConfig.providers, provideHttpClientTesting()],
    }).compileComponents()
  })

  it('creates the app', () => {
    const fixture = TestBed.createComponent(App)
    expect(fixture.componentInstance).toBeTruthy()
  })

  it('renders the home page on the root route', async () => {
    const harness = await RouterTestingHarness.create()
    const home = await harness.navigateByUrl('/', Home)
    expect(home).toBeTruthy()
  })
})
