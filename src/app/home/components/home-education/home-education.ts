import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Card } from '../../../shared/card/card'
import { CardHeader } from '../../../shared/card-header/card-header'
import { CardButton } from '../../../shared/card-button/card-button'
import { PortfolioContent } from '../../portfolio-content'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
    selector: 'app-home-education',
    imports: [
        Card,
        CardHeader,
        CardButton,
        SvgIconComponent
    ],
    templateUrl: './home-education.html',
    styleUrl: './home-education.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEducation {
  protected educations = inject(PortfolioContent).educations
}
