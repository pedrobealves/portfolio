import { Component, inject } from '@angular/core'
import { CardComponent } from '../../../../shared/components/card/card.component'
import { CardHeaderComponent } from '../../../../shared/components/card-header/card-header.component'
import { RoundButtonComponent } from '../../../../shared/components/round-button/round-button.component'
import { SvgIconComponent } from 'angular-svg-icon'
import { CarouselService } from '../../services/carousel.service'
import { HomeCarouselComponent } from '../home-carousel/home-carousel.component'

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
    this.carouselService.moveNext()
  }

  prev() {
    this.carouselService.movePrev()
  }
}
