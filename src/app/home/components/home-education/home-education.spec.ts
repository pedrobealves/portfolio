import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { provideAngularSvgIcon } from 'angular-svg-icon'
import { HomeEducation } from './home-education'

const EDUCATION = [
  {
    name: 'Pós-graduação em IA Generativa Aplicada',
    degree: 'Especialização',
    institution: 'UTFPR',
    start: '2026',
    end: '2028',
    logo: 'assets/images/utfpr.svg',
    description: 'Ciclo completo de IA generativa.'
  }
]

describe('HomeEducation', () => {
  const setup = async () => {
    TestBed.configureTestingModule({
      imports: [HomeEducation],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        provideAngularSvgIcon(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    const http = TestBed.inject(HttpTestingController)
    const fixture = TestBed.createComponent(HomeEducation)
    TestBed.tick()
    http.expectOne('assets/i18n/pt-BR/education.json').flush(EDUCATION)
    http.match(() => true).forEach((r) => r.flush([]))
    await TestBed.inject(ApplicationRef).whenStable()
    fixture.detectChanges()
    return fixture
  }

  it('renders one button per education', async () => {
    const fixture = await setup()
    const buttons = (fixture.nativeElement as HTMLElement).querySelectorAll('.course')
    expect(buttons.length).toBe(1)
  })

  it('opens the dialog with the course description when a logo is clicked', async () => {
    const fixture = await setup()
    const logo = (fixture.nativeElement as HTMLElement).querySelector('.course') as HTMLButtonElement
    logo.click()
    fixture.detectChanges()
    const dialog = (fixture.nativeElement as HTMLElement).querySelector('dialog') as HTMLDialogElement
    expect(dialog.open).toBe(true)
    expect(dialog.textContent).toContain('IA Generativa')
    expect(dialog.textContent).toContain('2026')
  })
})
