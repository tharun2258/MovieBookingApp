import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TicketListComponent } from './ticket-list.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let ticketservice: TicketService;
  let httpClient :HttpClient;
  let ticketObj: Ticket;
  let fixture: ComponentFixture<TicketListComponent>;

  beforeEach(async () => {
    TicketListComponent.prototype.ngOnInit=()=>{};
    await TestBed.configureTestingModule({
      declarations: [ TicketListComponent ],
      imports:[
        HttpClientModule,FormsModule,MatTableModule,HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketListComponent);
    ticketservice = TestBed.inject(TicketService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  

  it('should return http Get call',()=>
    {
      ticketObj =
      {
        ticketId:65, movieId:12, movieName:"Sahoo", theatre:"SV cinemas",ticketsAvailable:100,totalTickets:100, noOfSeats:10, seatNumber:"A-1"
      };
   let result :Ticket []|any;
      ticketservice.getAllTickets().subscribe(data=>
        {
          result = data;
          expect(result[0]).toEqual(ticketObj);
        })
      
      const ctrl = TestBed.inject(HttpTestingController);
      const mockHttp = ctrl.expectOne('http://localhost:8081/ticket/getAll');
      const httpReq = mockHttp.request;
  
      expect(httpReq.method).toEqual('GET');
     
    });
  
});
