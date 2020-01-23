import { Component, OnInit } from '@angular/core';
import { korm, favBtns } from '../../models/korm';
import { FavService } from '../fav.service';

@Component({
  selector: 'app-crutch',
  templateUrl: './crutch.component.html',
  styleUrls: ['./crutch.component.css']
})
export class CrutchComponent implements OnInit {

  constructor(private dogService: FavService) {

  }
  korm = new Array<korm>();
  faBtns = new Array<favBtns>();
  ngOnInit() {
    this.korm = [
      {
        id: 9,
        imgSrc: './assets/images/pic9.jpg',
        name: 'комбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[0],
        caunt: 1,
        countKorm: 0
      },
      {
        id: 10,
        imgSrc: './assets/images/pic10.jpg',
        name: 'свитер',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[1],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 11,
        imgSrc: './assets/images/pic11.jpg',
        name: 'конбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[2],
        caunt: 1,
        countKorm: 2
      },
      {
        id: 12,
        imgSrc: './assets/images/pic12.jpg',
        name: 'конбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[3],
        caunt: 1,
        countKorm: 3
      },
      {
        id: 13,
        imgSrc: './assets/images/pic13.jpg',
        name: 'конбинезон',
        price: 500,
        type: 'для собакg',
        favBtn: this.dogService.faBtns[4],
        caunt: 1,
        countKorm: 4
      },
      {
        id: 14,
        imgSrc: './assets/images/pic14.jpg',
        name: 'ботинки',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[5],
        caunt: 1,
        countKorm: 5
      },
      {
        id: 15,
        imgSrc: './assets/images/pic15.jpg',
        name: 'комбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[6],
        caunt: 1,
        countKorm: 6
      },
      {
        id: 16,
        imgSrc: './assets/images/pic16.jpg',
        name: 'комбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[7],
        caunt: 1,
        countKorm: 7
      },
      {
        id: 17,
        imgSrc: './assets/images/pic17.jpg',
        name: 'комбинезон',
        price: 500,
        type: 'для собак',
        favBtn: this.dogService.faBtns[8],
        caunt: 1,
        countKorm: 8
      },
    ];
    this.korm.forEach(element => {
      this.dogService.searchList.push(element.name);
    });


    this.dogService.korms = this.korm;

  }

  fav(id: number) {
    let index: number;
    for (let i = 0; i < this.korm.length; i++) {
      if (this.korm[i].id == id) {
        index = i;
      }
    }
    if (this.korm[index].favBtn) {
      if (this.dogService.favKorms.find(el => el.id == id) == null) {
        this.dogService.favKorms.push(this.korm.find(el => el.id == id));
      }
      this.dogService.faBtns[index] = false;
    }
    else {
      const deKorm = this.dogService.favKorms.find(el => el.id === id);
      if (deKorm != null) {
        this.dogService.favKorms.splice(this.dogService.favKorms.indexOf(deKorm), 1);
      }
      this.dogService.faBtns[index] = true;
    }

    this.korm[index].favBtn = this.dogService.faBtns[index];
  }

}