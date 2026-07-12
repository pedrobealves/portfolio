import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Button } from '../../../shared/button/button'
import { PortfolioContent } from '../../portfolio-content'

@Component({
    selector: 'app-home-contact',
    imports: [Button],
    templateUrl: './home-contact.html',
    styleUrl: './home-contact.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContact {
  protected profile = inject(PortfolioContent).profile
}
