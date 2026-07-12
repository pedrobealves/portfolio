import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { appConfig } from './app.config'
import { HomeComponent } from './features/home/pages/home/home.component'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: appConfig.providers,
    }).compileComponents()
  })

  it('creates the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    expect(fixture.componentInstance).toBeTruthy()
  })

  it('renders the home page on the root route', async () => {
    const harness = await RouterTestingHarness.create()
    const home = await harness.navigateByUrl('/', HomeComponent)
    expect(home).toBeTruthy()
  })
})
