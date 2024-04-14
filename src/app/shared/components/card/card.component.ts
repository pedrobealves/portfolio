import { CommonModule } from '@angular/common'
import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  type: 'row' | 'flex-1' = 'row'
}
