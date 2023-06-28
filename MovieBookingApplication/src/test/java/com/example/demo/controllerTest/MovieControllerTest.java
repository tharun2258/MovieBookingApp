package com.example.demo.controllerTest;

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
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.example.demo.controller.MovieController;
import com.example.demo.entities.Movie;
import com.example.demo.service.MovieServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;


@AutoConfigureMockMvc
@SpringBootTest
public class MovieControllerTest {

	@Mock
	private MovieServiceImpl movieService;
	
	@InjectMocks
	private MovieController movieC;
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(movieC).build();
	}

	List<Movie> movieList = new ArrayList<Movie>();
	
	@Test
	public void getAllUsersSuccess() throws Exception
	{
		Movie movie = new Movie();
		movie.setMovieId(5);
		movie.setMovieName("sahoo");
		movie.setTheatre("SV cinemas");
		movie.setTicketsAvailable(100);
		movie.setTotalTickets(100);
	
		
		
		movieList.add(movie);
		when(movieService.getAllMovies()).thenReturn(movieList);
		
		List<Movie> uList = movieService.getAllMovies();
		assertEquals(movieList, uList);
		
mockMvc.perform(MockMvcRequestBuilders.get("/movie/getAllMovies").contentType(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void getAllMoviesFailure() throws Exception
	{
		movieList.clear();
		System.out.println(movieList.size());
		when(movieService.getAllMovies()).thenReturn(movieList);
		
		assertEquals(0,movieList.size());
		
	mockMvc.perform(MockMvcRequestBuilders.get("/movie/getAllMovies").contentType(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers.status().isOk());
		
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
		when(movieService.addMovie(movie)).thenReturn(movie);
		
		assertEquals(1,movieList.size());
//        mockMvc.perform(MockMvcRequestBuilders.post("/movie/addMovie").contentType(MediaType.APPLICATION_JSON)
//		.content(new ObjectMapper().writeValueAsString(movie))).andExpect(MockMvcResultMatchers.status().isCreated());
		
	}
	
	@Test
	public void addMovieFailure() throws Exception
	{
		
		when(movieService.addMovie(any())).thenReturn(null);
		
		Movie u1 = movieService.addMovie(null);
		assertNull(u1);
		
        mockMvc.perform(MockMvcRequestBuilders.post("/movie/addMovie").contentType(MediaType.APPLICATION_JSON)
        .content(new ObjectMapper().writeValueAsString(u1))).andExpect(MockMvcResultMatchers.status().is4xxClientError());

		
	}

}
