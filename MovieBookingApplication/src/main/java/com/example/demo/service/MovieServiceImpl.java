package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Movie;
import com.example.demo.repo.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	@Autowired
	private MovieRepository repo;

	@Override
	public Movie addMovie(Movie movie) {
		movie.setTicketsAvailable(movie.getTotalTickets());
		movie.setTicketStatus("BOOK ASAP");
		return repo.save(movie);

	}

	@Override
	public List<Movie> getAllMovies() {
		return repo.findAll();
	}

	@Override
	public boolean deleteMovieById(int movieId) {
		repo.deleteById(movieId);
		return true;
	}

	@Override
	public Movie updateTicketCount(int movieId, Movie movie) {
		Movie movie2 = repo.findById(movieId).get();
		if(movie.getTicketsAvailable()<= movie.getTotalTickets()) {
		movie2.setMovieName(movie.getMovieName());
		movie2.setTheatre(movie.getTheatre());
		movie2.setTicketsAvailable(movie.getTicketsAvailable());
		movie2.setTotalTickets(movie.getTotalTickets());
		movie2.setTicketStatus(movie.getTicketStatus());
		return repo.save(movie2);
		}
		return null;
	}

	@Override
	public Movie getMovieById(int movieId) {
		Movie movie = repo.findById(movieId).get();
		if (movie.getTicketsAvailable() > 0) {
			movie.setTicketStatus("BOOK ASAP");
		} else {
			movie.setTicketStatus("SOLD OUT");
		}
		return repo.save(movie);
	}

}
