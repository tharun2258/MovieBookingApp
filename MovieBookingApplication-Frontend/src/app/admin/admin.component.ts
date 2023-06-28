import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  
 movie:Movie[]=[];
 movieObj:Movie= new Movie();
token:any;

displayedColumns: string[] = ['movieId', 'movieName', 'theatre', 'ticketsAvailable', 'ticketStatus','Update','Delete'];


 constructor(private movieService:MovieService , private route:ActivatedRoute , private router:Router){

    }

  ngOnInit() :void{
 this.getAllMoviesForAdmin();
    }


    public getAllMoviesForAdmin(){
      this.movieService.getAllMovies().subscribe((data:Movie[])=>{
        this.movie=data;
       console.log(data);
      })
    }

    public deleteMovieAdmin(movieId:number){
      this.movieService.deleteMovie(movieId).subscribe((data)=> {
       this.getAllMoviesForAdmin();
    });
        
      }


      public getRole(){
        const  RoleObj =localStorage.getItem('Role');
        
     
       return RoleObj;
     }
     
       public getToken(){
         const  token =localStorage.getItem('jwtToken');
         
        return token;
      }

      }
    


  
  
  

  


