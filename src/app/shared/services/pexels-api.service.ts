import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PexelsSearchModel } from '../models/pexels-search-model';

@Injectable({
  providedIn: 'root'
})
export class PexelsApiService {
  constructor(private http: HttpClient) { }
  search(searchQuery: string, page = 1): Observable<PexelsSearchModel> {
    return this.http.get<PexelsSearchModel>(`${environment.pexelsApiUrl}/search?query=${searchQuery}&page=${page}`);
  }
}
