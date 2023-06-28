import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule } from '@angular/material/table';
import { UserService } from '../user.service';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



describe('UserComponent', () => {

  
  let fixture: ComponentFixture<UserComponent>;
  let movieservice: MovieService;
  let httpClient :HttpClient;
  let movieObj: Movie;
  let component: UserComponent;
  
 

  beforeEach(async () => {
    UserComponent.prototype.ngOnInit=()=>{};
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports:[  HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,HttpClientTestingModule]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    movieservice = TestBed.inject(MovieService);
    fixture = TestBed.createComponent(UserComponent);
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


  it('should return http Get call',()=>
  {
    movieObj =
    {
      movieId:65, movieName:"Sahoo", theatre:"PGR cinemas", ticketsAvailable:100, totalTickets:100,ticketStatus:"BOOK ASAP"
    };
 let result :Movie []|any;
    movieservice.getAllMovies().subscribe(data=>
      {
        result = data;
        expect(result[0]).toEqual(movieObj);
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8081/movie/getAllMovies');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
   
  });

  
});



