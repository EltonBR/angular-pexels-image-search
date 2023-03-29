import { TestBed } from '@angular/core/testing';
import { SearchObservableService } from './search-observable.service';

describe('SearchObservableService', () => {
  let service: SearchObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit values to subscribers', () => {
    const value = 'test';
    let result: string | null = null;
    service.search$.subscribe((searchValue) => {
      result = searchValue;
      expect(result).toEqual(value);
    });
    service.searchObservable.next(value);
    
  });
});
