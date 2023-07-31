import { TvShowDetails } from '../../core/models/tv-show-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TvShowId } from '../../core/models/tv-show';
import { API_URL } from 'src/app/shared/constants/constants';



@Injectable({
  providedIn: 'root'
})
export class TvShowDetailsService {

  constructor(private _http: HttpClient) {}

  getTvShowDetail(tvShowId: TvShowId) {
    return this._http.get<{tvShow: TvShowDetails}>(API_URL + `show-details?q=${tvShowId}`).subscribe(
      data => data.tvShow
    );
  }
}
