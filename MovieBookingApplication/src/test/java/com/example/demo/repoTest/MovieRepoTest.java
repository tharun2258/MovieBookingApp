package com.example.demo.repoTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Movie;
import com.example.demo.repo.MovieRepository;

@SpringBootTest
public class MovieRepoTest {
	
	@Autowired
	private MovieRepository movieRepo;
	
	private Movie movie = new Movie();
	
//	@Test
//	public void saveMovieDetailsTest() {
//		movie.setMovieId(5);
//		movie.setMovieName("pushpa");
//		movieRepo.save(movie);
//		
//		Movie movie1 = null;
//		
//		movie1 = movieRepo.findById(movie.getMovieId()).get();
//		
//		assertEquals(movie.getMovieName(), movie1.getMovieName());
//		
//	}
	
	
	@Test
	public void saveMovieDetailsFailureTest() {
		Movie movie2 = null;
		if(movieRepo.findAll().toString().isEmpty()) {
			movieRepo.save(movie);
			movie2 = movieRepo.findById(movie.getMovieId()).get();			
		}
		assertNull(movie2);
		
	}

}
