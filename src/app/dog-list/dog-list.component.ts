import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { LikeService } from '../like.service';
import { Dog } from '../dog';
import { Like } from '../like';

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


  constructor( 
    private dogsService : DogsService , 
    private likeService : LikeService
  ) { 
    // this.dogs = this.dogsService.all(); 
  }

  ngOnInit() {
    this.getUpdates();
    this.getLikeUpdates();
  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }

  getLikeUpdates() {
    return this.likeService.all().subscribe(data => this.likes = data);
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

}
