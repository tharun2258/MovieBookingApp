package com.example.demo.repo;

import java.util.Set;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Ticket;

@Repository
@Transactional
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

	
	@Query(value = "select t from Ticket t where t.movieId= :movieId")
	public Set<Ticket> getTicketList(int movieId);

	@Modifying
	@Query(value = "delete from Ticket where movieId= :movieId")
	public void deleteTicketData(int movieId);
}
