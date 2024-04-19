import { Component } from '@angular/core'
import { HomeEducationComponent } from '../home-education/home-education.component'
import { HomeSoundComponent } from '../home-sound/home-sound.component'

@Component({
  selector: 'app-home-panel-right',
  standalone: true,
  imports: [HomeEducationComponent, HomeSoundComponent],
  template: ` <app-home-education /> <app-home-sound /> `,
  styleUrl: './home-panel-right.component.scss'
})
export class HomePanelRightComponent {}
