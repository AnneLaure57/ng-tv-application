import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FavoritesViewComponent } from './modules/favorites-view/favorites-view.component';
import { FavoriteCardComponent } from './modules/favorite-card/favorite-card.component';
import { ToggleFavoriteDirective } from './shared/directives/toggle-favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesViewComponent,
    ToggleFavoriteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FavoriteCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
