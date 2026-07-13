import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeExperience } from '../home-experience/home-experience'
import { HomeEducation } from '../home-education/home-education'
import { HomeSound } from '../home-sound/home-sound'

@Component({
  selector: 'app-home-panel-right',
  imports: [HomeExperience, HomeEducation, HomeSound],
  template: ` <app-home-experience /> <app-home-sound /> <app-home-education />  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelRight {}
