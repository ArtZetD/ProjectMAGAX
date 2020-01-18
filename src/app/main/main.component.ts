import { Component, OnInit } from '@angular/core';
import { korm, favBtns } from '../../models/korm';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private favService: FavService) {

  }
  korm = new Array<korm>();
  favBtns = new Array<favBtns>();
  ngOnInit() {

    this.korm = [
      {
        id: 0,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[0]
      },
      {
        id: 1,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[1]
      },
      {
        id: 2,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[2]
      },
      {
        id: 3,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[3]
      },
      {
        id: 4,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[4]
      },
      {
        id: 5,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[5]
      },
      {
        id: 6,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[6]
      },
      {
        id: 7,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[7]
      },
      {
        id: 8,
        name: 'chappi',
        price: 500,
        type: 'dog',
        favBtn: this.favService.favBtns[8]
      },
      


    ]
  }

}
