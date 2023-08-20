import { BehaviorSubject, Observable, debounceTime, filter, switchMap } from 'rxjs';
import { TvShow } from '../../core/models/tv-show';
import { Component, Signal, computed, effect, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { SearchService } from './search.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SearchResponse } from 'src/app/core/models/search-response';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {
  data!: Signal<SearchResponse>;
  searchInput$ = new BehaviorSubject<string>('');

  ngOnInit() {
    this.search()
  }

  constructor(private searchService: SearchService) {
    this.searchInput$
      .pipe(
        filter((term) => term.length > 2),
        debounceTime(1000),
        takeUntilDestroyed()
      ).subscribe(
        (term) => {this.search(term)}
      )
  }

  search(term = "", page = 1, event?: Event) {
    this.data = this.searchService.searchTvShows(term, page);
  }

  isSearchingData() {
    return this.searchService.isSearching();
  }
}

