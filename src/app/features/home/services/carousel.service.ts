import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private moveNextSubject = new Subject<void>()
  private movePrevSubject = new Subject<void>()

  moveNext() {
    this.moveNextSubject.next()
  }

  movePrev() {
    this.movePrevSubject.next()
  }

  onNext() {
    return this.moveNextSubject.asObservable()
  }

  onPrev() {
    return this.movePrevSubject.asObservable()
  }
}
