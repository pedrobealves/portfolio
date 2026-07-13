import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeHeader } from '../home-header/home-header'
import { HomeAvatar } from '../home-avatar/home-avatar'
import { HomeContact } from '../home-contact/home-contact'
import { HomeLanguage } from '../home-language/home-language'
import { HomeSkillsWall } from '../home-skills-wall/home-skills-wall'

@Component({
    selector: 'app-home-panel-left',
    imports: [
        HomeHeader,
        HomeAvatar,
        HomeContact,
        HomeLanguage,
        HomeSkillsWall
    ],
    template: `
    <app-home-header />
    <app-home-avatar />
    <div class="controls">
      <app-home-contact />
      <app-home-language />
    </div>
    <app-home-skills-wall />
  `,
    styleUrl: './home-panel-left.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelLeft {}
