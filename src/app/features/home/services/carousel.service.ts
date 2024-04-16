import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private currentIndexSubject = new BehaviorSubject<number>(0)
  currentIndex$ = this.currentIndexSubject.asObservable()
  private maxIndex: number = 0

  constructor() {}

  init(maxIndex: number) {
    this.maxIndex = maxIndex
  }

  next() {
    let currentIndex = this.currentIndexSubject.value + 1
    if (currentIndex >= this.maxIndex) {
      currentIndex = 0 // Volta para o primeiro slide
    }
    this.currentIndexSubject.next(currentIndex)
  }

  prev() {
    let currentIndex = this.currentIndexSubject.value - 1
    if (currentIndex < 0) {
      currentIndex = this.maxIndex - 1 // Vai para o último slide
    }
    this.currentIndexSubject.next(currentIndex)
  }
}
