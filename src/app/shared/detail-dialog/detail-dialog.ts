import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  input,
  output,
  viewChild
} from '@angular/core'

@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  templateUrl: './detail-dialog.html',
  styleUrl: './detail-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailDialog {
  readonly title = input<string>('')
  readonly open = input(false)
  readonly closed = output<void>()

  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog')

  constructor() {
    effect(() => {
      const element = this.dialog().nativeElement
      if (this.open()) {
        if (!element.open) element.showModal()
        return
      }
      if (element.open) element.close()
    })
  }

  protected onBackdrop(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) this.closed.emit()
  }
}
