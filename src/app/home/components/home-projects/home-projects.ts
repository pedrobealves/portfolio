import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '../../../shared/card/card'
import { CardHeader } from '../../../shared/card-header/card-header'
import { RoundButton } from '../../../shared/round-button/round-button'
import { SvgIconComponent } from 'angular-svg-icon'
import { HomeCarousel } from '../home-carousel/home-carousel'

@Component({
    selector: 'app-home-projects',
    imports: [
        Card,
        CardHeader,
        RoundButton,
        SvgIconComponent,
        HomeCarousel
    ],
    templateUrl: './home-projects.html',
    styleUrl: './home-projects.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProjects {}
