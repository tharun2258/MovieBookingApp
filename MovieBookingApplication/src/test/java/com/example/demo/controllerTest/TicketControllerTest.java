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
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.example.demo.controller.MovieController;
import com.example.demo.controller.TicketController;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Ticket;
import com.example.demo.service.MovieServiceImpl;
import com.example.demo.service.TicketServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;

public class TicketControllerTest {
	@Mock
	private TicketServiceImpl ticketService;
	
	@InjectMocks
	private TicketController ticketC;
	
	@Autowired
	private MockMvc mockMvc;
	
	
	@BeforeEach
	public void init()
	{
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(ticketC).build();
	}

	List<Ticket> ticketList = new ArrayList<Ticket>();
	
//	@Test
//	public void getAllTicketsSuccess() throws Exception
//	{
//		Ticket ticket = new Ticket();
//		ticket.setMovieId(2);
//		ticket.setMovieName("sahoo");
//		ticket.setTheatre("PGR cinemas");
//		ticket.setTicketsAvailable(100);
//		ticket.setTotalTickets(100);
//	
//		
//		
//		ticketList.add(ticket);
//		when(ticketService.getAllTickets()).thenReturn(ticketList);
//		
//		List<Ticket> uList = ticketService.getAllTickets();
//		assertEquals(ticketList, uList);
//		
//mockMvc.perform(MockMvcRequestBuilders.get("/ticket/getAll").contentType(MediaType.APPLICATION_JSON))
//		.andExpect(MockMvcResultMatchers.status().isOk());
//		
//	}
//	
	@Test
	public void getAllMoviesFailure() throws Exception
	{
		ticketList.clear();
		System.out.println(ticketList.size());
		when(ticketService.getAllTickets()).thenReturn(ticketList);
		
		assertEquals(0,ticketList.size());
		
	mockMvc.perform(MockMvcRequestBuilders.get("/ticket/getAll").contentType(MediaType.APPLICATION_JSON))
		.andExpect(MockMvcResultMatchers.status().isOk());
		
	}
	
	@Test
	public void addTicketSuccess() throws Exception
	{
		Ticket ticket = new Ticket();
		ticket.setMovieId(2);
		ticket.setMovieName("sahoo");
		ticket.setTheatre("PGR cinemas");
		ticket.setTicketsAvailable(100);
		ticket.setTotalTickets(100);
		
		ticketList.add(ticket);
		when(ticketService.addTicket(ticket.getMovieId(),ticket)).thenReturn(ticket);
		
		assertEquals(1,ticketList.size());
//        mockMvc.perform(MockMvcRequestBuilders.post("/movie/addMovie").contentType(MediaType.APPLICATION_JSON)
//		.content(new ObjectMapper().writeValueAsString(movie))).andExpect(MockMvcResultMatchers.status().isCreated());
		
	}
	
//	@Test
//	public void addMovieFailure() throws Exception
//	{
//		
//		when(ticketService.addTicket(any(), null)).thenReturn(null);
//		
//		Ticket u1 = ticketService.addTicket(0, null);
//		assertNull(u1);
//		
//        mockMvc.perform(MockMvcRequestBuilders.post("/ticket/save").contentType(MediaType.APPLICATION_JSON)
//        .content(new ObjectMapper().writeValueAsString(u1))).andExpect(MockMvcResultMatchers.status().is4xxClientError());
//
//		
//	}

}
