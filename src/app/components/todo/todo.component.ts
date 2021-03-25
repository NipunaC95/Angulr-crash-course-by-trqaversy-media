import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos!: Todo[]

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
      this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    })
    
  }

  deleteTodo(todo:Todo){
    //delete in ui
    this.todos = this.todos.filter(t=> t.id!=todo.id)

    //delete in server
    this.todoService.deleteTodo(todo).subscribe(); 
  }

}
