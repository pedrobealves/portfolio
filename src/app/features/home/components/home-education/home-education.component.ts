import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardHeaderComponent } from '../../../../shared/components/card-header/card-header.component'
import { CardButtonComponent } from '../../../../shared/components/card-button/card-button.component'
import { DataService } from '../../services/data.service'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-education',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardButtonComponent,
    SvgIconComponent
  ],
  templateUrl: './home-education.component.html',
  styleUrl: './home-education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEducationComponent {
  protected educations = inject(DataService).educations
}
