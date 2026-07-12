import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'button[app-round-button], a[app-round-button]',
  standalone: true,
  templateUrl: './round-button.html',
  styleUrl: './round-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundButton {
  size = input<'big' | 'small'>('small')
}
