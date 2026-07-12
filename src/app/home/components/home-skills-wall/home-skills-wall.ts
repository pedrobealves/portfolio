import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Skill } from '../../models/skill'
import { PortfolioContent } from '../../portfolio-content'

const SKILL_ICON_CDN = 'https://cdn.simpleicons.org'
const SKILL_ICON_COLOR = '62FD85'

@Component({
  selector: 'app-home-skills-wall',
  standalone: true,
  templateUrl: './home-skills-wall.html',
  styleUrl: './home-skills-wall.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSkillsWall {
  protected skills = inject(PortfolioContent).skills

  protected iconUrl(skill: Skill): string {
    return `${SKILL_ICON_CDN}/${skill.logo ?? skill.name}/${SKILL_ICON_COLOR}`
  }
}
