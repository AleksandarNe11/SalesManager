import { Ticket } from "../ticket/ticket";

export interface List { 
    name: string; 
    id: number, 
    tickets: Ticket[];
}