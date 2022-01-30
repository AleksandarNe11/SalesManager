import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { List } from './list/list';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  mock_data: List[] = [
    {
      name: 'Upcoming Sales',
      id: 1, 
      tickets: [
        {title: 'task 1', id: 1},
        {title: 'task 2', id: 1}
      ]
    },
    {
      name: 'To Follow Up',
      id: 2, 
      tickets: [
        {title: 'task 3', id: 3},
        {title: 'task 4', id: 4}
      ]
    }, 
    {
      name: 'Sold',
      id: 2, 
      tickets: [
        {title: 'task 3', id: 3},
        {title: 'task 4', id: 4}
      ]
    }, 
  
  ]

  constructor() { }

  getLists(): Observable<List[]> { 
    return of<List[]>(this.mock_data);
  }

}
