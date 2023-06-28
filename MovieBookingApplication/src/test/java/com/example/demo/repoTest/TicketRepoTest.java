package com.example.demo.repoTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.entities.Movie;
import com.example.demo.entities.Ticket;
import com.example.demo.repo.MovieRepository;
import com.example.demo.repo.TicketRepository;

@SpringBootTest
public class TicketRepoTest {

	@Autowired
	private TicketRepository ticketRepo;
	
	private Ticket ticket = new Ticket();
	
//	@Test
//	public void saveMovieDetailsTest() {
//		ticket.setTicketId(1);
//		ticket.setMovieId(2);
//		ticket.setMovieName("Bahubali");
//		ticket.setTheatre("SV cinemas");
//		ticket.setTicketsAvailable(100);
//		ticket.setNoOfSeats(10);
//		ticket.setTotalTickets(100);
//		ticketRepo.save(ticket);
//		Ticket ticket1 = null;
//		
//		ticket1 = ticketRepo.findById(ticket.getTicketId()).get();
//		System.out.println("test"+ticket1.getMovieId());
//		
//		assertEquals(ticket.getMovieName(), ticket1.getMovieName());
//		
//	}
//	
	
	@Test
	public void saveTicketDetailsFailureTest() {
		Ticket ticket1 = null;
		if(ticketRepo.findAll().toString().isEmpty()) {
			ticketRepo.save(ticket);
			ticket1 = ticketRepo.findById(ticket1.getTicketId()).get();			
		}
		assertNull(ticket1);
		
	}
}
