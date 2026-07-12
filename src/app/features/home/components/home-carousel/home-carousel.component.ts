import { Component, ViewChild, inject } from '@angular/core'
import { EmblaCarouselDirective } from 'embla-carousel-angular'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [EmblaCarouselDirective],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  @ViewChild(EmblaCarouselDirective) private emblaRef?: EmblaCarouselDirective

  protected projects = inject(DataService).projects
  protected options = { loop: true }

  scrollNext() {
    this.emblaRef?.emblaApi?.scrollNext()
  }

  scrollPrev() {
    this.emblaRef?.emblaApi?.scrollPrev()
  }
}
