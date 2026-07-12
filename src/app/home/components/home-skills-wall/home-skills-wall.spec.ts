import { provideHttpClient, withFetch } from '@angular/common/http'
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing'
import { ApplicationRef, LOCALE_ID } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import { HomeSkillsWall } from './home-skills-wall'

describe('HomeSkillsWall', () => {
  it('hides a skill icon when the image fails to load', async () => {
    TestBed.configureTestingModule({
      imports: [HomeSkillsWall],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
        { provide: LOCALE_ID, useValue: 'pt-BR' }
      ]
    })
    const http = TestBed.inject(HttpTestingController)
    const fixture = TestBed.createComponent(HomeSkillsWall)
    TestBed.tick()
    http.expectOne('assets/i18n/pt-BR/skills.json').flush([{ name: 'LLMOps' }])
    http.match(() => true).forEach((r) => r.flush([]))
    await TestBed.inject(ApplicationRef).whenStable()
    fixture.detectChanges()
    const img = (fixture.nativeElement as HTMLElement).querySelector('img') as HTMLImageElement
    img.dispatchEvent(new Event('error'))
    fixture.detectChanges()
    expect(img.style.display).toBe('none')
  })
})
