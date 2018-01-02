package com.bpjoshi.todoapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.bpjoshi.todoapp.model.ToDo;

public interface ToDoRepository extends CrudRepository<ToDo, Long> {
	ToDo findOneByDescription(String description);
}
