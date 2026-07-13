import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '../../../shared/card/card'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
  selector: 'app-home-sound',
  imports: [Card, SvgIconComponent],
  templateUrl: './home-sound.html',
  styleUrl: './home-sound.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeSound {}
