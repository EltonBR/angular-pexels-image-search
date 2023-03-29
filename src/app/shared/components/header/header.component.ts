import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, Subscription } from 'rxjs';
import { SearchObservableService } from '../../services/search-observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSmallScreen: boolean = this.breakpointObserver.isMatched('(max-width: 352px)');
  breakpoint$!: Subscription;
  form!: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private searchObservable: SearchObservableService, private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        search: [null]
      }
    )
  }

  ngOnInit(): void {
    this.breakpoint$ = this.breakpointObserver.observe('(max-width: 352px)').subscribe((state) => {
      this.isSmallScreen = state.matches
    })
  }

  search(): void {
    let searchQuery = (this.form.value.search.length == 0)?null:this.form.value.search;
    this.searchObservable.search$.next(searchQuery);
  }

  ngOnDestroy(): void {
    this.breakpoint$.unsubscribe();
  }
}
