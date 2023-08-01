import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchViewComponent } from './modules/search-view/search-view.component';
import { FavoritesViewComponent } from './modules/favorites-view/favorites-view.component';
import { tvShowDetailsResolver } from './core/resolvers/tv-show-details.resolver';
import { TvShowDetailsComponent } from './modules/tv-show-details/tv-show-details.component';

const routes: Routes = [
  {path: "", component: SearchViewComponent},
  {path: "favorites", component: FavoritesViewComponent},
  {path: "details/:id", component: TvShowDetailsComponent, resolve: {tvShowDetails: tvShowDetailsResolver}}
];

@NgModule({
  //  enabling component input binding with property bindToComponentInputs
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
