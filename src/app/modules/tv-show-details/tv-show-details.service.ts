import { TvShowDetails } from '../../core/models/tv-show-details';
import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject } from '@angular/core';
import { TvShowId, TvShowIds } from '../../core/models/tv-show';
import { API_URL } from 'src/app/shared/constants/constants';
import { Observable, forkJoin, map, shareReplay, switchMap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  private http = inject(HttpClient);
  private favorites$ = toObservable(inject(FavoritesService).favorites);
  readonly allTvShowDetails$: Observable<TvShowDetails[]> = this.favorites$.pipe(
    switchMap(showIds => this.getAllTvShowDetails(showIds)),
    shareReplay(1)
  )

  getTvShowDetails(tvShowId: TvShowId): Observable<TvShowDetails> {
    return this.http.get<{tvShow: TvShowDetails}>(API_URL + `show-details?q=${tvShowId}`).pipe(
      map(response => {
        response.tvShow.seasonCount = response.tvShow.episodes.at(-1)!.season;
        return response.tvShow;
      })
    )
  }

  private getAllTvShowDetails(showIds: TvShowIds): Observable<TvShowDetails[]> {
    return forkJoin(showIds.map(id => this.getTvShowDetails(id)))
      .pipe(
        map(this.sortTvShowsByNextEpisodeDate),
      );
  }

  private sortTvShowsByNextEpisodeDate(tvShowDetails: TvShowDetails[]): TvShowDetails[] {
    tvShowDetails.sort((show1, show2) => {
      if (show1.status === "Running" && show2.status !== "Running") {
        return -1;
      }
      if (show1.status === "Ended" || show1.status === "Canceled/Ended") {
        return 1;
      }
      if (show1.countdown && !show2.countdown) {
        return -1;
      }
      if (show1.countdown && show2.countdown && show1.countdown?.air_date < show2.countdown?.air_date) {
        return -1;
      }
      return 0;
    });
    return tvShowDetails;
  }
}
