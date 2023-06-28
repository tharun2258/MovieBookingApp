import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AddMovieComponent } from './add-movie.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AddMovieComponent', () => {
  let component: AddMovieComponent;
  let movieservice: MovieService;
  let movieObj: Movie;
  let httpClient:HttpClient
  let fixture: ComponentFixture<AddMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieComponent ],
      imports:[
        HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule
      ]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    movieservice = TestBed.inject(MovieService);
    fixture = TestBed.createComponent(AddMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return http Post call',()=>
  {
    movieObj =
    {
      movieId:65, movieName:"Sahoo", theatre:"PGR cinemas", ticketsAvailable:100, totalTickets:100,ticketStatus:"BOOK ASAP"
    };

    movieservice.addMovie(movieObj).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.movieId).toEqual(65);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8081/movie/addMovie');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('POST');
  });

 

});
