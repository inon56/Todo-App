import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mock: ITodo[] = [
    {
      id: 1, 
      title: 'Southern elephant seal',
      description: 'Mirounga leonina',
      isCompleted: false,
      isArchived: false,
      endDate: '3/20/2025',
      selected: false
    },
    {
      id: 2,
      title: 'Monkey, bleeding heart',
      description: 'Theropithecus gelada',
      isCompleted: false,
      isArchived: false,
      endDate: '5/19/2025',
      selected: false
    },
    {
      id: 3,
      title: 'Hyena, striped',
      description: 'Hyaena hyaena',
      isCompleted: false,
      isArchived: false,
      endDate: '2/28/2025',
      selected: false
    },
    {
      id: 4,
      title: 'Crocodile, nile',
      description: 'Crocodylus niloticus',
      isCompleted: false,
      isArchived: false,
      endDate: '9/13/2024',
      selected: false
    },
    {
      id: 5,
      title: 'Tyrant flycatcher',
      description: 'Myiarchus tuberculifer',
      isCompleted: false,
      isArchived: false,
      endDate: '6/2/2025',
      selected: false
    },
    {
      id: 6,
      title: 'Red-tailed wambenger',
      description: 'Phascogale calura',
      isCompleted: false,
      isArchived: false,
      endDate: '2/23/2025',
      selected: false
    },
    {
      id: 7,
      title: 'Monkey, rhesus',
      description: 'Macaca mulatta',
      isCompleted: false,
      isArchived: false,
      endDate: '9/4/2025',
      selected: false
    },
    {
      id: 8,
      title: 'Savanna baboon',
      description: 'Papio cynocephalus',
      isCompleted: false,
      isArchived: false,
      endDate: '2/17/2025',
      selected: false
    },
  ];

  private _todoSubject: Subject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public addTodo(todo: ITodo): void {
    this.mock.push(todo);
    this._todoSubject.next(this.mock);
  }

  // Here we dont return the todo subject because then we would expose the internal subject
  // and then we could have external code that modifies the subject directly, which would break encapsulation
  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }   

  public getSelectedTodo(): Observable<ITodo> {
    return this.singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo): void {
    this.singleTodoSubject.next(todo);
  }
}



