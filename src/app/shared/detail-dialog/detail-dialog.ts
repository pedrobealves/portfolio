import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  effect,
  input,
  output,
  viewChild
} from '@angular/core'
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core'
import { faSolidXmark } from '@ng-icons/font-awesome/solid'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-detail-dialog',
  standalone: true,
  imports: [NgIconComponent, SvgIconComponent],
  viewProviders: [provideIcons({ faSolidXmark })],
  providers: [provideNgIconsConfig({ size: '1.56em' })],
  templateUrl: './detail-dialog.html',
  styleUrl: './detail-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailDialog {
  readonly title = input<string>('')
  readonly icon = input<string>('')
  readonly logo = input<string>('')
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
    const element = this.dialog().nativeElement
    if (event.target === element) element.close()
  }
}
