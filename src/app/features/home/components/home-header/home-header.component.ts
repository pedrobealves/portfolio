import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-header',
  standalone: true,
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  protected profile = inject(DataService).profile
}
