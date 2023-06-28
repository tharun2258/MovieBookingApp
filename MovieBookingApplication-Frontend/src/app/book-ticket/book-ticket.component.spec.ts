import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BookTicketComponent } from './book-ticket.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../movie';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

describe('BookTicketComponent', () => {
  let component: BookTicketComponent;
  let ticketservice: TicketService;
  let httpClient :HttpClient;
  let ticketObj: Ticket;
  let fixture: ComponentFixture<BookTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTicketComponent ],
      imports:[
        HttpClientModule,FormsModule,MatTableModule,  HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTicketComponent);
    component = fixture.componentInstance;
    ticketservice = TestBed.inject(TicketService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Post call',()=>
  {
    ticketObj =
      {
        ticketId:65, movieId:12, movieName:"Sahoo", theatre:"SV cinemas",ticketsAvailable:100,totalTickets:100, noOfSeats:10, seatNumber:"A-1"
      };

      ticketservice.bookTicket(ticketObj.movieId , ticketObj).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.movieId).toEqual(65);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8081/ticket/save/'+ticketObj.movieId);
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('POST');
  });

  
});
