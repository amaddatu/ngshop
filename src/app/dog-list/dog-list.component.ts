import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title:String = "Dog List";
  dogs = this.dogsService.all();
  dogString = JSON.stringify(this.dogs, null, 2);


  constructor( private dogsService : DogsService ) { 
    // this.dogs = this.dogsService.all(); 
  }

  ngOnInit() {
  }

}
