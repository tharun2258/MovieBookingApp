package com.example.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.CONFLICT , reason= "TicketId already exists , handled by custom exception")
public class DuplicateTicketIdException extends Exception{



}
