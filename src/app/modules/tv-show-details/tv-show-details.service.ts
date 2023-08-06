import { TvShowDetails } from '../../core/models/tv-show-details';
import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { TvShowId } from '../../core/models/tv-show';
import { API_URL } from 'src/app/shared/constants/constants';
import { Observable, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private http: HttpClient) {}

  getTvShowDetails(tvShowId: TvShowId): Observable<TvShowDetails> {
    return this.http.get<{tvShow: TvShowDetails}>(API_URL + `show-details?q=${tvShowId}`).pipe(
      map(response => {
        response.tvShow.seasonCount = response.tvShow.episodes.at(-1)!.season;
        return response.tvShow;
      }),
      takeUntilDestroyed()
    )
  }
}
