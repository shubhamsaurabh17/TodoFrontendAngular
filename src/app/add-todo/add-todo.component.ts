import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  constructor(private _matSnack:MatSnackBar, private todo:TodoServiceService){

  }

  data={
    t_title:"",
    t_desc:""
  }

  clear(){
    this.data.t_title="",
    this.data.t_desc=""
  }

  onFormSubmit(){
    console.log("Inside Form Submit Method")
    if(this.data.t_title.length==0 || this.data.t_desc.length==0){
      this.clear()
      this._matSnack.open("Invalid Entry!","OK",{
        duration:2000
      })
      return;
    }
    console.log(this.data)
    this.todo.addTodo(this.data).subscribe(
      (res)=>{
        console.log(res)
      },
      (err)=>{
        console.log(err)
      }
    )
    this.clear()
    this._matSnack.open("Task Added","OK",{
      duration:2000
    })
  }

}
