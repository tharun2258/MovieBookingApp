import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateTicketCountComponent } from './update-ticket-count/update-ticket-count.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTreeModule} from '@angular/material/tree';
import {MatNativeDateModule} from '@angular/material/core';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    BookTicketComponent,
    AdminComponent,
    UpdateTicketCountComponent,
    AddMovieComponent,
    HeaderComponent,
    FooterComponent,
    TicketListComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MyprofileComponent,
    RegisterationComponent,
    EditprofileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
   FormsModule, BrowserAnimationsModule, MatButtonModule,MatButtonToggleModule,MatCardModule, MatCheckboxModule,MatDatepickerModule,MatDialogModule,
   MatDividerModule,MatExpansionModule,MatFormFieldModule,MatIconModule,MatInputModule,
   MatListModule,MatMenuModule,MatNativeDateModule,MatPaginatorModule,MatProgressBarModule,MatSelectModule,
   MatSidenavModule,MatSlideToggleModule,MatSortModule,MatTableModule, MatTreeModule, MatCardModule,
   MatInputModule,MatToolbarModule,
   MatButtonModule,RouterModule,MatDialogModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
