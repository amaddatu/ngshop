export class Favorite {
    dogId: string;
    fav: boolean = false;
    toggle(){
        this.fav = !this.fav;
    }
}
