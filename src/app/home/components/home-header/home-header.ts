import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { PortfolioContent } from '../../portfolio-content'

@Component({
  selector: 'app-home-header',
  standalone: true,
  templateUrl: './home-header.html',
  styleUrl: './home-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeader {
  protected profile = inject(PortfolioContent).profile
}
