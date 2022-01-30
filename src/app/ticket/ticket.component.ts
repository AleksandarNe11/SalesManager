import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket';
import { Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

}
