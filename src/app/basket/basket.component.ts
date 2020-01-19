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

  ngOnInit() {
    this.korm = this.favService.favKorms;
  }
  //Удаление из избранного
  fav(id: number) {

    const delKorm = this.favService.favKorms.find(el => el.id === id);
    if (delKorm != null) {
      this.favService.favKorms.splice(this.favService.favKorms.indexOf(delKorm), 1);
    }
    this.favService.favBtns[id] = true;

  }
}
