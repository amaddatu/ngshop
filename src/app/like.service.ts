import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Like} from './like';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  // private likeData: Like[] = this.getLocalStorage();
  private likeHash: Map<String, Like> = this.getLocalStorage();

  constructor() { 
  }


  all(): Observable<Map<String, Like>> {
    return of(this.likeHash);
  }

  private getLocalStorage(): Map<String, Like> {
    let val = localStorage.getItem('likes');
    let out;
    // let out: Like[];
    if(val){
      out = this.parse(val);
    }
    else{
      out = new Map<String, Like>();
    }
    return out;
  }

  private parse(val: string): Map<String, Like>{
    let out = new Map<String, Like>();
    let arr = JSON.parse(val);
    console.log(arr);
    out = arr.reduce( (acc, value) => {
      let like = new Like();
      like.dogId = value.dogId;
      like.counter = value.counter;
      acc.set(value.dogId, like);
      return acc;
    }, out);
    return out;
  }

  private stringify(map: Map<String, Like>): string{
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

  public save(like: Like){
    this.likeHash.set(like.dogId, like);
    localStorage.setItem('likes', this.stringify(this.likeHash));
    // console.log(this.likeHash);
  }

}
