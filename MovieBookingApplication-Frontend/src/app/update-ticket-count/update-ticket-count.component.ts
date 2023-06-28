import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-ticket-count',
  templateUrl: './update-ticket-count.component.html',
  styleUrls: ['./update-ticket-count.component.css']
})
export class UpdateTicketCountComponent {

movieId!:number;
ticketsSold:any;
movie: Movie= new Movie();
  constructor(private movieService:MovieService , private router:Router, private route:ActivatedRoute){

  }

  ngOnInit() {
    this.movieId=this.route.snapshot.params['movieId'];
    this.movieService.getMovieById(this.movieId).subscribe((data)=>{
      this.movie=data;
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })

  }

  updateMovie(){
    this.movieService.updateMovieTicketsAvailable(  this.movieId ,this.movie ).subscribe(
      data =>{
        if(data.ticketsAvailable<0 ){
          alert("Tickets Available Should be Greater than 0");
        }
        else if(data.ticketsAvailable>=0){
          this.router.navigateByUrl("/admin");
        }
        console.log(data);
  },
  (error:HttpErrorResponse)=>{
    alert("Something went wrong, Please try later");
    console.log(error);
  }
  );
  }


}
  


