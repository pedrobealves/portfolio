import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { provideAngularSvgIcon } from 'angular-svg-icon'
import { HomeExperience } from './home-experience'

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    company: 'Meerkat Coding',
    period: 'mai/2024 – atual',
    icon: 'faSolidRobot',
    achievements: ['Pipeline de OCR com agentes de IA.'],
    technologies: ['Python', 'LangGraph']
  }
]

describe('HomeExperience', () => {
  const setup = async () => {
    TestBed.configureTestingModule({
      imports: [HomeExperience],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        provideAngularSvgIcon(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    const http = TestBed.inject(HttpTestingController)
    const fixture = TestBed.createComponent(HomeExperience)
    TestBed.tick()
    http.expectOne('assets/i18n/pt-BR/experience.json').flush(EXPERIENCE)
    http.match(() => true).forEach((r) => r.flush([]))
    await TestBed.inject(ApplicationRef).whenStable()
    fixture.detectChanges()
    return fixture
  }

  it('renders one button per role', async () => {
    const fixture = await setup()
    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('.role')
    expect(buttons.length).toBe(1)
  })

  it('opens the dialog with role details when a role is clicked', async () => {
    const fixture = await setup()
    const button = (fixture.nativeElement as HTMLElement).querySelector('.role') as HTMLButtonElement
    button.click()
    fixture.detectChanges()
    const dialog = (fixture.nativeElement as HTMLElement).querySelector('dialog') as HTMLDialogElement
    expect(dialog.open).toBe(true)
    expect(dialog.textContent).toContain('Meerkat Coding')
    expect(dialog.textContent).toContain('Pipeline de OCR')
  })
})
