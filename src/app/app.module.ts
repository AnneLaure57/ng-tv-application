import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FavoritesViewComponent } from './modules/favorites-view/favorites-view.component';
import { TvShowDetailsComponent } from './modules/tv-show-details/tv-show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesViewComponent,
    TvShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
