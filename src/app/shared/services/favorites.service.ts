import { Injectable, effect, inject, signal } from '@angular/core';
import { TvShow } from 'src/app/core/models/tv-show';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  // With the generic type, pass the array of TvShow id
  storage = inject(StorageService<Array<TvShow["id"]>>);
  // get the localStorage items (only TvShow id)
  favoritesSignal = signal<Array<TvShow["id"]>>(this.storage.getData("favorites"));
  favorites = this.favoritesSignal.asReadonly();

  constructor() {
    // save the toogle item in storage
    effect(() => this.storage.saveData("favorites", this.favoritesSignal()));
  }

  toggleFavorite(tvShowId: number) {
    const item = this.favoritesSignal().indexOf(tvShowId);
    if (item !== -1)
      // use mutate to update signals array
      this.favoritesSignal.mutate(favorites => favorites.splice(item, 1));
    else {
      this.favoritesSignal.mutate(favorites => favorites.push(tvShowId));
    }
  }
}
