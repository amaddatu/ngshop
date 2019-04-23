import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { LikeDetailComponent } from './like-detail/like-detail.component';
import { FavoriteDetailComponent } from './favorite-detail/favorite-detail.component';
import { NotifyMessageComponent } from './notify-message/notify-message.component';

@NgModule({
  declarations: [
    AppComponent,
    DogListComponent,
    DogDetailComponent,
    LikeDetailComponent,
    FavoriteDetailComponent,
    NotifyMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
