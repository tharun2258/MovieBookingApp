package com.example.demo.service;

import java.util.List;
import java.util.Set;
import com.example.demo.entities.Ticket;
import com.example.demo.exceptions.DuplicateTicketIdException;


public interface TicketService {
	
	public Ticket addTicket(int movieId ,Ticket ticket )throws DuplicateTicketIdException;
	
	public List<Ticket> getAllTickets();
	
	public Ticket getByTicketId(int movieId);
	
	public Set<Ticket> getAllReaders(int movieId);
	
	public boolean deleteReader(int movieId);
	
	
	

}
