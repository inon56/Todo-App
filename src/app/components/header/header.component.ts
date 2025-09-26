import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { MatToolbar } from "@angular/material/toolbar";
import { MaterialModule } from "../../material/material.module";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TodoListComponent, MatToolbar, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
