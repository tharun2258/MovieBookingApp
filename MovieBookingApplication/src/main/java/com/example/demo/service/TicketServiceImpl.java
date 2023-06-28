package com.example.demo.service;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import com.example.demo.entities.Movie;
import com.example.demo.entities.Ticket;
import com.example.demo.exceptions.DuplicateTicketIdException;
import com.example.demo.repo.TicketRepository;

@Service
public class TicketServiceImpl implements TicketService {

	@Autowired
	private TicketRepository repo;

	@Autowired
	private MovieServiceImpl movieService;

	@Override
	public List<Ticket> getAllTickets() {
		List<Ticket> findAll = repo.findAll();
		if (findAll != null) {
			return findAll;
		}
		return null;
	}

	@Override
	public Ticket addTicket(int movieId , Ticket ticket) throws DuplicateTicketIdException, RestClientException {

		Movie dto = movieService.getMovieById(movieId);

		if (dto.getTicketsAvailable() > 0 && ticket.getNoOfSeats() <= dto.getTicketsAvailable()) {
			ticket.setMovieId(dto.getMovieId());
			ticket.setMovieName(dto.getMovieName());
			ticket.setTheatre(dto.getTheatre());
			ticket.setTotalTickets(dto.getTotalTickets());
			System.out.println("test count" + ticket.getTicketsAvailable());
			ticket.setTicketsAvailable(dto.getTicketsAvailable() - ticket.getNoOfSeats());

			ticket.setTicketId(ticket.getTicketId());
			// dto.setTicketsAvailable(ticket.getTicketsAvailable());
			System.out.println("tickets count after booked" + ticket.getTicketsAvailable());
			dto.setTicketsAvailable(ticket.getTicketsAvailable());
		} else {
			return null;
		}

		return repo.save(ticket);

	}

	@Override
	public Ticket getByTicketId(int movieId) {
		Ticket ticket = repo.findById(movieId).get();
		return ticket;

	}

	@Override
	public Set<Ticket> getAllReaders(int movieId) {
		Set<Ticket> ticketList = repo.getTicketList(movieId);
		return ticketList;
	}

	@Override
	public boolean deleteReader(int movieId) {
		repo.deleteTicketData(movieId);
		return true;
	}

	
	

}
