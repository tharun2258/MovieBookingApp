import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Movie } from '../movie';
import { User } from '../user';
import { UserService } from '../user.service';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let userservice: UserService;
  let httpClient :HttpClient;
  let userObj: User;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent ],
      imports:[
        HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    userservice = TestBed.inject(UserService);

    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should return http Get call',()=>
  {
    userObj =
    {
      userId:65, username:"akhil", password:"pass", confirmPassword:"pass",conNum:1234566789,email:"akhil@gmail.com"
      ,secretQuestion:"home",userRole:"User"
    };

 let result :Movie []|any;
    userservice.getUserByEmail(userObj.email).subscribe(data=>
      {
        result = data;
        expect(result[0]).toEqual(userObj);
      })
    
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8080/auth/v1/email/'+userObj.email);
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('GET');
   
  });

  
});
