import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { HomePanelLeftComponent } from '../../components/home-panel-left/home-panel-left.component'
import { HomePanelCenterComponent } from '../../components/home-panel-center/home-panel-center.component'
import { HomePanelRightComponent } from '../../components/home-panel-right/home-panel-right.component'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomePanelLeftComponent,
    HomePanelCenterComponent,
    HomePanelRightComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private data = inject(DataService)
  protected profile = this.data.profile
  protected loadFailed = this.data.loadFailed
  currentYear: number = new Date().getFullYear()
}
