import { Component } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardHeaderComponent } from '../../../../shared/components/card-header/card-header.component'
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component'

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [CardComponent, CardHeaderComponent, RoundButtonComponent],
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent {}
