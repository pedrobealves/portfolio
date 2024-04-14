import { Component } from '@angular/core'
import { HomeSocialComponent } from '../home-social/home-social.component'
import { HomeProjectsComponent } from '../home-projects/home-projects.component'

@Component({
  selector: 'app-home-panel-center',
  standalone: true,
  imports: [HomeSocialComponent, HomeProjectsComponent],
  template: ` <app-home-social /> <app-home-projects />`,
  styleUrl: './home-panel-center.component.scss'
})
export class HomePanelCenterComponent {}
