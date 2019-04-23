import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  title:String = "Dog List";
  dogs: Dog[];
  dogString = JSON.stringify(this.dogs, null, 2);


  constructor( private dogsService : DogsService ) { 
    // this.dogs = this.dogsService.all(); 
  }

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates() {
    return this.dogsService.all().subscribe(data => this.dogs = data);
  }
}
