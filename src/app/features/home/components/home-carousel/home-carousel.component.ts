import { CommonModule } from '@angular/common'
import { Component, ElementRef, ViewChild } from '@angular/core'
import KeenSlider, { KeenSliderInstance } from 'keen-slider'
import { CarouselService } from '../../services/carousel.service'

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrls: [
    '../../../../../../node_modules/keen-slider/keen-slider.min.css',
    './home-carousel.component.scss'
  ]
})
export class HomeCarouselComponent {
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>

  constructor(private carouselService: CarouselService) {}

  slider: KeenSliderInstance | undefined

  images: String[] = [
    'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80',
    'https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
  ]

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true
    })

    // Inicializa o serviço com o número máximo de slides
    this.carouselService.init(this.images.length)

    this.carouselService.currentIndex$.subscribe((index) => {
      if (this.slider) {
        this.slider.moveToIdx(index)
      }
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
