import { FactoryTarget } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent { //test commit
  isFavorite: boolean = false; 
  ngOnInit() {

  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }
}
