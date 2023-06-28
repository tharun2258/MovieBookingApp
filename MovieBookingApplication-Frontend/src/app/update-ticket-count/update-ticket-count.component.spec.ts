import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UpdateTicketCountComponent } from './update-ticket-count.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

describe('UpdateTicketCountComponent', () => {
  let component: UpdateTicketCountComponent;
  let movieservice: MovieService;
  let httpClient :HttpClient;
  let movieObj: Movie;
  let fixture: ComponentFixture<UpdateTicketCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTicketCountComponent ],
      imports:[  HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    movieservice = TestBed.inject(MovieService);
    fixture = TestBed.createComponent(UpdateTicketCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Put call',()=>
  {
    movieObj =
    {
      movieId:65, movieName:"Sahoo", theatre:"SV cinemas", ticketsAvailable:100, totalTickets:100,ticketStatus:"BOOK ASAP"
    };

    movieservice.updateMovieTicketsAvailable(movieObj.movieId, movieObj).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.movieId).toEqual(65);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8081/movie/update/'+movieObj.movieId);
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('PUT');
  });
});
