import { CommonModule } from '@angular/common'
import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  inject
} from '@angular/core'
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular'
import { CarouselService } from '../../services/carousel.service'
import { Subscription } from 'rxjs'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [EmblaCarouselDirective, CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent implements AfterViewInit {
  private dataService = inject(DataService)
  public projects$ = this.dataService.getProjects()

  @ViewChild(EmblaCarouselDirective)
  emalaRef: EmblaCarouselDirective = new EmblaCarouselDirective()

  emblaApi?: EmblaCarouselType
  options = { loop: true }

  constructor(private carouselService: CarouselService) {}

  private subscriptions: Subscription[] = []

  ngAfterViewInit() {
    this.emblaApi = this.emalaRef.emblaApi
    this.subscriptions.push(
      this.carouselService
        .onNext()
        .subscribe(() => this.emblaApi?.scrollNext()),
      this.carouselService.onPrev().subscribe(() => this.emblaApi?.scrollPrev())
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe())
  }
}
