import { Component, inject } from '@angular/core'
import { Skill } from '../../models/skill.model'
import { DataService } from '../../services/data.service'

const SKILL_ICON_CDN = 'https://cdn.simpleicons.org'
const SKILL_ICON_COLOR = '62FD85'

@Component({
  selector: 'app-home-skills-wall',
  standalone: true,
  templateUrl: './home-skills-wall.component.html',
  styleUrl: './home-skills-wall.component.scss'
})
export class HomeSkillsWallComponent {
  protected skills = inject(DataService).skills

  protected iconUrl(skill: Skill): string {
    return `${SKILL_ICON_CDN}/${skill.logo ?? skill.name}/${SKILL_ICON_COLOR}`
  }
}
