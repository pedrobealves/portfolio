import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeEducation } from '../home-education/home-education'
import { HomeSound } from '../home-sound/home-sound'

@Component({
    selector: 'app-home-panel-right',
    imports: [HomeEducation, HomeSound],
    template: ` <app-home-education /> <app-home-sound /> `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelRight {}
