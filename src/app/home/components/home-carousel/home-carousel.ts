import { NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild
} from '@angular/core'
import { EmblaCarouselDirective } from 'embla-carousel-angular'
import { PortfolioContent } from '../../portfolio-content'

@Component({
    selector: 'app-home-carousel',
    imports: [EmblaCarouselDirective, NgOptimizedImage],
    templateUrl: './home-carousel.html',
    styleUrl: './home-carousel.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCarousel {
  private emblaRef = viewChild(EmblaCarouselDirective)

  protected projects = inject(PortfolioContent).projects
  protected options = { loop: true }

  scrollNext() {
    this.emblaRef()?.emblaApi?.scrollNext()
  }

  scrollPrev() {
    this.emblaRef()?.emblaApi?.scrollPrev()
  }
}
