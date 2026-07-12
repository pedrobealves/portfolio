import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-card-button',
  standalone: true,
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent {
  screws = input(false)
}
