import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavComponent } from './Favorites/fav/fav.component';
import { HeaderComponent } from './Header/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecipeDetailsComponent } from './Recipes/recipe-details/recipe-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Not-Found/not-found/not-found.component';
import { FoodService } from './service/service/food.service';
import { ItemService } from './service/item.service';
//import { Subscription } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    FavComponent,
    HeaderComponent,
    HomeComponent,
    RecipeDetailsComponent,
    NotFoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,


  ],
  providers: [
    //provideClientHydration()
    FoodService,
    ItemService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
