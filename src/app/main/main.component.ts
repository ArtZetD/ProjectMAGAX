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
        imgSrc: './assets/images/pic0.jpg',
        name: 'ROYAL CANIN',
        price: 945,
        type: 'для собак',
        favBtn: this.favService.favBtns[0],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 1,
        imgSrc: './assets/images/pic1.jpg',
        name: 'Hills',
        price: 540,
        type: 'для собак',
        favBtn: this.favService.favBtns[1],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 2,
        imgSrc: './assets/images/pic2.jpg',
        name: 'Hills',
        price: 800,
        type: 'для собак',
        favBtn: this.favService.favBtns[2],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 3,
        imgSrc: './assets/images/pic3.jpg',
        name: 'DogChow',
        price: 760,
        type: 'для собак',
        favBtn: this.favService.favBtns[3],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 4,
        imgSrc: './assets/images/pic4.jpg',
        name: 'DogChow',
        price: 1200,
        type: 'для собак',
        favBtn: this.favService.favBtns[4],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 5,
        imgSrc: './assets/images/pic5.jpg',
        name: 'PRO PLAN',
        price: 1350,
        type: 'для собак',
        favBtn: this.favService.favBtns[5],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 6,
        imgSrc: './assets/images/pic6.jpg',
        name: 'ROYAL CANIN',
        price: 800,
        type: 'для собак',
        favBtn: this.favService.favBtns[6],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 7, 
        imgSrc: './assets/images/pic7.jpg',
        name: 'ROYAL CANIN',
        price: 760,
        type: 'для собак',
        favBtn: this.favService.favBtns[7],
        caunt: 1,
        countKorm: 1
      },
      {
        id: 8,
        imgSrc: './assets/images/pic8.jpg',
        name: 'ROYAL CANIN',
        price: 950,
        type: 'для собак',
        favBtn: this.favService.favBtns[8],
        caunt: 1,
        countKorm: 1
      },
    ];
    this.korm.forEach(element => {
      this.favService.searchList.push(element.name);
    });

    //корм для отображения при поиске
    this.favService.korms = this.korm;

  }
  //Добавляет и убирает из корзины, а также меняет кнопку
  fav(id: number) {

    if (this.korm[id].favBtn) {
      if (this.favService.favKorms.find(el => el.id == id) == null) {
        this.favService.favKorms.push(this.korm.find(el => el.id == id));
      }
      this.favService.favBtns[id] = false;
    }
    else {
      const delKorm = this.favService.favKorms.find(el => el.id === id);
      if (delKorm != null) {
        this.favService.favKorms.splice(this.favService.favKorms.indexOf(delKorm), 1);
      }
      this.favService.favBtns[id] = true;
    }

    this.korm[id].favBtn = this.favService.favBtns[id];
  }
  
}
