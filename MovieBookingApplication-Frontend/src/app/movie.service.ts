import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }


  // ADD_MOVIE :string ="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/addmovie";

  // GET_ALL_MOVIES :string="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/getallmovies";

  //  GET_BY_ID_MOVIEID :string="https://7alynmm560.execute-api.us-west-2.amazonaws.com/movieService/";


   ADD_MOVIE :string ="http://localhost:8081/movie/addMovie";

  GET_ALL_MOVIES :string="http://localhost:8081/movie/getAllMovies";

   GET_BY_ID_MOVIEID :string="http://localhost:8081/movie/byId/";

   PUT_BY_ID:string="http://localhost:8081/movie/update/";

   DELETE_BY_ID:string="http://localhost:8081/movie/deleteById/";

  public addMovie(movie:Movie){
    return this.http.post<Movie>(this.ADD_MOVIE , movie);
  }

  public getAllMovies(){
    return this.http.get<Movie[]>(this.GET_ALL_MOVIES);
  }

  public getMovieById(movieId :number){
    return this.http.get<Movie>(this.GET_BY_ID_MOVIEID +movieId);
  }

  public updateMovieTicketsAvailable(movieId:number , movie:Movie){
    return this.http.put<Movie>(this.PUT_BY_ID +movieId, movie);
  }

  public deleteMovie(movieId:number ): Observable<boolean> {
    return this.http.delete<boolean>(this.DELETE_BY_ID +movieId);
  }
  }

