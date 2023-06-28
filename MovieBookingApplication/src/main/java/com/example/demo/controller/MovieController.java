package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Movie;
import com.example.demo.exceptions.DuplicateMovieIdException;
import com.example.demo.service.MovieServiceImpl;
import com.example.demo.service.TicketServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/movie")
public class MovieController {

	@Autowired
	private MovieServiceImpl service;

	@Autowired
	private TicketServiceImpl ticketService;

	@PostMapping("/addMovie")
	public ResponseEntity<?> addMovie(@RequestBody Movie movie) throws DuplicateMovieIdException {
		Movie addMovie = service.addMovie(movie);
		if (addMovie != null) {
			return new ResponseEntity<Movie>(addMovie, HttpStatus.CREATED);
		}

		return new ResponseEntity<String>("Movie is not in Db", HttpStatus.CONFLICT);
	}

	@GetMapping("/getAllMovies")
	public ResponseEntity<?> getAllMovies() {
		List<Movie> allMovies = service.getAllMovies();
		if (allMovies != null) {
			return new ResponseEntity<List<Movie>>(allMovies, HttpStatus.OK);
		}
		return new ResponseEntity<String>("movielist is empty", HttpStatus.NO_CONTENT);
	}

	@GetMapping("/byId/{movieId}")
	public ResponseEntity<?> getMovieById(@PathVariable("movieId") int movieId) {
		Movie byId = service.getMovieById(movieId);
		if (byId != null) {
			return new ResponseEntity<Movie>(byId, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Movie Record is missing", HttpStatus.CONFLICT);
	}

	@PutMapping("/update/{movieId}")
	public ResponseEntity<?> updateTicketById(@RequestBody Movie movie, @PathVariable("movieId") int movieId) {
		Movie updateTicketCount = service.updateTicketCount(movieId, movie);
		return new ResponseEntity<>(updateTicketCount, HttpStatus.OK);
	}

	@DeleteMapping("/deleteById/{movieId}")
	public ResponseEntity<?> deleteBook(@PathVariable("movieId") int movieId) {
		if (service.deleteMovieById(movieId) & ticketService.deleteReader(movieId)) {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
