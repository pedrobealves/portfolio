import { AsyncPipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-skills-wall',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home-skills-wall.component.html',
  styleUrl: './home-skills-wall.component.scss'
})
export class HomeSkillsWallComponent {
  private dataService = inject(DataService)
  public skills$ = this.dataService.getSkills()
}
