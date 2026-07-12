import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'button[app-round-button], a[app-round-button]',
  standalone: true,
  templateUrl: './round-button.component.html',
  styleUrl: './round-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoundButtonComponent {
  size = input<'big' | 'small'>('small')
}
