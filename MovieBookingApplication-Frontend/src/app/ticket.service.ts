import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }

  // BOOK_TICKET :string="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/";

  // GET_ALL_TICKETS :string="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/getalltickets";


  BOOK_TICKET :string="http://localhost:8081/ticket/save/";

  GET_ALL_TICKETS :string="http://localhost:8081/ticket/getAll";




  public bookTicket( movieId:number ,ticket:Ticket){
    return this.http.post<Ticket>(this.BOOK_TICKET + movieId,ticket);
  }
  public getAllTickets(){
    return this.http.get<Ticket[]>(this.GET_ALL_TICKETS);
  }
}
