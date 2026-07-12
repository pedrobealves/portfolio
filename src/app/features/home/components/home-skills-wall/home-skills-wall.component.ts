import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-skills-wall',
  standalone: true,
  templateUrl: './home-skills-wall.component.html',
  styleUrl: './home-skills-wall.component.scss'
})
export class HomeSkillsWallComponent {
  protected skills = inject(DataService).skills
}
