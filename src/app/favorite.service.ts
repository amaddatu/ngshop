import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Favorite} from './favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteHash: Map<string, Favorite> = this.getLocalStorage();

  constructor() { }

  all(): Observable<Map<string, Favorite>> {
    return of(this.favoriteHash);
  }
  private getLocalStorage(): Map<string, Favorite> {
    let val = localStorage.getItem('favorites');
    let out;
    // let out: Like[];
    if(val){
      out = this.parse(val);
    }
    else{
      out = new Map<string, Favorite>();
    }
    return out;
  }

  private parse(val: string): Map<string, Favorite>{
    let out = new Map<string, Favorite>();
    let arr = JSON.parse(val);
    out = arr.reduce( (acc, value) => {
      let favorite = new Favorite();
      favorite.dogId = value.dogId;
      favorite.fav = value.fav;
      acc.set(value.dogId, favorite);
      return acc;
    }, out);
    return out;
  }

  private stringify(map: Map<string, Favorite>): string{
    let out = "";
    let keys = map.keys();
    let arr = [];
    let k = keys.next();
    while(!k.done){
      arr.push(map.get(k.value));
      k = keys.next();
    }
    out = JSON.stringify(arr);
    return out;
  }

  public save(favorite: Favorite){
    this.favoriteHash.set(favorite.dogId, favorite);
    localStorage.setItem('favorites', this.stringify(this.favoriteHash));
    // console.log(this.likeHash);
  }

  public isFavorite(dogId: string): boolean{
    let f = this.favoriteHash.get(dogId);
    if(f){
      return f.fav;
    }
    return false;
  }
}
