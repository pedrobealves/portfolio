import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-round-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './round-button.component.html',
  styleUrl: './round-button.component.scss'
})
export class RoundButtonComponent {
  @Input() type: 'big' | 'small' = 'small'
}
