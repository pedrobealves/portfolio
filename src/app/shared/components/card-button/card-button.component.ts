import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card-button',
  standalone: true,
  imports: [],
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.scss'
})
export class CardButtonComponent {
  @Input()
  screws: boolean = false
}
