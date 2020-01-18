import { korm } from 'src/models/korm';

export class FavService{
    favKorms = new Array<korm>();
    searchList: string[] = [];

    //Книги для отображения при поиске
    korms = new Array<korm>();
    searchedKorm: korm = null;

    //Кнопки
    favBtns: boolean[] = [true, true, true, true];
}