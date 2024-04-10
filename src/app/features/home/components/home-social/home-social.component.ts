import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-social',
  standalone: true,
  imports: [AsyncPipe, SvgIconComponent],
  templateUrl: './home-social.component.html',
  styleUrl: './home-social.component.scss'
})
export class HomeSocialComponent {
  private dataService = inject(DataService)
  public profile$ = this.dataService.getProfile()
}
