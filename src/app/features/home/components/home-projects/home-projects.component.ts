import { Component } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardHeaderComponent } from '../../../../shared/components/card-header/card-header.component'
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component'
import { SvgIconComponent } from 'angular-svg-icon'
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component'
import { CarouselService } from '../../services/carousel.service'

@Component({
  selector: 'app-home-projects',
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    RoundButtonComponent,
    SvgIconComponent,
    HomeCarouselComponent
  ],
  templateUrl: './home-projects.component.html',
  styleUrl: './home-projects.component.scss'
})
export class HomeProjectsComponent {
  constructor(private carouselService: CarouselService) {}

  next() {
    this.carouselService.next()
  }

  prev() {
    this.carouselService.prev()
  }
}
