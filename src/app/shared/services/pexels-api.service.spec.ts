import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PexelsApiService } from './pexels-api.service';

describe('PexelsApiService', () => {
  let service: PexelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: {
          get: (url: string) => of({
            "page": 1,
            "per_page": 15,
            "photos": [
                {
                    "id": 14226832,
                    "width": 4000,
                    "height": 6000,
                    "url": "https://www.pexels.com/photo/rear-bumper-of-vintage-var-14226832/",
                    "photographer": "Faruk Tomruk",
                    "photographer_url": "https://www.pexels.com/@faruk-tomruk-65591264",
                    "photographer_id": 65591264,
                    "avg_color": "#675042",
                    "src": {
                        "original": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg",
                        "large2x": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940",
                        "large": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940",
                        "medium": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350",
                        "small": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130",
                        "portrait": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800",
                        "landscape": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200",
                        "tiny": "https://images.pexels.com/photos/14226832/pexels-photo-14226832.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"
                    },
                    "liked": false,
                    "alt": "Red Car on Brown Sand"
                }
            ],
            "total_results": 8000,
            "next_page": "https://api.pexels.com/v1/search/?page=2\u0026per_page=15\u0026query=sand+car"
        })
        }
      }]
    });
    service = TestBed.inject(PexelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call search', () => {
    service.search("test").subscribe((r) => {
      expect(r.page).toEqual(1);
    })
  });
});
