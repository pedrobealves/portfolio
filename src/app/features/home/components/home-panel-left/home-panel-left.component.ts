import { Component } from '@angular/core'
import { HomeHeaderComponent } from '../home-header/home-header.component'
import { HomeAvatarComponent } from '../home-avatar/home-avatar.component'
import { HomeContactComponent } from '../home-contact/home-contact.component'

@Component({
  selector: 'app-home-panel-left',
  standalone: true,
  imports: [HomeHeaderComponent, HomeAvatarComponent, HomeContactComponent],
  templateUrl: './home-panel-left.component.html',
  styleUrl: './home-panel-left.component.scss'
})
export class HomePanelLeftComponent {}
