import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { User } from './user';
import { of } from 'rxjs';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';

describe('UserService', () => {
 
  let userObj :UserComponent;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get() from service',()=>
  {
    let response: User[]|any;
    spyOn(service,'getUserByEmail').and.returnValue(of(response));
    service.getUserByEmail("email@gmail.com").subscribe(data =>{
      expect(data).toEqual(response);
    })

    
  });
  it('should call get() from service',()=>
  {
    let response: User[]|any;
    spyOn(service,'getUserById').and.returnValue(of(response));
    service.getUserById(1).subscribe(data =>{
      expect(data).toEqual(response);
    })

  });
});
