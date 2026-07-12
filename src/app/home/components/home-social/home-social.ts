import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { PortfolioContent } from '../../portfolio-content'
import { Card } from '../../../shared/card/card'
import { CardButton } from '../../../shared/card-button/card-button'
import { RoundButton } from '../../../shared/round-button/round-button'
import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig
} from '@ng-icons/core'
import {
  faBrandXTwitter,
  faBrandGithub,
  faBrandLinkedinIn
} from '@ng-icons/font-awesome/brands'

@Component({
    selector: 'app-home-social',
    imports: [
        Card,
        CardButton,
        RoundButton,
        NgIconComponent
    ],
    viewProviders: [
        provideIcons({ faBrandXTwitter, faBrandGithub, faBrandLinkedinIn })
    ],
    providers: [
        provideNgIconsConfig({
            size: '2em'
        })
    ],
    templateUrl: './home-social.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSocial {
  protected profile = inject(PortfolioContent).profile
}
