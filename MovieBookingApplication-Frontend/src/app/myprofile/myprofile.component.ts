import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EditprofileComponent } from '../editprofile/editprofile.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent  implements OnInit{


  
  usernewresetId !:any;
  usernewId!:any;
    usernew:User= new User();
    
  ngOnInit(){
    this.usernewresetId=(JSON.parse(localStorage.getItem('userId')));
    console.log(this.usernewresetId+"test");
    this.usernewId=this.route.snapshot.params['userId'];
    this.uService.getUserById(this.usernewresetId).subscribe((data)=>{
      this.usernew=data;
     
     
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

  }

  constructor(private uService:UserService ,private route:ActivatedRoute, private matDialog:MatDialog){

  }

  openDialog(){
    this.matDialog.open(EditprofileComponent,{
      width:'350px'
        })
  }
}
  
 
  
