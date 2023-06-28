import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketService } from './ticket.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { Ticket } from './ticket';
import { TicketListComponent } from './ticket-list/ticket-list.component';

describe('TicketService', () => {
  let service: TicketService;
  let ticketObj:TicketListComponent;
  let ticket:Ticket;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get() ticketfrom service',()=>
  {
    let response: Ticket[]|any;
  spyOn(service,'getAllTickets').and.returnValue(of(response));
  service.getAllTickets().subscribe(data=>{
    expect(data).toEqual(response);
  })
    
  });

  it('should call post() from service',()=>
  {
    let response: Ticket[]|any;
    spyOn(service,'bookTicket').and.returnValue(of(response));
    service.bookTicket(1, ticket).subscribe(data =>{
      expect(data).toEqual(response);
    })
  });
});
