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
import com.example.demo.entities.Ticket;
import com.example.demo.repo.TicketRepository;
import com.example.demo.service.TicketServiceImpl;

@AutoConfigureMockMvc
@SpringBootTest
public class TicketServiceTest {
	@Mock
	private TicketRepository ticketRepo;

	@InjectMocks
	private TicketServiceImpl ticketService;

	@Autowired
	private MockMvc mockMvc;

	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(ticketService).build();
	}

	List<Ticket> ticketList = new ArrayList<Ticket>();

	private Ticket ticket = new Ticket();

	@Test
	public void getAllTicketSuccess() throws Exception {

		ticket.setTicketId(1);
		ticket.setMovieId(4);
		ticket.setMovieName("Bahubali");
		ticket.setTheatre("PGR cinemas");
		ticket.setTicketsAvailable(100);
		ticket.setNoOfSeats(10);
		ticket.setTotalTickets(100);
		ticketRepo.save(ticket);

		ticketList.add(ticket);
		when(ticketRepo.findAll()).thenReturn(ticketList);

		List<Ticket> uList = ticketService.getAllTickets();
		assertEquals(ticketList, uList);

	}

	@Test
	public void getAllMoviesFailure() throws Exception
	{
		
		when(ticketRepo.findAll()).thenReturn(null);
		
		List<Ticket> uList = ticketService.getAllTickets();
		//System.out.println(uList.size());
		assertNull(uList);
		
	}

	
	

}
