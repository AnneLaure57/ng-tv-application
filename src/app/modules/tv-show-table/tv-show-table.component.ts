import { FavoritesService} from './../../shared/services/favorites.service';
import {RouterLink} from '@angular/router';
import { TvShow } from '../../core/models/tv-show';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleFavoriteDirective } from 'src/app/shared/directives/toggle-favorite.directive';
import { SearchResponse } from 'src/app/core/models/search-response';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, RouterLink, ToggleFavoriteDirective, PaginatorComponent],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowTableComponent {

  protected favoritesService = inject(FavoritesService);

  @Input() shows!: SearchResponse;

  @Input() isLoading = false;

  trackByName(index: number, show: TvShow): string {
    return show.name;
  }

  includeTvShowItem(id: number) {
    return this.favoritesService.favorites().includes(id);
  }

  toggleFavoriteItem (id: number) {
    return this.favoritesService.toggleFavorite(id);
  }

  @Output()
  pageChange = new EventEmitter<number>();

}
