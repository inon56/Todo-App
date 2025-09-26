import { Component, OnDestroy, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { ITodo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit, OnDestroy {
  public todos: Array<ITodo> = [];

  private subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {    
    this.subscription.add(
      this.todoService.getTodos().subscribe((data) => {
        this.todos = data;
        // console.log('data:', data);
      })
    );
  }

  public onTodoClick(todo:ITodo, index:number): void {        
    this.todoService.setSelectedTodo(todo)
    // this.todos[index].selected = true  

    // Clear selection from all todos
  this.todos.forEach(t => t.selected = false);

  // Select the clicked todo
  this.todos[index].selected = true;

  }
}
