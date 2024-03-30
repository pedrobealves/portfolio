import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  private dataService = inject(DataService)
  public profile$ = this.dataService.getProfile()
}
