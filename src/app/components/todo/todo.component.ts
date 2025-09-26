import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommonModule, JsonPipe } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;

  public subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {        
    this.subscription.add(this.todoService.getSelectedTodo().subscribe(data => {      
      this.todo = data;
    }));
  }

  public onCompleteTodo(todo: ITodo):void {    
    todo.isCompleted = true;
  }

  public onArchiveTodo():void {    
    this.todo.isArchived = true;
  }

}
