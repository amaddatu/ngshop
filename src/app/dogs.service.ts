import { Injectable } from '@angular/core';
import DOGS from "./dogdata.1.json";
import {Observable, of} from 'rxjs';
import {Dog} from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData = DOGS;

  constructor() { }

  // public all(){
  //   return this.dogData;
  // }
  
  all(): Observable <Dog[]> {
    return of(this.dogData);
  }

  getDog(dogId: string): Dog{
    return this.dogData.filter( dog => dog.id === dogId )[0];
  }
}
