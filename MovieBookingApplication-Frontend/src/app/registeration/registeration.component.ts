import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent{
 

  user:User = new User();
  hide !: any;

  

    
  constructor(private uService:UserService , private router:Router){

  }
  
  registerNewUser(registerData:NgForm){
    this.uService.registerUser(registerData).subscribe((data)=>{
      console.log(registerData.value);
      alert("Registered Successfully!")
      this.router.navigateByUrl("/");
      
    })

    

  }

  checkUsernameExist(form:NgForm){
    this.uService.getUserByName(form.controls['username'].value).subscribe((data)=>{
      if(data!= null){
        console.log("username exists");
        form.controls['username'].setErrors({usernameExist:true});
      }
    })

  }
 
  validatePassword(form:NgForm){

    if(form.controls['password'].value!==form.controls['confirmPassword'].value){

      form.controls['confirmPassword'].setErrors({passwordMismatch:true});

    }else{

      form.controls['confirmPassword'].setErrors(null);

    }




  }

 
}

