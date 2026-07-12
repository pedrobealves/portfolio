import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { SvgIconComponent } from 'angular-svg-icon'
import { CardButton } from '../../../shared/card-button/card-button'
import { DetailDialog } from '../../../shared/detail-dialog/detail-dialog'
import { Education } from '../../models/education'
import { PortfolioContent } from '../../portfolio-content'

@Component({
  selector: 'app-home-education',
  imports: [CardButton, DetailDialog, SvgIconComponent],
  templateUrl: './home-education.html',
  styleUrl: './home-education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeEducation {
  protected educations = inject(PortfolioContent).educations
  protected expanded = signal(false)
  protected selected = signal<Education | null>(null)

  protected toggle(): void {
    this.expanded.update((value) => !value)
  }
}
