import { Component } from '@angular/core'
import { HomeSocialComponent } from '../home-social/home-social.component'

@Component({
  selector: 'app-home-panel-center',
  standalone: true,
  imports: [HomeSocialComponent],
  template: ` <app-home-social /> `,
  styleUrl: './home-panel-center.component.scss'
})
export class HomePanelCenterComponent {}
