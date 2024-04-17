import { CommonModule } from '@angular/common'
import { AfterViewInit, Component, ViewChild } from '@angular/core'
import {
  EmblaCarouselDirective,
  EmblaCarouselType
} from 'embla-carousel-angular'
import { CarouselService } from '../../services/carousel.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [EmblaCarouselDirective, CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent implements AfterViewInit {
  @ViewChild(EmblaCarouselDirective)
  emalaRef: EmblaCarouselDirective = new EmblaCarouselDirective()

  emblaApi?: EmblaCarouselType
  options = { loop: true }

  constructor(private carouselService: CarouselService) {}

  private subscriptions: Subscription[] = []

  images: String[] = [
    'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
  ]

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
