import { Injectable } from '@angular/core';
import { dog } from 'src/models/dog';


export class dogService{
  favKorms = new Array<dog>();
  searchList: string[] = [];

  //Книги для отображения при поиске
  korms = new Array<dog>();
  searchedKorm: dog = null;

  //Кнопки

  faBtns: boolean[] = [true, true, true, true,true, true, true, true, true];
}