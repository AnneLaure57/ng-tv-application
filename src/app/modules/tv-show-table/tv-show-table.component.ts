import { FavoritesService} from './../../shared/services/favorites.service';
import {RouterLink} from '@angular/router';
import { TvShow } from '../../core/models/tv-show';
import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFavoriteDirective } from 'src/app/shared/directives/toggle-favorite.directive';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterLink, ToggleFavoriteDirective],
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
