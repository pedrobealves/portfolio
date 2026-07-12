import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { HomePanelLeft } from './components/home-panel-left/home-panel-left'
import { HomePanelCenter } from './components/home-panel-center/home-panel-center'
import { HomePanelRight } from './components/home-panel-right/home-panel-right'
import { Button } from '../shared/button/button'
import { PortfolioContent } from './portfolio-content'

@Component({
    selector: 'app-home',
    imports: [
        HomePanelLeft,
        HomePanelCenter,
        HomePanelRight,
        Button
    ],
    templateUrl: './home.html',
    styleUrl: './home.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private data = inject(PortfolioContent)
  protected profile = this.data.profile
  protected loadFailed = this.data.loadFailed
  currentYear: number = new Date().getFullYear()

  protected retry() {
    this.data.retry()
  }
}
