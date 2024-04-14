import { Component } from '@angular/core'
import { ButtonComponent } from '../../../../shared/components/button/button.component'

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss'
})
export class HomeContactComponent {}
