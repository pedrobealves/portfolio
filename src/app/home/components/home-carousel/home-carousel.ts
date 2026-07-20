import { NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  viewChild
} from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { faBrandGithub } from '@ng-icons/font-awesome/brands'
import {
  faSolidArrowUpRightFromSquare,
  faSolidImage
} from '@ng-icons/font-awesome/solid'
import { EmblaCarouselDirective } from 'embla-carousel-angular'
import { Button } from '../../../shared/button/button'
import { DetailDialog } from '../../../shared/detail-dialog/detail-dialog'
import { Project } from '../../models/project'
import { PortfolioContent } from '../../portfolio-content'

@Component({
    selector: 'app-home-carousel',
    imports: [
        EmblaCarouselDirective,
        NgOptimizedImage,
        DetailDialog,
        Button,
        NgIconComponent
    ],
    viewProviders: [
        provideIcons({ faSolidImage, faSolidArrowUpRightFromSquare, faBrandGithub })
    ],
    templateUrl: './home-carousel.html',
    styleUrl: './home-carousel.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCarousel {
  private emblaRef = viewChild(EmblaCarouselDirective)

  protected projects = inject(PortfolioContent).projects
  protected options = { loop: true }
  protected selected = signal<Project | null>(null)

  scrollNext() {
    this.emblaRef()?.emblaApi?.scrollNext()
  }

  scrollPrev() {
    this.emblaRef()?.emblaApi?.scrollPrev()
  }
}
