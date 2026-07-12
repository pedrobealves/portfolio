import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '../../../shared/card/card'
import { SvgIconComponent } from 'angular-svg-icon'

@Component({
    selector: 'app-home-bars',
    imports: [Card, SvgIconComponent],
    templateUrl: './home-bars.html',
    styleUrl: './home-bars.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBars {}
