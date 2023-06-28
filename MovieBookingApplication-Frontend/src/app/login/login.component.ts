import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User = new User();
  msg= '';




  constructor(private service:UserService , private router:Router){
  
    
  }

 
  loginUser(){

     this.service.loginUserDetails(this.user).subscribe(
      (data) => {
      console.log(data);
      const roleObj = localStorage.getItem('role');
      const token = localStorage.getItem('jwtToken');
    const uname= localStorage.getItem('username');
    console.log(uname);
     
      console.log(roleObj);
          
      console.log(token);

      if(roleObj == "Admin"  ){
       this.router.navigateByUrl("/admin")
      }
      else if(roleObj == 'User'  ){
        this.router.navigateByUrl("/user");
      }
    else{
    this.msg="Invalid Credentials";
    }
    }
     )
  } 
  }