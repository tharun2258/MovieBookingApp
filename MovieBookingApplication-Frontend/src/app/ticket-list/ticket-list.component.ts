import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

ticket :Ticket[]=[];

displayedColumns: string[] = ['ticketId','movieId', 'movieName', 'theatre', 'noOfSeats', 'seatNumber'];

  ngOnInit() {
    this.getAllTickets();
  }

  constructor(private ticketService:TicketService){

  }

  getAllTickets(){
    this.ticketService.getAllTickets().subscribe((data:Ticket[])=>{
    this.ticket=data;
    console.log(data);
    })
  }
}
