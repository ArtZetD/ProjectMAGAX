import { Component, OnInit } from '@angular/core';
import { FavService } from '../fav.service';
import { korm } from 'src/models/korm';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private favService: FavService) { }
  korm = new Array<korm>();
  //суммирование стоимости всех товаров 
  ngOnInit() {
    this.korm = this.favService.favKorms;
    this.sum = 0;
    this.korm.forEach(el => {
      this.sum += el.price * el.countKorm;
    });
  }
  ngAfterViewInit() {
    this.sum = 0;
    this.korm.forEach(el => {
      this.sum += el.price * el.countKorm;

    });

  }
  //Удаление из избранного 
  fav(id: number) {

    const delKorm = this.favService.favKorms.find(el => el.id === id);
    if (delKorm != null) {
      this.favService.favKorms.splice(this.favService.favKorms.indexOf(delKorm), 1);
    }
    if (id < 9) {
      this.favService.favBtns[id] = true;
    }
    else {
      let index = id - 9;
      this.favService.faBtns[index] = true;
    }

  }
  sum: number;
  delete() {
this.korm.splice(0,this.korm.length);
this.ngOnInit();
console.log(this.korm);
  }
}

