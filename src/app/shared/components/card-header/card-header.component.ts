import { ChangeDetectionStrategy, Component, input } from '@angular/core'

import {
  NgIconComponent,
  provideIcons,
  provideNgIconsConfig
} from '@ng-icons/core'
import { faSolidImage } from '@ng-icons/font-awesome/solid'
import { remixGraduationCapFill } from '@ng-icons/remixicon'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-card-header',
  standalone: true,
  imports: [NgIconComponent, SvgIconComponent],
  viewProviders: [provideIcons({ faSolidImage, remixGraduationCapFill })],
  providers: [
    provideNgIconsConfig({
      size: '1.56em'
    })
  ],
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeaderComponent {
  title = input.required<string>()
  icon = input.required<string>()
}
