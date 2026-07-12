import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeExperience } from '../home-experience/home-experience'
import { HomeEducation } from '../home-education/home-education'

@Component({
  selector: 'app-home-panel-right',
  imports: [HomeExperience, HomeEducation],
  template: ` <app-home-experience /> <app-home-education /> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelRight {}
