package com.example.demo.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.example.demo.entities.Movie;
import com.example.demo.repo.MovieRepository;
import com.example.demo.service.MovieServiceImpl;

@AutoConfigureMockMvc
@SpringBootTest
public class MovieServiceTest {
	
	@Mock
	private MovieRepository movieRepo;
	
	@InjectMocks
	private MovieServiceImpl movieService;
	
	@Autowired
	private MockMvc mockMvc;
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(movieService).build();
	}

	List<Movie> movieList = new ArrayList<Movie>();
	
	@Test
	public void getAllMoviesSuccess() throws Exception
	{
		Movie movie = new Movie();
		movie.setMovieId(4);
		movie.setMovieName("Bahubali");
		movie.setTheatre("PGR cinemas");
		movie.setTicketsAvailable(100);
		movie.setTotalTickets(100);
	
		
		movieList.add(movie);
		when(movieRepo.findAll()).thenReturn(movieList);
		
		List<Movie> uList = movieService.getAllMovies();
		assertEquals(movieList, uList);
		
	}
	
	@Test
	public void getAllMoviesFailure() throws Exception
	{
		
		when(movieRepo.findAll()).thenReturn(null);
		
		List<Movie> uList = movieService.getAllMovies();
		//System.out.println(uList.size());
		assertNull(uList);
		
	}
	
	@Test
	public void addMovieSuccess() throws Exception
	{
		Movie movie = new Movie();
		movie.setMovieId(5);
		movie.setMovieName("sahoo");
		movie.setTheatre("SV cinemas");
		movie.setTicketsAvailable(100);
		movie.setTotalTickets(100);
		
		
		movieList.add(movie);
		
        when(movieRepo.save(any())).thenReturn(movie);
		//System.out.println(user);
		Movie u1 = movieService.addMovie(movie);
		//System.out.println(u1);
		assertEquals(movie, u1);
		
	}
	
	


}
