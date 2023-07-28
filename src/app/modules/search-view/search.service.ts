import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow } from 'src/app/core/interfaces/tv-show';
import { API_URL } from 'src/app/shared/constants/constants';
import { SearchResponse } from 'src/app/core/interfaces/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private lastSearchResults = signal<TvShow[]>([]);

  constructor(private http: HttpClient) { }

  searchTvShows(term = ""): Signal<TvShow[]> {
    this.lastSearchResults.set([]);
    this.searching.set(true);
    this.http.get<SearchResponse>(API_URL + `search?q=${term}&page=1`).subscribe(data => {
      this.lastSearchResults.set(data.tv_shows);
      this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}

