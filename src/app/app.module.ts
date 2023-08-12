import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FavoritesViewComponent } from './modules/favorites-view/favorites-view.component';
import { FavoriteCardComponent } from './modules/favorite-card/favorite-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FavoritesViewComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
