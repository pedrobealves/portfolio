import { Component, signal } from '@angular/core'
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
})
