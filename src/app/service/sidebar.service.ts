import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private visibilitySubject = new BehaviorSubject<boolean>(true);
  visibility$ = this.visibilitySubject.asObservable();

  setVisibility(isVisible: boolean) {
    this.visibilitySubject.next(isVisible);
  }
}
