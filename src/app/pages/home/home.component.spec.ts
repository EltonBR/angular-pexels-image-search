import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Observable, ObservableInput, of } from 'rxjs';
import { PexelsApiService } from 'src/app/shared/services/pexels-api.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        CommonModule,
        HomeRoutingModule,
        MatCardModule,
        LazyLoadImageModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: PexelsApiService,
          useValue: {
            search: jest.fn().mockImplementation(() => of({
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
            }))
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open url', () => {
    let spy = jest.spyOn(component, "download");
    component.download("http://todo.com/img.jpg");
    expect(spy).toHaveBeenCalled();
  });

  it('should open dialog', () => {
    let spy = jest.spyOn(component, "openDialog");
    component.openDialog("http://todo.com/img.jpg");
    expect(spy).toHaveBeenCalled();
  });

  it('should search images', () => {
    let spy = jest.spyOn(component, "search");
    component.search("test");
    fixture.detectChanges();
  });

  it('should load more', () => {
    component.loadMore();
    fixture.detectChanges();
  });

  it('should infinity scroll check', () => {
    let spy = jest.spyOn(component, "loadMore");
    component.infiniteScroll({
      target: {
        body: {
          scrollHeight: window.innerHeight
        }
      }
    });
    expect(spy).toBeCalled();
  });
});
