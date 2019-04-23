import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { LikeService } from '../like.service';
import { FavoriteService } from '../favorite.service';
import { Dog } from '../dog';
import { Like } from '../like';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title:String = "Dog List";
  dogs: Dog[];
  dogString = JSON.stringify(this.dogs, null, 2);
  likes: Map<String, Like>;
  favorites: Map<string, Favorite>;


  constructor( 
    private dogsService : DogsService , 
    private likeService : LikeService ,
    private favoriteService : FavoriteService
  ) { 
    // this.dogs = this.dogsService.all(); 
  }

  ngOnInit() {
    this.getUpdates();
    this.getLikeUpdates();
    this.getFavoriteUpdates();
  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }

  getLikeUpdates() {
    return this.likeService.all().subscribe(data => this.likes = data);
  }
  getFavoriteUpdates() {
    return this.favoriteService.all().subscribe(data => this.favorites = data);
  }


  getLike(dogId: String){
    if(this.likes.get(dogId)){
      return this.likes.get(dogId);
    }
    else{
      let like = new Like();
      like.dogId = dogId;
      return like;
    }
  }

  getFavorite(dogId: string){
    if(this.favorites.get(dogId)){
      return this.favorites.get(dogId);
    }
    else{
      let favorite = new Favorite();
      favorite.dogId = dogId;
      return favorite;
    }
  }

}
