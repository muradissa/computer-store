import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './components/partials/search/search.component';
import { ComputerPartComponent } from './components/pages/computer-part/computer-part.component';
import { TagsComponent } from './components/partials/tags/tags.component';
// import { RatingComponent } from 'ng-starrating/lib/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ComputerPartComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
