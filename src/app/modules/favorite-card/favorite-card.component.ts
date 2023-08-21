import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TvShowDetails } from 'src/app/core/models/tv-show-details';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToggleFavoriteDirective } from 'src/app/shared/directives/toggle-favorite.directive';
import { CountdownPipe } from 'src/app/shared/pipes/countdown.pipe';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CountdownPipe, ToggleFavoriteDirective, CardComponent],
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FavoriteCardComponent {
  protected favoritesService = inject(FavoritesService);

  @Input({required: true})
  tvShowDetails!: TvShowDetails;

  redirectToTvShowDetails(tvShowId: number) {
      const url = `/details/${tvShowId}`;
      window.location.href = url;
  }

}
