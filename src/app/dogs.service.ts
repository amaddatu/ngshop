import { Injectable } from '@angular/core';
import DOGS from "./dogdata.json";

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData = DOGS;

  constructor() { }

  public all(){
    return this.dogData;
  }
}
