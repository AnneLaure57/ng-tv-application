import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { TvShow } from '../../core/models/tv-show';
import { Component, Signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowTableComponent } from '../tv-show-table/tv-show-table.component';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  data!: Signal<TvShow[]>;

  constructor(private searchService: SearchService) {
    setTimeout(() => this.search(), 100);
  }

  search(term = "") {
    this.data = this.searchService.searchTvShows(term);
  }

  isSearchingData() {
    return this.searchService.isSearching();
  }
}

