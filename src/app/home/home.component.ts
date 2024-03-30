import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any []=[]
  constructor(private _todo: TodoServiceService) {
    this.fetchData();
  }

  fetchData(){
    this._todo.viewInTodo().subscribe(
      (res: any) => {
        console.log(res)
        this.data=res;
      },
      (err: any) => {
        console.log(err)
      }
    )
  }

  OnDelete(id:any){
    console.log("Delete "+id)
    this._todo.deleteTodo(id).subscribe(
      (res)=>{
        console.log(res)
        this.fetchData()
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
