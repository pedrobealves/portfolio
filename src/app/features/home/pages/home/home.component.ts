import { Component, inject } from '@angular/core'
import { HomePanelLeftComponent } from '../../components/home-panel-left/home-panel-left.component'
import { HomePanelCenterComponent } from '../../components/home-panel-center/home-panel-center.component'
import { HomePanelRightComponent } from '../../components/home-panel-right/home-panel-right.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomePanelLeftComponent,
    HomePanelCenterComponent,
    HomePanelRightComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
