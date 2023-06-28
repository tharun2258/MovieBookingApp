import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let movieservice: MovieService;
  let httpClient :HttpClient;
  let movieObj: Movie;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    AdminComponent.prototype.ngOnInit=()=>{};
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[
        HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,MatTableModule,HttpClientTestingModule
      ]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    movieservice = TestBed.inject(MovieService);
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should return http Delete call',()=>
  {
    movieObj =
    {
      movieId:65, movieName:"Sahoo", theatre:"PGR cinemas", ticketsAvailable:100, totalTickets:100,ticketStatus:"BOOK ASAP"
    };
 let result :Movie []|any;
 movieservice.deleteMovie(movieObj.movieId).subscribe(data=>
      {
        
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8081/movie/deleteById/'+movieObj.movieId);
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('DELETE');
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
