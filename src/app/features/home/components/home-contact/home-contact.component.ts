import { Component, inject } from '@angular/core'
import { ButtonComponent } from '../../../../shared/components/button/button.component'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home-contact.component.html',
  styleUrl: './home-contact.component.scss'
})
export class HomeContactComponent {
  protected profile = inject(DataService).profile
}
