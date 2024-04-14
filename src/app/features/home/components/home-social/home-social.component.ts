import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'
import { SvgIconComponent } from 'angular-svg-icon'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardButtonComponent } from '../../../../shared/components/card-button/card-button.component'
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component'
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
  standalone: true,
  imports: [
    AsyncPipe,
    CardComponent,
    CardButtonComponent,
    RoundButtonComponent,
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
  templateUrl: './home-social.component.html',
  styleUrl: './home-social.component.scss'
})
export class HomeSocialComponent {
  private dataService = inject(DataService)
  public profile$ = this.dataService.getProfile()
}
