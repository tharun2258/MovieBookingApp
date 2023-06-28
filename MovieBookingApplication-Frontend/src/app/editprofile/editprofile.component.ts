import { Dialog } from '@angular/cdk/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MyprofileComponent } from '../myprofile/myprofile.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit{
 
  
  usernewresetId !:any;
usernewId!:any;
  usernew:User= new User();
 
  
  constructor(private service:UserService , private route:ActivatedRoute,private dialogRef: MatDialogRef<MyprofileComponent>,private router:Router){

  }

  ngOnInit() {
   
    this.usernewresetId= (JSON.parse(localStorage.getItem('userId')));
    console.log(this.usernewresetId+"edit profile test");
    this.usernewId=this.route.snapshot.params['userId'];
    this.service.getUserById(this.usernewresetId).subscribe((data)=>{
      this.usernew=data;
     
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

    
  }
  

  

  saveDetails(){
  this.service.updateUserDetails(this.usernewresetId ,this.usernew).subscribe((data)=>{
    console.log(data);
    
   
    this.dialogRef.close();
    location.reload();
  })
  }
}
