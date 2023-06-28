import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
  
})
export class UserComponent  implements OnInit{


  movie: Movie[]=[];

  
  displayedColumns: string[] = ['movieId', 'movieName', 'theatre', 'ticketsAvailable', 'totalTickets','ticketStatus'];




  filters={
    keyword:'',
  }


  constructor(private movieService:MovieService, private router:Router){

  }
  ngOnInit() {
   this.getAllMoviesUser();
  }

  getAllMoviesUser(){
   
     this.movieService.getAllMovies().subscribe((data:Movie[])=>{
      this.movie=this.filterName(data);
      console.log(this.movie);
      
     })
  }
  

  filterName(expenses:Movie[]){
    return expenses.filter((e) =>{
     return e.movieName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
    
   }
 
}
