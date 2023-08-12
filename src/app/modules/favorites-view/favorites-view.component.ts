import { Component, Inject, Input, inject } from '@angular/core';
import { TvShowDetailsService } from '../tv-show-details/tv-show-details.service';

@Component({
    selector: 'app-favorites-view',
    templateUrl: './favorites-view.component.html',
    styleUrls: ['./favorites-view.component.css']
})
export class FavoritesViewComponent {

  protected showDetails$ = inject(TvShowDetailsService).allTvShowDetails$;

  back() {
    history.back();
  }

}
