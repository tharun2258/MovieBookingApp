import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  movie:Movie=new Movie();
constructor(private movieService:MovieService, private router:Router){

}
  
  addMovie(movieAddData:any){
    this.movieService.addMovie( movieAddData).subscribe(
      data =>{
        this.router.navigateByUrl("/admin");
        console.log(data);
  })
}
}
