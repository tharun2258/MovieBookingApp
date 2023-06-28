import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  
movie: Movie[]=[];
token!:string;

username=localStorage.getItem('username');

  constructor(private movieService:MovieService, private router:Router , private userService:UserService){

  }

public getRole(){
   const  RoleObj =localStorage.getItem('role');
   

  return RoleObj;
}

  public getToken(){
    const  token =localStorage.getItem('jwtToken');
    
   return token;
 }
  

 login(){
  this.router.navigateByUrl("/");
 }
logout(){
  this.userService.logout();
  this.router.navigateByUrl("/");
}

isLoggedIn(){
 return this.userService.isLoggedIn();
}

}

  
 
 
  
