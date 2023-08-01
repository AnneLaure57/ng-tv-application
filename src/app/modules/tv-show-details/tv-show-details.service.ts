import { TvShowDetails } from '../../core/models/tv-show-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowId } from '../../core/models/tv-show';
import { API_URL } from 'src/app/shared/constants/constants';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private _http: HttpClient) {}

  getTvShowDetails(tvShowId: TvShowId): Observable<TvShowDetails> {
    return this._http.get<{tvShowDetails: TvShowDetails}>(API_URL + `show-details?q=${tvShowId}`).pipe(
      map(data => data.tvShowDetails)
    )
  }
}
