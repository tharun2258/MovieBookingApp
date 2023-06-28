package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.entities.Movie;

public interface MovieService {

	public Movie addMovie(Movie movie);

	public List<Movie> getAllMovies();

	public Movie getMovieById(int movieId);

	public boolean deleteMovieById(int movieId);

	public Movie updateTicketCount(int movieId ,Movie movie);

}
