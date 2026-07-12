import { ChangeDetectionStrategy, Component } from '@angular/core'
import { HomeSocial } from '../home-social/home-social'
import { HomeProjects } from '../home-projects/home-projects'
import { HomeBars } from '../home-bars/home-bars'

@Component({
    selector: 'app-home-panel-center',
    imports: [HomeSocial, HomeProjects, HomeBars],
    template: ` <app-home-social /> <app-home-projects /> <app-home-bars />`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePanelCenter {}
