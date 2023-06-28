import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ForgotPasswordComponent } from './forgotPassword/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RoleGuard } from './role.guard';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { UpdateTicketCountComponent } from './update-ticket-count/update-ticket-count.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'user' , component:UserComponent, canActivate:[AuthGuard]},
  {path:'admin' , component:AdminComponent, canActivate:[AuthGuard,RoleGuard]},
  {path:'addMovie' , component:AddMovieComponent , canActivate:[AuthGuard,RoleGuard]},
  {path:'update/:movieId' , component:UpdateTicketCountComponent , canActivate:[AuthGuard ,RoleGuard]},
  {path:'bookTicket/:movieId', component:BookTicketComponent , canActivate:[AuthGuard ]},
  {path:'ticketList', component:TicketListComponent , canActivate:[AuthGuard ,RoleGuard]},
  { path: 'home',   component:HomeComponent},
  { path: 'forgotPassword',   component:ForgotPasswordComponent},
  { path: 'resetPassword/:uId',   component:ResetPasswordComponent},
  { path: 'register',   component:RegisterationComponent},
  { path: 'myProfile',   component:MyprofileComponent , canActivate:[AuthGuard ]} ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
