import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private _http:HttpClient) { }

  addTodo(data:any){
    console.log("HTTP call")
    return this._http.post("http://localhost:8080/todo",data)
  }

  viewAllTodo(){
    return this._http.get("http://localhost:8080/todo")
  }

  viewInTodo(){
    return this._http.get("http://localhost:8080/todoIn")
  }

  deleteTodo(id:number){
    return this._http.delete("http://localhost:8080/todo/"+id)
  }
}
