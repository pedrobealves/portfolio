import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Card } from '../../../shared/card/card'
import { CardHeader } from '../../../shared/card-header/card-header'
import { CardButton } from '../../../shared/card-button/card-button'
import { DetailDialog } from '../../../shared/detail-dialog/detail-dialog'
import { Education } from '../../models/education'
import { PortfolioContent } from '../../portfolio-content'

@Component({
  selector: 'app-home-education',
  standalone: true,
  imports: [Card, CardHeader, CardButton, DetailDialog],
  templateUrl: './home-education.html',
  styleUrl: './home-education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEducation {
  protected educations = inject(PortfolioContent).educations
  protected selected = signal<Education | null>(null)
}
