import { Component, OnInit } from '@angular/core';
import { korm } from '../models/korm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    localStorage.clear();
    if (localStorage.length === 0){
      for (let i = 0;  i < 10;  i++) {
        let t: string = "cat";
        if (i % 2 == 0){
          t = "dog"
        }
        const k: korm = {
          id: i,
          name: "Chappy " + i.toString(),
          price: ((i + 1) * 100).toString(),
          type: t
        };

        localStorage.setItem(i.toString(), JSON.stringify(k));
        //console.log(JSON.stringify(k));
        
      }
    }
  }
}
