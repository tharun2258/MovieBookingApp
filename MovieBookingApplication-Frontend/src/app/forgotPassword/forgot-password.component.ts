import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  user:User= new User();

  userId:any;



  constructor(private uservice:UserService , private route:ActivatedRoute ,private router:Router){

  }
  

  secretQuestion(){
  this.uservice.getUserByEmail(this.user.email).subscribe((data:any)=>{
    console.log(data);
    if(data != null){
 JSON.stringify(localStorage.setItem('uId' , data.userId));

 let id=(localStorage.getItem('uId'));
 console.log(id);


 this.router.navigateByUrl("/resetPassword/"+id);
 }
 else{
  alert(this.user.email +" doesn't exists in our database");
 }
  },
  )
  

  }

  
 

 
}
  


  

