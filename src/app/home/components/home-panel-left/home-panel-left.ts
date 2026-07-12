import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeHeader } from '../home-header/home-header'
import { HomeAvatar } from '../home-avatar/home-avatar'
import { HomeContact } from '../home-contact/home-contact'
import { HomeSkillsWall } from '../home-skills-wall/home-skills-wall'

@Component({
    selector: 'app-home-panel-left',
    imports: [
        HomeHeader,
        HomeAvatar,
        HomeContact,
        HomeSkillsWall
    ],
    template: `
    <app-home-header />
    <app-home-avatar />
    <app-home-contact />
    <app-home-skills-wall />
  `,
    styleUrl: './home-panel-left.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelLeft {}
