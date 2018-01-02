package com.bpjoshi.todoapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.bpjoshi.todoapp.model.ToDo;
import com.bpjoshi.todoapp.repository.ToDoRepository;

@Component
public class ToDoValuesInitializer implements CommandLineRunner {

	private final Logger logger = LoggerFactory.getLogger(ToDoValuesInitializer.class);

	@Autowired
	private ToDoRepository todoRepository;

	@Override
	public void run(final String... arg0) throws Exception {
		this.logger.info("COMMAND LINE RUNNER");
		this.logger.info(this.todoRepository.save(new ToDo("Send happy new year wishes to friends")).toString());
		this.logger.info(this.todoRepository.save(new ToDo("Go for back pain exercises")).toString());
		this.logger.info(this.todoRepository.save(new ToDo("Lose some weight")).toString());
	}

}
