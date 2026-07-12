import { ChangeDetectionStrategy, Component, LOCALE_ID, inject } from '@angular/core'
import { PortfolioContent } from '../../portfolio-content'

const OTHER_LOCALE = {
  'pt-BR': { href: '/en/', label: 'EN' },
  en: { href: '/', label: 'PT' }
} as const

@Component({
  selector: 'app-home-header',
  standalone: true,
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeader {
  protected profile = inject(PortfolioContent).profile
  protected readonly otherLocale =
    OTHER_LOCALE[inject(LOCALE_ID) as keyof typeof OTHER_LOCALE] ?? OTHER_LOCALE['pt-BR']
}
