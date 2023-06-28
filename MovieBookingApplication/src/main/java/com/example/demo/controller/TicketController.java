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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Ticket;
import com.example.demo.exceptions.DuplicateTicketIdException;
import com.example.demo.service.TicketServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("/ticket")
public class TicketController {

	@Autowired
	private TicketServiceImpl service;


	@PostMapping("/save/{movieId}")
	public ResponseEntity<?> addTicket(@PathVariable("movieId") int movieId ,@RequestBody Ticket ticket) throws DuplicateTicketIdException {
		Ticket addTicket = service.addTicket(movieId, ticket);
		System.out.println("test in to method");
		//System.out.println(dto.getTicketsAvailable());
		
		if (addTicket != null) {

			
			return new ResponseEntity<Ticket>(addTicket, HttpStatus.CREATED);

		}

		return new ResponseEntity<String>("TicketId is not created in DB", HttpStatus.CONFLICT);

	}

	@GetMapping("/getAll")
	public ResponseEntity<?> getAllTickets() {
		List<Ticket> allTickets = service.getAllTickets();
		if (allTickets != null) {
			return new ResponseEntity<List<Ticket>>(allTickets, HttpStatus.OK);
		}
		return new ResponseEntity<String>("TicketsList is empty", HttpStatus.NO_CONTENT);
	}

	@GetMapping("/byId/{ticketId}")
	public ResponseEntity<?> getTicketById(@PathVariable("ticketId") int ticketId) {
		Ticket byTicketId = service.getByTicketId(ticketId);
		if (byTicketId != null) {
			return new ResponseEntity<Ticket>(byTicketId, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Ticket Record is missing", HttpStatus.CONFLICT);
	}
	


	

	
}
