import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core'
import { faSolidRobot, faSolidBriefcase } from '@ng-icons/font-awesome/solid'
import { Card } from '../../../shared/card/card'
import { CardHeader } from '../../../shared/card-header/card-header'
import { CardButton } from '../../../shared/card-button/card-button'
import { DetailDialog } from '../../../shared/detail-dialog/detail-dialog'
import { Experience } from '../../models/experience'
import { PortfolioContent } from '../../portfolio-content'

@Component({
  selector: 'app-home-experience',
  standalone: true,
  imports: [Card, CardHeader, CardButton, DetailDialog, NgIconComponent],
  viewProviders: [provideIcons({ faSolidRobot, faSolidBriefcase })],
  providers: [provideNgIconsConfig({ size: '2.4em' })],
  templateUrl: './home-experience.html',
  styleUrl: './home-experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeExperience {
  protected experiences = inject(PortfolioContent).experiences
  protected selected = signal<Experience | null>(null)
}
