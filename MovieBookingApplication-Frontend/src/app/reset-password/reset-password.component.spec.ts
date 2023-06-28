import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../user';
import { HomeComponent } from '../home/home.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let userservice: UserService;
  let httpClient :HttpClient;
  let userObj: User;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ],
      imports:[
        HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule
      ]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    userservice = TestBed.inject(UserService);
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
 
      
    expect(component).toBeTruthy();
  });

  it('should return http Post call',()=>
  {
    userObj =
    {
      userId:65, username:"akhil", password:"pass", confirmPassword:"pass",conNum:1234566789,email:"akhil@gmail.com"
      ,secretQuestion:"home",userRole:"User"
    };

    userservice.secretQuestion(userObj).subscribe({
      next:(response)=>
      {
        expect(response).toBeTruthy();
        expect(response.userId).toEqual(65);
      }
    });
    const ctrl = TestBed.inject(HttpTestingController);
    const mockHttp = ctrl.expectOne('http://localhost:8080/auth/v1/secretQuestion');
    const httpReq = mockHttp.request;

    expect(httpReq.method).toEqual('POST');
  });


});
