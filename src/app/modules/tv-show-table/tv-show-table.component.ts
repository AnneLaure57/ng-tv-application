import { FavoritesService} from './../../shared/services/favorites.service';

import { TvShow } from '../../core/models/tv-show';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {

  protected favoritesService = inject(FavoritesService);

  @Input() shows!: TvShow[];

  @Input() isLoading = false;

  includeTvShowItem(id: number) {
    return this.favoritesService.favorites().includes(id);
  }

  toggleFavoriteItem (id: number) {
    return this.favoritesService.toggleFavorite(id);
  }

}
