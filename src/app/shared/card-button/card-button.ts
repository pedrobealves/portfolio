import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-card-button',
  standalone: true,
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButton {
  screws = input(false)
}
