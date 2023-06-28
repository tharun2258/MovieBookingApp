import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {


usernew:User= new User();

usernewObj:User= new User();

usernewPass :User = new User();

  usernewresetId: any;
  

  constructor(private uService:UserService ,private route:ActivatedRoute, private router:Router){
    
  }

  ngOnInit() {
    this.usernewresetId= ((localStorage.getItem('uId')));
    this.usernewresetId=this.route.snapshot.params['uId'];
    console.log("test reset"+this.usernewresetId);
    this.uService.getUserById(this.usernewresetId).subscribe((data)=>{
      this.usernew=data;
     
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

  }


  secretQuestionData(){
    this.uService.secretQuestion(this.usernewObj).subscribe((secretQuestionObj)=>{

  },
  (error:HttpErrorResponse)=>{
    alert("Something went wrong, Please try later");
    console.log(error);
  });
}



  resetPassword(){
     this.uService.forgotPassword(this.usernewresetId, this.usernewObj).subscribe(
        data =>{
          console.log(data);
          alert("Password changed successfully")
          this.router.navigateByUrl("/");
    })
  
}
}


