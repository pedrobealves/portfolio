import { Component, inject } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardHeaderComponent } from '../../../../shared/components/card-header/card-header.component'
import { RoundLinkComponent } from '../../../../shared/components/round-link/round-link.component'
import { CardButtonComponent } from '../../../../shared/components/card-button/card-button.component'
import { DataService } from '../../services/data.service'
import { AsyncPipe } from '@angular/common'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-education',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    RoundLinkComponent,
    CardButtonComponent,
    AsyncPipe,
    SvgIconComponent
  ],
  templateUrl: './home-education.component.html',
  styleUrl: './home-education.component.scss'
})
export class HomeEducationComponent {
  private dataService = inject(DataService)
  public educations$ = this.dataService.getEducation()
}
