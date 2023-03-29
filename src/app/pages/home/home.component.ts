import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ImageDialogComponent } from 'src/app/shared/components/image-dialog/image-dialog.component';
import { PexelsSearchModel } from 'src/app/shared/models/pexels-search-model';
import { PexelsApiService } from 'src/app/shared/services/pexels-api.service';
import { SearchObservableService } from 'src/app/shared/services/search-observable.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  download(url: string): void {
    window.open(url)
  }
  lazyLoadDefaultImage = environment.lazyLoadDefaultImage;
  pexelsSearchResponse!: PexelsSearchModel;
  defaultSearch = "nature landscape";
  currentSearch: string | null = null;
  currentPage = 1;
  searchSubscription!: Subscription;

  openDialog(url: string): void {
    this.dialog.open(ImageDialogComponent, {
      maxWidth: "99%",
      maxHeight: "90vh",
      data: {url: url}
    });
  }

  constructor(private pexelsApiService: PexelsApiService, private searchService: SearchObservableService, private dialog: MatDialog) {
    this.searchSubscription = this.searchService.search$.subscribe((query) => {
      this.currentSearch = query;
      this.search();
    })
  }
  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  search(): void {
    this.pexelsApiService.search(this.currentSearch ?? this.defaultSearch).subscribe((response) => {
      this.pexelsSearchResponse = response;
    });
  }

  ngOnInit(): void {
    this.search();
  }

  loadMore() {
    this.pexelsApiService.search(this.currentSearch ?? this.defaultSearch, this.currentPage).subscribe((response) => {
      this.pexelsSearchResponse.photos = this.pexelsSearchResponse?.photos.concat(response.photos)
    });
  }

  @HostListener("window:scroll", ['$event'])
  infiniteScroll(event: any): void {
    if (event.target.body.scrollHeight - window.scrollY - window.innerHeight === 0) {
      this.currentPage += 1;
      this.loadMore();
    }
  }

}
