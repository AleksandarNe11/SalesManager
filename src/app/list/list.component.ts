import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { List } from './list';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm } from '@angular/forms';
import { Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  ngOnInit(): void {
    console.log(this.list);
  }

  @Input() list: List;

  constructor() {
  }
  
  drop(event: CdkDragDrop<Ticket[]>) {
    if(event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    console.log(this.list.tickets); 
  } else {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
      console.log(event.container.data);
  }
    }
  
  onSubmit(newItemForm: NgForm) {
    let ticket: Ticket =
      { id: (this.list.tickets.length), title: newItemForm.value.newItem }
    this.list.tickets.push(ticket);
    newItemForm.reset();
  }
  

};



