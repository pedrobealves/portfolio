import { NgOptimizedImage } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild
} from '@angular/core'
import { EmblaCarouselDirective } from 'embla-carousel-angular'
import { DataService } from '../../services/data.service'

@Component({
    selector: 'app-home-carousel',
    imports: [EmblaCarouselDirective, NgOptimizedImage],
    templateUrl: './home-carousel.component.html',
    styleUrl: './home-carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeCarouselComponent {
  private emblaRef = viewChild(EmblaCarouselDirective)

  protected projects = inject(DataService).projects
  protected options = { loop: true }

  scrollNext() {
    this.emblaRef()?.emblaApi?.scrollNext()
  }

  scrollPrev() {
    this.emblaRef()?.emblaApi?.scrollPrev()
  }
}
