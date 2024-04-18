import { Component } from '@angular/core'
import { HomeSocialComponent } from '../home-social/home-social.component'
import { HomeProjectsComponent } from '../home-projects/home-projects.component'
import { HomeBarsComponent } from '../home-bars/home-bars.component'

@Component({
  selector: 'app-home-panel-center',
  standalone: true,
  imports: [HomeSocialComponent, HomeProjectsComponent, HomeBarsComponent],
  template: ` <app-home-social /> <app-home-projects /> <app-home-bars />`,
  styleUrl: './home-panel-center.component.scss'
})
export class HomePanelCenterComponent {}
