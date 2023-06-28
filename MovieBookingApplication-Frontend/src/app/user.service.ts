import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedInpub$ = this.isLoggedIn$.asObservable();
    



    constructor(private http:HttpClient) {

  
    const token = localStorage.getItem('jwtToken')
    if (token != null) {
  
    
    this.isLoggedIn$.next(!!token);
    
   }

  }


//    LOGIN_URL:string  ="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/login";

//    ADD_USER_URL :string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/adduser";

//    GET_ALL_USERS :string ="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/getallusers";

//    GET_BY_ID :string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/getbyid/";

//    GET_BY_EMAIL :string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/email/";

//    GET_BY_USERNAME :string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/username/";

// SECRET_QUESTION :string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/secretquestion";

//  FORGOT_PASSWORD:string="https://2pkque5054.execute-api.us-west-2.amazonaws.com/userService/getbyid/";



   LOGIN_URL:string  ="http://localhost:8081/call/consumer/login";

   ADD_USER_URL :string="http://localhost:8080/auth/v1/addUser";

   GET_ALL_USERS :string ="http://localhost:8080/api/v1/getAllUsers";

   GET_BY_ID :string="http://localhost:8080/auth/v1/userId/";

   GET_BY_EMAIL :string="http://localhost:8080/auth/v1/email/";

   GET_BY_USERNAME :string="http://localhost:8080/auth/v1/username/";

SECRET_QUESTION :string="http://localhost:8080/auth/v1/secretQuestion";

 FORGOT_PASSWORD:string="http://localhost:8080/auth/v1/forgotPassword/";

 UPDATE_DETAILS:string="http://localhost:8080/auth/v1/userDetails/"
















  public login(user:User){

    return this.http.post<User>(this.LOGIN_URL, user);
}

loginUserDetails(usern:User){
  
   return this.login(usern).pipe(
    tap((response:any) => {
   
   
    this.isLoggedIn$.next(true);
    
    localStorage.setItem('jwtToken' , response.jwtToken);
    localStorage.setItem('role' , response.role);
    localStorage.setItem('username' , response.username);
    localStorage.setItem('email' , response.email);
   localStorage.setItem('conNum' , response.conNum);
   localStorage.setItem('userId' , JSON.stringify(response.userId));
    
 })
   )
}
    
public registerUser(user:NgForm){

  return this.http.post<User>(this.ADD_USER_URL, user.value );
}


    
    

public getAllUsers(){
  return this.http.get<User[]>(this.GET_ALL_USERS);
}

public getUserById(userId:number){
  return this.http.get<User>(this.GET_BY_ID +userId);
}

public getUserByEmail(email:string){
  return this.http.get<User>(this.GET_BY_EMAIL+email);
}
public getUserByName(username:string){
  return this.http.get<User>(this.GET_BY_USERNAME+username);
}

public updateUserDetails(userId:number , user:User){
  return this.http.put<User>(this.UPDATE_DETAILS +userId , user);
}


public secretQuestion(user:User){

  return this.http.post<User>(this.SECRET_QUESTION,user);
}

public forgotPassword(userId:number ,user:User){

  return this.http.put<User>(this.FORGOT_PASSWORD+ userId, user);
}

public getToken(): string {
  return localStorage.getItem('jwtToken')!;
}

public getRole(): string {
  return localStorage.getItem('Role')!;
}

public isLoggedIn() {
  return this.getToken();
}

logout(){
  this.isLoggedIn$.next(false);
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('role');
  localStorage.removeItem('uId');
  localStorage.removeItem('username');
  localStorage.removeItem('email');
  localStorage.removeItem('conNum');
  localStorage.removeItem('userId');

}

}





