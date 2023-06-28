import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MyprofileComponent } from './myprofile.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let userservice: UserService;
  let httpClient :HttpClient;
  let userObj: User;
  let fixture: ComponentFixture<MyprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprofileComponent ],
      imports:[ HttpClientModule,FormsModule,RouterTestingModule, MatCardModule,MatFormFieldModule,
        MatInputModule,BrowserAnimationsModule ,MatDialogModule, MatIconModule]
        
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
