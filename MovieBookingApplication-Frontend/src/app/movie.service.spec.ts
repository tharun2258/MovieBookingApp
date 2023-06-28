import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { MovieService } from './movie.service';
import { UserComponent } from './user/user.component';
import { of } from 'rxjs';
import { Movie } from './movie';
import { AdminComponent } from './admin/admin.component';

describe('MovieService', () => {
  let service: MovieService;
  let movieObj :UserComponent;
  let movieAdminObj:AdminComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule,HttpClientTestingModule ]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get() from service',()=>
  {
    let response: Movie[]|any;
    spyOn(service,'getAllMovies').and.returnValue(of(response));
    service.getAllMovies().subscribe(data =>{
      expect(data).toEqual(response);
    })

  });
  it('should call delete() from service',()=>
  {
   
    spyOn(service,'deleteMovie').and.returnValue(of(true));
    service.deleteMovie(17).subscribe(data=> {
    expect(data).toBe(true);
    })
    
  })
});
