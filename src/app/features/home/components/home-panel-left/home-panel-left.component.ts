import { Component } from '@angular/core'
import { HomeHeaderComponent } from '../home-header/home-header.component'
import { HomeAvatarComponent } from '../home-avatar/home-avatar.component'
import { HomeContactComponent } from '../home-contact/home-contact.component'
import { HomeSkillsWallComponent } from '../home-skills-wall/home-skills-wall.component'

@Component({
  selector: 'app-home-panel-left',
  standalone: true,
  imports: [
    HomeHeaderComponent,
    HomeAvatarComponent,
    HomeContactComponent,
    HomeSkillsWallComponent
  ],
  template: `
    <app-home-header />
    <app-home-avatar />
    <app-home-contact />
    <app-home-skills-wall />
  `,
  styleUrl: './home-panel-left.component.scss'
})
export class HomePanelLeftComponent {}
