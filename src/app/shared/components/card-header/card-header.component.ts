import { Component, Input } from '@angular/core'

import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig
} from '@ng-icons/core'
import { faSolidImage } from '@ng-icons/font-awesome/solid'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [NgIconComponent, SvgIconComponent],
  viewProviders: [provideIcons({ faSolidImage })],
  providers: [
    provideNgIconsConfig({
      size: '1.56em'
    })
  ],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @Input() title: string = ''
  @Input() icon: string = ''
}
