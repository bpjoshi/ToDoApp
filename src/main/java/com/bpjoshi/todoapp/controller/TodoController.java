package com.bpjoshi.todoapp.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.bpjoshi.todoapp.model.ToDo;
import com.bpjoshi.todoapp.repository.ToDoRepository;

@RestController
@RequestMapping("todos")
public class TodoController {

	@Autowired
	private ToDoRepository todoRepository;

	@GetMapping
	public List<ToDo> getAllTodos() {
		return (List<ToDo>) this.todoRepository.findAll();
	}

	@GetMapping("/{id}")
	public ToDo getTodo(@PathVariable("id") final ToDo todo) {
		return todo;
	}

	@PostMapping
	public ResponseEntity<ToDo> addTodo(@RequestBody final ToDo todo) {
		final ToDo newTodo = this.todoRepository.save(todo);

		final URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newTodo.getId()).toUri();

		return ResponseEntity.created(location).build();
	}

	@PutMapping("/{id}")
	public ToDo updateTodo(@PathVariable("id") final Long id, @RequestBody final ToDo todo) {
		todo.setId(id);
		return this.todoRepository.save(todo);
	}

	@DeleteMapping("/{id}")
	public void deleteTodo(@PathVariable("id") final Long id) {
		this.todoRepository.delete(id);
	}
}
