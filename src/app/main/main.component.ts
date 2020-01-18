import { Component, OnInit } from '@angular/core';
import { korm } from '../../models/korm';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
item: string = 'chappi';
images = Array<korm>();
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      //console.log(localStorage.length);
      
      //console.log(localStorage.getItem(i.toString()));
      
      this.images.push(JSON.parse(localStorage.getItem(i.toString())));
      
    }
  }

}
