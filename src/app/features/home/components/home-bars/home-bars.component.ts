import { Component } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-bars',
  standalone: true,
  imports: [CardComponent, SvgIconComponent],
  templateUrl: './home-bars.component.html',
  styleUrl: './home-bars.component.scss'
})
export class HomeBarsComponent {}
