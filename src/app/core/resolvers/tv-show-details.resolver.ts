import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';
import { TvShowDetailsService } from '../../modules/tv-show-details/tv-show-details.service';
import { inject } from '@angular/core';

export const tvShowDetailsResolver: ResolveFn<TvShowDetails> = (route: ActivatedRouteSnapshot) => {
  const showId = Number(route.paramMap.get("id"));
  const tvShowDetailsService = inject(TvShowDetailsService);
  return tvShowDetailsService.getTvShowDetails(showId);
}
