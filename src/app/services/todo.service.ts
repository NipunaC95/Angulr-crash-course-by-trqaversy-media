import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
 headers : new HttpHeaders({
   'Content-Type':'application/json'
 })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl: string = "https://jsonplaceholder.typicode.com/todos/";
  limitTodos:string ="?_limit=10"

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limitTodos}`);
  }


  toggleComplete(todo:Todo){
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url , todo , httpOptions)
  }

  deleteTodo(todo:Todo):Observable<Todo>{ 
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url ,  httpOptions)
  }
}
