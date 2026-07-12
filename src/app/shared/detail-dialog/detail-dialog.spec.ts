import { Component, signal } from '@angular/core'
import { By } from '@angular/platform-browser'
import { TestBed } from '@angular/core/testing'
import { DetailDialog } from './detail-dialog'

@Component({
  imports: [DetailDialog],
  template: `<app-detail-dialog [open]="open()" title="Detalhe" (closed)="open.set(false)">
    <p>corpo</p>
  </app-detail-dialog>`
})
class Host {
  open = signal(false)
}

describe('DetailDialog', () => {
  it('opens the native dialog when open is set', () => {
    const fixture = TestBed.createComponent(Host)
    fixture.detectChanges()
    const dialog = fixture.nativeElement.querySelector('dialog') as HTMLDialogElement
    expect(dialog.open).toBe(false)
    fixture.componentInstance.open.set(true)
    fixture.detectChanges()
    expect(dialog.open).toBe(true)
    expect(dialog.textContent).toContain('corpo')
  })

  it('emits closed when the close button is clicked', () => {
    const fixture = TestBed.createComponent(Host)
    fixture.componentInstance.open.set(true)
    fixture.detectChanges()
    const button = fixture.nativeElement.querySelector('.dialog__close') as HTMLButtonElement
    button.click()
    fixture.detectChanges()
    expect(fixture.componentInstance.open()).toBe(false)
  })

  it('emits closed exactly once when the close button is clicked', () => {
    const fixture = TestBed.createComponent(Host)
    fixture.componentInstance.open.set(true)
    fixture.detectChanges()
    const dialog = fixture.debugElement.query(By.directive(DetailDialog)).componentInstance as DetailDialog
    let emissions = 0
    dialog.closed.subscribe(() => (emissions += 1))
    const button = fixture.nativeElement.querySelector('.dialog__close') as HTMLButtonElement
    button.click()
    fixture.detectChanges()
    expect(emissions).toBe(1)
  })

  it('emits closed exactly once when the backdrop is clicked', () => {
    const fixture = TestBed.createComponent(Host)
    fixture.componentInstance.open.set(true)
    fixture.detectChanges()
    const dialog = fixture.debugElement.query(By.directive(DetailDialog)).componentInstance as DetailDialog
    let emissions = 0
    dialog.closed.subscribe(() => (emissions += 1))
    const element = fixture.nativeElement.querySelector('dialog') as HTMLDialogElement
    element.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    fixture.detectChanges()
    expect(emissions).toBe(1)
  })
})
