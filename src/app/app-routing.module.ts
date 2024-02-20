import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavComponent } from './Favorites/fav/fav.component';
import { HomeComponent } from './Home/home/home.component';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { NotFoundComponent } from './Not-Found/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //default page
  { path: "home", component: HomeComponent },
  { path: "food/:id ", component: RecipeDetailsComponent },
  { path: "favorites", component: FavComponent },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
