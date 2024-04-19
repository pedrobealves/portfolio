import { Component } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-sound',
  standalone: true,
  imports: [CardComponent, SvgIconComponent],
  templateUrl: './home-sound.component.html',
  styleUrl: './home-sound.component.scss'
})
export class HomeSoundComponent {}
