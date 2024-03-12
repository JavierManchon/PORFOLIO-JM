import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  private hovering = new BehaviorSubject<boolean>(false);

  constructor() {}

  setHovering(hovering: boolean) {
    this.hovering.next(hovering);
  }

  getHovering(): Observable<boolean> {
    return this.hovering.asObservable();
  }
}

