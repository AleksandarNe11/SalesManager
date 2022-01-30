import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/board.service';
import { List } from '../list/list';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  lists: List[] = []; 

  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.getLists();
  }

  getLists(): void { 
    this.boardService.getLists().subscribe(lists => this.lists = lists);
  }

  addList() { 
    var newList: List = {id: 1, name: "List 1", tickets: [{id: 1, title: "Ticket 1"}]}; 
    this.lists.push(newList);
  }

}
