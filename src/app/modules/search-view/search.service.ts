import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TvShow } from 'src/app/core/models/tv-show';
import { API_URL, NO_DATA } from 'src/app/shared/constants/constants';
import { SearchResponse } from 'src/app/core/models/search-response';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searching = signal(false);
  readonly isSearching = this.searching.asReadonly();
  private lastSearchResults = signal<SearchResponse>(NO_DATA);

  constructor(private http: HttpClient) { }

  searchTvShows(term = "", page = 1): Signal<SearchResponse> {
    this.lastSearchResults.set(NO_DATA);
    this.searching.set(true);
    const endpoint = term != "" ? "search" : "most-popular";
    let url = API_URL + endpoint + "?page=" + page + (term != "" ? `&q=${term}`: '');
    this.http.get<SearchResponse>(url).subscribe(data => {
      this.lastSearchResults.set(data);
      this.searching.set(false);
    });
    return this.lastSearchResults.asReadonly();
  }
}

