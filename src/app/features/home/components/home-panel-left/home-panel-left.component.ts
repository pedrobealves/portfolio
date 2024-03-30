import { Component } from '@angular/core'
import { HomeHeaderComponent } from '../home-header/home-header.component'

@Component({
  selector: 'app-home-panel-left',
  standalone: true,
  imports: [HomeHeaderComponent],
  templateUrl: './home-panel-left.component.html',
  styleUrl: './home-panel-left.component.scss'
})
export class HomePanelLeftComponent {}
