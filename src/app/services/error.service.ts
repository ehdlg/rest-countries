import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();

  constructor() {}

  setError(error: string) {
    this.errorSubject.next(error);
  }

  clearError() {
    this.errorSubject.next(null);
  }
}
