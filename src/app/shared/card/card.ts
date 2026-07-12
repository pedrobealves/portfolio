import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card {
  type = input<'row' | 'stack'>('stack')
}
