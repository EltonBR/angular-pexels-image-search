import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchObservableService {

  searchObservable = new Subject<string | null>();

  get search$() { return this.searchObservable; }

  constructor() {
  }
}
