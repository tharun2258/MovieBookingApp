import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterationComponent } from './registeration.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../user';
import { UserService } from '../user.service';
import {  MatToolbarModule } from '@angular/material/toolbar';

describe('RegisterationComponent', () => {
  let component: RegisterationComponent;
  let userservice: UserService;
  let httpClient :HttpClient;
  let userObj: User;
  let fixture: ComponentFixture<RegisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationComponent ],
      imports:[  HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule,HttpClientTestingModule ,MatToolbarModule]
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    userservice = TestBed.inject(UserService);
    fixture = TestBed.createComponent(RegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  

});
