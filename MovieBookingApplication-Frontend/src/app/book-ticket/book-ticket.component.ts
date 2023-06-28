import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {

  movieId!:number;

  seatNumber!:string;
  noOfSeats!:number;
  movie: Movie = new Movie();
  constructor(private route:ActivatedRoute, private movieService:MovieService ,private ticketService:TicketService,private router:Router ){

  }
  ngOnInit() {
    this.movieId=this.route.snapshot.params['movieId'];
    this.movieService.getMovieById(this.movieId).subscribe((data)=>{
      this.movie=data;
    },(error:HttpErrorResponse)=>{
      console.log(error);
    })
  }


  bookTicket(bookTicketData:any){
    this.ticketService.bookTicket(this.movie.movieId, bookTicketData).subscribe(
      data =>{
        alert("you have booked "+data.noOfSeats + " seats for the movie "+data.movieName);
        this.router.navigateByUrl("/user");
        console.log(data);
  })
}
}
