import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';
import { ToggleFavoriteDirective } from 'src/app/shared/directives/toggle-favorite.directive';
import { CountdownPipe } from 'src/app/shared/pipes/countdown.pipe';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CountdownPipe, ToggleFavoriteDirective],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css']
})

export class FavoriteCardComponent {
  protected favoritesService = inject(FavoritesService);

  @Input({required: true})
  tvShowDetails!: TvShowDetails;

}
